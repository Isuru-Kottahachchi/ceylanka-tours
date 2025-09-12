import type { Metadata } from "next"
import Image from "next/image"
import { MapPin, AlertTriangle, CheckCircle, Star, Calendar, Users, TreePine, Leaf, Droplets } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Matale Travel Guide 2025: Spice Garden Capital of Sri Lanka | Complete Guide",
  description:
    "Discover Matale, Sri Lanka's spice garden capital. Complete guide to Aluvihare Rock Temple, spice plantations, Sembuwatta Lake, and authentic culinary experiences.",
  keywords:
    "Matale Sri Lanka, spice gardens, Aluvihare Rock Temple, Sembuwatta Lake, spice plantations, cinnamon, cardamom, pepper, culinary tours",
  authors: [{ name: "Sri Lanka Travel Expert" }],
  openGraph: {
    title: "Matale Travel Guide 2025: Spice Garden Capital of Sri Lanka",
    description: "Your complete guide to Matale - spice gardens, ancient temples, and authentic culinary adventures",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matale Travel Guide 2025: Spice Garden Capital of Sri Lanka",
    description: "Your complete guide to Matale - spice gardens, ancient temples, and authentic culinary adventures",
  },
}

export default function MataleGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Lush spice gardens in Matale with cinnamon, cardamom, and pepper plants growing in terraced hillsides"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Matale</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Spice Garden Capital of Sri Lanka</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Leaf className="w-4 h-4 mr-1" />
              World&apos;s Finest Spices
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Central Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <TreePine className="w-4 h-4 mr-1" />
              Ancient Buddhist Heritage
            </Badge>
          </div>
        </div>
      </section>

      {/* Ad Banner - Top */}
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500">
          [Advertisement Space - 728x90 Leaderboard - Spice Garden Tours & Culinary Experiences]
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Matale: Where Spices Tell Stories</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Located in the heart of Sri Lanka&apos;s Central Province, Matale is renowned as the island&apos;s spice garden
              capital. This aromatic town has been the center of spice cultivation for over 2,000 years, producing the
              world&apos;s finest cinnamon, cardamom, pepper, and countless other spices that have shaped global cuisine.
            </p>
            <p className="text-lg">
              Beyond its fragrant spice gardens, Matale offers rich Buddhist heritage at the historic Aluvihare Rock
              Temple, pristine natural beauty at Sembuwatta Lake, and authentic culinary experiences that showcase the
              true flavors of Sri Lankan cuisine. This is where ancient traditions meet modern gastronomy.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Essential Matale Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Famous For:</strong> World&apos;s Finest Spices
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Province:</strong> Central Province
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Population:</strong> ~100,000 residents
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Elevation:</strong> 364m (1,194 feet)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Time:</strong> December to April
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-blue-600" />
                    <span>
                      <strong>Climate:</strong> Tropical with Cool Evenings
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Top Attractions in Matale</h2>

          {/* Ad Banner - Mid Content */}
          <div className="my-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500">
            [Advertisement Space - 300x250 Medium Rectangle - Spice Plantation Tours & Cooking Classes]
          </div>

          <div className="space-y-8">
            {/* Spice Gardens */}
            <Card>
              <CardHeader>
                <CardTitle>1. Matale Spice Gardens</CardTitle>
                <CardDescription>World&apos;s finest spice plantations and authentic experiences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Matale spice gardens showing cinnamon, cardamom, pepper, and other spices growing in natural plantation setting"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Matale&apos;s spice gardens are living museums where you can see, smell, and taste the world&apos;s finest
                      spices in their natural habitat. Learn about traditional cultivation methods passed down through
                      generations and discover how these precious spices shaped world history.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        World&apos;s finest Ceylon cinnamon cultivation
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Premium cardamom, pepper, and nutmeg
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Guided tours with spice experts
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Fresh spice purchases directly from source
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Aluvihare Rock Temple */}
            <Card>
              <CardHeader>
                <CardTitle>2. Aluvihare Rock Temple</CardTitle>
                <CardDescription>Historic temple where Buddhist scriptures were first written</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Dating back to the 3rd century BCE, Aluvihare Rock Temple holds immense significance in Buddhist
                      history. This is where the Tripitaka (Buddhist scriptures) were first committed to writing on palm
                      leaves, preserving Buddha&apos;s teachings for future generations.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Birthplace of written Buddhist scriptures
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient cave temples with beautiful murals
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful meditation caves and gardens
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Panoramic views of Matale valley
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Aluvihare Rock Temple with ancient cave temples carved into rock face and beautiful Buddhist murals"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Sembuwatta Lake */}
            <Card>
              <CardHeader>
                <CardTitle>3. Sembuwatta Lake</CardTitle>
                <CardDescription>Pristine mountain lake with natural beauty and adventure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Sembuwatta Lake surrounded by lush mountains with crystal clear water and natural swimming areas"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Created by the Kotmale Dam, Sembuwatta Lake is a hidden gem nestled in the mountains near Matale.
                      This pristine lake offers crystal-clear waters perfect for swimming, surrounded by lush forests
                      and dramatic mountain scenery.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Crystal-clear mountain lake waters
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Natural swimming and picnic areas
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Zip-lining and adventure activities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Stunning mountain and forest views
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Spice Heritage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Spice Heritage of Matale</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Traditional spice processing in Matale showing cinnamon peeling, cardamom drying, and pepper harvesting"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                Traditional spice processing methods preserved for over 2,000 years
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                For over two millennia, Matale has been the heart of Sri Lanka&apos;s spice trade. The region&apos;s unique
                climate and soil conditions create perfect growing environments for the world&apos;s most prized spices,
                particularly Ceylon cinnamon, which is considered the finest variety globally.
              </p>
              <p>
                Ancient trade routes brought Arab, Portuguese, Dutch, and British traders to Matale, all seeking these
                precious spices that were once worth more than gold. Today, traditional cultivation and processing
                methods are still used, ensuring authentic flavors and premium quality.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">Matale&apos;s Famous Spices:</h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Ceylon Cinnamon - World&apos;s finest variety</li>
                  <li>• Cardamom - Premium green and white varieties</li>
                  <li>• Black Pepper - The &quot;King of Spices&quot;</li>
                  <li>• Nutmeg, Cloves, and Vanilla</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Culinary Experiences */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Culinary Experiences & Spice Tours</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Spice Garden Tours</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Guided plantation walks</li>
                  <li>• Learn traditional cultivation methods</li>
                  <li>• See spice processing demonstrations</li>
                  <li>• Taste fresh spices and herbs</li>
                  <li>• Purchase authentic spices directly</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Cooking Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Traditional Sri Lankan curry cooking</li>
                  <li>• Learn to use fresh spices properly</li>
                  <li>• Authentic family recipes</li>
                  <li>• Hands-on cooking experiences</li>
                  <li>• Take recipes home with you</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Spice Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Watch cinnamon bark peeling</li>
                  <li>• See cardamom pod processing</li>
                  <li>• Learn about spice grading</li>
                  <li>• Traditional drying methods</li>
                  <li>• Quality control processes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Banner - Mid Content 2 */}
        <div className="my-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500">
          [Advertisement Space - 728x90 Leaderboard - Authentic Spice Products & Cooking Equipment]
        </div>

        {/* Getting There */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting to Matale</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>By Road</CardTitle>
                <CardDescription>Most convenient access to spice gardens</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>From Colombo:</strong>
                  <p className="text-sm text-muted-foreground">3-4 hours via A1 highway through Kandy</p>
                </div>
                <div>
                  <strong>From Kandy:</strong>
                  <p className="text-sm text-muted-foreground">1 hour via A9 road - very scenic route</p>
                </div>
                <div>
                  <strong>From Dambulla:</strong>
                  <p className="text-sm text-muted-foreground">45 minutes via B162 road</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Tip:</strong> Many spice gardens offer pickup services from Kandy
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>By Public Transport</CardTitle>
                <CardDescription>Budget-friendly travel options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>Bus from Colombo:</strong>
                  <p className="text-sm text-muted-foreground">4-5 hours via Kandy, frequent services</p>
                </div>
                <div>
                  <strong>Bus from Kandy:</strong>
                  <p className="text-sm text-muted-foreground">1.5 hours, regular departures every 30 minutes</p>
                </div>
                <div>
                  <strong>Train + Bus:</strong>
                  <p className="text-sm text-muted-foreground">Train to Kandy, then bus to Matale</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Tuk-tuks available for local transportation
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Where to Stay */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Where to Stay in Matale</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Spice Garden Resorts</CardTitle>
                <CardDescription>$40-80 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Surrounded by spice plantations</li>
                  <li>• Authentic plantation experiences</li>
                  <li>• Guided spice tours included</li>
                  <li>• Traditional Sri Lankan cuisine</li>
                  <li>• Peaceful natural settings</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">City Hotels</CardTitle>
                <CardDescription>$25-60 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Convenient town center locations</li>
                  <li>• Modern amenities and WiFi</li>
                  <li>• Easy access to attractions</li>
                  <li>• Restaurant and room service</li>
                  <li>• Tour booking assistance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Eco-Lodges</CardTitle>
                <CardDescription>$30-70 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sustainable tourism practices</li>
                  <li>• Natural forest settings</li>
                  <li>• Organic farm-to-table dining</li>
                  <li>• Nature walks and bird watching</li>
                  <li>• Cultural immersion experiences</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Local Cuisine */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Local Cuisine & Specialties</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Spice-Infused Dishes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Must-Try Specialties:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Matale-style curry with fresh spices</li>
                      <li>• Traditional spice-rubbed grilled meats</li>
                      <li>• Fresh coconut sambol with spices</li>
                      <li>• Spiced rice dishes and biryanis</li>
                      <li>• Traditional spice teas and drinks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Dining Experiences:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Spice garden restaurants</li>
                      <li>• Traditional village home cooking</li>
                      <li>• Local market food stalls</li>
                      <li>• Cooking class experiences</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Spice Shopping</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Traditional spice market in Matale with colorful displays of cinnamon, cardamom, and other spices"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Take home the authentic flavors of Matale&apos;s world-famous spices.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Premium Ceylon cinnamon sticks</li>
                  <li>• Fresh cardamom pods and powder</li>
                  <li>• Whole black peppercorns</li>
                  <li>• Spice blends and curry powders</li>
                  <li>• Essential oils and extracts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Activities & Experiences */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Activities & Experiences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Cultural Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Temple Visits:</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Explore Aluvihare Rock Temple and learn about Buddhist history and meditation practices.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Village Experiences:</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Visit traditional villages, meet local families, and learn about rural Sri Lankan life.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Craft Workshops:</h4>
                    <p className="text-sm text-muted-foreground">
                      Learn traditional crafts like pottery, weaving, and wood carving from local artisans.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nature & Adventure</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Adventure activities at Sembuwatta Lake including zip-lining and nature walks through spice forests"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Swimming and picnicking at Sembuwatta Lake</li>
                  <li>• Zip-lining and adventure sports</li>
                  <li>• Nature walks through spice forests</li>
                  <li>• Bird watching and wildlife spotting</li>
                  <li>• Photography tours of plantations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Travel Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Travel Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Visit spice gardens early morning for best experiences</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Bring cash for spice purchases - better prices than cards</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Try cooking classes to learn authentic spice usage</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Respect temple dress codes and photography rules</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Ask for quality certificates when buying expensive spices</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50/50">
              <CardHeader>
                <CardTitle className="text-orange-700 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Some spice gardens may have aggressive sales tactics</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Compare prices at multiple locations before buying</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Check customs regulations for spice imports to your country</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Sembuwatta Lake can be crowded on weekends</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Carry insect repellent for plantation visits</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Attractions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Kandy</CardTitle>
                <CardDescription>Cultural capital - 1 hour</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Kandy&apos;s Temple of the Tooth and beautiful lake surrounded by hills"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Visit the sacred Temple of the Tooth, explore Kandy Lake, and experience traditional cultural shows.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dambulla</CardTitle>
                <CardDescription>Cave temples - 45 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Dambulla Cave Temple complex with ancient Buddha statues and murals"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Explore the magnificent cave temple complex with ancient Buddha statues and beautiful murals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sigiriya</CardTitle>
                <CardDescription>Ancient rock fortress - 1.5 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Sigiriya Rock Fortress rising majestically from the jungle with ancient ruins"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Climb the famous Lion Rock fortress and discover ancient palace ruins and frescoes.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Recommendations */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-amber-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Your Aromatic Matale Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Matale offers a unique sensory journey through the world of spices that have shaped global cuisine for
                millennia. From the moment you arrive, you&apos;ll be enveloped in the intoxicating aromas of cinnamon,
                cardamom, and pepper that have made this region famous worldwide.
              </p>
              <p className="text-muted-foreground mb-4">
                Beyond the spice gardens, discover ancient Buddhist heritage, pristine natural beauty, and authentic
                culinary experiences that showcase the true flavors of Sri Lankan cuisine. This is where tradition meets
                taste in the most delicious way possible.
              </p>
              <p className="text-muted-foreground font-medium">
                Come and discover why Matale is the aromatic heart of Sri Lanka! 🌿🍛
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Ad Banner - Bottom */}
        <div className="my-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500">
          [Advertisement Space - 728x90 Leaderboard - Premium Spice Products & Culinary Tours]
        </div>
      </div>
    </main>
  )
}
