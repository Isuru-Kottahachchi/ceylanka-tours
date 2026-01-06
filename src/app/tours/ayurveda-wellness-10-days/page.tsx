import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, CheckCircle, ArrowLeft, Sparkles } from "lucide-react"

export default function AyurvedaWellnessTour() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/jungle-beach.jpeg"
          alt="Ayurveda Wellness Retreat Sri Lanka"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-purple-600">Wellness & Rejuvenation</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Ayurveda & Wellness Retreat</h1>
            <p className="text-xl md:text-2xl mb-6">10 Days / 9 Nights</p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Rejuvenate your body and mind with authentic Ayurvedic treatments and yoga
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
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold">10 Days / 9 Nights</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Best For</p>
                  <p className="font-semibold">Solo / Couples</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Starting From</p>
                  <p className="font-semibold text-purple-600 text-xl">$950</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tour Description */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Retreat Overview</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-muted-foreground mb-4">
              Immerse yourself in the ancient healing science of Ayurveda at luxury wellness resorts. This 10-day retreat combines traditional Ayurvedic treatments, yoga, meditation, and healthy cuisine to detoxify, rejuvenate, and restore balance to your body and mind.
            </p>
            <p className="text-muted-foreground">
              Perfect for those seeking stress relief, detoxification, weight management, or simply a peaceful escape from modern life. Experience personalized treatment plans designed by expert Ayurvedic doctors based on your individual body type (dosha).
            </p>
          </CardContent>
        </Card>

        {/* Program Structure */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Daily Wellness Program</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  Days 1-2: Consultation & Assessment
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Arrival and check-in to luxury wellness resort. Comprehensive Ayurvedic consultation with experienced doctor. Dosha assessment (Vata, Pitta, Kapha). Personalized treatment plan preparation.
                </p>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Initial health consultation</li>
                  <li>• Body type assessment</li>
                  <li>• Introduction to yoga & meditation</li>
                  <li>• Welcome herbal tea ceremony</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-bold mb-2">Days 3-8: Active Treatment Phase</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Daily Ayurvedic treatments tailored to your needs. Morning yoga and pranayama. Afternoon meditation sessions. Ayurvedic vegetarian meals. Herbal detox programs.
                </p>
                <p className="text-sm font-semibold mt-3 mb-2">Typical Daily Schedule:</p>
                <ul className="text-sm space-y-1">
                  <li>• 6:30 AM - Morning yoga & breathing exercises</li>
                  <li>• 8:00 AM - Healthy Ayurvedic breakfast</li>
                  <li>• 9:00 AM - Ayurvedic massage therapy (90 mins)</li>
                  <li>• 11:00 AM - Herbal steam bath / therapy</li>
                  <li>• 12:30 PM - Nutritious lunch</li>
                  <li>• 3:00 PM - Additional treatment session</li>
                  <li>• 5:00 PM - Meditation & mindfulness</li>
                  <li>• 7:00 PM - Light dinner</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-bold mb-2">Days 9-10: Relaxation & Departure</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Final consultation with doctor. Personalized home care plan. Gentle yoga sessions. Beach relaxation time. Farewell ceremony and departure.
                </p>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Final health assessment</li>
                  <li>• Take-home wellness plan</li>
                  <li>• Cooking demonstration (optional)</li>
                  <li>• Beach meditation session</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Treatments Offered */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Ayurvedic Treatments Included</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-3">Body Treatments</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Abhyanga:</strong> Full body oil massage</li>
                  <li>• <strong>Shirodhara:</strong> Warm oil therapy for head</li>
                  <li>• <strong>Swedana:</strong> Herbal steam bath</li>
                  <li>• <strong>Pinda Sweda:</strong> Herbal poultice massage</li>
                  <li>• <strong>Udvarthana:</strong> Herbal powder massage</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Wellness Activities</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Daily Hatha Yoga sessions</li>
                  <li>• Pranayama (breathing exercises)</li>
                  <li>• Guided meditation classes</li>
                  <li>• Ayurvedic cooking class</li>
                  <li>• Nature walks & beach therapy</li>
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
                  <span className="text-sm">9 nights luxury wellness resort</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">All Ayurvedic meals (3 meals/day)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Doctor consultations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Daily Ayurvedic treatments</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Yoga & meditation classes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Herbal teas & supplements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Airport transfers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Wellness consultation kit</span>
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
                  <span className="text-sm">• International flights</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Travel insurance</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Alcoholic beverages</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Spa products for purchase</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Personal expenses</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <CardContent className="pt-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Begin Your Wellness Journey?</h2>
            <p className="mb-6">Contact us to book your personalized Ayurveda retreat</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Link href="/contact-us">Contact Us</Link>
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
