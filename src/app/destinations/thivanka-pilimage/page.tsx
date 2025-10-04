"use client"

import Image from "next/image"
import { MapPin, CheckCircle, Star, Clock, Info, Book, Palette, Camera, History } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/ui/image-carousel"



export default function ThivankaPilimagePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/thivanka-pilimage.jpg"
          alt="Ancient Thivanka Pilimage image house in Polonnaruwa with its distinctive architectural features"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Thivanka Pilimage</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Ancient Buddhist Image House of Polonnaruwa</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <History className="w-4 h-4 mr-1" />
              12th Century CE
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Palette className="w-4 h-4 mr-1" />
              Ancient Murals
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Book className="w-4 h-4 mr-1" />
              UNESCO Heritage
            </Badge>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Ancient Treasury of Buddhist Art</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              Thivanka Pilimage stands as one of the most remarkable image houses in ancient Polonnaruwa, 
              showcasing the pinnacle of Sri Lankan Buddhist art and architecture from the 12th century. 
              Built during the reign of King Parakramabahu I (1153-1186 CE), this magnificent structure 
              measures approximately 48 feet in length and 38 feet in width. The name &apos;Thivanka&apos; 
              derives from the unique &apos;thrice-bent&apos; or &apos;three-curved&apos; posture of its 
              Buddha statue, a rare artistic representation in Sri Lankan Buddhist sculpture.
            </p>
            <p className="mb-4">
              The image house is particularly renowned for its exquisite murals that adorn its inner walls, 
              representing one of the finest examples of medieval Sri Lankan painting. These ancient 
              artworks depict various Jataka tales and scenes from the Buddha&apos;s life, executed with 
              remarkable detail and artistic sophistication.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-500" />
                Essential Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span><strong>Location:</strong> Northern Polonnaruwa Ancient City</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <History className="w-4 h-4 text-green-500" />
                    <span><strong>Period:</strong> 12th Century CE (Polonnaruwa Era)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span><strong>Visit Duration:</strong> 30-45 minutes</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Opening Hours</h4>
                    <p className="text-sm text-blue-700">7:00 AM - 5:30 PM daily</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Best Time to Visit</h4>
                    <p className="text-sm text-green-700">Early morning or late afternoon for best lighting</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Iconic Buddha Statue */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Iconic Buddha Statue</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>The Thivanka Statue</CardTitle>
                <CardDescription>A masterpiece of ancient Buddhist sculpture</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    The centerpiece of the image house is its remarkable Buddha statue, characterized by 
                    its distinctive tribhanga (thrice-bent) posture. This unique pose shows the figure
                    bent in three places - at the knee, waist, and neck - creating an elegant S-shaped curve.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Dimensions:</strong>
                        <p className="text-sm text-muted-foreground">Originally stood approximately 8 meters (26 feet) tall</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Artistic Style:</strong>
                        <p className="text-sm text-muted-foreground">Combines Polonnaruwa period characteristics with unique sculptural innovation</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Material:</strong>
                        <p className="text-sm text-muted-foreground">Crafted from limestone with evidence of original paint and gilding</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Artistic Significance</CardTitle>
                <CardDescription>Cultural and historical importance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Unique Posture</p>
                      <p className="text-muted-foreground text-sm">
                        The tribhanga pose is rarely seen in Sri Lankan Buddhist sculpture, making this
                        statue particularly significant in Buddhist art history.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Artistic Influence</p>
                      <p className="text-muted-foreground text-sm">
                        Shows clear influence of the Amaravati school of art from South India, while
                        maintaining distinctly Sri Lankan characteristics.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Conservation Status</p>
                      <p className="text-muted-foreground text-sm">
                        While partially damaged, the remaining features provide crucial insights into
                        12th-century sculptural techniques and artistic conventions.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Architectural Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Architectural Marvel</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-4">
                The Thivanka Pilimage represents a unique architectural style with its distinctive features:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Building Structure:</strong>
                    <p className="text-sm text-muted-foreground">Three-story brick structure with remaining walls up to 12 meters, featuring sophisticated brick bonding techniques</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Entrance Design:</strong>
                    <p className="text-sm text-muted-foreground">Ornate doorway with carved stone doorjambs and decorated steps (sandakada pahana)</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Wall Paintings:</strong>
                    <p className="text-sm text-muted-foreground">Elaborate murals depicting Jataka tales, celestial figures, and floral motifs in red, yellow, and black natural pigments</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Interior Features:</strong>
                    <p className="text-sm text-muted-foreground">Multiple chambers with evidence of wooden ceiling beams, plaster work, and carved stone elements</p>
                  </div>
                </li>
              </ul>
            </div>
            <ImageCarousel
              images={[
                { 
                  src: "/thivanka-murals.jpg",
                  alt: "Ancient murals inside Thivanka Pilimage showing Buddhist stories",
                  caption: "Well-preserved ancient murals"
                },
                { 
                  src: "/thivanka-architecture.jpg",
                  alt: "Architectural details of Thivanka Pilimage",
                  caption: "Unique architectural features"
                },
                { 
                  src: "/thivanka-statues.jpg",
                  alt: "Buddha statues with the characteristic three-bent posture",
                  caption: "Distinctive Buddha statues"
                }
              ]}
            />
          </div>
        </section>

        {/* Did You Know Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Fascinating Facts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Artistic Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Unique Painting Style</p>
                      <p className="text-muted-foreground text-sm">
                        The murals showcase a unique style that combines Sinhalese and South Indian artistic influences,
                        marking a distinct period in Sri Lankan art history.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Ancient Color Technology</p>
                      <p className="text-muted-foreground text-sm">
                        The artists used natural pigments that have remarkably retained their vibrancy for over 800 years.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Historical Significance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Royal Patronage</p>
                      <p className="text-muted-foreground text-sm">
                        The image house was built under the patronage of King Parakramabahu I, known for his 
                        massive architectural projects.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Survival Through Ages</p>
                      <p className="text-muted-foreground text-sm">
                        Despite centuries of abandonment, the structure retained many of its murals due to 
                        its isolated location and thick walls.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conservation Status */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-500" />
                Conservation and Visiting Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Preservation Efforts:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      Ongoing conservation of murals
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      Structural stabilization work
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      Climate control measures
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Visitor Guidelines:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Camera className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      No flash photography inside
                    </li>
                    <li className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      Maintain silence near murals
                    </li>
                    <li className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      No touching of walls or artifacts
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Visiting Information */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                Plan Your Visit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Access Information:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Located within Polonnaruwa Archaeological Park</li>
                    <li>• Accessible via main tourist path</li>
                    <li>• Parking available nearby</li>
                    <li>• Guide services recommended</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Tips for Visitors:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Visit early morning for best lighting</li>
                    <li>• Bring sufficient water</li>
                    <li>• Wear appropriate temple attire</li>
                    <li>• Allow time for detailed observation</li>
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
