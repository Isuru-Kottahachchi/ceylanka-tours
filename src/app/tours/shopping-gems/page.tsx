import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, CheckCircle, ArrowLeft, ShoppingBag, Gem } from "lucide-react"

export default function ShoppingTour() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/jungle-beach.jpeg"
          alt="Colombo Shopping & Gems Tour"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-600">Shopping Experience</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Colombo Shopping & Gems Tour</h1>
            <p className="text-xl md:text-2xl mb-6">Half Day Experience</p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Discover precious gems, authentic souvenirs, and modern shopping in Sri Lanka's capital
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
                <Clock className="w-8 h-8 text-blue-600" />
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
                <Calendar className="w-8 h-8 text-blue-600" />
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
                <Users className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Group Size</p>
                  <p className="font-semibold">2-10 people</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="font-semibold text-blue-600 text-xl">$50</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tour Description */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Shopping Tour Overview</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-muted-foreground mb-4">
              Embark on a guided shopping adventure through Colombo's gem markets, handicraft centers, and modern malls. Sri Lanka is world-famous for precious gems like sapphires, rubies, and cat's eyes – learn how to identify authentic stones and get the best value.
            </p>
            <p className="text-muted-foreground">
              Perfect for those seeking unique souvenirs, precious gems with certificates, traditional crafts, tea, spices, and contemporary Sri Lankan designs. Your guide will help you navigate markets, negotiate prices, and avoid tourist traps.
            </p>
          </CardContent>
        </Card>

        {/* Itinerary */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Shopping Itinerary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Gem className="w-5 h-5 text-blue-600" />
                  9:00 AM - Certified Gem Museum & Workshop
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Visit a government-certified gem museum and cutting workshop. Learn about:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Blue Sapphires</strong> - Sri Lanka's national gemstone</li>
                  <li>• <strong>Star Sapphires</strong> - Rare 6-ray stars</li>
                  <li>• <strong>Rubies & Alexandrites</strong> - Color-changing wonders</li>
                  <li>• <strong>Cat's Eye</strong> - Unique chatoyancy effect</li>
                  <li>• Gem cutting demonstration by master craftsmen</li>
                  <li>• Certificate of authenticity for all purchases</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2 italic">Duration: 1.5 hours | Expert guidance on quality & pricing</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-blue-600" />
                  11:00 AM - Laksala Handicraft Emporium
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Government-run store featuring authentic Sri Lankan handicrafts with fixed prices:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Traditional wooden masks (devil dance, kolam)</li>
                  <li>• Handwoven batik fabrics & clothing</li>
                  <li>• Lacquerware from Matale</li>
                  <li>• Brass & silver jewelry</li>
                  <li>• Handmade paper products</li>
                  <li>• Ceylonese tea varieties</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2 italic">Duration: 45 minutes | Quality guaranteed, no bargaining needed</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold mb-2">12:00 PM - Pettah Market Experience (Optional)</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Explore Colombo's bustling bazaar district for authentic local shopping:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Spice markets (cinnamon, cardamom, pepper)</li>
                  <li>• Textile lanes with colorful fabrics</li>
                  <li>• Ayurvedic products & herbal oils</li>
                  <li>• Electronics & local gadgets</li>
                  <li>• Street food tasting (optional)</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2 italic">Duration: 1 hour | Bargaining skills required!</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold mb-2">1:00 PM - Modern Shopping Mall Visit</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Visit One Galle Face or Colombo City Centre for contemporary Sri Lankan brands:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• ODEL - Premium Sri Lankan fashion & lifestyle</li>
                  <li>• Paradise Road - Designer home décor</li>
                  <li>• Barefoot - Contemporary handloom textiles</li>
                  <li>• Tea boutiques with premium Ceylon tea</li>
                  <li>• Local chocolate & confectionery brands</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2 italic">Duration: 1 hour | Air-conditioned comfort shopping</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold mb-2">2:00 PM - Return to Hotel</h3>
                <p className="text-sm text-muted-foreground">
                  Drop-off at your hotel with your treasures and shopping bags!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shopping Tips */}
        <Card className="mb-12 border-blue-500">
          <CardHeader>
            <CardTitle className="text-blue-600">Shopping Tips & Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Best Buys in Sri Lanka</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Gems & Jewelry</strong> - 30-50% cheaper than international markets</li>
                  <li>• <strong>Ceylon Tea</strong> - Direct from source, best quality</li>
                  <li>• <strong>Batik Clothing</strong> - Unique hand-painted designs</li>
                  <li>• <strong>Ayurvedic Products</strong> - Natural oils, soaps, cosmetics</li>
                  <li>• <strong>Spices</strong> - Cinnamon, cardamom, vanilla</li>
                  <li>• <strong>Handloom Textiles</strong> - Sarongs, tablecloths</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Shopping Guidelines</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Always ask for gem certificates</li>
                  <li>• Compare prices at 2-3 shops before buying</li>
                  <li>• Bargain respectfully in markets (30-40% off asking price)</li>
                  <li>• Credit cards accepted at registered stores</li>
                  <li>• Keep receipts for customs clearance</li>
                  <li>• Your guide will help identify authentic products</li>
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
                  <span className="text-sm">Air-conditioned vehicle</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">English-speaking shopping guide</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Gem museum entrance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Water bottles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Shopping tips & bargaining assistance</span>
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
                  <span className="text-sm">• Shopping expenses (gems, souvenirs)</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Lunch (can be arranged)</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Personal expenses</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Tips for guide & driver</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
          <CardContent className="pt-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Shop Authentic Sri Lankan Treasures?</h2>
            <p className="mb-6">Book your shopping tour with expert guidance and insider tips</p>
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
