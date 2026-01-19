import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, Mountain } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Mulkirigala Raja Maha Viharaya: Complete Guide 2025 | Ancient Rock Temple Sri Lanka",
    description:
        "Discover Mulkirigala Raja Maha Viharaya, Sri Lanka's hidden gem rock temple with ancient cave paintings, Buddha statues, and panoramic southern views. Complete travel guide with visiting tips.",
    keywords:
        "Mulkirigala, rock temple Sri Lanka, ancient cave temple, Buddha paintings, southern Sri Lanka temples, Mulkirigala Raja Maha Viharaya, Tangalle attractions, Sri Lanka heritage sites",
    openGraph: {
        title: "Mulkirigala Raja Maha Viharaya: Complete Guide 2025",
        description: "Your ultimate guide to Sri Lanka's magnificent rock temple in the southern province",
        type: "article",
        images: ["/placeholder.svg?height=630&width=1200"],
    },
}

export default function MulkirigalaTravelGuide() {

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/Mulkirigala-Rajamaha-Viharaya.jpg"
                    alt="Magnificent Mulkirigala rock temple rising from lush greenery with ancient cave shrines and panoramic views"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Mulkirigala Raja Maha Viharaya</h1>
                    <p className="text-xl md:text-2xl mb-6 font-light">Ancient Rock Temple of the Southern Province</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
                            <MapPin className="w-4 h-4 mr-1" />
                            Southern Province
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
                            <Mountain className="w-4 h-4 mr-1" />
                            Rock Temple
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            Dating Back to 2nd Century BC
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Section Navigation */}
            <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
                    <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
                    <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Quick Facts</a>
                    <a href="#how-to-get-there" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">How to Get There</a>
                    <a href="#seven-levels" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Seven Levels</a>
                    <a href="#itinerary" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Sample Itinerary</a>
                    <a href="#nearby-attractions" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Nearby Attractions</a>
                    <a href="#visiting-guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Visiting Guide</a>
                </div>
            </nav>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Introduction */}
                <section className="mb-12" id="introduction">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Mulkirigala: The Hidden Gem of Southern Sri Lanka</h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                        <p className="text-lg mb-4">
                            Looking for an ancient rock temple that&apos;s peaceful and not crowded? Mulkirigala Raja Maha Viharaya in southern Sri Lanka might be perfect for you. Often called &quot;Little Sigiriya,&quot; it sits on top of a 205-meter high rock and has been used for worship and meditation for over 2,000 years. Ready for a challenge? The climb to the top has very steep stairs carved directly into the mountainside at sharp angles.
                        </p>
                        <p className="text-lg mb-4">
                            What will you see here? The temple has seven levels carved into the rock. Each level has cave temples with paintings and Buddha statues. When you climb the 533 stone steps, you&apos;ll discover old colorful paintings, quiet meditation caves, and beautiful views of the countryside and ocean.
                        </p>
                        <p className="text-lg">
                            Why is this place special? Unlike busy tourist sites, Mulkirigala is peaceful and calm. In 1826, British scholar George Turnour found old palm-leaf manuscripts here that helped translate the Mahavamsa, an important Sri Lankan history book.
                        </p>

                        <div className="my-8 p-6 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500">
                            <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-3 text-lg">Did you know?</h4>
                            <div className="space-y-3 text-gray-800 dark:text-yellow-50">
                                <p>
                                    <strong>The &quot;Raja Maha&quot; title is special:</strong> Only temples that received support from Sri Lankan kings can be called &quot;Raja Maha Viharaya.&quot; The title means &quot;Great Royal&quot; and was given only to temples that kings visited, donated to, or gave land during their reign. Mulkirigala earned this honor through centuries of royal support.
                                </p>
                                <p>
                                    <strong>A library that changed history:</strong> In 1826, George Turnour found palm-leaf manuscripts written in Pali and Sinhala here. They contained parts of the Mahavamsa and other Buddhist texts preserved by monks for over 1,000 years. This discovery helped us understand Sri Lanka's history from 543 BC.
                                </p>
                                <p>
                                    <strong>Ancient learning center:</strong> Between the 3rd and 10th centuries, Mulkirigala was an important place for Buddhist learning. Monks came here to study, meditate in the rock caves, and copy sacred texts.
                                </p>
                                <p>
                                    <strong>Paintings that survived centuries:</strong> The cave paintings were made using natural colors from minerals, plants, and clay red from iron oxide, yellow from turmeric, blue from lapis lazuli, and black from charcoal. The dry climate inside the caves has kept them bright for over 400 years.
                                </p>
                                <p>
                                    <strong>The mystery of the name:</strong> &quot;Mulkirigala&quot; comes from ancient Sinhala. Some think it means &quot;First Rock&quot; (Mul Gala), while others say it means &quot;Flower Rock&quot; (Mal + Giri + Gala) because of the many flowering plants on the rock.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Quick Facts & How to Get There side by side */}
                <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
                    {/* Quick Facts */}
                    <section className="flex-1">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500" />
                                    Quick Mulkirigala Facts
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-blue-500" />
                                        <span>
                                            <strong>Built:</strong> 2nd Century BC - 18th Century AD
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mountain className="w-4 h-4 text-green-500" />
                                        <span>
                                            <strong>Height:</strong> 205 meters (673 feet)
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-purple-500" />
                                        <span>
                                            <strong>Levels:</strong> 7 terraced levels
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-red-500" />
                                        <span>
                                            <strong>Location:</strong> Near Tangalle, Southern Province
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Star className="w-4 h-4 text-yellow-500" />
                                        <span>
                                            <strong>Nickname:</strong> Little Sigiriya
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-orange-500" />
                                        <span>
                                            <strong>Visit Duration:</strong> 2-3 hours
                                        </span>
                                    </div>
                                </div>
                                {/* Valuable Fact for Desktop */}
                                <div className="hidden lg:block mt-6 space-y-4">
                                    <div className="flex gap-4 items-center bg-blue-50 border-l-4 border-blue-400 rounded p-4">
                                        <Image
                                            src="/Mulkirigala-Rajamaha-Viharaya.jpg"
                                            alt="Ancient palm leaf manuscripts from Mulkirigala temple"
                                            width={120}
                                            height={80}
                                            className="rounded shadow-md object-cover"
                                        />
                                        <div>
                                            <p className="text-base text-blue-900 font-semibold mb-1">Historical Discovery Site</p>
                                            <p className="text-sm text-blue-800">
                                                In 1826, British scholar George Turnour discovered ancient palm-leaf manuscripts at Mulkirigala that helped decode the Mahavamsa, Sri Lanka&apos;s great historical chronicle. This discovery was crucial for understanding the island&apos;s rich Buddhist heritage.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-8">
                                        <div className="bg-amber-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
                                            <p className="text-sm text-yellow-900 font-semibold mb-1">Ideal Duration</p>
                                            <p className="text-sm text-yellow-800">2-3 hours to climb all seven levels, explore the caves, and enjoy the views at a comfortable pace.</p>
                                        </div>
                                        <div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
                                            <p className="text-sm text-green-900 font-semibold mb-1">Best Time to Visit</p>
                                            <p className="text-sm text-green-800">Early morning (6-9 AM) or late afternoon (3-5 PM) to avoid the midday heat. December to March offers pleasant weather.</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                    {/* How to Get to Mulkirigala */}
                    <section className="flex-1">
                        <Card className="border-l-4 border-blue-500 scroll-mt-40" id="how-to-get-there">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                                    <MapPin className="w-5 h-5" />
                                    How to Get to Mulkirigala
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">From Tangalle (Recommended Base)</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li>• <strong>Distance:</strong> 16 km (10 miles) inland</li>
                                            <li>• <strong>Duration:</strong> 30 minutes by car</li>
                                            <li>• <strong>Cost:</strong> $10-15 USD by tuk-tuk</li>
                                            <li>• <strong>Best option:</strong> Hire tuk-tuk for half-day</li>
                                        </ul>

                                        <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">From Matara</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li>• <strong>Distance:</strong> 30 km (19 miles)</li>
                                            <li>• <strong>Duration:</strong> 45 minutes</li>
                                            <li>• <strong>Cost:</strong> $15-20 USD by taxi</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">From Colombo</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li>• <strong>Distance:</strong> 230 km (143 miles)</li>
                                            <li>• <strong>Duration:</strong> 4-4.5 hours via Southern Expressway</li>
                                            <li>• <strong>Route:</strong> Southern Expressway to Matara, then inland</li>
                                        </ul>

                                        <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">By Public Bus</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li>• <strong>Route:</strong> Take bus to Beliatta, then local bus</li>
                                            <li>• <strong>Duration:</strong> 5-6 hours from Colombo</li>
                                            <li>• <strong>Cost:</strong> $3-5 USD (budget option)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                                    <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
                                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                        <li>• Combine with beach time in Tangalle for a perfect day</li>
                                        <li>• Wear comfortable walking shoes for climbing steps</li>
                                        <li>• Bring water and sun protection</li>
                                        <li>• Best combined with visits to Wewurukannala Vihara nearby</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </div>

                {/* Seven Levels of Mulkirigala */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 scroll-mt-40" id="seven-levels">The Seven Sacred Levels</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Want to know what&apos;s at each level? Mulkirigala has seven levels built into the rock. Each level has cave temples and viewpoints. Can you climb all 533 stone steps that connect them?
                    </p>

                    <div className="space-y-8">
                        {/* Level 1 */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Level 1: Pahala Viharaya (Lower Temple)</CardTitle>
                                <CardDescription>The welcoming entrance and first cave shrine</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <Image
                                        src="/Mulkirigala-Pahala-Viharaya.jpg"
                                        alt="Lower temple entrance at Mulkirigala with ancient stone steps and tropical vegetation"
                                        width={400}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            Where does your journey begin? Start at the base where you&apos;ll find the ticket office, a small museum, and the first cave temple. The museum shows artifacts and old photos from Mulkirigala&apos;s 2,000-year history. The first cave has several Buddha statues in traditional Sri Lankan style.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Small museum with historical artifacts
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                First cave temple with Buddha statues
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Shaded rest area and facilities
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Level 2 */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Level 2: The First Cave Temples</CardTitle>
                                <CardDescription>Ancient paintings and meditation caves</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            What&apos;s on the second level? After the first stairs, you&apos;ll reach several cave temples with beautiful old ceiling paintings. These show Buddha&apos;s life and Jataka stories. Can you believe the colors reds, yellows, and blues are still bright after centuries? Natural light creates a peaceful atmosphere.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Ancient ceiling frescoes in vibrant colors
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Multiple reclining and seated Buddha statues
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Kandyan period artwork dating back centuries
                                            </li>
                                        </ul>
                                    </div>
                                    <Image
                                        src="/Mulkirigala-First-Cave-Temples.jpg"
                                        alt="Beautiful ancient cave paintings on the ceiling of Mulkirigala temple showing Buddha's life"
                                        width={400}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Level 3-4 */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Levels 3-4: The Middle Terraces</CardTitle>
                                <CardDescription>More shrines and improving views</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <Image
                                        src="/placeholder.svg?height=300&width=400"
                                        alt="Middle level terraces of Mulkirigala showing white-washed caves and surrounding landscape"
                                        width={400}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            What makes the middle levels special? Each cave temple here is unique. You&apos;ll find larger Buddha statues, including big reclining Buddhas. How are the views? They get better as you climb you can see the countryside, rice fields, and villages below. Need a break? There are good spots to rest in the shade.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Large reclining Buddha statues
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Panoramic views of southern countryside
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Shaded rest areas between climbs
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Level 5-6 */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Levels 5-6: The Upper Sanctuaries</CardTitle>
                                <CardDescription>Sacred meditation caves with ancient inscriptions</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            Why are these upper caves so important? This is where the famous palm-leaf manuscripts were found in 1826! Monks have used these quiet spaces for meditation for centuries. Can you spot the ancient rock inscriptions? They tell stories of royal donations and the monks who lived here long ago.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Site where historical manuscripts were found
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Ancient rock inscriptions in Brahmi script
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Historic meditation caves
                                            </li>
                                        </ul>
                                    </div>
                                    <Image
                                        src="/placeholder.svg?height=300&width=400"
                                        alt="Upper meditation caves at Mulkirigala with ancient inscriptions carved in rock"
                                        width={400}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Level 7 */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Level 7: The Summit Temple</CardTitle>
                                <CardDescription>The highest point with breathtaking 360-degree views</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <Image
                                        src="/placeholder.svg?height=300&width=400"
                                        alt="Summit stupa at Mulkirigala with panoramic views across southern Sri Lanka to the ocean"
                                        width={400}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            Ready for the final climb? You&apos;ll reach the summit at 205 meters where a white dagoba (stupa) stands. What&apos;s the view like? On clear days, you can see the Indian Ocean from the 360-degree terrace! Is the climb worth it? Absolutely, the cool breeze and beautiful views are amazing. The dagoba has sacred relics and is still used for worship.
                                        </p>
                                        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-400 dark:border-yellow-600 mt-4">
                                            <h4 className="font-semibold text-yellow-800 dark:text-yellow-100 mb-2">Visitor Tip</h4>
                                            <p className="text-sm text-yellow-700 dark:text-gray-200">Spend at least 15-20 minutes at the summit. Bring water and sit in the shade to enjoy the views. Early morning visits offer the best visibility and coolest temperatures.</p>
                                        </div>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                White dagoba with sacred relics
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                360-degree panoramic views
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Views to the Indian Ocean on clear days
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Perfect spot for photography and meditation
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Sample Itinerary */}
                <section className="mb-12 scroll-mt-40" id="itinerary">
                    <h2 className="text-3xl font-bold mb-6">Sample Itinerary</h2>
                    <Card>
                        <CardHeader>
                            <CardTitle>Half-Day Mulkirigala Visit</CardTitle>
                            <CardDescription>Perfect 3-4 hour experience combining temple visit with southern coast exploration</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">8:00 AM</div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Arrive at Mulkirigala</h4>
                                        <p className="text-sm text-muted-foreground">Purchase tickets ($3 for foreigners). Visit the small museum to learn about the temple&apos;s history. Begin your climb when it&apos;s still cool.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">8:30 AM</div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Explore Lower Levels (1-3)</h4>
                                        <p className="text-sm text-muted-foreground">Take your time examining the cave paintings and Buddha statues. Climb at a comfortable pace with rest breaks. Stay hydrated.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">9:30 AM</div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Middle to Upper Levels (4-6)</h4>
                                        <p className="text-sm text-muted-foreground">Continue climbing and discovering new caves. Look for ancient inscriptions. Enjoy the improving views of the countryside.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">10:15 AM</div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Summit Experience (Level 7)</h4>
                                        <p className="text-sm text-muted-foreground">Reach the top stupa and enjoy spectacular 360-degree views. Rest in the shade, take photos, and soak in the peaceful atmosphere. This is the perfect time to reflect on your journey.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">10:45 AM</div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Descend</h4>
                                        <p className="text-sm text-muted-foreground">Take your time going down the steps. Visit any caves you may have passed quickly on the way up.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">11:30 AM</div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Optional: Visit Wewurukannala Vihara</h4>
                                        <p className="text-sm text-muted-foreground">Just 10 minutes away, see the massive 50-meter seated Buddha statue and colorful temple complex.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">1:00 PM</div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Lunch and Beach Time in Tangalle</h4>
                                        <p className="text-sm text-muted-foreground">Return to Tangalle for a seaside lunch and relax on beautiful beaches like Rekawa or Medaketiya.</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
                {/* Nearby Places to Visit */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Nearby Places to Visit</h2>
                    <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
                        Visit these nearby places too
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="relative h-48">
                                <Image
                                    src="/WewurukannalaViharaya.jpg"
                                    alt="Wewurukannala Viharaya with giant Buddha statue and intricate temple architecture"
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                                    20 mins
                                </div>
                            </div>
                            <CardContent className="p-4">
                                <h3 className="font-bold text-lg mb-2">Wewurukannala Viharaya</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    This temple has a giant Buddha statue and colorful architecture. Great for cultural visits.
                                </p>
                                <div className="flex items-center text-xs text-blue-600 mb-2">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    7.5 km from Waligama
                                </div>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/wewurukannala-viharaya">
                                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="relative h-48">
                                <Image
                                    src="/HummanayaBlowhole.jpg"
                                    alt="Hummanaya Blow Hole with ocean waves creating impressive water spouts"
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                                    1 hour
                                </div>
                            </div>
                            <CardContent className="p-4">
                                <h3 className="font-bold text-lg mb-2">Hummanaya Blow Hole</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    A natural wonder where ocean waves create big water spouts. Great for nature lovers.
                                </p>
                                <div className="flex items-center text-xs text-blue-600 mb-2">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    39 km from Waligama
                                </div>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/hummanaya-blow-hole">
                                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="relative h-48">
                                <Image
                                    src="/Hirikatiya.jpg"
                                    alt="Nine Arch Bridge in Ella with train passing through lush green tea plantations"
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                                    1 hour
                                </div>
                            </div>
                            <CardContent className="p-4">
                                <h3 className="font-bold text-lg mb-2">Hirikatiya</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    A quiet beach with good surfing. Perfect for beginners and experienced surfers.
                                </p>
                                <div className="flex items-center text-xs text-blue-600 mb-2">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    39 km from Waligama
                                </div>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/hirikatiya">
                                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>


                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="relative h-48">
                                <Image
                                    src="/galle-fort-sarmat-batagov-unsplash.jpg"
                                    alt="Galle Fort with its iconic lighthouse and ramparts"
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                                    45 mins
                                </div>
                            </div>
                            <CardContent className="p-4">
                                <h3 className="font-bold text-lg mb-2">Galle Fort</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    A UNESCO World Heritage Site with old colonial buildings and ocean views.
                                </p>
                                <div className="flex items-center text-xs text-blue-600 mb-2">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    29 km from Waligama
                                </div>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/galle-fort">
                                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>


                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="relative h-48">
                                <Image
                                    src="/Unawatuna.jpg"
                                    alt="Unawatuna beach and surrounding landscapes"
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                                    1 hour
                                </div>
                            </div>
                            <CardContent className="p-4">
                                <h3 className="font-bold text-lg mb-2">Unawatuna</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Unawatuna offers a perfect blend of relaxation and adventure with its golden beaches, coral reefs, and vibrant nightlife.
                                </p>
                                <div className="flex items-center text-xs text-blue-600 mb-2">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    30 km from Waligama
                                </div>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/unawatuna">
                                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </section>



                {/* Visiting Guide */}
                <section className="mb-12 scroll-mt-40" id="visiting-guide">
                    <h2 className="text-3xl font-bold mb-6">Essential Visiting Information</h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-blue-500" />
                                    Opening Hours & Fees
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div>
                                    <p className="font-semibold text-sm">Opening Hours:</p>
                                    <p className="text-sm text-muted-foreground">Daily: 6:00 AM - 6:00 PM</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Entrance Fee:</p>
                                    <p className="text-sm text-muted-foreground">Foreigners: LKR 500 (~$3 USD)</p>
                                    <p className="text-sm text-muted-foreground">Locals: LKR 50</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Best Time to Visit:</p>
                                    <p className="text-sm text-muted-foreground">Early morning (6-9 AM) or late afternoon (3-5 PM) to avoid heat</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Duration:</p>
                                    <p className="text-sm text-muted-foreground">2-3 hours for full exploration</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-green-500" />
                                    What to Bring
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        <span><strong>Water bottle:</strong> Essential for the climb</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        <span><strong>Comfortable walking shoes:</strong> Good grip for stairs</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        <span><strong>Sun protection:</strong> Hat, sunglasses, sunscreen</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        <span><strong>Modest clothing:</strong> Cover shoulders and knees</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        <span><strong>Camera:</strong> For incredible photo opportunities</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        <span><strong>Small towel:</strong> For wiping sweat during climb</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Important Guidelines */}
                    <Card className="border-l-4 border-orange-500">
                        <CardHeader>
                            <CardTitle className="text-orange-700 dark:text-orange-300">Important Temple Guidelines</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">DO:</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>✓ Dress modestly covering shoulders and knees</li>
                                        <li>✓ Remove shoes and hats before entering shrines</li>
                                        <li>✓ Speak quietly and respectfully</li>
                                        <li>✓ Walk clockwise around dagobas</li>
                                        <li>✓ Ask permission before photographing monks</li>
                                        <li>✓ Stay hydrated and take breaks while climbing</li>
                                        <li>✓ Respect the sacred atmosphere</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3 text-red-700 dark:text-red-300">DON&apos;T:</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>✗ Turn your back to Buddha statues for photos</li>
                                        <li>✗ Touch ancient paintings or artifacts</li>
                                        <li>✗ Wear revealing clothing</li>
                                        <li>✗ Make loud noises or disturb worshippers</li>
                                        <li>✗ Climb on walls or structures</li>
                                        <li>✗ Litter or damage the environment</li>
                                        <li>✗ Rush through - take time to appreciate</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Health & Safety Tips */}
                    <Card className="mt-6 border-l-4 border-blue-500">
                        <CardHeader>
                            <CardTitle className="text-blue-700 dark:text-blue-300">Health & Safety Tips</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3 text-sm text-muted-foreground">
                                <p>
                                    <strong>Climbing Safety:</strong> The 533 steps can be challenging, especially in heat. Take frequent breaks, stay hydrated, and climb at your own pace. The steps vary in size and can be steep in places.
                                </p>
                                <p>
                                    <strong>Sun Protection:</strong> The southern province can be very hot and sunny. Apply sunscreen regularly, wear a hat when not in shrines, and seek shade during rest breaks.
                                </p>
                                <p>
                                    <strong>Wildlife:</strong> Monkeys are common around the temple. Don&apos;t feed them or leave bags unattended. Keep food hidden and don&apos;t show fear if they approach.
                                </p>
                                <p>
                                    <strong>Physical Fitness:</strong> While the climb is manageable for most people, those with heart conditions, knee problems, or mobility issues should consult a doctor first. Take it slow and rest as needed.
                                </p>
                                <p>
                                    <strong>Emergency:</strong> There are no medical facilities at the site. Keep necessary medications with you and inform your driver or guide of any health concerns.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Photography Tips */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Photography Tips</h2>
                    <Card>
                        <CardContent className="pt-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold mb-3">Best Photo Spots</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Summit dagoba with 360-degree panoramic views</li>
                                        <li>• Cave paintings with natural light filtering in</li>
                                        <li>• Looking up at the rock face from below</li>
                                        <li>• Sunrise or sunset from the upper levels</li>
                                        <li>• White-washed cave entrances against green foliage</li>
                                        <li>• Views stretching to the ocean horizon</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3">Photography Guidelines</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Flash photography may not be allowed in some caves</li>
                                        <li>• Never turn your back to Buddha statues for selfies</li>
                                        <li>• Ask permission before photographing monks or locals</li>
                                        <li>• Best light is early morning or late afternoon</li>
                                        <li>• Bring wide-angle lens for cave interiors</li>
                                        <li>• Telephoto lens useful for distant landscape views</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Why Visit */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Why Should You Visit Mulkirigala?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="border-t-4 border-t-blue-500">
                            <CardHeader>
                                <CardTitle className="text-lg">Authentic Experience</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Want to escape the crowds? Mulkirigala is peaceful and quiet. You can explore at your own pace. It feels like your own personal discovery!
                            </CardContent>
                        </Card>

                        <Card className="border-t-4 border-t-green-500">
                            <CardHeader>
                                <CardTitle className="text-lg">Historical Significance</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Did you know ancient manuscripts found here helped us learn Sri Lanka&apos;s history? Scholars, kings, and monks have used this place for 2,000 years. Imagine walking where they walked!
                            </CardContent>
                        </Card>

                        <Card className="border-t-4 border-t-purple-500">
                            <CardHeader>
                                <CardTitle className="text-lg">Stunning Natural Beauty</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                What makes it so beautiful? Ancient caves, colorful art, and stunning views make Mulkirigala one of the most memorable places in southern Sri Lanka. Perfect for photos!
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Final Tips */}
                <section className="mb-12">
                    <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 border-2 border-blue-200 dark:border-blue-800">
                        <CardHeader>
                            <CardTitle className="text-2xl">Final Tips for Your Visit</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                                Is Mulkirigala worth visiting? Absolutely! It&apos;s a treasure of southern Sri Lanka. The climb of 533 steps may sound hard, but the ancient cave art, peaceful meditation spaces, and beautiful views make it worth every step.
                            </p>
                            <p className="text-muted-foreground">
                                Remember, this is a living temple where local people still come to worship and monks continue ancient traditions. Visit with respect and you&apos;ll have memories that last a lifetime!
                            </p>
                            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg mt-4">
                                <h4 className="font-semibold mb-2">Best Visited As Part Of:</h4>
                                <ul className="text-sm space-y-1 text-muted-foreground">
                                    <li>• Southern coast beach holiday (combine with Tangalle, Mirissa, or Unawatuna)</li>
                                    <li>• Cultural triangle extension to the south</li>
                                    <li>• Multi-day southern province tour including Galle, Yala, and coastal towns</li>
                                    <li>• Day trip from Tangalle or Matara accommodation</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* CTA Section */}
                <section className="text-center py-12 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900 rounded-lg text-white">
                    <h2 className="text-3xl font-bold mb-4">Ready to Explore Mulkirigala?</h2>
                    <p className="text-lg mb-6 max-w-2xl mx-auto">
                        Let us help you plan your perfect southern Sri Lanka adventure including Mulkirigala Raja Maha Viharaya and the beautiful beaches of Tangalle.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/contact-us">
                            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                                Plan Your Trip
                            </Button>
                        </Link>
                        <Link href="/destinations">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                Explore More Destinations
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    )
}
