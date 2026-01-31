"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, ChevronRight, Calendar, Gem, Building2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ImageCarousel } from "@/components/ui/image-carousel"
import InsuranceBanner from "@/components/insurance-banner"

export default function KalaniyaTempleGuide() {

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/Kalaniya-Temple-Inside.jpg"
                    alt="Kelaniya Raja Maha Vihara ancient Buddhist temple with sacred stupa, ornate architecture and devotees"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Kelaniya Raja Maha Vihara</h1>
                    <p className="text-xl md:text-2xl mb-6 font-light">Ancient Temple Where Buddha Visited Sri Lanka</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
                            <MapPin className="w-4 h-4 mr-1" />
                            Kelaniya, Gampaha District
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-orange-600/80 text-white border-orange-500">
                            <Gem className="w-4 h-4 mr-1" />
                            Sacred Buddhist Site
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
                            <Building2 className="w-4 h-4 mr-1" />
                            Over 2,500 Years Old
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Section Navigation Bar */}
            <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
                    <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-orange-700 dark:text-orange-200 hover:bg-orange-100 dark:hover:bg-orange-900 transition">Introduction</a>
                    <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-orange-700 dark:text-orange-200 hover:bg-orange-100 dark:hover:bg-orange-900 transition">Quick Facts</a>
                    <a href="#how-to-get" className="px-3 py-1 rounded-full font-medium text-orange-700 dark:text-orange-200 hover:bg-orange-100 dark:hover:bg-orange-900 transition">How to Get There</a>
                    <a href="#buddha-visit" className="px-3 py-1 rounded-full font-medium text-orange-700 dark:text-orange-200 hover:bg-orange-100 dark:hover:bg-orange-900 transition">Buddha&apos;s Visit</a>
                    <a href="#temple-highlights" className="px-3 py-1 rounded-full font-medium text-orange-700 dark:text-orange-200 hover:bg-orange-100 dark:hover:bg-orange-900 transition">Temple Highlights</a>
                    <a href="#duruthu-perahera" className="px-3 py-1 rounded-full font-medium text-orange-700 dark:text-orange-200 hover:bg-orange-100 dark:hover:bg-orange-900 transition">Duruthu Perahera</a>
                </div>
            </nav>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Introduction */}
                <section className="mb-12 scroll-mt-40" id="introduction">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">
                        Welcome to Kelaniya Temple: A Sacred Place Since Ancient Times
                    </h2>
                    <div className="grid md:grid-cols-[1fr_140px] gap-6 items-start">
                        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                            <p className="text-lg mb-4">
                                Kelaniya Raja Maha Vihara is one of the most important and sacred Buddhist temples in Sri Lanka. Located just 11 kilometers from Colombo, this ancient temple stands on the banks of the Kelaniya River. What makes this place so special is that Lord Buddha himself is believed to have visited this exact spot over 2,500 years ago during his third visit to Sri Lanka.
                            </p>
                            <p className="text-lg">
                                The temple you see today is filled with beautiful paintings, colorful decorations, and golden Buddha statues. Thousands of Buddhist people visit here every day to pray, light oil lamps, and offer flowers. The peaceful atmosphere, the sound of chanting monks, and the smell of incense create a deeply spiritual experience that touches your heart.
                            </p>
                        </div>

                        {/* Small Sri Lanka Map with Temple Location */}
                        <div className="flex flex-col items-center flex-shrink-0">
                            <div className="relative w-[200px] md:w-[180px] lg:w-[200px] bg-orange-50 dark:bg-orange-950/30 rounded-lg p-2 border border-orange-200 dark:border-orange-800">
                                <Image src="/placeholder.svg" alt="Map of Sri Lanka showing Kelaniya temple location near Colombo" width={200} height={200} className="rounded-lg w-full h-auto" />

                                <div className="text-center mt-1">
                                    <div className="flex items-center justify-center gap-1 text-red-600 dark:text-red-400 font-bold text-[10px]">
                                        <MapPin className="w-3 h-3" />
                                        <span>You are here</span>
                                    </div>
                                    <p className="text-[9px] text-muted-foreground">Near Colombo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                        <div className="my-8 p-4 rounded-lg bg-yellow-100 dark:bg-yellow-900/60 border-l-4 border-yellow-400 dark:border-yellow-500">
                            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Did you know?</h4>
                            <p className="text-gray-800 dark:text-yellow-100">
                                The name &quot;Kelaniya&quot; comes from an ancient story. Long ago, a princess named Viharamahadevi was set adrift in the ocean as a sacrifice to calm the angry sea gods. She floated in a golden boat and landed safely at Kelaniya. The people believed the gods had blessed this land, making it sacred. Later, when Buddha visited this very spot, it became even more holy and special for Buddhists around the world.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Quick Facts & How to Get There side by side */}
                <div className="flex flex-col lg:flex-row gap-8 mb-12">
                    {/* Quick Facts (left) */}
                    <section className="flex-1 scroll-mt-40" id="quick-facts">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500" />
                                    Kelaniya Temple Quick Facts
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-blue-500" />
                                            <span>
                                                <strong>Location:</strong> 11km from Colombo
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Building2 className="w-4 h-4 text-orange-500" />
                                            <span>
                                                <strong>Age:</strong> Over 2,500 years old
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Gem className="w-4 h-4 text-purple-500" />
                                            <span>
                                                <strong>Significance:</strong> Buddha visited here
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-green-500" />
                                            <span>
                                                <strong>Best time:</strong> January (Duruthu Perahera)
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-cyan-500" />
                                            <span>
                                                <strong>Visit duration:</strong> 1-2 hours
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Star className="w-4 h-4 text-yellow-500" />
                                            <span>
                                                <strong>Entry:</strong> Free (donations welcome)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <InsuranceBanner />
                    </section>

                    {/* How to Get There (right) */}
                    <section className="flex-1 scroll-mt-40" id="how-to-get">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                                    <MapPin className="w-5 h-5 text-orange-500" />
                                    How to Get to Kelaniya Temple
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div>
                                    <h4 className="font-semibold mb-1 text-foreground">Private Vehicle (Recommended)</h4>
                                    <ul className="text-sm text-muted-foreground space-y-0.5">
                                        <li>• 25-30 minutes from Colombo Fort</li>
                                        <li>• $10-15 USD one way by three-wheeler</li>
                                        <li>• Most convenient option</li>
                                    </ul>

                                    {/* Ceylanka Tours Recommendation */}
                                    <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 shadow-md">
                                        <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                                            <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylanka Tours</span> offers comfortable transport to Kelaniya Temple with knowledgeable drivers who can share stories about the temple and help you understand what you are seeing.
                                        </p>
                                        <div className="flex flex-col gap-1.5 text-xs text-orange-800 dark:text-orange-200">
                                            <div className="flex items-center gap-2 py-1.5 px-2 bg-white/50 dark:bg-slate-600/50 rounded">
                                                <span>📞</span>
                                                <span><strong>Call:</strong></span>
                                                <a href="tel:+94707646765" className="underline hover:text-orange-700 dark:hover:text-orange-300">
                                                    <span className="hidden sm:inline">+94 70 764 6765</span>
                                                    <span className="sm:hidden">+94707646765</span>
                                                </a>
                                                <span>|</span>
                                                <a href="https://wa.me/94707646765" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-700 dark:hover:text-orange-300 flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="#25D366" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                                    </svg>
                                                    WhatsApp
                                                </a>
                                            </div>
                                            <div className="flex items-center gap-2 py-1.5 px-2 bg-white/50 dark:bg-slate-600/50 rounded hover:bg-white/70 dark:hover:bg-slate-600/70 transition-colors">
                                                <span>🗓️</span>
                                                <Link href="/tours" className="underline hover:text-orange-700 dark:hover:text-orange-300 focus:text-orange-700 dark:focus:text-orange-300">
                                                    <strong>Temple Tours</strong> - Click for details & booking
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1 text-foreground">Train</h4>
                                    <ul className="text-sm text-muted-foreground space-y-0.5">
                                        <li>• Take Puttalam or Negombo line</li>
                                        <li>• Get off at Kelaniya station</li>
                                        <li>• 5 minute walk to temple</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1 text-foreground">Bus</h4>
                                    <ul className="text-sm text-muted-foreground space-y-0.5">
                                        <li>• Route 235 from Colombo Fort</li>
                                        <li>• Very affordable and frequent</li>
                                    </ul>
                                </div>
                                <div className="mt-3 p-2 bg-orange-100 dark:bg-slate-700 rounded border-l-4 border-orange-500 dark:border-orange-400">
                                    <p className="text-xs text-orange-800 dark:text-orange-200">
                                        <strong>🌟 Tip:</strong> Dress modestly covering shoulders and knees. Remove shoes before entering temple buildings.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </div>

                {/* Buddha's Visit Section */}
                <section className="mb-12 scroll-mt-40" id="buddha-visit">
                    <Card className="border-purple-200 dark:border-gray-700 bg-purple-50 dark:bg-slate-800">
                        <CardHeader>
                            <CardTitle className="text-purple-800 dark:text-purple-300 flex items-center gap-2">
                                <Gem className="w-5 h-5" />
                                The Story of Buddha&apos;s Visit to Kelaniya
                            </CardTitle>
                            <CardDescription className="text-purple-700 dark:text-purple-300">
                                Why this temple is one of the most sacred places in Sri Lanka
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <p className="text-gray-700 dark:text-gray-300 text-lg">
                                    According to ancient Buddhist texts and Sri Lankan history, Lord Buddha visited Sri Lanka three times. His third visit brought him to Kelaniya, making this place forever sacred in Buddhist tradition.
                                </p>

                                <div className="grid md:grid-cols-1 gap-6">
                                    <div className="space-y-4">
                                        <h4 className="font-semibold text-purple-800 dark:text-purple-200 text-xl">The Sacred Third Visit</h4>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            This happened about eight years after Buddha gained enlightenment, which means over 2,500 years ago. At that time, there were two dragon kings (called Naga kings in Sanskrit) living in Kelaniya. These two brothers were fighting over a valuable gem-studded throne that their father had left behind. Their conflict was so intense that it was causing suffering to many people and creatures in the area.
                                        </p>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            When Buddha heard about this dispute, he came to Kelaniya to bring peace. He sat on the very throne they were fighting over and taught them about letting go of greed and anger. His wise words and peaceful presence touched their hearts. The two brothers realized their mistake, stopped fighting, and gave the throne to Buddha as a gesture of respect and gratitude.
                                        </p>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            Before leaving, Buddha sat under a sacred Bo tree at this location and spent time in deep meditation. He blessed the land and predicted that his teachings would flourish in Sri Lanka for thousands of years. This prediction came true, and Buddhism became the heart of Sri Lankan culture.
                                        </p>
                                    </div>

                                    <div className="space-y-4 bg-white dark:bg-slate-700 p-6 rounded-lg">
                                        <h4 className="font-semibold text-purple-800 dark:text-purple-200 text-xl">Why This Makes Kelaniya Special</h4>
                                        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                                <span>Buddha personally visited and blessed this exact location with his presence</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                                <span>The spot where Buddha sat and meditated is marked by the main stupa you see today</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                                <span>The gem-studded throne became a sacred relic, and a replica is enshrined in the temple</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                                <span>Pilgrims from around the world visit to pay respect where Buddha walked and taught</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-yellow-100 dark:bg-yellow-900/40 rounded-lg border-l-4 border-yellow-500">
                                    <p className="text-yellow-800 dark:text-yellow-200">
                                        <strong>Historical Note:</strong> Many kings and rulers throughout Sri Lankan history have renovated and beautified this temple. The current structure you see today was rebuilt in the 19th century after being destroyed and restored multiple times over 2,500 years. Each generation added their own artistic touch while preserving the sacred history.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Temple Highlights */}
                <section className="mb-12 scroll-mt-40" id="temple-highlights">
                    <h2 className="text-3xl font-bold mb-6">What to See at Kelaniya Temple</h2>
                    <div className="space-y-8">
                        {/* Main Shrine Room */}
                        <Card>
                            <CardHeader>
                                <CardTitle>1. The Main Shrine Room (Image House) & Famous Wall Paintings</CardTitle>
                                <CardDescription>Beautiful paintings and golden Buddha statues inside the sacred shrine</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-8">
                                    {/* First section - Overview */}
                                    <div className="grid md:grid-cols-2 gap-6 items-center">
                                        <ImageCarousel
                                            images={[
                                                {
                                                    src: "/Kalaniya-Temple-Inside.jpg",
                                                    caption: "Main shrine room with reclining Buddha",
                                                    alt: ""
                                                },
                                                {
                                                    src: "/Kalaniya-Paints.jpg",
                                                    caption: "Wall paintings depicting Buddha's life",
                                                    alt: ""
                                                }
                                            ]}
                                        />
                                        <div>
                                            <p className="text-muted-foreground mb-4">
                                                The main shrine room is where you will find the most beautiful artwork in the temple. The walls and ceiling are covered with colorful paintings showing stories from Buddha&apos;s life and previous births. These paintings were created by a famous Sri Lankan artist named Solias Mendis in the 1900s.
                                            </p>
                                            <p className="text-muted-foreground mb-4">
                                                Inside, you will see a magnificent reclining Buddha statue lying peacefully. This represents Buddha entering the final state of Nirvana. The statue is painted in gold and decorated with flowers and offerings from devotees who come to pray.
                                            </p>
                                            <ul className="space-y-2 text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                    Detailed paintings showing Buddha&apos;s life story
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                    Golden reclining Buddha statue
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                    Cool and peaceful atmosphere inside
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                    Remember to remove shoes and hats before entering
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="border-t border-gray-200 dark:border-gray-700"></div>

                                    {/* Second section - Wall Paintings Details */}
                                    <div className="grid md:grid-cols-2 gap-6 items-center">
                                        <div>
                                            <h4 className="font-semibold text-lg mb-3 text-foreground">The Magnificent Wall Paintings</h4>
                                            <p className="text-muted-foreground mb-4">
                                                The temple walls are covered with beautiful paintings that tell stories. These are not just decorations but teaching tools that help people understand Buddhist teachings and Sri Lankan history. The paintings were created by talented local artists who spent years perfecting their craft.
                                            </p>
                                            <p className="text-muted-foreground mb-4">
                                                You will see scenes showing Buddha&apos;s birth, his life as a prince, his search for truth, his enlightenment, and his teachings. There are also paintings showing how Buddhism came to Sri Lanka and stories of wise kings and queens. The bright colors and detailed work make these paintings truly special.
                                            </p>
                                            <ul className="space-y-2 text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                    Stories from Buddha&apos;s life painted in detail
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                    Scenes from Sri Lankan Buddhist history
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                    Bright colors and artistic details
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                    Created by master artist Solias Mendis
                                                </li>
                                            </ul>
                                        </div>
                                        <ImageCarousel
                                            images={[
                                                {
                                                    src: "/Kalaniya-Paints.jpg",
                                                    caption: "Colorful wall paintings at Kelaniya",
                                                    alt: ""
                                                },
                                                {
                                                    src: "/Kalaniya-Paints2.jpg",
                                                    caption: "Detailed Buddhist artwork",
                                                    alt: ""
                                                },
                                                 {
                                                    src: "/Kalaniya-Paints3.jpg",
                                                    caption: "Detailed Buddhist artwork",
                                                    alt: ""
                                                },
                                                 {
                                                    src: "/Kalaniya-Paints4.jpg",
                                                    caption: "Detailed Buddhist artwork",
                                                    alt: ""
                                                },
                                                 {
                                                    src: "/Kalaniya-Paints5.jpg",
                                                    caption: "Detailed Buddhist artwork",
                                                    alt: ""
                                                }

                                            ]}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* The Sacred Stupa */}
                        <Card>
                            <CardHeader>
                                <CardTitle>2. The Sacred Stupa (Dagoba)</CardTitle>
                                <CardDescription>Marks the spot where Buddha meditated</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            The white stupa dome you see in the temple grounds marks the exact spot where Buddha is believed to have sat and meditated over 2,500 years ago. A stupa is a dome-shaped structure that Buddhists build to honor sacred spots and keep holy relics.
                                        </p>
                                        <p className="text-muted-foreground mb-4">
                                            This stupa has been rebuilt many times over the centuries. Each time it was damaged by invaders or natural disasters, devoted kings and people rebuilt it with even more care and beauty. Walking around the stupa clockwise while praying is a common practice for Buddhist devotees.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Pure white dome visible from far away
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Marks Buddha&apos;s meditation spot
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Devotees walk around it while praying
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Beautiful at sunrise and sunset
                                            </li>
                                        </ul>
                                    </div>
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/placeholder.svg",
                                                caption: "White stupa at Kelaniya Temple",
                                                alt: ""
                                            },
                                            {
                                                src: "/placeholder.svg",
                                                caption: "Devotees walking around the stupa",
                                                alt: ""
                                            }
                                        ]}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* The Bo Tree */}
                        <Card>
                            <CardHeader>
                                <CardTitle>2. The Sacred Bo Tree</CardTitle>
                                <CardDescription>A descendant of the tree under which Buddha gained enlightenment</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/placeholder.svg",
                                                caption: "Sacred Bo tree at Kelaniya",
                                                alt: ""
                                            },
                                            {
                                                src: "/placeholder.svg",
                                                caption: "Devotees offering prayers under Bo tree",
                                                alt: ""
                                            }
                                        ]}
                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            The Bo tree (also called Bodhi tree) at Kelaniya is very special. It is believed to be a descendant of the original Bo tree in India under which Buddha sat when he gained enlightenment. King Devanampiyatissa planted the first Bo sapling in Sri Lanka over 2,000 years ago, and saplings from that tree were planted in important temples across the country.
                                        </p>
                                        <p className="text-muted-foreground mb-4">
                                            Many devotees come to sit under this tree to meditate and find peace. The tree is surrounded by a decorated platform, and you will often see people lighting oil lamps and placing flower offerings around it. The tree&apos;s leaves rustle in the breeze, creating a calming natural sound.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Sacred tree connected to Buddha&apos;s enlightenment
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Over 2,000 years of continuous worship
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Peaceful spot for meditation
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Devotees light oil lamps here daily
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Duruthu Perahera Section */}
                <section className="mb-12 scroll-mt-40" id="duruthu-perahera">
                    <Card className="border-orange-200 dark:border-gray-700 bg-orange-50 dark:bg-slate-800">
                        <CardHeader>
                            <CardTitle className="text-orange-800 dark:text-orange-300 flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                Duruthu Perahera - The Grand Festival
                            </CardTitle>
                            <CardDescription className="text-orange-700 dark:text-orange-300">
                                Witness Sri Lanka&apos;s most spectacular temple procession every January
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <p className="text-gray-700 dark:text-gray-300 text-lg">
                                    Every January, during the full moon, Kelaniya Temple hosts the Duruthu Perahera, one of the biggest and most colorful Buddhist festivals in Sri Lanka. This celebrates Buddha&apos;s visit to Kelaniya and attracts hundreds of thousands of people from all over the country.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <h4 className="font-semibold text-orange-800 dark:text-orange-200 text-xl">What Happens During Perahera</h4>
                                        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                                <span>Decorated elephants wearing colorful costumes walk in the procession</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                                <span>Traditional dancers perform ancient dances with drums and music</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                                <span>Fire dancers twirl flames and walk on hot coals</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                                <span>Hundreds of drummers create thundering rhythms</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                                <span>Sacred relics are carried in golden caskets on elephant back</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                                <span>Thousands of oil lamps light up the night streets</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="font-semibold text-orange-800 dark:text-orange-200 text-xl">Tips for Visiting During Perahera</h4>
                                        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                                            <li className="flex items-start gap-3">
                                                <Star className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                                <span>Come early to get a good viewing spot along the procession route</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Star className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                                <span>The main procession usually starts around 8 PM and lasts 3-4 hours</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Star className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                                <span>Wear comfortable shoes as you will be standing for a long time</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Star className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                                <span>Bring water and be prepared for crowds</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Star className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                                <span>Book accommodation in advance as hotels fill up quickly</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-white dark:bg-slate-700 rounded-lg">
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/placeholder.svg",
                                                caption: "Elephants in colorful costumes during Duruthu Perahera",
                                                alt: ""
                                            },
                                            {
                                                src: "/placeholder.svg",
                                                caption: "Traditional dancers performing at night",
                                                alt: ""
                                            },
                                            {
                                                src: "/placeholder.svg",
                                                caption: "Drummers in traditional dress",
                                                alt: ""
                                            }
                                        ]}
                                    />
                                </div>

                                <div className="mt-6 p-4 bg-yellow-100 dark:bg-yellow-900/40 rounded-lg border-l-4 border-yellow-500">
                                    <p className="text-yellow-800 dark:text-yellow-200">
                                        <strong>Important:</strong> The Duruthu Perahera date changes each year based on the lunar calendar. It always falls on the full moon day of the month of Duruthu (January). Check the exact dates before planning your visit, or contact Ceylanka Tours for assistance.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Visitor Guidelines */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Important Visitor Guidelines</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Dress Code</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Cover your shoulders and knees (no shorts, tank tops, or sleeveless shirts)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Remove shoes and hats before entering temple buildings
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        White or light-colored clothing is preferred and shows respect
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Socks are allowed if the ground is too hot
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Respectful Behavior</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Never turn your back to Buddha statues when taking photos
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Speak quietly and avoid loud conversations
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Do not touch or climb on religious statues or structures
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Ask permission before photographing monks or worshippers
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Best Time to Visit</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                                        Early morning (6-8 AM) for peaceful atmosphere and morning prayers
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                                        Evening (5-7 PM) to see oil lamps being lit
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                                        Full moon days (Poya days) for special ceremonies
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                                        January for the spectacular Duruthu Perahera festival
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">What to Bring</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        White lotus flowers or jasmine for offerings (can buy near temple)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Small bills for donations if you wish to give
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Camera (photography allowed in most areas)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Water bottle as it can get warm during the day
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Nearby Attractions */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Other Places to Visit Nearby</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Colombo City</CardTitle>
                                <CardDescription>Just 30 minutes away</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Explore Sri Lanka&apos;s commercial capital with its mix of colonial buildings, modern shopping malls, and vibrant markets.
                                </p>
                                <Link href="/destinations/colombo-city-tour">
                                    <Button variant="outline" size="sm" className="w-full">
                                        Learn More <ChevronRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Kelaniya River</CardTitle>
                                <CardDescription>Right beside the temple</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Take a peaceful walk along the riverbank or enjoy a boat ride on the sacred Kelaniya River.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Local Markets</CardTitle>
                                <CardDescription>Experience local life</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Visit nearby local markets to see fresh produce, spices, and traditional Sri Lankan snacks and sweets.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Final Section */}
                <section className="mb-12">
                    <Card className="bg-gradient-to-r from-purple-50 to-orange-50 dark:from-purple-950/30 dark:to-orange-950/30 border-purple-200 dark:border-purple-800">
                        <CardHeader>
                            <CardTitle className="text-purple-800 dark:text-purple-300">Experience the Sacred History of Kelaniya</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                Visiting Kelaniya Raja Maha Vihara is more than just seeing a beautiful temple. It is about connecting with a place where Buddha himself walked and taught over 2,500 years ago. The peaceful atmosphere, the devotion of the worshippers, and the artistic beauty of the paintings and statues create an experience that stays with you long after you leave.
                            </p>
                            <p className="text-muted-foreground mb-4">
                                Whether you come for the spiritual experience, to appreciate the art and architecture, or to witness the magnificent Duruthu Perahera festival, Kelaniya offers something special for everyone. The temple welcomes visitors of all backgrounds who come with respect and an open heart.
                            </p>
                            <p className="text-muted-foreground font-medium">
                                Come and feel the sacred energy of this ancient place where history, faith, and beauty come together. 🙏🇱🇰
                            </p>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </main>
    )
}
