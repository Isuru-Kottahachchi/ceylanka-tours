"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, CheckCircle, Shield, CreditCard, Calendar, MapPin, ArrowLeft, Mountain, Sun, AlertTriangle } from "lucide-react"
import { useState } from "react"

export default function AdamsPeakTour() {
  const [activeTab, setActiveTab] = useState("overview")

  const galleryImages = [
    {
      src: "/Adams-peak.jpeg",
      alt: "Adam's Peak sunrise view with triangular shadow",
      caption: "Summit Sunrise"
    },
    {
      src: "/Adamspeak.jpg",
      alt: "Pilgrims climbing Adam's Peak at night",
      caption: "Night Ascent"
    },
    {
      src: "/adams-peak-trail.jpg",
      alt: "Adam's Peak hiking trail with prayer flags",
      caption: "Sacred Trail"
    },
    {
      src: "/adams-peak-footprint.jpg",
      alt: "Sacred footprint at Adam's Peak summit",
      caption: "Sacred Footprint"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-4">
        <div className="container mx-auto max-w-7xl">
          <Link href="/destinations/adams-peak" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-2">
            <ArrowLeft className="w-4 h-4" />Back to Adam&apos;s Peak
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Adam&apos;s Peak Sunrise Trek</h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> Ages 10+</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Duration: Overnight (12-14 hrs)</span>
            <span className="flex items-center gap-1"><Mountain className="w-4 h-4" /> 2,243m Elevation</span>
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
                    ? "border-orange-600 text-orange-600"
                    : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("details")}
                className={`pb-3 px-1 font-semibold cursor-pointer text-lg border-b-2 transition-colors ${
                  activeTab === "details"
                    ? "border-orange-600 text-orange-600"
                    : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                Details
              </button>
              <button
                onClick={() => setActiveTab("itinerary")}
                className={`pb-3 px-1 font-semibold cursor-pointer text-lg border-b-2 transition-colors ${
                  activeTab === "itinerary"
                    ? "border-orange-600 text-orange-600"
                    : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                Itinerary
              </button>
              <button
                onClick={() => setActiveTab("help")}
                className={`pb-3 px-1 font-semibold cursor-pointer text-lg border-b-2 transition-colors ${
                  activeTab === "help"
                    ? "border-orange-600 text-orange-600"
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
                    Embark on a spiritual journey to <strong>Adam&apos;s Peak (Sri Pada)</strong>, one of Sri Lanka&apos;s most sacred 
                    mountains revered by Buddhists, Hindus, Muslims, and Christians. The conical peak features a &quot;sacred 
                    footprint&quot; at the summit – Buddhists believe it&apos;s Buddha&apos;s, Hindus claim Shiva&apos;s, Muslims say Adam&apos;s, 
                    and Christians believe it&apos;s St. Thomas&apos;.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The overnight climb of <strong>5,500 steps</strong> through jungle and mountain paths leads to a spectacular 
                    sunrise view where your shadow is cast upon the clouds below – a phenomenon called &quot;Shadow of the Peak.&quot; 
                    Witness one of nature&apos;s most stunning displays from 2,243 meters above sea level.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 my-6">
                    <div className="flex items-start gap-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                      <CreditCard className="w-5 h-5 text-orange-600 mt-0.5" />
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
                      <strong>Sunrise Shadow Phenomenon</strong> – Witness the mountain&apos;s perfect triangular shadow cast on the 
                      clouds at sunrise, with rainbow halos and 360° panoramic views of Sri Lanka.
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
                      <span className="text-muted-foreground">Hotel pickup & drop-off (Hatton/Nuwara Eliya/Ella area)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Experienced trekking guide</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Dinner before climb at local restaurant</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Breakfast after descent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Water bottles and energy snacks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Flashlight/headlamp (if needed)</span>
                    </li>
                  </ul>
                </section>

                <section className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Mountain className="w-6 h-6 text-orange-600" />
                    The Sacred Journey
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">🏔️ 5,500 Steps to Heaven</h4>
                      <p className="text-sm text-muted-foreground">
                        Numbered stone steps guide you through 7 km of illuminated trail during pilgrimage season
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">🌅 Triangular Shadow</h4>
                      <p className="text-sm text-muted-foreground">
                        The peak casts a perfect triangle shadow on clouds at sunrise – a truly magical sight
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">🙏 Multi-Faith Pilgrimage</h4>
                      <p className="text-sm text-muted-foreground">
                        Sacred to four religions, creating a unique spiritual atmosphere of unity
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">☕ Tea Stall Rest Stops</h4>
                      <p className="text-sm text-muted-foreground">
                        Refreshment points every 500m offering hot tea, snacks, and encouragement
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
                      <p>Evening pickup between 7:00 PM – 8:00 PM from hotels in Hatton, Nuwara Eliya, Ella, or nearby areas.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">End:</p>
                      <p>Drop-off at your hotel by early afternoon (1:00 PM – 2:00 PM) with time to rest.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4">Physical Requirements & Safety</h3>
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500">
                    <div className="flex items-start gap-3 mb-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-2">Important Information</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• <strong>Fitness Level:</strong> Moderate (able to walk/climb for 3-4 hours)</li>
                          <li>• <strong>Minimum age:</strong> 10 years old (children must be accompanied)</li>
                          <li>• <strong>Total distance:</strong> 14 km round trip (7 km up, 7 km down)</li>
                          <li>• <strong>Altitude gain:</strong> 1,150 meters</li>
                          <li>• Not recommended for pregnant travelers or those with serious heart/knee conditions</li>
                          <li>• Summit temperature: 5-10°C (bring warm layers!)</li>
                          <li>• Success rate: 95% reach the summit during pilgrimage season</li>
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
                        <li>• Flashlight/headlamp + extra batteries</li>
                        <li>• Warm jacket or fleece</li>
                        <li>• Comfortable hiking shoes</li>
                        <li>• 2 liters of water</li>
                        <li>• Energy snacks (chocolate, nuts)</li>
                        <li>• Light rain jacket</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        ✓ Recommended Items
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Camera/phone with good low-light</li>
                        <li>• Sunglasses for sunrise glare</li>
                        <li>• Walking stick (rental Rs. 50)</li>
                        <li>• Cash Rs. 500-1000 for tea stalls</li>
                        <li>• Small backpack</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4">Best Season to Climb</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">
                        🌟 Pilgrimage Season (Recommended): December to May
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Trail fully illuminated, all tea stalls open, vibrant atmosphere with thousands of pilgrims, 
                        clear weather, highest sunrise visibility. Best months: January-March.
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border-l-4 border-gray-500">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-2">
                        ☔ Off-Season: June to November
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Possible but challenging. Monsoon rains, limited facilities, fewer trail lights. More peaceful but 
                        requires experienced guide and proper preparation.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4">The Sacred Footprint & Religions</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">🕉️ Buddhism & Hinduism</h4>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">
                        Buddhists believe it&apos;s Buddha&apos;s footprint; Hindus claim it&apos;s Shiva&apos;s
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">☪️ Islam & Christianity</h4>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        Muslims say it&apos;s Adam&apos;s; Christians believe it&apos;s St. Thomas&apos;
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4">Cancellation Policy</h3>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Free cancellation up to 24 hours before the trek</li>
                      <li>• Weather-dependent – full refund if unsafe to climb</li>
                      <li>• Rescheduling available based on availability</li>
                      <li>• Inform guide immediately if you need to stop during the climb</li>
                    </ul>
                  </div>
                </section>
              </div>
            )}

            {activeTab === "itinerary" && (
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-bold mb-4">Trek Schedule</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 text-right">
                        <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded text-sm font-semibold">
                          7:00 PM
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Hotel Pickup</h4>
                        <p className="text-sm text-muted-foreground">
                          Comfortable air-conditioned vehicle picks you up from your hotel in Hatton, Nuwara Eliya, or Ella. 
                          Scenic 1-2 hour drive to Dalhousie village through tea plantations and mountain roads.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 text-right">
                        <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded text-sm font-semibold">
                          9:00 PM
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Arrival at Dalhousie & Preparation</h4>
                        <p className="text-sm text-muted-foreground">
                          Arrive at the mountain base. Light dinner at local restaurant (rice and curry or roti). Equipment check, 
                          flashlight distribution, and final trek briefing. Walking stick rental available (Rs. 50).
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 text-right">
                        <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded text-sm font-semibold">
                          11:00 PM
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1 flex items-center gap-2">
                          <Mountain className="w-4 h-4 text-orange-600" />
                          Begin Night Ascent
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Start the 7 km climb with headlamps and flashlights. During pilgrimage season, the trail is illuminated 
                          by tea stalls and fellow pilgrims. The ascent is divided into sections:
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                          <li>• <strong>First 2 km:</strong> Gentle incline through tea plantations</li>
                          <li>• <strong>Next 3 km:</strong> Moderate climb with stone steps and jungle scenery</li>
                          <li>• <strong>Final 2 km:</strong> Steeper climb to the summit with numbered step markers</li>
                          <li>• <strong>Rest stops:</strong> Tea stalls every 500m (hot tea Rs. 50-100, snacks available)</li>
                          <li>• <strong>Average time:</strong> 3-4 hours (take your time, rest as needed)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 text-right">
                        <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded text-sm font-semibold">
                          3:00 AM
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Reach the Summit (2,243m)</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Arrive at the peak before sunrise. Find a good viewing spot on the observation platforms. Summit experiences:
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                          <li>• Visit the sacred footprint shrine and temple</li>
                          <li>• Ring the temple bell (tradition after successful climb)</li>
                          <li>• Hot tea and snacks from summit shops</li>
                          <li>• Buddhist chanting and spiritual atmosphere</li>
                          <li>• Temperature 5-10°C – wear all your layers!</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 text-right">
                        <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded text-sm font-semibold">
                          6:00 AM
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1 flex items-center gap-2">
                          <Sun className="w-4 h-4 text-orange-600" />
                          Spectacular Sunrise Experience
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Witness one of nature&apos;s most stunning phenomena – the reason you climbed all night:
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                          <li>• <strong>Triangular Shadow:</strong> Perfect triangle cast on the clouds below</li>
                          <li>• <strong>360° Panoramic Views:</strong> See both east and west coasts on clear days</li>
                          <li>• <strong>Cloud Sea:</strong> Mountains emerging from clouds like islands</li>
                          <li>• <strong>Rainbow Halos:</strong> Colorful circular rainbows around your shadow</li>
                          <li>• <strong>Photo Opportunity:</strong> Capture this once-in-a-lifetime moment</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 text-right">
                        <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded text-sm font-semibold">
                          7:30 AM
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Descent in Daylight</h4>
                        <p className="text-sm text-muted-foreground">
                          Start the descent (2-3 hours). Much easier in daylight but still requires care on steep steps. 
                          Enjoy spectacular views you missed in darkness: lush jungle, waterfalls, tea plantations, and colorful 
                          prayer flags.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 text-right">
                        <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded text-sm font-semibold">
                          10:30 AM
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Breakfast & Return Journey</h4>
                        <p className="text-sm text-muted-foreground">
                          Hearty breakfast at Dalhousie restaurant (Sri Lankan hoppers, string hoppers, or egg roti). 
                          Transfer back to your hotel with incredible memories and photos of your spiritual achievement. 
                          Arrive at hotel by early afternoon with time to rest.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-l-4 border-orange-600">
                  <h4 className="font-semibold text-orange-900 dark:text-orange-200 mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Total Duration
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    The entire adventure takes approximately 12-14 hours from pickup to drop-off. The climbing time varies 
                    based on fitness level (3-4 hours up, 2-3 hours down), plus time at the summit for sunrise.
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
                      <h4 className="font-semibold mb-2">Is Adam&apos;s Peak suitable for beginners?</h4>
                      <p className="text-sm text-muted-foreground">
                        Yes! While it&apos;s a challenging climb with 5,500 steps, it&apos;s well-maintained and achievable for 
                        anyone with moderate fitness. The steps are numbered, there are rest stops every 500m, and you can 
                        take as many breaks as needed. 95% of climbers reach the summit.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Why do we climb at night?</h4>
                      <p className="text-sm text-muted-foreground">
                        Climbing at night allows you to reach the summit before sunrise to witness the spectacular shadow 
                        phenomenon and sunrise views. It&apos;s also cooler for climbing, and the illuminated trail during 
                        pilgrimage season creates a magical atmosphere.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">When is the best time to climb?</h4>
                      <p className="text-sm text-muted-foreground">
                        December to May is the pilgrimage season with the best weather, fully lit trails, and all facilities 
                        open. January-March offers the clearest skies. Off-season (June-November) is possible but more challenging 
                        due to monsoon rains.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">How cold is it at the summit?</h4>
                      <p className="text-sm text-muted-foreground">
                        Summit temperature ranges from 5-10°C (41-50°F) before sunrise. Bring warm layers including a jacket or 
                        fleece. It warms up quickly after sunrise. The base at Dalhousie is much warmer at 15-20°C.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Do I need special equipment?</h4>
                      <p className="text-sm text-muted-foreground">
                        No technical equipment needed! Just comfortable hiking shoes, flashlight/headlamp, warm clothing, and 
                        water. Walking sticks can be rented for Rs. 50. We provide flashlights if you don&apos;t have one.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Can children climb Adam&apos;s Peak?</h4>
                      <p className="text-sm text-muted-foreground">
                        Children aged 10 and above can climb if they&apos;re reasonably fit and accompanied by adults. Many 
                        families successfully complete the trek. Allow extra time and take more breaks for younger climbers.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Are there bathrooms on the trail?</h4>
                      <p className="text-sm text-muted-foreground">
                        Yes, there are basic toilet facilities at the start, several points along the trail at tea stalls, 
                        and at the summit. They&apos;re simple but functional.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What if I can&apos;t complete the climb?</h4>
                      <p className="text-sm text-muted-foreground">
                        You can stop at any point and descend. Our guide will assist you. There&apos;s no pressure – listen to 
                        your body. Many people climb partway, enjoy the atmosphere, and descend before sunrise.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Can I see the sunrise from partway up?</h4>
                      <p className="text-sm text-muted-foreground">
                        You can see a beautiful sunrise from anywhere on the trail, but the unique triangular shadow and 360° 
                        views are only visible from the summit. The phenomenon is worth the final effort!
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                    <p className="text-muted-foreground mb-4">
                      Ready to conquer the sacred peak? Our team is here to help you plan your spiritual adventure.
                    </p>
                    <div className="space-y-3">
                      <a href="tel:+94707646765" className="flex items-center gap-3 text-orange-600 hover:text-orange-700">
                        <span className="text-2xl">📞</span>
                        <span className="font-semibold">+94 70 764 6765</span>
                      </a>
                      <a href="https://wa.me/94707646765" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-green-600 hover:text-green-700">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        <span className="font-semibold">WhatsApp Us</span>
                      </a>
                      <Link href="/contact-us" className="flex items-center gap-3 text-blue-600 hover:text-blue-700">
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
            <Card className="border-2 border-orange-200 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Book This Trek</h3>
                  <p className="text-sm text-muted-foreground">Overnight Adventure • Sacred Summit • Sunrise Experience</p>
                </div>

                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">WhatsApp / Phone</label>
                      <input
                        type="tel"
                        placeholder="07X XXX XXXX"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        placeholder="you@email.com"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Trek Date</label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-background"
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
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Children (10+)</label>
                      <input
                        type="number"
                        min="0"
                        defaultValue="0"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Pickup Location</label>
                    <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-background">
                      <option>Hatton Area</option>
                      <option>Nuwara Eliya Area</option>
                      <option>Ella Area</option>
                      <option>Colombo Area</option>
                      <option>Other (specify in message)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Hotel name, fitness level, special requests..."
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-background resize-none"
                    />
                  </div>

                  <Link href="/contact-us">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 text-lg font-semibold cursor-pointer">
                      Book Now
                    </Button>
                  </Link>

                  <div className="flex flex-col gap-2">
                    <a href="tel:+94707646765" className="w-full">
                      <Button variant="outline" className="w-full border-2 border-orange-600 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950 py-3 cursor-pointer">
                        📞 Call to Book
                      </Button>
                    </a>
                    <a href="https://wa.me/94707646765" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 cursor-pointer flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        WhatsApp Inquiry
                      </Button>
                    </a>
                  </div>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span>Starting from</span>
                    <span className="text-2xl font-bold text-orange-600">$70</span>
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
                <p className="text-sm font-semibold text-green-800 dark:text-green-200">✓ 95% Success Rate</p>
                <p className="text-xs text-green-700 dark:text-green-300 mt-1">Most climbers reach the summit</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-sm font-semibold text-purple-800 dark:text-purple-200">✓ Sacred Experience</p>
                <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">Multi-faith pilgrimage site</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-sm font-semibold text-orange-800 dark:text-orange-200">✓ Sunrise Spectacle</p>
                <p className="text-xs text-orange-700 dark:text-orange-300 mt-1">Triangular shadow phenomenon</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm font-semibold text-blue-800 dark:text-blue-200">✓ Expert Guides</p>
                <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">Experienced trekking guides</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
