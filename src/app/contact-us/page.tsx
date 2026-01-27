"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Globe,
  Users,
  Calendar,
  Headphones,
  Star,
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from "lucide-react"


interface FormData {
  name: string
  email: string
  phone: string
  country: string
  travelDates: string
  groupSize: string
  interests: string
  message: string
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    country: "",
    travelDates: "",
    groupSize: "",
    interests: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          travelDates: "",
          groupSize: "",
          interests: "",
          message: ""
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <MessageCircle className="h-16 w-16 text-cyan-100" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In Touch With Us
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto font-light text-cyan-100">
            Ready to explore Sri Lanka? Our travel experts are here to craft your perfect adventure.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Clock className="h-4 w-4 mr-2" />
              24/7 Support Available
            </Badge>
            {/* <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Shield className="h-4 w-4 mr-2" />
              Licensed Tour Operator
            </Badge> */}
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Star className="h-4 w-4 mr-2" />
              Expert Local Guides
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Quick Contact Info */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Can We Help You Today?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred method of contact. Our travel specialists are ready to assist you with personalized service.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {/* Phone Contact */}
            <Card className="group text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-t-green-500">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <p className="text-sm text-muted-foreground mb-4">Speak directly with our experts</p>
                <a href="tel:+94707646765" className="font-semibold text-green-600 hover:text-green-700 block mb-2 text-lg">+94 70 764 6765</a>
                <p className="text-xs text-muted-foreground">Daily: 8:00 AM - 10:00 PM</p>
              </CardContent>
            </Card>

            {/* Email Contact */}
            <Card className="group text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-t-blue-500">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground mb-4">Detailed travel inquiries</p>
                <a href="mailto:ceylankatoursinfo@gmail.com" className="font-semibold text-blue-600 hover:text-blue-700 block mb-2 text-sm break-all">ceylankatoursinfo@gmail.com</a>
                <p className="text-xs text-muted-foreground">Quick replies guaranteed</p>
              </CardContent>
            </Card>

            {/* WhatsApp Contact */}
            <Card className="group text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-t-emerald-500">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-emerald-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-4">Instant messaging support</p>
                <a href="https://wa.me/94707646765" className="font-semibold text-emerald-600 hover:text-emerald-700 block mb-2 text-lg">+94 70 764 6765</a>
                <p className="text-xs text-muted-foreground">Chat now for quick help</p>
              </CardContent>
            </Card>

            {/* Office Visit */}
            {/* <Card className="group text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-t-purple-500">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-purple-500 to-violet-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Visit Office</h3>
                <p className="text-sm text-muted-foreground mb-4">In-person consultation</p>
                <p className="font-semibold text-purple-600 block mb-2">Colombo 03</p>
                <p className="text-xs text-muted-foreground">By appointment</p>
              </CardContent>
            </Card> */}
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-t-4 border-t-cyan-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
                  <Send className="h-6 w-6 text-cyan-600" />
                  Plan Your Sri Lanka Adventure
                </CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your dream Sri Lanka experience, and our travel experts will create a personalized itinerary just for you.
                  All information is kept confidential and secure.
                </p>
              </CardHeader>
              <CardContent>
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-center gap-2 text-green-800 dark:text-green-300">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-semibold">Message Sent Successfully!</span>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                      Thank you for your inquiry. Our travel consultant will contact you within 2 hours during business hours.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <div className="flex items-center gap-2 text-red-800 dark:text-red-300">
                      <span className="font-semibold">Failed to Send Message</span>
                    </div>
                    <p className="text-sm text-red-700 dark:text-red-400 mt-1">
                      Something went wrong. Please try again or contact us directly via phone or WhatsApp.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^0-9+\s()-]/g, '')
                          setFormData(prev => ({ ...prev, phone: value }))
                        }}
                        placeholder="Please enter a valid phone number"
                        pattern="[+]?[0-9\s-()]{10,20}"
                        title="Please enter a valid phone number (10-20 digits, can include +, spaces, dashes, or parentheses)"
                        className="w-full"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Include country code (e.g., +1, +44, +94)
                      </p>
                    </div>
                    <div>
                      <label htmlFor="country" className="text-sm font-medium mb-2 block">
                        Country of Residence
                      </label>
                      <Input
                        id="country"
                        name="country"
                        type="text"
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder="Enter your country"
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Travel Details */}
                  <Separator className="my-6" />
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    Travel Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="travelDates" className="text-sm font-medium mb-2 block">
                        Travel Dates
                      </label>
                      <Input
                        id="travelDates"
                        name="travelDates"
                        type="date"
                        value={formData.travelDates}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        placeholder="dd/mm/yyyy"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="groupSize" className="text-sm font-medium mb-2 block">
                        Group Size
                      </label>
                      <select
                        id="groupSize"
                        name="groupSize"
                        value={formData.groupSize}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="">Select group size</option>
                        <option value="1">Solo Traveler</option>
                        <option value="2">Couple (2 people)</option>
                        <option value="3-4">Small Group (3-4 people)</option>
                        <option value="5-8">Medium Group (5-8 people)</option>
                        <option value="9+">Large Group (9+ people)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interests" className="text-sm font-medium mb-2 block">
                      Travel Interests & Preferences
                    </label>
                    <Input
                      id="interests"
                      name="interests"
                      type="text"
                      value={formData.interests}
                      onChange={handleInputChange}
                      placeholder="e.g., Cultural sites, Wildlife, Beaches, Adventure activities"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Tell Us About Your Dream Sri Lanka Experience *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share your travel dreams, special requirements, budget preferences, or any questions about Sri Lanka. The more details you provide, the better we can customize your perfect itinerary."
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send My Travel Inquiry
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground mt-4">
                    By submitting this form, you agree to our privacy policy. We will never share your information with third parties
                    and will only use it to provide you with travel services and updates.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Information */}
          <div className="space-y-6">

            {/* Office Information */}
            <Card className="border-l-4 border-l-orange-500">
              {/* <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-orange-600" />
                  Office Location
                </CardTitle>
              </CardHeader> */}
              <CardContent>
                <div className="space-y-3">
                  {/* <div>
                    <h4 className="font-semibold mb-1">Ceylon Lanka Tours</h4>
                    <p className="text-sm text-muted-foreground">
                      123 Galle Road<br />
                      Colombo 03<br />
                      Sri Lanka 00300
                    </p>
                  </div> */}
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-orange-600" />
                      <span className="font-medium">Business Hours:</span>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1 ml-6">
                      <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                      <p className="text-green-600 font-medium">Emergency support: 24/7</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-green-600" />
                  Why Choose Ceylanka Tours?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm">Local Expertise</h4>
                      <p className="text-xs text-muted-foreground">Born and raised in Sri Lanka with insider knowledge</p>
                    </div>
                  </div>
                  {/* <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm">Licensed & Insured</h4>
                      <p className="text-xs text-muted-foreground">Fully licensed tour operator with comprehensive insurance</p>
                    </div>
                  </div> */}
                  <div className="flex items-start gap-3">
                    <Headphones className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm">24/7 Support</h4>
                      <p className="text-xs text-muted-foreground">Round-the-clock assistance during your travels</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm">Customized Experiences</h4>
                      <p className="text-xs text-muted-foreground">Tailor-made tours to match your interests and budget</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Promise */}
            <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-cyan-200 dark:border-cyan-800">
              <CardContent className="p-6 text-center">
                <div className="bg-cyan-100 dark:bg-cyan-900/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="font-semibold mb-2 text-cyan-800 dark:text-cyan-200">Quick Response Guarantee</h3>
                <p className="text-sm text-cyan-700 dark:text-cyan-300 mb-4">
                  We respond to all inquiries within 2 hours during business hours, and within 24 hours on weekends.
                </p>
                <Badge className="bg-cyan-600 text-white">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Response Guaranteed
                </Badge>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-l-4 border-l-pink-500">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-1.5 rounded">
                    <Globe className="h-4 w-4 text-white" />
                  </div>
                  Follow Our Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-muted-foreground mb-3">
                  Get inspired by real Sri Lanka experiences
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <a 
                    href="https://www.facebook.com/share/1ATdD1ebAM/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full justify-start h-8 px-2 hover:bg-blue-500 hover:text-white hover:border-blue-500 dark:hover:bg-blue-600 dark:hover:border-blue-600 transition-all group cursor-pointer"
                    >
                      <Facebook className="h-3.5 w-3.5 mr-1.5 text-blue-600 group-hover:text-white transition-colors flex-shrink-0" />
                      <span className="text-xs truncate">Facebook</span>
                    </Button>
                  </a>
                  <a 
                    href="https://www.instagram.com/ceylanka_tours?igsh=ZHV6Ymh1ZGxpdmdh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full justify-start h-8 px-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-pink-500 dark:hover:from-purple-600 dark:hover:to-pink-600 transition-all group cursor-pointer"
                    >
                      <Instagram className="h-3.5 w-3.5 mr-1.5 text-pink-600 group-hover:text-white transition-colors flex-shrink-0" />
                      <span className="text-xs truncate">Instagram</span>
                    </Button>
                  </a>
                  <a 
                    href="https://twitter.com/ceylonlankatours" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full justify-start h-8 px-2 hover:bg-blue-400 hover:text-white hover:border-blue-400 dark:hover:bg-blue-500 dark:hover:border-blue-500 transition-all group cursor-pointer"
                    >
                      <Twitter className="h-3.5 w-3.5 mr-1.5 text-blue-400 group-hover:text-white transition-colors flex-shrink-0" />
                      <span className="text-xs truncate">Twitter</span>
                    </Button>
                  </a>
                  <a 
                    href="https://youtube.com/@ceylonlankatours" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full justify-start h-8 px-2 hover:bg-red-600 hover:text-white hover:border-red-600 dark:hover:bg-red-700 dark:hover:border-red-700 transition-all group cursor-pointer"
                    >
                      <Youtube className="h-3.5 w-3.5 mr-1.5 text-red-600 group-hover:text-white transition-colors flex-shrink-0" />
                      <span className="text-xs truncate">YouTube</span>
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about contacting us and planning your Sri Lanka trip.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How quickly will you respond to my inquiry?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We guarantee a quick replies during business hours (8 AM - 8 PM Sri Lanka time) and within 24 hours on weekends.
                  For urgent matters, call us directly or use WhatsApp for immediate assistance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is there a cost for travel consultation?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All initial consultations and itinerary planning are completely free. We only charge service fees when you decide to book
                  your tour with us. Our goal is to help you plan the perfect Sri Lanka experience regardless of your decision.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can you help with visa and travel documents?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We provide guidance on visa requirements, assist with ETA applications, and advise on necessary travel documents.
                  We&apos;ll also provide detailed pre-travel checklists to ensure you&apos;re fully prepared for your Sri Lanka adventure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer support during my trip?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely! We provide 24/7 support throughout your entire trip. You&apos;ll have direct contact with our emergency line,
                  and our local team is always available to assist with any questions or unexpected situations during your travels.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Sri Lanka Adventure?</h2>
              <p className="text-xl mb-6 text-cyan-100">
                Don&apos;t wait! The best time to plan your perfect Sri Lanka experience is now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+94707646765">
                  <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 cursor-pointer">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now: +94 70 764 6765
                  </Button>
                </a>
                <a href="https://wa.me/94707646765" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-600 cursor-pointer">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp Chat
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>
    </main>
  )
}