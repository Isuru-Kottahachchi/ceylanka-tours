"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, CheckCircle, Shield, CreditCard, Calendar, MapPin, ArrowLeft } from "lucide-react"
import { useState } from "react"

export default function MirissaWhaleWatchingTour() {
  const [activeTab, setActiveTab] = useState("overview")

  const galleryImages = [
    {
      src: "/Whale-in-Mirissa.jpg",
      alt: "Blue whale breaching in Mirissa waters",
      caption: "Blue Whale Sighting"
    },
    {
      src: "/Whale-Shark-at-Mirissa.jpg",
      alt: "Whale shark swimming in the ocean",
      caption: "Whale Shark"
    },
    {
      src: "/jungle-beach.jpeg",
      alt: "Dolphins jumping in Mirissa",
      caption: "Dolphin Pod"
    },
    {
      src: "/Mirissa-Beach.jpg",
      alt: "Whale watching boat in Mirissa",
      caption: "Tour Boat"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-4">
        <div className="container mx-auto max-w-7xl">
          <Link href="/destinations/mirissa" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-2">
            <ArrowLeft className="w-4 h-4" />Back to Mirissa
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Mirissa Whale Watching</h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> Any age</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Duration: 1 Day</span>
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
                className={`pb-3 px-1 font-semibold cursor-pointer text-lg border-b-2 transition-colors ${
                  activeTab === "overview"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("details")}
                className={`pb-3 px-1 font-semibold cursor-pointer text-lg border-b-2 transition-colors ${
                  activeTab === "details"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                Details
              </button>
              <button
                onClick={() => setActiveTab("itinerary")}
                className={`pb-3 px-1 font-semibold cursor-pointer text-lg border-b-2 transition-colors ${
                  activeTab === "itinerary"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                Itinerary
              </button>
              <button
                onClick={() => setActiveTab("help")}
                className={`pb-3 px-1 font-semibold cursor-pointer text-lg border-b-2 transition-colors ${
                  activeTab === "help"
                    ? "border-blue-600 text-blue-600"
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
                    Experience one of Sri Lanka&apos;s most famous marine adventures with the <strong>Mirissa Whale Watching Day Tour</strong>. 
                    Witness majestic <strong>blue whales</strong>, sperm whales, and playful dolphins in their natural habitat, with safe boat 
                    operations and smooth planning by Ceylanka Tours.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 my-6">
                    <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <CreditCard className="w-5 h-5 text-blue-600 mt-0.5" />
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
                      <strong>Early Morning Whale Watching Cruise</strong> – Best chance to spot blue whales, sperm whales, and dolphins 
                      (seasonal & weather dependent).
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4">Tour Inclusions</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Private air-conditioned vehicle with driver</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Hotel pickup & drop-off (Bentota/Hikkaduwa/Weligama/Mirissa area)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Coordination of whale watching boat tickets</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Safety life jackets provided on board</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Breakfast pack (on request) and water</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Expert naturalist guide on board</span>
                    </li>
                  </ul>
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
                      <p>Early morning pickup between 4:00 AM – 5:00 AM depending on your location.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">End:</p>
                      <p>Drop-off at your hotel in the late morning or early afternoon.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4">Accessibility & Suitability</h3>
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Boat trips involve boarding from the harbor</li>
                      <li>• Not recommended for travelers with severe motion sickness</li>
                      <li>• Not recommended for pregnant travelers</li>
                      <li>• Sea sickness pills are usually available and recommended</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4">Cancellation & Refund Policy</h3>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Whale watching is highly weather-dependent. In case of rough seas or cancellation by the Coast Guard, 
                      a full refund or rescheduling will be offered.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4">What You Might See</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🐋 Blue Whales</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        The largest animals on Earth - up to 100 feet long
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950 dark:to-cyan-900 p-4 rounded-lg">
                      <h4 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-2">🦈 Whale Sharks</h4>
                      <p className="text-sm text-cyan-700 dark:text-cyan-300">
                        Largest fish in the world - gentle giants
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🐬 Dolphins</h4>
                      <p className="text-sm text-purple-700 dark:text-purple-300">
                        Spinner and Bottlenose dolphins in large pods
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">🐋 Sperm Whales</h4>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        Deep divers with distinctive square heads
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
                        <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
                          4:00 AM
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Hotel Pickup</h4>
                        <p className="text-sm text-muted-foreground">
                          Comfortable air-conditioned vehicle picks you up from your hotel.(Bentota, Kaluthara, Colombo area) Early start ensures best whale spotting conditions.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 text-right">
                        <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
                          6:00 AM
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Boat Departure from Mirissa Harbor</h4>
                        <p className="text-sm text-muted-foreground">
                          Board the whale watching boat with safety equipment. Expert naturalist guide provides briefing and whale watching tips.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 text-right">
                        <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
                          6:30 AM
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Whale Watching Experience</h4>
                        <p className="text-sm text-muted-foreground">
                          Cruise into deep waters where blue whales feed. Watch for whale spouts, breaches, and dolphin pods. 
                          Success rate over 90% during peak season (November-April).
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 text-right">
                        <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
                          9:30 AM
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Return to Harbor</h4>
                        <p className="text-sm text-muted-foreground">
                          Boat returns to Mirissa harbor. Light breakfast/snacks available on board (if requested).
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 text-right">
                        <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
                          11:00 AM
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Hotel Drop-off</h4>
                        <p className="text-sm text-muted-foreground">
                          Comfortable return journey to your hotel with unforgettable memories and photos.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === "help" && (
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">What is the best time to see whales?</h4>
                      <p className="text-sm text-muted-foreground">
                        The best season is November to April when blue whales migrate through Sri Lankan waters. 
                        Success rate is over 90% during this period.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What should I bring?</h4>
                      <p className="text-sm text-muted-foreground">
                        Bring sunscreen, hat, sunglasses, camera with telephoto lens, light jacket (mornings can be cool), 
                        and motion sickness medication if prone to seasickness.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Is it safe for children?</h4>
                      <p className="text-sm text-muted-foreground">
                        Yes, the tour is suitable for all ages. Life jackets are provided for everyone. However, parents should 
                        supervise young children at all times on the boat.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What if I get seasick?</h4>
                      <p className="text-sm text-muted-foreground">
                        Sea sickness medication is recommended and usually available for purchase. Sitting in the middle of the 
                        boat and looking at the horizon helps. Most people enjoy the trip without issues.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Can the tour be cancelled?</h4>
                      <p className="text-sm text-muted-foreground">
                        Tours may be cancelled due to rough sea conditions or Coast Guard restrictions. In such cases, you will 
                        receive a full refund or the option to reschedule.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                    <p className="text-muted-foreground mb-4">
                      Have questions? Our team is ready to help you plan your whale watching adventure.
                    </p>
                    <div className="space-y-3">
                      <a href="tel:+94707646765" className="flex items-center gap-3 text-blue-600 hover:text-blue-700">
                        <span className="text-2xl">📞</span>
                        <span className="font-semibold">+94 70 764 6765</span>
                      </a>
                      <a href="https://wa.me/94707646765" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-green-600 hover:text-green-700">
                        <span className="text-2xl">💬</span>
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
            <Card className="border-2 border-blue-200 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Book This Tour</h3>
                  <p className="text-sm text-muted-foreground">Early Morning • Private Transfer • Whale Safari</p>
                </div>

                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">WhatsApp / Phone</label>
                      <input
                        type="tel"
                        placeholder="07X XXX XXXX"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        placeholder="you@email.com"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Tour Date</label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Adults</label>
                      <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Children</label>
                      <input
                        type="number"
                        min="0"
                        defaultValue="0"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Pickup location, hotel name, special requests..."
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background resize-none"
                    />
                  </div>

                  <Link href="/contact-us">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold cursor-pointer">
                      Book Now
                    </Button>
                  </Link>

                  <div className="flex flex-col gap-2">
                    <a href="tel:+94707646765" className="w-full">
                      <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 py-3 cursor-pointer">
                        📞 Call to Book
                      </Button>
                    </a>
                    <a href="https://wa.me/94707646765" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 cursor-pointer">
                        💬 WhatsApp Inquiry
                      </Button>
                    </a>
                  </div>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span>Starting from</span>
                    <span className="text-2xl font-bold text-blue-600">$75</span>
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
                <p className="text-sm font-semibold text-green-800 dark:text-green-200">✓ Instant Confirmation</p>
                <p className="text-xs text-green-700 dark:text-green-300 mt-1">Get confirmed within minutes</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm font-semibold text-blue-800 dark:text-blue-200">✓ Free Cancellation</p>
                <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">Up to 24 hours before tour</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-sm font-semibold text-purple-800 dark:text-purple-200">✓ Expert Guides</p>
                <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">Professional naturalists</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
