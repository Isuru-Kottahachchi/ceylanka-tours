import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, CheckCircle, ArrowLeft, Leaf, ChefHat } from "lucide-react"

export default function SpiceGardenTour() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/jungle-beach.jpeg"
          alt="Spice Garden & Cooking Class"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-green-600">Culinary Experience</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Spice Garden & Cooking Class</h1>
            <p className="text-xl md:text-2xl mb-6">Half Day Experience</p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Discover Ceylon spices and learn to cook authentic Sri Lankan curry
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/tours">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tours
          </Link>
        </Button>

        {/* Tour Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold">Half Day</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Start Time</p>
                  <p className="font-semibold">9:00 AM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Group Size</p>
                  <p className="font-semibold">2-8 people</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="font-semibold text-green-600 text-xl">$55</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tour Description */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Experience Overview</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-muted-foreground mb-4">
              Immerse yourself in Sri Lanka's spice heritage with a visit to an authentic spice garden in Matale or Mawanella. Sri Lanka has been the world's spice hub for centuries, producing cinnamon, cardamom, cloves, pepper, and vanilla that traders once traveled across oceans to obtain.
            </p>
            <p className="text-muted-foreground">
              This hands-on experience includes a guided spice garden tour where you'll see, smell, and taste spices in their natural form, followed by a traditional cooking class where you'll learn to prepare authentic Sri Lankan rice and curry using fresh ingredients and centuries-old recipes.
            </p>
          </CardContent>
        </Card>

        {/* Itinerary */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Day Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  9:00 AM - Hotel Pickup & Spice Garden Arrival
                </h3>
                <p className="text-sm text-muted-foreground">
                  Pickup from your hotel in Kandy, Matale, or nearby areas. Short drive to an organic spice plantation. Welcome drink with king coconut water.
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-bold mb-2">9:30 AM - Guided Spice Garden Walk</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Expert guide takes you through the garden explaining each plant's medicinal and culinary uses. Spices you'll discover:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Cinnamon (Kurundu):</strong> See bark being peeled from trees</li>
                  <li>• <strong>Cardamom (Ensal):</strong> Green pods on climbing vines</li>
                  <li>• <strong>Cloves (Karabu Nati):</strong> Dried flower buds</li>
                  <li>• <strong>Black Pepper (Gammiris):</strong> The king of spices</li>
                  <li>• <strong>Nutmeg & Mace:</strong> Two spices from one fruit</li>
                  <li>• <strong>Vanilla:</strong> Expensive orchid pods</li>
                  <li>• <strong>Turmeric (Kaha):</strong> Golden root with healing properties</li>
                  <li>• <strong>Ginger:</strong> Fresh rhizome for tea and curry</li>
                  <li>• <strong>Curry Leaves:</strong> Essential aromatic herb</li>
                  <li>• <strong>Pandan (Rampe):</strong> Fragrant leaf for rice</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2 italic">Duration: 1 hour | Taste and smell each spice</p>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-bold mb-2">10:30 AM - Ayurvedic Remedies Demonstration</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Learn how spices are used in traditional medicine:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Cinnamon oil for respiratory health</li>
                  <li>• Turmeric paste for skin care</li>
                  <li>• Ginger tea for digestion</li>
                  <li>• Clove oil for toothache</li>
                  <li>• Sample ayurvedic herbal tea blend</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-green-600" />
                  11:00 AM - Traditional Cooking Class
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Move to the outdoor kitchen pavilion. Professional chef teaches you to cook authentic Sri Lankan rice and curry:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Coconut Sambol:</strong> Spicy coconut relish</li>
                  <li>• <strong>Dhal Curry:</strong> Red lentils with tempered spices</li>
                  <li>• <strong>Potato Curry:</strong> Creamy coconut-based</li>
                  <li>• <strong>Green Bean Mellum:</strong> Stir-fried vegetables with coconut</li>
                  <li>• <strong>Fish/Chicken Curry:</strong> Your choice with roasted spices</li>
                  <li>• <strong>Rice Cooking:</strong> Perfect fluffy Sri Lankan rice</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  Learn techniques: tempering spices, roasting curry powder, coconut milk extraction, proper heat levels.
                </p>
                <p className="text-sm text-muted-foreground mt-2 italic">Duration: 1.5 hours | Hands-on participation</p>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-bold mb-2">12:30 PM - Enjoy Your Meal</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Sit down to eat the delicious meal you've prepared! Served on traditional banana leaf with:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Your freshly cooked rice and curries</li>
                  <li>• Papadam (crispy lentil crackers)</li>
                  <li>• Fresh fruit for dessert</li>
                  <li>• Ceylon tea or fresh lime juice</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-bold mb-2">1:30 PM - Shopping & Departure</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Visit the spice shop to purchase fresh spices at wholesale prices:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Pure Ceylon cinnamon sticks</li>
                  <li>• Organic curry powder blends</li>
                  <li>• Vanilla pods and extract</li>
                  <li>• Herbal teas and tisanes</li>
                  <li>• Ayurvedic oils and balms</li>
                  <li>• Recipe book (complimentary)</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">Return transfer to your hotel.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What You'll Learn */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-green-600">Cooking Skills You'll Master</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-3">Techniques</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Roasting and grinding curry powder</li>
                  <li>• Tempering spices in coconut oil</li>
                  <li>• Extracting fresh coconut milk</li>
                  <li>• Balancing curry flavors (heat, sour, sweet)</li>
                  <li>• Cooking rice to perfect texture</li>
                  <li>• Making sambols and chutneys</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Cultural Insights</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Sri Lankan spice trade history</li>
                  <li>• Regional curry variations</li>
                  <li>• Meal customs and etiquette</li>
                  <li>• Ayurvedic food principles</li>
                  <li>• Sustainable spice farming</li>
                  <li>• Take-home recipes and tips</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Inclusions */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">Included</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Hotel pickup & drop-off</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Guided spice garden tour</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Hands-on cooking class</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Full lunch (your cooked meal)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">All ingredients & equipment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Recipe booklet</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Herbal tea tasting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Apron & cooking certificate</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-red-600">Not Included</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Spice purchases (optional)</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Ayurvedic products (optional)</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Personal expenses</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Tips for guide & chef</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
          <CardContent className="pt-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Spice Up Your Sri Lankan Adventure!</h2>
            <p className="mb-6">Book this culinary journey and bring authentic flavors home</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Link href="/contact-us">Book Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/20 border-white text-white hover:bg-white/30">
                WhatsApp Inquiry
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
