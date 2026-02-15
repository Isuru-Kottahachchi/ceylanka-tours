"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, CheckCircle, Shield, CreditCard, Calendar, MapPin, ArrowLeft, Waves, AlertTriangle } from "lucide-react"
import { useState } from "react"

export default function KithulgalaRaftingTour() {
    const [activeTab, setActiveTab] = useState("overview")

    const galleryImages = [
        {
            src: "/Kithulgala-waterrafting.jpg",
            alt: "White water rafting in Kelani River Kithulgala",
            caption: "Thrilling Rapids"
        },
        {
            src: "/Kithulgala-waterrafting1.jpg",
            alt: "Rafting team navigating rapids",
            caption: "Team Adventure"
        },
        {
            src: "/Water-Rafting-Kithulgala.jpg",
            alt: "Kelani River scenic views",
            caption: "River Views"
        },
        {
            src: "/kithulgala-adventure.jpg",
            alt: "Adventure activities in Kithulgala",
            caption: "Adventure Sports"
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-slate-900 dark:to-slate-800">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 px-4">
                <div className="container mx-auto max-w-7xl">
                    <Link href="/destinations/kithulgala" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-2">
                        <ArrowLeft className="w-4 h-4" />Back to Kithulgala
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Kithulgala White Water Rafting</h1>
                    <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1"><Users className="w-4 h-4" /> Ages 10+</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Duration: 5-6 Hours</span>
                        <span className="flex items-center gap-1"><Waves className="w-4 h-4" /> Grade 2-3 Rapids</span>
                    </div>
                </div>
            </div>

            {/* Image Gallery */}
            <section className="container mx-auto max-w-7xl px-4 py-8">
                <div className="grid md:grid-cols-[2fr_1fr] gap-4">
                    {/* Main Image */}
                    <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden group">
                        <Image
                            src={galleryImages[0].src}
                            alt={galleryImages[0].alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            priority
                        />
                        <button className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-800/90 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                            <span className="text-sm font-medium">📸 Gallery</span>
                        </button>
                    </div>

                    {/* Thumbnail Grid */}
                    <div className="grid grid-rows-2 gap-4">
                        {galleryImages.slice(1, 3).map((image, idx) => (
                            <div key={idx} className="relative h-[190px] md:h-[240px] rounded-xl overflow-hidden group cursor-pointer">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto max-w-7xl px-4 py-8">
                <div className="grid lg:grid-cols-[1fr_400px] gap-8">
                    {/* Left Column - Tour Information */}
                    <div>
                        {/* Tab Navigation */}
                        <div className="flex gap-6 border-b border-gray-200 dark:border-gray-700 mb-6">
                            <button
                                onClick={() => setActiveTab("overview")}
                                className={`pb-3 px-1 font-semibold cursor-pointer text-lg border-b-2 transition-colors ${activeTab === "overview"
                                        ? "border-emerald-600 text-emerald-600"
                                        : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                                    }`}
                            >
                                Overview
                            </button>
                            <button
                                onClick={() => setActiveTab("details")}
                                className={`pb-3 px-1 font-semibold cursor-pointer text-lg border-b-2 transition-colors ${activeTab === "details"
                                        ? "border-emerald-600 text-emerald-600"
                                        : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                                    }`}
                            >
                                Details
                            </button>
                            <button
                                onClick={() => setActiveTab("itinerary")}
                                className={`pb-3 px-1 font-semibold cursor-pointer text-lg border-b-2 transition-colors ${activeTab === "itinerary"
                                        ? "border-emerald-600 text-emerald-600"
                                        : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                                    }`}
                            >
                                Itinerary
                            </button>
                            <button
                                onClick={() => setActiveTab("help")}
                                className={`pb-3 px-1 font-semibold cursor-pointer text-lg border-b-2 transition-colors ${activeTab === "help"
                                        ? "border-emerald-600 text-emerald-600"
                                        : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                                    }`}
                            >
                                Help
                            </button>
                        </div>

                        {/* Tab Content */}
                        {activeTab === "overview" && (
                            <div className="space-y-6">
                                <section>
                                    <h2 className="text-2xl font-bold mb-4">About</h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        Experience the ultimate adrenaline rush with the <strong>Kithulgala White Water Rafting Adventure</strong>.
                                        Navigate through exciting <strong>Grade 2-3 rapids</strong> on the scenic Kelani River, surrounded by lush rainforest
                                        landscapes. Perfect for both beginners and experienced rafters, with professional guides and top safety equipment
                                        provided by Ceylanka Tours.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-4 my-6">
                                        <div className="flex items-start gap-3 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                                            <CreditCard className="w-5 h-5 text-emerald-600 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-sm">Visa / MasterCard accepted • Secure payment link • Instant confirmation</p>
                                                <p className="text-xs text-muted-foreground mt-1">Pay safely online and get your booking confirmed immediately.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                            <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-sm">Reserve now & pay later</p>
                                                <p className="text-xs text-muted-foreground mt-1">Secure your spot while staying flexible.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-r-lg">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded font-semibold">Highlight</span>
                                        </div>
                                        <p className="text-sm text-orange-900 dark:text-orange-200">
                                            <strong>5 Major Rapids Challenge</strong> – Navigate through thrilling rapids including Killer Falls, Butter Crunch,
                                            and Virgin&apos;s Breast on a 7 km adventure down the Kelani River.
                                        </p>
                                    </div>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold mb-4">Tour Inclusions</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Private air-conditioned vehicle with driver from Colombo/Kandy area</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Hotel pickup & drop-off</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Professional white water rafting guides (certified)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">All safety equipment (life jackets, helmets, paddles)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Rafting insurance coverage</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Welcome drink and refreshments</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Changing rooms and shower facilities</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Lunch at local restaurant (optional add-on)</span>
                                        </li>
                                    </ul>
                                </section>

                                <section className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <Waves className="w-6 h-6 text-emerald-600" />
                                        What Makes This Adventure Special
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">🌊 5 Exciting Rapids</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Challenge yourself with Killer Falls, Butter Crunch, Rib Cage, Head Chopper, and Virgin&apos;s Breast
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">🏞️ Rainforest Scenery</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Paddle through pristine rainforest with stunning mountain views
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">👨‍🏫 Expert Guides</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Trained and certified rafting instructors with years of experience
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">🎬 Film Location</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Famous filming location of &quot;The Bridge on the River Kwai&quot;
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        )}

                        {activeTab === "details" && (
                            <div className="space-y-6">
                                <section>
                                    <h3 className="text-xl font-bold mb-4">Pickup & Drop-off Details</h3>
                                    <div className="space-y-3 text-muted-foreground">
                                        <div>
                                            <p className="font-semibold text-foreground">Start:</p>
                                            <p>Morning pickup between 7:00 AM – 8:00 AM from Colombo area, or 8:30 AM – 9:00 AM from Kandy area.</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground">End:</p>
                                            <p>Drop-off at your hotel in the late afternoon (approximately 4:00 PM – 5:00 PM).</p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold mb-4">Safety & Requirements</h3>
                                    <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500">
                                        <div className="flex items-start gap-3 mb-3">
                                            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-2">Important Safety Information</h4>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li>• Minimum age: 10 years old</li>
                                                    <li>• Participants must know how to swim</li>
                                                    <li>• Not recommended for pregnant travelers</li>
                                                    <li>• Not suitable for people with back/heart problems</li>
                                                    <li>• Maximum weight limit: 120 kg per person</li>
                                                    <li>• All participants must sign a safety waiver</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold mb-4">What to Bring</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                                ✓ Essential Items
                                            </h4>
                                            <ul className="text-sm text-muted-foreground space-y-1">
                                                <li>• Quick-dry clothes/swimwear</li>
                                                <li>• Extra set of dry clothes</li>
                                                <li>• Secure footwear (sandals with straps)</li>
                                                <li>• Waterproof phone case/bag</li>
                                                <li>• Towel</li>
                                            </ul>
                                        </div>
                                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                                ✓ Recommended Items
                                            </h4>
                                            <ul className="text-sm text-muted-foreground space-y-1">
                                                <li>• Sunscreen (waterproof)</li>
                                                <li>• Sunglasses with strap</li>
                                                <li>• Action camera (GoPro)</li>
                                                <li>• Cash for personal expenses</li>
                                                <li>• Sense of adventure!</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold mb-4">Cancellation & Refund Policy</h3>
                                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li>• Free cancellation up to 24 hours before the tour</li>
                                            <li>• Weather-dependent activity - full refund if cancelled due to unsafe conditions</li>
                                            <li>• Rescheduling available based on availability</li>
                                            <li>• Water level must be adequate for safe rafting</li>
                                        </ul>
                                    </div>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold mb-4">Rapids Overview</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 p-4 rounded-lg border-2 border-red-200 dark:border-red-800">
                                            <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">🌊 Killer Falls</h4>
                                            <p className="text-sm text-red-700 dark:text-red-300">
                                                Grade 3 - The most challenging rapid with a 3-foot drop
                                            </p>
                                        </div>
                                        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900 p-4 rounded-lg border-2 border-yellow-200 dark:border-yellow-800">
                                            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">🌊 Butter Crunch</h4>
                                            <p className="text-sm text-yellow-700 dark:text-yellow-300">
                                                Grade 2 - Technical rapid requiring precise navigation
                                            </p>
                                        </div>
                                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 p-4 rounded-lg border-2 border-orange-200 dark:border-orange-800">
                                            <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">🌊 Head Chopper</h4>
                                            <p className="text-sm text-orange-700 dark:text-orange-300">
                                                Grade 2 - Watch out for overhanging branches!
                                            </p>
                                        </div>
                                        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-4 rounded-lg border-2 border-green-200 dark:border-green-800">
                                            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">🌊 Virgin&apos;s Breast</h4>
                                            <p className="text-sm text-green-700 dark:text-green-300">
                                                Grade 2 - Named after nearby rock formations
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        )}

                        {activeTab === "itinerary" && (
                            <div className="space-y-6">
                                <section>
                                    <h3 className="text-xl font-bold mb-4">Tour Schedule</h3>
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 w-20 text-right">
                                                <span className="inline-block bg-emerald-600 text-white px-3 py-1 rounded text-sm font-semibold">
                                                    7:00 AM
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold mb-1">Hotel Pickup (Colombo Area)</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Comfortable air-conditioned vehicle picks you up from your hotel in Colombo. Scenic 90-minute drive
                                                    to Kithulgala through rubber plantations and tea estates.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 w-20 text-right">
                                                <span className="inline-block bg-emerald-600 text-white px-3 py-1 rounded text-sm font-semibold">
                                                    8:30 AM
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold mb-1">Arrival at Rafting Base</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Welcome drink served. Get equipped with life jackets, helmets, and paddles. Professional safety
                                                    briefing and paddling technique instruction by certified guides.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 w-20 text-right">
                                                <span className="inline-block bg-emerald-600 text-white px-3 py-1 rounded text-sm font-semibold">
                                                    9:30 AM
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold mb-1">White Water Rafting Adventure Begins!</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Start your 7 km rafting journey down the Kelani River. Navigate through 5 major rapids including
                                                    the famous Killer Falls (Grade 3), Butter Crunch, Rib Cage, Head Chopper, and Virgin&apos;s Breast.
                                                    Enjoy calmer sections between rapids with stunning rainforest scenery.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 w-20 text-right">
                                                <span className="inline-block bg-emerald-600 text-white px-3 py-1 rounded text-sm font-semibold">
                                                    11:30 AM
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold mb-1">Rafting Concludes - Change & Refresh</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Complete the rafting course. Hot showers and changing facilities available. Refreshments served.
                                                    Share your adventure stories with fellow rafters!
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 w-20 text-right">
                                                <span className="inline-block bg-emerald-600 text-white px-3 py-1 rounded text-sm font-semibold">
                                                    12:30 PM
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold mb-1">Lunch (Optional)</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Enjoy a delicious Sri Lankan rice and curry lunch at a local restaurant by the river.
                                                    Vegetarian and special dietary options available upon request.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 w-20 text-right">
                                                <span className="inline-block bg-emerald-600 text-white px-3 py-1 rounded text-sm font-semibold">
                                                    2:00 PM
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold mb-1">Optional Activities</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Time permitting, visit the famous Bridge on the River Kwai film location, explore nearby waterfalls,
                                                    or simply relax by the river enjoying the peaceful surroundings.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 w-20 text-right">
                                                <span className="inline-block bg-emerald-600 text-white px-3 py-1 rounded text-sm font-semibold">
                                                    3:00 PM
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold mb-1">Return Journey</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Depart Kithulgala for comfortable return journey to Colombo or Kandy. Arrive back at your hotel
                                                    by late afternoon with unforgettable memories!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border-l-4 border-emerald-600">
                                    <h4 className="font-semibold text-emerald-900 dark:text-emerald-200 mb-2">⏱️ Total Duration</h4>
                                    <p className="text-sm text-muted-foreground">
                                        The entire tour takes approximately 8-9 hours including transportation. The actual rafting experience
                                        lasts about 2-2.5 hours covering 7 kilometers of the Kelani River.
                                    </p>
                                </section>
                            </div>
                        )}

                        {activeTab === "help" && (
                            <div className="space-y-6">
                                <section>
                                    <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold mb-2">Is white water rafting safe for beginners?</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Absolutely! The Kelani River rapids are Grade 2-3, which is perfect for beginners. Our certified guides
                                                provide comprehensive safety briefings and stay with you throughout the journey. All safety equipment
                                                is provided and regularly maintained.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">Do I need to know how to swim?</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Basic swimming ability is required for safety reasons. However, you&apos;ll be wearing a life jacket
                                                throughout the rafting experience, which provides buoyancy even if you fall into the water.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">What is the best time of year for rafting?</h4>
                                            <p className="text-sm text-muted-foreground">
                                                The best season for white water rafting in Kithulgala is from May to December when the water levels
                                                are optimal. The monsoon rains (May-September) create the most exciting conditions, while October-December
                                                offers good water levels with less rain.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">How many people are in each raft?</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Each raft typically accommodates 6-8 people plus one certified guide. For private group bookings,
                                                we can arrange exclusive rafts for your party.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">Can I bring my camera or phone?</h4>
                                            <p className="text-sm text-muted-foreground">
                                                We recommend using a waterproof action camera (like GoPro) with secure mounting. Regular cameras and
                                                phones should be left in waterproof bags or with the vehicle, as they can be damaged or lost in the rapids.
                                                Photography services are available for booking.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">What happens if it rains?</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Light to moderate rain actually enhances the rafting experience! However, if there are severe weather
                                                conditions or flooding that make rafting unsafe, we will reschedule your tour or provide a full refund.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">Are there age restrictions?</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Participants must be at least 10 years old. Children aged 10-17 must be accompanied by an adult.
                                                There is no upper age limit, but participants should be in reasonable physical condition.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">Is lunch included in the tour?</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Lunch is available as an optional add-on. We can arrange a delicious Sri Lankan rice and curry meal
                                                at a local restaurant. Please indicate your preference when booking and inform us of any dietary requirements.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                                    <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg">
                                        <p className="text-muted-foreground mb-4">
                                            Ready for an adrenaline-pumping adventure? Our team is here to help you plan your white water rafting experience.
                                        </p>
                                        <div className="space-y-3">
                                            <a href="tel:+94707646765" className="flex items-center gap-3 text-emerald-600 hover:text-emerald-700">
                                                <span className="text-2xl">📞</span>
                                                <span className="font-semibold">+94 70 764 6765</span>
                                            </a>
                                            <a href="https://wa.me/94707646765" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-green-600 hover:text-green-700">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                                </svg>
                                                <span className="font-semibold">WhatsApp Us</span>
                                            </a>
                                            <Link href="/contact-us" className="flex items-center gap-3 text-orange-600 hover:text-orange-700">
                                                <span className="text-2xl">✉️</span>
                                                <span className="font-semibold">Send Us a Message</span>
                                            </Link>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        )}
                    </div>

                    {/* Right Column - Booking Sidebar */}
                    <div className="lg:sticky lg:top-4 h-fit">
                        <Card className="border-2 border-emerald-200 shadow-lg">
                            <CardContent className="p-6">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold mb-2">Book This Tour</h3>
                                    <p className="text-sm text-muted-foreground">White Water Adventure • Private Transfer • Expert Guides</p>
                                </div>

                                <form className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Your Name</label>
                                            <input
                                                type="text"
                                                placeholder="Enter your name"
                                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-background"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">WhatsApp / Phone</label>
                                            <input
                                                type="tel"
                                                placeholder="07X XXX XXXX"
                                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-background"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Email</label>
                                            <input
                                                type="email"
                                                placeholder="you@email.com"
                                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-background"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Tour Date</label>
                                            <input
                                                type="date"
                                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-background"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Adults</label>
                                            <input
                                                type="number"
                                                min="1"
                                                defaultValue="2"
                                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-background"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Children (10+)</label>
                                            <input
                                                type="number"
                                                min="0"
                                                defaultValue="0"
                                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-background"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Pickup Location</label>
                                        <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-background">
                                            <option>Colombo Area</option>
                                            <option>Kandy Area</option>
                                            <option>Negombo Area</option>
                                            <option>Other (specify in message)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Message</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Hotel name, dietary requirements, special requests..."
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-background resize-none"
                                        />
                                    </div>

                                    <div className="flex items-center gap-2 text-sm">
                                        <input type="checkbox" id="lunch" className="rounded" />
                                        <label htmlFor="lunch" className="text-muted-foreground">Add lunch (+$15 per person)</label>
                                    </div>

                                    <Link href="/contact-us">
                                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg font-semibold cursor-pointer">
                                            Book Now
                                        </Button>
                                    </Link>

                                    <div className="flex flex-col gap-2">
                                        <a href="tel:+94707646765" className="w-full">
                                            <Button variant="outline" className="w-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950 py-3 cursor-pointer">
                                                📞 Call to Book
                                            </Button>
                                        </a>
                                        <a href="https://wa.me/94707646765" target="_blank" rel="noopener noreferrer" className="w-full">
                                            <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 cursor-pointer">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                                </svg> WhatsApp Inquiry
                                            </Button>
                                        </a>
                                    </div>
                                </form>

                                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                                        <span>Starting from</span>
                                        <span className="text-2xl font-bold text-emerald-600">$65</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground text-center">
                                        Price varies based on group size and pickup location
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Info Cards */}
                        <div className="mt-4 space-y-3">
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
                                <p className="text-sm font-semibold text-green-800 dark:text-green-200">✓ Certified Guides</p>
                                <p className="text-xs text-green-700 dark:text-green-300 mt-1">Professional rafting instructors</p>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                                <p className="text-sm font-semibold text-blue-800 dark:text-blue-200">✓ All Equipment Included</p>
                                <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">Life jackets, helmets & paddles</p>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-orange-500">
                                <p className="text-sm font-semibold text-orange-800 dark:text-orange-200">✓ Insurance Covered</p>
                                <p className="text-xs text-orange-700 dark:text-orange-300 mt-1">Rafting insurance included</p>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                                <p className="text-sm font-semibold text-purple-800 dark:text-purple-200">✓ Beginner Friendly</p>
                                <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">Perfect for first-timers!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
