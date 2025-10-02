"use client"

import Image from "next/image"
import { ImageCarousel } from "@/components/ui/image-carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, AlertTriangle, CheckCircle, Star, Calendar, Users, Mountain, Eye, TreePine, Clock, Bird, Shield } from 'lucide-react'

export default function WangedigalaGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Wangedigala.jpg"
          alt="Majestic view of Wangedigala mountain and surrounding wilderness in Wellawaya"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Wangedigala</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Ancient Mountain Fortress of Wellawaya</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-1" />
              1,216m Elevation
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Bird className="w-4 h-4 mr-1" />
              Wildlife Sanctuary
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Shield className="w-4 h-4 mr-1" />
              Protected Area
            </Badge>
          </div>
        </div>
      </section>

      {/* Ad Banner - Top */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500">
          [Advertisement Space - 728x90 Leaderboard]
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Wangedigala: Ancient Mountain Fortress</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Wangedigala, rising majestically to 1,216 meters in the Wellawaya region, is a remarkable mountain with deep historical 
              significance and rich biodiversity. Once serving as a strategic fortress during ancient times, today it stands as a protected 
              wildlife sanctuary and archaeological site, offering visitors a unique blend of natural beauty and historical heritage.
            </p>
            <p className="text-lg mb-4">
              The mountain is particularly known for its ancient stone steps, cave shelters, and historical artifacts that hint at its 
              past importance. The surrounding area is home to diverse wildlife, including endemic birds and rare plant species, making 
              it a significant site for both history enthusiasts and nature lovers.
            </p>
            <p className="text-lg">
              The trail to the summit offers a challenging yet rewarding experience, winding through diverse vegetation zones and 
              providing stunning views of the Uva basin and the surrounding mountain ranges. During clear weather, hikers can enjoy 
              panoramic views stretching from Ella Gap to the distant plains of Wellawaya.
            </p>
          </div>
        </section>

        {/* Important Notice */}
        <section className="mb-12">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-800">
                <AlertTriangle className="w-5 h-5" />
                Important Visitor Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-red-700">
                <p className="mb-4"><strong>Camping Prohibition Notice:</strong></p>
                <p className="mb-2">As of 2025, camping is strictly prohibited at Wangedigala due to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Conservation efforts to protect the fragile ecosystem</li>
                  <li>Archaeological site preservation requirements</li>
                  <li>Wildlife protection measures</li>
                  <li>Safety concerns during adverse weather conditions</li>
                </ul>
                <p className="mt-4">Visitors are advised to plan day trips only and respect all conservation guidelines.</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Essential Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span><strong>Location:</strong> Wellawaya, Uva Province (6.3157° N, 81.0958° E)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-500" />
                    <span><strong>Elevation:</strong> 1,216 meters (3,989 feet)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span><strong>Best Time:</strong> Early morning (6-10 AM), avoid afternoon heat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-green-500" />
                    <span><strong>Terrain:</strong> Mixed forest and rocky outcrops</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span><strong>Guide:</strong> Recommended for first-time visitors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-red-500" />
                    <span><strong>Peak Season:</strong> December to March</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Trail Difficulty</h4>
                    <p className="text-sm text-yellow-700">Moderate to challenging - proper hiking gear required</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Duration</h4>
                    <p className="text-sm text-blue-700">4-5 hours round trip</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Permission</h4>
                    <p className="text-sm text-green-700">Required from Forest Department</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Historical Significance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Historical Significance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground mb-4">
                Wangedigala holds significant historical importance as an ancient mountain fortress. Archaeological 
                evidence suggests human habitation dating back several centuries, with remnants of ancient fortifications 
                and cave dwellings still visible today.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Ancient stone steps carved into the mountain
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Cave shelters with archaeological evidence
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Historical water storage systems
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Ancient defensive structures
                </li>
              </ul>
            </div>
            <ImageCarousel
              images={[
                { src: "/Wangedigala-steps.jpg", alt: "Ancient stone steps of Wangedigala", caption: "Ancient stone steps leading to the summit" },
                { src: "/Wangedigala-caves.jpg", alt: "Historical cave shelters at Wangedigala", caption: "Historical cave shelters with archaeological significance" },
                { src: "/Wangedigala-ruins.jpg", alt: "Ancient fortification ruins at Wangedigala", caption: "Remnants of ancient fortifications" }
              ]}
            />
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Attractions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Gon Malliya Mountain</CardTitle>
                <CardDescription>Nearby mountain with historical significance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A nearby mountain landmark known for its historical significance in the region. Gon Malliya mountain 
                  offers additional hiking opportunities and panoramic views of the surrounding landscape.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Scenic hiking trails
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Panoramic viewpoints
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Rich local history
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Buduruwagala Temple</CardTitle>
                <CardDescription>Ancient Buddhist temple with rock carvings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Just a short drive from Wangedigala, Buduruwagala features magnificent rock-cut Buddha statues 
                  dating back to the 8th-10th century. The main statue stands at an impressive 51 feet tall.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Tallest standing Buddha statue
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Ancient Mahayana Buddhist site
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Well-preserved rock carvings
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visitor Guidelines */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-500" />
                Visitor Guidelines and Conservation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Essential Guidelines:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Permits Required</strong>
                        <p className="text-sm">Obtain from Forest Department office in Wellawaya</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Early Start</strong>
                        <p className="text-sm">Begin trek before 7 AM to avoid afternoon heat</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Essential Items</strong>
                        <p className="text-sm">2L water per person, energy snacks, first aid kit</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Proper Gear</strong>
                        <p className="text-sm">Hiking boots, sun protection, insect repellent</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Conservation Rules:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      No camping or overnight stays
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      No removal of plants or artifacts
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      No littering or damage to site
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      Stay on marked trails only
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Trail Description */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Trail Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Trail Sections</CardTitle>
                <CardDescription>Detailed breakdown of the hiking route</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Initial Ascent (0-1km)</h4>
                    <p className="text-sm text-green-700">Gradual climb through lowland forest with well-marked paths</p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Mid-Section (1-2km)</h4>
                    <p className="text-sm text-yellow-700">Steeper terrain with ancient stone steps and historical ruins</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Summit Approach (2-3km)</h4>
                    <p className="text-sm text-orange-700">Challenging rocky terrain with spectacular valley views</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Best Photo Spots</CardTitle>
                <CardDescription>Capture memorable moments</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Eye className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Ancient Stone Steps</strong>
                      <p className="text-sm">Best photographed in early morning light</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Eye className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Valley Viewpoint</strong>
                      <p className="text-sm">Panoramic views of Uva basin, ideal at sunrise</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Eye className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Summit Rock Formation</strong>
                      <p className="text-sm">Dramatic landscape shots, best in golden hour</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Flora and Fauna */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Wildlife and Nature</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Endemic Species</CardTitle>
                <CardDescription>Notable wildlife and plants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Birds</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Yellow-fronted Barbet</li>
                      <li>• Sri Lanka Grey Hornbill</li>
                      <li>• Crimson-backed Flameback</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Plants</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Endemic orchid species</li>
                      <li>• Native ferns and mosses</li>
                      <li>• Medicinal plants</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Seasonal Highlights</CardTitle>
                <CardDescription>Best times for nature observation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">December - March</h4>
                    <p className="text-sm text-blue-700">Peak butterfly activity and clearest views</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">April - August</h4>
                    <p className="text-sm text-green-700">Orchid blooming season and bird nesting period</p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">September - November</h4>
                    <p className="text-sm text-yellow-700">Rich vegetation after inter-monsoon rains</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Getting There */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                How to Get There
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">From Colombo:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Distance: Approximately 260 km</li>
                    <li>• Duration: 5-6 hours by car</li>
                    <li>• Route: Via A4 highway through Ratnapura</li>
                  </ul>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <strong>Recommended:</strong> Start early morning to avoid traffic and heat
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Local Access:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 12 km from Wellawaya town</li>
                    <li>• Local guides available in Wellawaya</li>
                    <li>• 4WD vehicle recommended for last stretch</li>
                  </ul>
                  <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-yellow-700">
                      <strong>Note:</strong> Local guide highly recommended for safe navigation
                    </p>
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
