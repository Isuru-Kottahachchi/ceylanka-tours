"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Globe, 
  FileText, 
  Clock, 
  MapPin, 
  Users, 
  Shield, 
  ExternalLink, 
  Phone, 
  Mail, 
  CheckCircle,
  XCircle,
  AlertTriangle,
  BookOpen,
  CreditCard,
  Calendar,
  Download,
  Building,
  Plane,
  DollarSign,
  Navigation2,
  Info
} from "lucide-react"



export default function VisaInformationPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                <BookOpen className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Sri Lanka Visa Information
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Your complete guide to visa requirements, application procedures, and entry regulations
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              <Badge variant="secondary" className="bg-white/20 text-white text-sm md:text-base px-4 py-2 backdrop-blur-sm">
                <Globe className="h-4 w-4 mr-2" />
                195+ Countries
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white text-sm md:text-base px-4 py-2 backdrop-blur-sm">
                <Clock className="h-4 w-4 mr-2" />
                24-48 Hour Processing
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white text-sm md:text-base px-4 py-2 backdrop-blur-sm">
                <Shield className="h-4 w-4 mr-2" />
                Official Guidelines
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg">
                <ExternalLink className="h-5 w-5 mr-2" />
                Apply Online Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Download className="h-5 w-5 mr-2" />
                Download Checklist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Visa Check */}
      <section className="py-12 bg-white dark:bg-gray-800 -mt-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Check Your Visa Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Visa Free */}
              <Card className="border-2 border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-3 p-3 bg-green-100 dark:bg-green-900 rounded-full w-fit">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-green-700 dark:text-green-400 text-xl">Visa Free Entry</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Up to 30 days</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center mb-4">
                    <Badge variant="outline" className="text-green-600 border-green-300">Free Entry</Badge>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Countries include:</p>
                    <div className="flex flex-wrap gap-1">
                      {["Singapore", "Maldives", "Thailand", "Malaysia", "Indonesia"].map((country) => (
                        <Badge key={country} variant="secondary" className="text-xs">{country}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="pt-3">
                    <Button className="w-full bg-green-600 hover:bg-green-700" size="sm">
                      <Info className="h-4 w-4 mr-2" />
                      View Full List
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* ETA Required */}
              <Card className="border-2 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-3 p-3 bg-blue-100 dark:bg-blue-900 rounded-full w-fit">
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-700 dark:text-blue-400 text-xl">ETA Required</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Electronic Travel Authorization</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center mb-4">
                    <Badge variant="outline" className="text-blue-600 border-blue-300">USD 50 Online</Badge>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Major countries:</p>
                    <div className="flex flex-wrap gap-1">
                      {["USA", "UK", "Canada", "Australia", "Germany"].map((country) => (
                        <Badge key={country} variant="secondary" className="text-xs">{country}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="pt-3">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Apply ETA
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Embassy Visa */}
              <Card className="border-2 border-red-200 dark:border-red-800 hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-3 p-3 bg-red-100 dark:bg-red-900 rounded-full w-fit">
                    <Building className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-red-700 dark:text-red-400 text-xl">Embassy Visa</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Apply through embassy</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center mb-4">
                    <Badge variant="outline" className="text-red-600 border-red-300">Advance Application</Badge>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Some restricted countries</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Contact nearest Sri Lankan embassy for specific requirements
                    </p>
                  </div>
                  <div className="pt-3">
                    <Button className="w-full bg-red-600 hover:bg-red-700" size="sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      Find Embassy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types Overview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Sri Lankan Visas</h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Choose the appropriate visa category based on your purpose of visit
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Tourist Visa */}
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <Globe className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Tourist Visa (ETA)</CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-300">For leisure and tourism</p>
                      </div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">Most Popular</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Duration:</span>
                      <p className="text-gray-600 dark:text-gray-300">30 days (extendable)</p>
                    </div>
                    <div>
                      <span className="font-medium">Fee:</span>
                      <p className="text-gray-600 dark:text-gray-300">USD 50 (online)</p>
                    </div>
                    <div>
                      <span className="font-medium">Processing:</span>
                      <p className="text-gray-600 dark:text-gray-300">24-48 hours</p>
                    </div>
                    <div>
                      <span className="font-medium">Extension:</span>
                      <p className="text-gray-600 dark:text-gray-300">Up to 6 months</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Permitted Activities:</p>
                    <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 text-green-500 mr-2" />Tourism and sightseeing</li>
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 text-green-500 mr-2" />Visiting friends and family</li>
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 text-green-500 mr-2" />Short-term cultural programs</li>
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 text-green-500 mr-2" />Medical treatment</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Business Visa */}
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                        <Building className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Business Visa</CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-300">For business activities</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Duration:</span>
                      <p className="text-gray-600 dark:text-gray-300">30 days (extendable)</p>
                    </div>
                    <div>
                      <span className="font-medium">Fee:</span>
                      <p className="text-gray-600 dark:text-gray-300">USD 50 (online)</p>
                    </div>
                    <div>
                      <span className="font-medium">Processing:</span>
                      <p className="text-gray-600 dark:text-gray-300">24-48 hours</p>
                    </div>
                    <div>
                      <span className="font-medium">Extension:</span>
                      <p className="text-gray-600 dark:text-gray-300">Up to 1 year</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Permitted Activities:</p>
                    <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 text-green-500 mr-2" />Business meetings</li>
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 text-green-500 mr-2" />Conference participation</li>
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 text-green-500 mr-2" />Trade negotiations</li>
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 text-green-500 mr-2" />Investment discussions</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Transit Visa */}
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                        <Plane className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Transit Visa</CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-300">For airport layovers</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Duration:</span>
                      <p className="text-gray-600 dark:text-gray-300">2 days maximum</p>
                    </div>
                    <div>
                      <span className="font-medium">Fee:</span>
                      <p className="text-gray-600 dark:text-gray-300">USD 25 (online)</p>
                    </div>
                    <div>
                      <span className="font-medium">Processing:</span>
                      <p className="text-gray-600 dark:text-gray-300">2-4 hours</p>
                    </div>
                    <div>
                      <span className="font-medium">Extension:</span>
                      <p className="text-gray-600 dark:text-gray-300">Not extendable</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Conditions:</p>
                    <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 text-orange-500 mr-2" />Airport transit only</li>
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 text-orange-500 mr-2" />Valid onward ticket required</li>
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 text-orange-500 mr-2" />Cannot leave airport premises</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Multiple Entry Visa */}
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                        <Navigation2 className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Multiple Entry Visa</CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-300">For frequent travelers</p>
                      </div>
                    </div>
                    <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">Premium</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Validity:</span>
                      <p className="text-gray-600 dark:text-gray-300">6 months</p>
                    </div>
                    <div>
                      <span className="font-medium">Fee:</span>
                      <p className="text-gray-600 dark:text-gray-300">USD 100 (online)</p>
                    </div>
                    <div>
                      <span className="font-medium">Processing:</span>
                      <p className="text-gray-600 dark:text-gray-300">48-72 hours</p>
                    </div>
                    <div>
                      <span className="font-medium">Entries:</span>
                      <p className="text-gray-600 dark:text-gray-300">Multiple</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Benefits:</p>
                    <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 text-purple-500 mr-2" />Multiple entries within 6 months</li>
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 text-purple-500 mr-2" />30 days per visit</li>
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 text-purple-500 mr-2" />Business and tourism purposes</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Apply for Your Visa</h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                Follow these simple steps to get your Sri Lanka visa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Choose Application Method",
                  description: "Select online ETA system or apply on arrival. Online application is recommended for faster processing.",
                  icon: <Globe className="h-8 w-8" />,
                  color: "blue"
                },
                {
                  step: "02", 
                  title: "Prepare Required Documents",
                  description: "Gather passport, photos, travel itinerary, and supporting documents based on visa type.",
                  icon: <FileText className="h-8 w-8" />,
                  color: "green"
                },
                {
                  step: "03",
                  title: "Complete Online Form",
                  description: "Fill out the ETA application form with accurate personal and travel information.",
                  icon: <Users className="h-8 w-8" />,
                  color: "orange"
                },
                {
                  step: "04",
                  title: "Upload Documents",
                  description: "Upload clear copies of required documents including passport bio page and photograph.",
                  icon: <Download className="h-8 w-8 rotate-180" />,
                  color: "purple"
                },
                {
                  step: "05",
                  title: "Make Payment",
                  description: "Pay visa fee using credit card, debit card, or other accepted payment methods.",
                  icon: <CreditCard className="h-8 w-8" />,
                  color: "red"
                },
                {
                  step: "06",
                  title: "Receive ETA Approval",
                  description: "Get your Electronic Travel Authorization via email and print it for immigration.",
                  icon: <CheckCircle className="h-8 w-8" />,
                  color: "cyan"
                }
              ].map((step, index) => (
                <Card key={index} className="relative hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 bg-${step.color}-100 dark:bg-${step.color}-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`text-${step.color}-600`}>
                        {step.icon}
                      </div>
                    </div>
                    <div className={`text-2xl font-bold text-${step.color}-600 text-center mb-2`}>
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-center mb-3">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm text-center leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 max-w-3xl mx-auto">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <Info className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg mb-2 text-blue-800 dark:text-blue-200">Pro Tips for Faster Processing</h3>
                      <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
                        <li>• Apply at least 3 days before your travel date</li>
                        <li>• Ensure passport has at least 6 months validity</li>
                        <li>• Use clear, high-quality scanned documents</li>
                        <li>• Double-check all information before submission</li>
                        <li>• Keep a printed copy of your ETA for immigration</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Checklist */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Visa Requirements Checklist</h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                Essential documents and eligibility criteria for your application
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Passport Requirements */}
              <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
                    Passport Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Valid passport with minimum 6 months remaining validity",
                      "At least 2 blank pages for immigration stamps",
                      "Machine-readable passport (recommended)",
                      "Clear, legible passport pages without damage",
                      "Passport issued within last 10 years"
                    ].map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Financial Requirements */}
              <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <DollarSign className="h-6 w-6 text-green-600 mr-3" />
                    Financial Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Proof of sufficient funds (USD 15 per day minimum)",
                      "Bank statements from last 3 months",
                      "Valid credit cards or traveler's cheques",
                      "Return or onward journey ticket",
                      "Hotel reservations or accommodation proof"
                    ].map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Health Requirements */}
              <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Shield className="h-6 w-6 text-red-600 mr-3" />
                    Health Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Yellow fever vaccination (if arriving from infected areas)",
                      "Travel health insurance (recommended)",
                      "COVID-19 vaccination certificate (check current requirements)",
                      "Medical certificate for special conditions",
                      "Prescription medication documentation"
                    ].map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Additional Documents */}
              <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <FileText className="h-6 w-6 text-purple-600 mr-3" />
                    Additional Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Recent passport-sized photographs (white background)",
                      "Completed visa application form",
                      "Travel itinerary or tour booking confirmation",
                      "Employment letter (for business visa)",
                      "Invitation letter (if applicable)"
                    ].map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Official Government Links */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Official Government Resources</h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                Authorized sources for visa applications and immigration information
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Official ETA Portal",
                  url: "https://www.eta.gov.lk",
                  description: "Apply for Electronic Travel Authorization online through the official government portal",
                  icon: <Globe className="h-6 w-6 text-blue-600" />,
                  type: "Primary",
                  color: "blue"
                },
                {
                  name: "Department of Immigration",
                  url: "https://www.immigration.gov.lk",
                  description: "Official immigration department website with policies and procedures",
                  icon: <Shield className="h-6 w-6 text-green-600" />,
                  type: "Official",
                  color: "green"
                },
                {
                  name: "Sri Lanka Tourism Authority",
                  url: "https://www.sltda.gov.lk",
                  description: "Tourism guidelines, travel advisories, and visitor information",
                  icon: <MapPin className="h-6 w-6 text-orange-600" />,
                  type: "Tourism",
                  color: "orange"
                },
                {
                  name: "Ministry of Foreign Affairs",
                  url: "https://www.mfa.gov.lk",
                  description: "Diplomatic missions, consular services, and bilateral relations",
                  icon: <Building className="h-6 w-6 text-purple-600" />,
                  type: "Diplomatic",
                  color: "purple"
                },
                {
                  name: "Airport Immigration Services",
                  url: "https://airport.lk/immigration",
                  description: "Colombo Airport immigration procedures and arrival information",
                  icon: <Plane className="h-6 w-6 text-red-600" />,
                  type: "Airport",
                  color: "red"
                },
                {
                  name: "Sri Lanka Customs",
                  url: "https://www.customs.gov.lk",
                  description: "Customs regulations, duty information, and prohibited items list",
                  icon: <FileText className="h-6 w-6 text-cyan-600" />,
                  type: "Customs",
                  color: "cyan"
                }
              ].map((link, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-2 bg-${link.color}-100 dark:bg-${link.color}-900 rounded-lg`}>
                        {link.icon}
                      </div>
                      <Badge variant="outline" className={`text-${link.color}-600 border-${link.color}-300 text-xs`}>
                        {link.type}
                      </Badge>
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {link.description}
                    </p>
                    <Button 
                      size="sm" 
                      className="w-full group-hover:bg-blue-600 transition-colors"
                      onClick={() => window.open(link.url, '_blank', 'noopener,noreferrer')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Official Site
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12">
              <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-yellow-800 dark:text-yellow-200 mb-2">
                        Important Security Notice
                      </h3>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm leading-relaxed">
                        Always use official government websites for visa applications. Beware of unofficial agents or websites 
                        that may charge additional fees or provide fraudulent services. The official ETA website (eta.gov.lk) 
                        is the only authorized portal for online visa applications. CeyLanka Tours provides information for 
                        guidance purposes only and is not responsible for visa approval or rejection.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Visa Assistance?</h2>
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Our travel experts are here to help you navigate the visa application process smoothly
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-bold mb-2">24/7 Helpline</h3>
                  <p className="text-blue-100 text-sm">+94 77 123 4567</p>
                  <p className="text-blue-100 text-sm">Visa Support Available</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Email Support</h3>
                  <p className="text-blue-100 text-sm">visa@ceylanka-tours.com</p>
                  <p className="text-blue-100 text-sm">Quick Response Guaranteed</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Office Hours</h3>
                  <p className="text-blue-100 text-sm">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-blue-100 text-sm">Emergency Support 24/7</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg">
                <Phone className="h-5 w-5 mr-2" />
                Get Visa Help Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <ExternalLink className="h-5 w-5 mr-2" />
                Start ETA Application
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
