"use client"

import Image from "next/image"
import { Clock, MapPin, Star, TreePine, Sunrise, Camera, ChevronRight, Binoculars, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import InsuranceBanner from "@/components/insurance-banner"

export default function RidiyagamaSafariPark() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/Ridiyagama-Safari-Park.jpg"
                    alt="Ridiyagama Safari Park with elephants roaming in natural habitat in southern Sri Lanka"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Ridiyagama Safari Park</h1>
                    <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s First Open-Air Safari Experience</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
                            <MapPin className="w-4 h-4 mr-1" />
                            Hambantota, Southern Province
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-orange-600/80 text-white border-orange-500">
                            <TreePine className="w-4 h-4 mr-1" />
                            Wildlife Safari
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
                            <Camera className="w-4 h-4 mr-1" />
                            Photography Paradise
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Section Navigation Bar */}
            <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
                    <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-green-700 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900 transition">Introduction</a>
                    <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-green-700 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900 transition">Quick Facts</a>
                    <a href="#how-to-get" className="px-3 py-1 rounded-full font-medium text-green-700 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900 transition">How to Get There</a>
                    <a href="#safari-zones" className="px-3 py-1 rounded-full font-medium text-green-700 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900 transition">Safari Zones</a>
                    <a href="#wildlife" className="px-3 py-1 rounded-full font-medium text-green-700 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900 transition">Wildlife</a>
                    <a href="#tips" className="px-3 py-1 rounded-full font-medium text-green-700 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900 transition">Visitor Tips</a>
                    <a href="#nearby" className="px-3 py-1 rounded-full font-medium text-green-700 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900 transition">What Else Nearby</a>
                </div>
            </nav>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Introduction */}
                <section className="mb-12 scroll-mt-40" id="introduction">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">
                        Welcome to Ridiyagama Safari Park: A Unique Wildlife Experience
                    </h2>
                    <div className="grid md:grid-cols-[1fr_140px] gap-6 items-start">
                        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                            <p className="text-lg mb-4">
                                Ridiyagama Safari Park is Sri Lanka&apos;s first and only open-air safari park, located near Hambantota in the Southern Province. Opened in 2016, this massive 500-acre wildlife sanctuary gives you a chance to see animals roaming freely in their natural habitat, just like in African safaris. Unlike traditional zoos with cages, here you sit safely inside vehicles while elephants, deer, and other animals walk around you.
                            </p>
                            <p className="text-lg">
                                The park was built to provide a new home for orphaned and rescued animals from across Sri Lanka. Today, it houses elephants, deer, crocodiles, peacocks, and many other species living in areas that copy their natural homes. You can drive through the park and watch these beautiful creatures up close, making it perfect for families, photographers, and anyone who loves nature.
                            </p>
                        </div>

                        {/* Small Sri Lanka Map with Location */}
                        <div className="flex flex-col items-center flex-shrink-0">
                            <div className="relative w-[200px] md:w-[180px] lg:w-[200px] bg-green-50 dark:bg-green-950/30 rounded-lg p-2 border border-green-200 dark:border-green-800">
                                <Image 
                                    src="/images/sri-lanka-map-hambantota.png" 
                                    alt="Map of Sri Lanka showing Ridiyagama Safari Park location in Hambantota" 
                                    width={200} 
                                    height={200} 
                                    className="rounded-lg w-full h-auto" 
                                />
                                <div className="text-center mt-1">
                                    <div className="flex items-center justify-center gap-1 text-red-600 dark:text-red-400 font-bold text-[10px]">
                                        <MapPin className="w-3 h-3" />
                                        <span>You are here</span>
                                    </div>
                                    <p className="text-[9px] text-muted-foreground">Southern Coast</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                        <div className="my-8 p-4 rounded-lg bg-yellow-100 dark:bg-yellow-900/60 border-l-4 border-yellow-400 dark:border-yellow-500">
                            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Did you know?</h4>
                            <p className="text-gray-800 dark:text-yellow-100">
                                Ridiyagama Safari Park is named after the nearby Ridiyagama Tank, an ancient reservoir built centuries ago. The word &quot;Ridiyagama&quot; means &quot;silver village&quot; in Sinhalese. The park was built using inspiration from African safari parks, making it completely different from traditional Sri Lankan zoos. This was the first time Sri Lanka tried this type of wildlife experience. The elephants here are mostly orphans who lost their mothers or were rescued from dangerous situations. They now live peacefully in large open areas where they can walk, play, and socialize just like they would in the wild.
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
                                    Ridiyagama Quick Facts
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-green-500" />
                                            <span>
                                                <strong>Location:</strong> 11km from Hambantota
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <TreePine className="w-4 h-4 text-green-600" />
                                            <span>
                                                <strong>Park Size:</strong> 500+ acres
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Sunrise className="w-4 h-4 text-orange-500" />
                                            <span>
                                                <strong>Opening:</strong> 8:30 AM - 5:00 PM daily
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <Camera className="w-4 h-4 text-blue-500" />
                                            <span>
                                                <strong>Famous for:</strong> Open-air safari
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Binoculars className="w-4 h-4 text-purple-500" />
                                            <span>
                                                <strong>Best for:</strong> Wildlife watching
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-orange-500" />
                                            <span>
                                                <strong>Safari Duration:</strong> 2-3 hours
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
                                <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                                    <MapPin className="w-5 h-5 text-green-500" />
                                    How to Get to Ridiyagama
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div>
                                    <h4 className="font-semibold mb-1 text-foreground">From Colombo (Recommended)</h4>
                                    <ul className="text-sm text-muted-foreground space-y-0.5">
                                        <li>• 3.5-4 hours (240km) via Southern Expressway</li>
                                        <li>• Take exit at Mattala or Beliatta</li>
                                        <li>• Private vehicle recommended</li>
                                    </ul>

                                    {/* Ceylanka Tours Recommendation */}
                                    <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 shadow-md">
                                        <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                                            <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylanka Tours</span> offers comfortable safari packages with expert guides who know the best routes and timing. They provide full-day tours including transportation, park entrance, and guided safari experience.
                                        </p>
                                        <div className="flex flex-col gap-1.5 text-xs text-orange-800 dark:text-orange-200">
                                            <div className="flex items-center gap-2 py-1.5 px-2 bg-white/50 dark:bg-slate-600/50 rounded">
                                                <span>📞</span>
                                                <span><strong>Call:</strong></span>
                                                <a href="tel:+94707646765" className="underline hover:text-orange-700 dark:hover:text-orange-300">
                                                    +94 70 764 6765
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
                                                <span>🦁</span>
                                                <Link href="/tours" className="underline hover:text-orange-700 dark:hover:text-orange-300">
                                                    <strong>Safari Tour Packages</strong> - Click for details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-1 text-foreground">From Galle</h4>
                                    <ul className="text-sm text-muted-foreground space-y-0.5">
                                        <li>• 2 hours (90km) via Matara</li>
                                        <li>• Coastal route with scenic views</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-1 text-foreground">Bus Option</h4>
                                    <ul className="text-sm text-muted-foreground space-y-0.5">
                                        <li>• Take Colombo-Hambantota bus</li>
                                        <li>• Get off at Ridiyagama junction</li>
                                        <li>• Then tuk-tuk to park entrance</li>
                                    </ul>
                                </div>

                                <div className="mt-3 p-2 bg-orange-100 dark:bg-slate-700 rounded border-l-4 border-orange-500 dark:border-orange-400">
                                    <p className="text-xs text-orange-800 dark:text-orange-200">
                                        <strong>🌟 Tip:</strong> Visit in early morning (8:30-10 AM) or late afternoon (3-5 PM) when animals are most active.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </div>

                {/* Safari Zones */}
                <section className="mb-12 scroll-mt-40" id="safari-zones">
                    <h2 className="text-3xl font-bold mb-6">Safari Zones</h2>
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>1. Elephant Zone</CardTitle>
                                <CardDescription>Meet the gentle giants in their spacious habitat</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    This is the biggest and most popular zone in the park. Here you&apos;ll see elephants walking freely in a large grassy area with trees and water pools. Most of these elephants are orphans who were rescued when they were babies. Watch them play, bathe, and eat together like a real family. The elephants are used to seeing vehicles, so they often come very close. You can take amazing photos from inside your vehicle.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-semibold mb-2">What You&apos;ll See:</h4>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            <li>• Elephant herds with babies</li>
                                            <li>• Elephants bathing in water holes</li>
                                            <li>• Social interactions between elephants</li>
                                            <li>• Feeding time demonstrations</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Best Time:</h4>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            <li>• Morning: 8:30-10:00 AM</li>
                                            <li>• Evening: 3:00-5:00 PM</li>
                                            <li>• Cooler weather = more activity</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>2. Deer Park Zone</CardTitle>
                                <CardDescription>Graceful spotted deer and sambur roaming free</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    This zone has open grasslands where spotted deer and sambur deer live. These beautiful animals are not scared of vehicles and often graze near the roads. You might see males with big antlers, mothers with baby deer, and large groups moving together. This area looks like the dry zone forests of Sri Lanka where these deer naturally live.
                                </p>
                                <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                                    <p className="text-sm text-green-800 dark:text-green-200">
                                        <strong>Photography Tip:</strong> Deer are most active during early morning and late afternoon. The soft golden light during these times makes for stunning photos.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>3. Crocodile Zone</CardTitle>
                                <CardDescription>See Sri Lankan crocodiles in their wetland home</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    This zone has ponds and marshy areas where crocodiles live. You&apos;ll see them sunbathing on the banks or swimming in the water. These are rescued crocodiles that were caught in villages or found in dangerous places. The zone is designed to look like natural wetlands with plenty of water and hiding spots for the crocodiles.
                                </p>
                                <div className="mt-4 p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border-l-4 border-red-500">
                                    <p className="text-sm text-red-800 dark:text-red-200">
                                        <strong>⚠️ Safety Note:</strong> Always stay inside your vehicle. Never attempt to feed or approach any animals, especially in this zone.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>4. Bird Sanctuary Zone</CardTitle>
                                <CardDescription>Paradise for bird watchers and nature lovers</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    This peaceful zone has many trees, small ponds, and bushes where birds live. You&apos;ll see peacocks showing off their beautiful tail feathers, colorful parrots, water birds, and many other species. The early morning is the best time to hear birds singing and see them flying around. Bring binoculars if you have them!
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-semibold mb-2">Common Birds:</h4>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            <li>• Peacocks (national bird)</li>
                                            <li>• Painted storks</li>
                                            <li>• Egrets and herons</li>
                                            <li>• Parakeets</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">What to Bring:</h4>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            <li>• Binoculars for better viewing</li>
                                            <li>• Camera with zoom lens</li>
                                            <li>• Bird identification guide</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Wildlife Section */}
                <section className="mb-12 scroll-mt-40" id="wildlife">
                    <h2 className="text-3xl font-bold mb-6">Animals You Can See</h2>
                    <Card>
                        <CardContent className="pt-6">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span className="text-2xl">🐘</span>
                                        Elephants
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        The park has around 40 elephants, including babies and adults. These gentle giants were rescued from different parts of Sri Lanka. Watch them interact, play, and take care of their young ones.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span className="text-2xl">🦌</span>
                                        Spotted Deer
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Beautiful spotted deer with white spots on their brown coats. Males have impressive antlers. These are the same type of deer you find in Sri Lankan national parks like Yala and Wilpattu.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span className="text-2xl">🐊</span>
                                        Crocodiles
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Sri Lankan crocodiles that can grow up to 5 meters long. Most were caught in villages where they posed danger to people. Now they live safely in protected water areas.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span className="text-2xl">🦚</span>
                                        Peacocks
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Sri Lanka&apos;s national bird with stunning blue and green tail feathers. During mating season, males spread their tail feathers in a spectacular display to attract females.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span className="text-2xl">🦌</span>
                                        Sambur Deer
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Larger than spotted deer, sambur are dark brown with thick coats. They are Sri Lanka&apos;s biggest deer species and have powerful bodies and long antlers.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span className="text-2xl">🦜</span>
                                        Various Birds
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Over 50 bird species including storks, herons, kingfishers, parakeets, and owls. Some are native to Sri Lanka while others are migratory birds visiting seasonally.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Visitor Tips */}
                <section className="mb-12 scroll-mt-40" id="tips">
                    <h2 className="text-3xl font-bold mb-6">Visitor Tips & Important Information</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-green-700 dark:text-green-300">What to Bring</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-0.5">✓</span>
                                        <span><strong>Camera with zoom lens</strong> - Animals may be far away sometimes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-0.5">✓</span>
                                        <span><strong>Binoculars</strong> - Great for bird watching</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-0.5">✓</span>
                                        <span><strong>Water bottles</strong> - It gets hot, stay hydrated</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-0.5">✓</span>
                                        <span><strong>Sunscreen and hat</strong> - Protection from strong sun</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-0.5">✓</span>
                                        <span><strong>Snacks</strong> - Limited food options inside park</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-0.5">✓</span>
                                        <span><strong>Light colored clothes</strong> - Cooler in hot weather</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-red-700 dark:text-red-300">Important Rules</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                        <span><strong>Stay in your vehicle</strong> - Never get out during safari</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                        <span><strong>Don&apos;t feed animals</strong> - It&apos;s dangerous and unhealthy for them</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                        <span><strong>Keep noise down</strong> - Loud sounds scare animals away</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                        <span><strong>No littering</strong> - Keep the park clean for animals</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                        <span><strong>Follow guide&apos;s instructions</strong> - They know animal behavior</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                        <span><strong>No flash photography</strong> - Bright lights disturb wildlife</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-blue-700 dark:text-blue-300">Best Times to Visit</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div>
                                        <h4 className="font-semibold mb-1">Early Morning (8:30-10:00 AM)</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Animals are most active when it&apos;s cool. Best time for photography with soft morning light.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Late Afternoon (3:00-5:00 PM)</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Second best time. Animals come out after the hot midday. Beautiful golden hour light for photos.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Avoid Midday (11:00 AM-2:00 PM)</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Very hot and most animals rest in shade. Difficult to spot wildlife.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-purple-700 dark:text-purple-300">Ticket Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div>
                                        <h4 className="font-semibold mb-1">Entrance Fees (approximate)</h4>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Adults: LKR 500-800</li>
                                            <li>• Children: LKR 250-400</li>
                                            <li>• Foreigners: Higher rates apply</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Vehicle Safari</h4>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Park provides safari jeeps</li>
                                            <li>• Cost: LKR 2000-3000 per vehicle</li>
                                            <li>• Private vehicles allowed with guide</li>
                                        </ul>
                                    </div>
                                    <p className="text-xs text-muted-foreground italic">
                                        Note: Prices may change. Check official website or call before visiting.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* What Else Nearby */}
                <section className="mb-12 scroll-mt-40" id="nearby">
                    <h2 className="text-3xl font-bold mb-6">What Else to See Nearby</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Bundala National Park</CardTitle>
                                <CardDescription>30 minutes away</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Famous bird sanctuary with thousands of migratory birds, especially flamingos. Also home to elephants, crocodiles, and wild buffaloes. Best for serious wildlife photographers and bird watchers.
                                </p>
                                <Link href="/destinations/bundala-national-park">
                                    <Button variant="outline" size="sm">
                                        Learn More <ChevronRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Hambantota Port & Town</CardTitle>
                                <CardDescription>15 minutes away</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Modern deep-sea port and developing city. Good for seafood restaurants, shopping, and accommodation. The town has grown a lot in recent years with new hotels and facilities.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Tangalle Beach</CardTitle>
                                <CardDescription>40 minutes away</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Beautiful peaceful beaches perfect for swimming and relaxation. Less crowded than other southern beaches. Great place to unwind after your safari. Many budget guesthouses and restaurants available.
                                </p>
                                <Link href="/destinations/tangalle">
                                    <Button variant="outline" size="sm">
                                        Learn More <ChevronRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Ussangoda National Park</CardTitle>
                                <CardDescription>50 minutes away</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Unique red soil plateau with strange rock formations. According to legend, this is where King Ravana&apos;s aircraft landed. Amazing sunset views and unusual landscape unlike anywhere else in Sri Lanka.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Final Tips */}
                <section className="mb-12">
                    <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30">
                        <CardHeader>
                            <CardTitle className="text-green-800 dark:text-green-200">
                                Make the Most of Your Visit
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3 text-sm text-green-900 dark:text-green-100">
                                <p>
                                    <strong>Plan for 2-3 hours:</strong> The safari route takes you through all zones. Don&apos;t rush - enjoy watching the animals and taking photos.
                                </p>
                                <p>
                                    <strong>Combine with other attractions:</strong> Make it a full day by visiting Bundala National Park or relaxing at Tangalle Beach afterward.
                                </p>
                                <p>
                                    <strong>Respect the animals:</strong> Remember, this is their home. We are just visitors. Keep quiet, stay in vehicles, and let them live peacefully.
                                </p>
                                <p>
                                    <strong>Support conservation:</strong> Your entrance fee helps care for rescued animals and maintain this beautiful park. You&apos;re helping protect Sri Lankan wildlife!
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Related Links */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">More Wildlife Adventures</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Link href="/destinations/yala-national-park" className="block">
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-lg">Yala National Park</CardTitle>
                                    <CardDescription>Best place for leopard spotting</CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>
                        <Link href="/destinations/udawalawe-national-park" className="block">
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-lg">Udawalawe National Park</CardTitle>
                                    <CardDescription>Large elephant herds guaranteed</CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>
                        <Link href="/articles/wild-safari-parks-in-srilanka" className="block">
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-lg">All Safari Parks Guide</CardTitle>
                                    <CardDescription>Complete wildlife park comparison</CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    )
}
