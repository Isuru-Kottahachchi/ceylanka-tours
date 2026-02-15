"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Mountain, Camera, TreePine, ChevronRight, Sunrise } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import InsuranceBanner from "@/components/insurance-banner"

export default function HawagalaGuide() {

    return (
        <main className="min-h-screen bg-background">

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/hawagala-rock.jpg"
                    alt="Hawagala rock formation with stunning panoramic views of misty mountain ranges and lush greenery in Balangoda, Sri Lanka"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Hawagala</h1>
                    <p className="text-xl md:text-2xl mb-6 font-light">Balangoda&apos;s Hidden Mountain Wonder</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-purple-600/80 text-white border-purple-500">
                            <MapPin className="w-4 h-4 mr-1" />
                            Sabaragamuwa Province, Central Highlands
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
                            <Mountain className="w-4 h-4 mr-1" />
                            Mountain Peak
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-orange-600/80 text-white border-orange-500">
                            <Sunrise className="w-4 h-4 mr-1" />
                            Sunrise & Sunset Views
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Section Navigation Bar */}
            <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
                    <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
                    <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Quick Facts</a>
                    <a href="#how-to-get" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">How to Get There</a>
                    <a href="#top-attractions" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Top Attractions</a>
                    <a href="#hiking-guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Hiking Guide</a>
                    <a href="#nearby" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">What Else Nearby</a>
                </div>
            </nav>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Introduction */}
                <section className="mb-12 scroll-mt-40" id="introduction">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">
                        Discover Hawagala: Balangoda&apos;s Majestic Mountain Peak
                    </h2>
                    <div className="grid md:grid-cols-[1fr_140px] gap-6 items-start">
                        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                            <p className="text-lg mb-4">
                                Hawagala, also known as Hawa Gala or Hawa Ella, stands as one of the most spectacular but lesser-known mountain peaks in Sri Lanka&apos;s central highlands. Located near Balangoda in the Sabaragamuwa Province, this stunning rock formation rises dramatically above the surrounding landscape, offering breathtaking panoramic views that rival some of the island&apos;s more famous peaks.
                            </p>
                            <p className="text-lg">
                                What makes Hawagala truly special is its unique rock formation and the relatively untouched natural environment that surrounds it. Unlike the crowded tourist spots, Hawagala remains a peaceful retreat where you can experience Sri Lanka&apos;s mountain beauty in tranquility. The hike to the summit is challenging but rewarding, taking you through lush forests, rocky outcrops, and offering spectacular views of multiple mountain ranges that stretch as far as the eye can see.
                            </p>
                        </div>

                        {/* Small Sri Lanka Map with Hawagala Location */}
                        <div className="flex flex-col items-center flex-shrink-0">
                            <div className="relative w-[200px] md:w-[180px] lg:w-[200px] bg-blue-50 dark:bg-blue-950/30 rounded-lg p-2 border border-blue-200 dark:border-blue-800">
                                <Image src="/sri-lanka-map.png" alt="Map of Sri Lanka showing Hawagala location in Sabaragamuwa Province near Balangoda" width={200} height={200} className="rounded-lg w-full h-auto" />

                                <div className="text-center mt-1">
                                    <div className="flex items-center justify-center gap-1 text-red-600 dark:text-red-400 font-bold text-[10px]">
                                        <MapPin className="w-3 h-3" />
                                        <span>You are here</span>
                                    </div>
                                    <p className="text-[9px] text-muted-foreground">Central Highlands</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                        <div className="my-8 p-4 rounded-lg bg-yellow-100 dark:bg-yellow-900/60 border-l-4 border-yellow-400 dark:border-yellow-500">
                            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Did you know?</h4>
                            <p className="text-gray-800 dark:text-yellow-100">
                                The name &quot;Hawagala&quot; literally translates to &quot;Air Rock&quot; or &quot;Sky Rock&quot; in Sinhala, referring to how the peak seems to touch the clouds on misty mornings. Local legends say that ancient travelers used this prominent peak as a navigation landmark when crossing the central highlands. The rock formation is estimated to be millions of years old, shaped by geological forces and weathering over countless centuries.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Quick Facts & How to Get There side by side */}
                <div className="flex flex-col lg:flex-row gap-8 mb-12">
                    {/* Hawagala Essential Facts (left) */}
                    <section className="flex-1 scroll-mt-40" id="quick-facts">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500" />
                                    Hawagala Quick Facts
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-blue-500" />
                                            <span>
                                                <strong>Location:</strong> Near Balangoda town
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Mountain className="w-4 h-4 text-green-500" />
                                            <span>
                                                <strong>Elevation:</strong> Approximately 1,100m (3,609 ft)
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-orange-500" />
                                            <span>
                                                <strong>Hiking time:</strong> 2-3 hours round trip
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <TreePine className="w-4 h-4 text-green-600" />
                                            <span>
                                                <strong>Best for:</strong> Hiking, photography, sunrise
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Sunrise className="w-4 h-4 text-yellow-500" />
                                            <span>
                                                <strong>Difficulty:</strong> Moderate to challenging
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Camera className="w-4 h-4 text-purple-500" />
                                            <span>
                                                <strong>Best time:</strong> November–March (dry season)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <InsuranceBanner />
                    </section>

                    {/* How to Get to Hawagala (right, condensed) */}
                    <section className="flex-1 scroll-mt-40" id="how-to-get">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                                    <MapPin className="w-5 h-5 text-blue-500" />
                                    How to Get to Hawagala
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div>
                                    <h4 className="font-semibold mb-1 text-foreground">From Colombo (Recommended Route)</h4>
                                    <ul className="text-sm text-muted-foreground space-y-0.5">
                                        <li>• Take the Colombo-Ratnapura-Balangoda route</li>
                                        <li>• Distance: ~140km (87 miles)</li>
                                        <li>• Duration: 3-4 hours by car</li>
                                        <li>• Follow A4 highway through Ratnapura</li>
                                    </ul>
                                </div>

                                {/* Full Width Ceylanka Tours Recommendation */}
                                <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 shadow-md">
                                    <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                                        <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylanka Tours</span> offers reliable transportation to Hawagala with experienced drivers who know the mountain routes well. Professional service, comfortable vehicles, and excellent local knowledge make your journey safe and enjoyable.
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
                                            <span>🏔️</span>
                                            <Link href="/tours" className="underline hover:text-orange-700 dark:hover:text-orange-300 focus:text-orange-700 dark:focus:text-orange-300">
                                                <strong>Mountain Tours</strong> - Click for details & booking
                                            </Link>
                                        </div>
                                        <div className="flex items-center gap-2 py-1.5 px-2 bg-white/50 dark:bg-slate-600/50 rounded hover:bg-white/70 dark:hover:bg-slate-600/70 transition-colors">
                                            <span>✈️</span>
                                            <Link href="/contact-us" className="underline hover:text-orange-700 dark:hover:text-orange-300 focus:text-orange-700 dark:focus:text-orange-300">
                                                <strong>Custom Trip Planning</strong> - Contact us
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-1 text-foreground">From Nearby Towns</h4>
                                    <ul className="text-sm text-muted-foreground space-y-0.5">
                                        <li>• <strong>Balangoda:</strong> 15km, 30 minutes</li>
                                        <li>• <strong>Ratnapura:</strong> 45km, 1 hour</li>
                                        <li>• <strong>Nuwara Eliya:</strong> 80km, 2.5 hours</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-1 text-foreground">Public Transport</h4>
                                    <ul className="text-sm text-muted-foreground space-y-0.5">
                                        <li>• Bus to Balangoda from Colombo (3-4 hours)</li>
                                        <li>• Three-wheeler from Balangoda to trailhead</li>
                                        <li>• Cost: ~$2-5 USD for local transport</li>
                                    </ul>
                                </div>

                                <div className="mt-3 p-2 bg-orange-100 dark:bg-slate-700 rounded border-l-4 border-orange-500 dark:border-orange-400">
                                    <p className="text-xs text-orange-800 dark:text-orange-200">
                                        <strong>🌟 Tip:</strong> Start your journey early morning to reach the summit for sunrise. The mountain roads can be challenging, so hiring an experienced driver is recommended.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </div>

                {/* Hiking Guide Section */}
                <section className="mb-12 scroll-mt-40" id="hiking-guide">
                    <Card className="border-green-200 dark:border-gray-700 bg-green-50 dark:bg-slate-800">
                        <CardHeader>
                            <CardTitle className="text-green-800 dark:text-green-300 flex items-center gap-2">
                                <Mountain className="w-5 h-5" />
                                Hiking Guide for Hawagala
                            </CardTitle>
                            <CardDescription className="text-green-700 dark:text-green-300">
                                Essential information for a safe and enjoyable hike
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <p className="text-gray-700 dark:text-gray-300">
                                    The hike to Hawagala summit is moderately challenging and suitable for people with reasonable fitness levels. The trail takes you through diverse terrain including forest paths, rocky sections, and steep climbs near the summit.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200">Trail Information:</h4>
                                        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                            <li>• <strong>Distance:</strong> Approximately 3-4 km round trip</li>
                                            <li>• <strong>Duration:</strong> 2-3 hours total (1-1.5 hours up, 1-1.5 hours down)</li>
                                            <li>• <strong>Difficulty:</strong> Moderate to challenging</li>
                                            <li>• <strong>Terrain:</strong> Forest paths, rocky sections, steep climbs</li>
                                            <li>• <strong>Best time to start:</strong> 4:30-5:00 AM for sunrise, or 3:00 PM for sunset</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200">What to Bring:</h4>
                                        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                            <li>• Sturdy hiking shoes with good grip</li>
                                            <li>• At least 2 liters of water per person</li>
                                            <li>• Flashlight or headlamp for early morning/evening hikes</li>
                                            <li>• Light snacks and energy bars</li>
                                            <li>• Sun protection (hat, sunscreen, sunglasses)</li>
                                            <li>• First aid kit and insect repellent</li>
                                            <li>• Camera for spectacular views</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-blue-100 dark:bg-slate-700 rounded-lg border border-blue-200 dark:border-gray-600">
                                    <h4 className="font-semibold mb-3 text-blue-800 dark:text-blue-200 flex items-center gap-2">
                                        <Star className="w-4 h-4" />
                                        Safety Tips for Mountain Hiking
                                    </h4>
                                    <ul className="text-blue-700 dark:text-blue-300 space-y-2 text-sm">
                                        <li>• Never hike alone - always go with a companion or guide</li>
                                        <li>• Check weather conditions before starting your hike</li>
                                        <li>• Inform someone about your hiking plans and expected return time</li>
                                        <li>• Stay on marked trails and don&apos;t take shortcuts</li>
                                        <li>• Be cautious on wet rocks and during rainy conditions</li>
                                        <li>• Turn back if weather conditions deteriorate</li>
                                        <li>• Respect nature - take only photos, leave only footprints</li>
                                    </ul>
                                </div>

                                <div className="mt-4 p-4 bg-amber-50 dark:bg-slate-700 rounded-lg border border-amber-200 dark:border-gray-600">
                                    <h4 className="font-semibold mb-3 text-amber-800 dark:text-amber-200">Local Guide Services:</h4>
                                    <p className="text-amber-700 dark:text-amber-300 text-sm">
                                        While the trail is relatively straightforward, hiring a local guide is highly recommended, especially for first-time visitors. Guides know the best routes, can point out interesting flora and fauna, ensure your safety, and provide fascinating insights into the local area. Local guides can be arranged through guesthouses in Balangoda or by contacting Ceylanka Tours.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Top Attractions */}
                <section className="mb-12 scroll-mt-40" id="top-attractions">
                    <h2 className="text-3xl font-bold mb-6">What to Experience at Hawagala</h2>
                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>1. Summit Views & Panoramic Vistas</CardTitle>
                                <CardDescription>360-degree views of Sri Lanka&apos;s mountain ranges</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <div className="space-y-4">
                                        <p className="text-muted-foreground">
                                            The summit of Hawagala offers one of the most spectacular panoramic views in Sri Lanka&apos;s central highlands. On clear days, you can see multiple mountain ranges extending in all directions, including views of Adam&apos;s Peak (Sri Pada) to the west, the Horton Plains to the east, and the Sinharaja Forest Reserve to the south.
                                        </p>
                                        <p className="text-muted-foreground">
                                            The viewing experience changes dramatically depending on the time of day. Sunrise brings a magical display as the sun illuminates the misty valleys below, while sunset paints the sky and mountains in brilliant shades of orange, pink, and purple.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Views of Adam&apos;s Peak and surrounding ranges
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Spectacular sunrise and sunset opportunities
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Sea of clouds phenomenon on misty mornings
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Perfect spot for landscape photography
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
                                        <p className="text-sm text-muted-foreground">Image: Panoramic view from Hawagala summit</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>2. Unique Rock Formations</CardTitle>
                                <CardDescription>Ancient geological wonders shaped over millions of years</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
                                        <p className="text-sm text-muted-foreground">Image: Dramatic rock formations at Hawagala</p>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-muted-foreground">
                                            Hawagala features impressive rock formations that have been shaped by millions of years of weathering and geological processes. The main peak consists of a massive granite outcrop that rises dramatically from the surrounding landscape, creating natural platforms and viewing points.
                                        </p>
                                        <p className="text-muted-foreground">
                                            The rock surfaces display fascinating patterns and textures created by erosion, with some sections featuring smooth, rounded surfaces while others show dramatic fractures and layers. These formations provide excellent subjects for photography and offer insights into the geological history of Sri Lanka&apos;s central highlands.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Ancient granite formations millions of years old
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Natural viewing platforms and photo spots
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Fascinating erosion patterns and textures
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>3. Rich Biodiversity & Nature</CardTitle>
                                <CardDescription>Diverse flora and fauna along the hiking trail</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <div className="space-y-4">
                                        <p className="text-muted-foreground">
                                            The trail to Hawagala passes through various ecological zones, each supporting different types of plant and animal life. The lower sections feature lush forest vegetation with towering trees, ferns, and flowering plants, while higher elevations showcase adapted mountain species.
                                        </p>
                                        <p className="text-muted-foreground">
                                            Birdwatchers will find the area particularly rewarding, with opportunities to spot various endemic and migratory bird species. Early morning hikes often reveal wildlife activity, and the surrounding forests are home to deer, wild boar, and various small mammals.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Endemic bird species and migratory visitors
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Diverse forest vegetation and medicinal plants
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Butterflies, insects, and small mammals
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Changing ecosystems from base to summit
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
                                        <p className="text-sm text-muted-foreground">Image: Forest trail biodiversity</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>4. Photography Paradise</CardTitle>
                                <CardDescription>Capture stunning landscapes and natural beauty</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
                                        <p className="text-sm text-muted-foreground">Image: Photography opportunities at sunrise</p>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-muted-foreground">
                                            Hawagala is a photographer&apos;s dream destination, offering endless opportunities for capturing stunning landscapes, dramatic skies, and unique perspectives. The ever-changing light conditions throughout the day create different moods and atmospheres perfect for photography.
                                        </p>
                                        <p className="text-muted-foreground">
                                            The summit provides 360-degree views that allow for panoramic shots, while the interesting rock formations create excellent foreground subjects. The mist that often envelops the lower valleys adds a mystical quality to photographs, especially during sunrise.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Golden hour photography at sunrise and sunset
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Landscape and panoramic composition opportunities
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Misty valley scenes and cloud formations
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Star photography opportunities (clear nights)
                                            </li>
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
                                <Clock className="w-5 h-5 text-orange-500" />
                                Best Time to Visit Hawagala
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">Peak Season (November - March)</h4>
                                        <p className="text-muted-foreground text-sm mb-2">
                                            The dry season offers the best hiking conditions with clear skies and excellent visibility. This is the ideal time for summit views and photography.
                                        </p>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            <li>• Clear weather and minimal rain</li>
                                            <li>• Best visibility for photography</li>
                                            <li>• Comfortable temperatures (15-25°C)</li>
                                            <li>• Safer hiking conditions</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Off-Season (April - October)</h4>
                                        <p className="text-muted-foreground text-sm mb-2">
                                            The wet season brings occasional rain and mist, but also lush green landscapes and fewer visitors. Early morning hikes can still be rewarding.
                                        </p>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            <li>• Lush, green vegetation</li>
                                            <li>• Fewer crowds on the trail</li>
                                            <li>• Dramatic cloud formations</li>
                                            <li>• Need to check weather before hiking</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-4 p-4 bg-blue-50 dark:bg-slate-700 rounded-lg border border-blue-200 dark:border-gray-600">
                                    <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Time of Day Recommendations:</h4>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-blue-700 dark:text-blue-300">
                                                <strong>Sunrise (Recommended):</strong> Start hiking at 4:30-5:00 AM to reach the summit by sunrise around 6:00-6:30 AM. The morning views are typically clearer, and you&apos;ll avoid afternoon heat.
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-blue-700 dark:text-blue-300">
                                                <strong>Sunset:</strong> Begin your hike around 3:00-3:30 PM to reach the summit with time to enjoy the sunset. Bring a good flashlight for the descent in darkness.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* What Else Nearby */}
                <section className="mb-12 scroll-mt-40" id="nearby">
                    <h2 className="text-3xl font-bold mb-6">What Else to Explore Nearby</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Balangoda Town</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm mb-3">
                                    The nearby town of Balangoda serves as a base for exploring Hawagala and is famous for being the discovery site of Balangoda Man, one of the earliest human inhabitants of Sri Lanka. The town offers basic amenities, guesthouses, and restaurants.
                                </p>
                                <Link href="/destinations/balangoda" className="text-blue-600 hover:underline text-sm flex items-center gap-1">
                                    Learn more about Balangoda
                                    <ChevronRight className="w-4 h-4" />
                                </Link>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Samanalawewa Reservoir</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm mb-3">
                                    A massive hydroelectric reservoir located about 20km from Hawagala, offering beautiful water views surrounded by mountains. It&apos;s a peaceful spot for relaxation and photography, especially during sunset.
                                </p>
                                <p className="text-sm text-muted-foreground">Distance: ~20km, 30-40 minutes by vehicle</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Bogoda Wooden Bridge</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm mb-3">
                                    One of the oldest wooden bridges in Sri Lanka, dating back to the 16th century. This historic covered bridge features traditional architecture and is located near Badulla, accessible as a day trip from the Hawagala area.
                                </p>
                                <p className="text-sm text-muted-foreground">Distance: ~60km, 1.5-2 hours</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Belihul Oya</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm mb-3">
                                    A scenic mountain town known for its cool climate, waterfalls, and hiking trails. Popular activities include white-water rafting, waterfall visits, and nature walks. It&apos;s an excellent addition to a highland itinerary.
                                </p>
                                <p className="text-sm text-muted-foreground">Distance: ~35km, 1 hour</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Accommodation & Practical Information */}
                <section className="mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Accommodation & Practical Information</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-semibold mb-2">Where to Stay:</h4>
                                    <p className="text-muted-foreground text-sm mb-2">
                                        While there are no accommodations directly at Hawagala, the nearby town of Balangoda offers several options:
                                    </p>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                        <li>• Budget guesthouses in Balangoda town ($10-20 per night)</li>
                                        <li>• Mid-range hotels with basic amenities ($25-40 per night)</li>
                                        <li>• Homestays offering authentic local experiences</li>
                                        <li>• For luxury options, consider staying in nearby areas like Belihul Oya or even Nuwara Eliya and making a day trip</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-2">Entry Fees & Permits:</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Currently, there are no official entry fees to hike Hawagala. However, if you hire a local guide (recommended), expect to pay around 1,500-3,000 LKR ($5-10 USD) depending on group size and services.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-2">Facilities:</h4>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                        <li>• No facilities at the trailhead or summit</li>
                                        <li>• Bring all necessary supplies from Balangoda</li>
                                        <li>• No mobile signal in some areas - inform someone of your plans</li>
                                        <li>• Nearest medical facilities in Balangoda town</li>
                                    </ul>
                                </div>

                                <div className="p-4 bg-amber-50 dark:bg-slate-700 rounded-lg border border-amber-200 dark:border-gray-600">
                                    <h4 className="font-semibold mb-2 text-amber-800 dark:text-amber-200">Important Reminders:</h4>
                                    <ul className="space-y-1 text-sm text-amber-700 dark:text-amber-300">
                                        <li>• Always respect nature and local communities</li>
                                        <li>• Carry all trash back with you - keep the mountain pristine</li>
                                        <li>• Do not light fires or damage vegetation</li>
                                        <li>• Ask permission before photographing local people</li>
                                        <li>• Be prepared for changing weather conditions</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Why Visit Hawagala */}
                <section className="mb-12">
                    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700">
                        <CardHeader>
                            <CardTitle className="text-2xl">Why Visit Hawagala?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3 text-muted-foreground">
                                <p>
                                    Hawagala represents the perfect blend of adventure, natural beauty, and tranquility that makes Sri Lanka&apos;s highland destinations so special. Unlike the more crowded tourist peaks, Hawagala offers an authentic mountain experience where you can connect with nature in relative solitude.
                                </p>
                                <p>
                                    Whether you&apos;re an experienced hiker seeking new challenges, a photography enthusiast chasing that perfect shot, or simply someone who appreciates dramatic landscapes and peaceful mountain environments, Hawagala delivers an unforgettable experience.
                                </p>
                                <p>
                                    The combination of accessible yet rewarding hiking, spectacular panoramic views, rich biodiversity, and the sense of accomplishment upon reaching the summit makes Hawagala a must-visit destination for anyone exploring Sri Lanka&apos;s central highlands.
                                </p>
                                <div className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-600">
                                    <p className="text-center font-semibold text-lg text-foreground">
                                        Ready to embark on your Hawagala adventure? Contact Ceylanka Tours to plan your perfect mountain experience!
                                    </p>
                                    <div className="flex justify-center gap-4 mt-4">
                                        <Link href="https://wa.me/94707646765" target="_blank" rel="noopener noreferrer">
                                            <Button className="bg-green-600 hover:bg-green-700 text-white cursor-pointer">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                                </svg>
                                                WhatsApp Us
                                            </Button>
                                        </Link>
                                        <Link href="/contact-us">
                                            <Button variant="outline" className="cursor-pointer">
                                                Contact Us
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </main>
    )
}
