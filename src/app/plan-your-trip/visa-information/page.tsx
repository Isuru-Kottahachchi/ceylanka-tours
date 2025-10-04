"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
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
  AlertTriangle,
  BookOpen,
  CreditCard,
  Download,
  Building,
  Plane,
  DollarSign,
  Navigation2,
  Info,
  ChevronDown,
  ChevronUp,
  Eye,
  Home,
  GraduationCap,
  Heart,
  Briefcase,
  UserCheck,
} from "lucide-react"



export default function VisaInformationPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

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
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
                onClick={() => window.open('https://eta.gov.lk', '_blank', 'noopener,noreferrer')}
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Apply for ETA Online
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => window.open('https://eta.gov.lk/etaslvisa/web/track_status.jsp', '_blank', 'noopener,noreferrer')}
              >
                <Eye className="h-5 w-5 mr-2" />
                Check Application Status
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => {
                  const element = document.createElement('a');
                  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Sri Lanka Visa Checklist
                  
1. Valid passport (minimum 6 months validity)
2. Recent passport-size photographs
3. Return or onward flight tickets
4. Proof of accommodation
5. Bank statements/financial proof
6. Travel insurance (recommended)
7. Yellow fever vaccination certificate (if applicable)
8. Completed ETA application form
9. Payment method for visa fees
10. Employment letter (for business visas)

Apply online at: https://eta.gov.lk
Processing time: 24-48 hours
Apply 3-7 days before travel`));
                  element.setAttribute('download', 'sri-lanka-visa-checklist.txt');
                  element.style.display = 'none';
                  document.body.appendChild(element);
                  element.click();
                  document.body.removeChild(element);
                }}
              >
                <Download className="h-5 w-5 mr-2" />
                Download Checklist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types Section */}
      <section className="py-16 bg-white dark:bg-gray-800 -mt-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Who Needs Visa Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Who Needs a Visa to Travel to Sri Lanka?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Understanding visa requirements based on your nationality and recent policy updates
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* General Requirement */}
                <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
                  <CardHeader>
                    <CardTitle className="text-blue-800 dark:text-blue-200 flex items-center space-x-2">
                      <Globe className="h-6 w-6" />
                      <span>Universal Visa Requirement</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
                        <strong>All international travelers require authorization to enter Sri Lanka</strong> - either
                        a visa or Electronic Travel Authorization (ETA) must be obtained prior to travel.
                      </p>

                      <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-800 dark:text-blue-200 text-sm mb-3">Complete Visa Fee Structure:</h4>

                        <div className="space-y-3">
                          {/* Free ETA Countries */}
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-green-700 dark:text-green-300">42 Countries - FREE ETA (July 2025 Expansion)</p>
                              <p className="text-xs text-blue-700 dark:text-blue-300">Australia, Germany, France, UK, US, Canada, Japan, and 35 others</p>
                            </div>
                          </div>

                          {/* Standard Fee Countries */}
                          <div className="flex items-start space-x-2">
                            <DollarSign className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-amber-700 dark:text-amber-300">Other Countries - Standard ETA Fees</p>
                              <div className="text-xs text-blue-700 dark:text-blue-300 mt-1 space-y-1">
                                <div>• Tourist ETA: <strong>USD 50</strong> (30 days, extendable)</div>
                                <div>• Business ETA: <strong>USD 50</strong> (30 days, extendable)</div>
                                <div>• Transit Visa: <strong>USD 25</strong> (2 days maximum)</div>
                                <div>• Multiple Entry: <strong>USD 100</strong> (6 months validity)</div>
                              </div>
                            </div>
                          </div>

                          {/* Visa on Arrival */}
                          <div className="flex items-start space-x-2">
                            <Plane className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-orange-700 dark:text-orange-300">Visa on Arrival - Select Countries</p>
                              <div className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                                <div>• Maldives, Seychelles, Singapore citizens</div>
                                <div>• Available at Colombo Airport upon arrival</div>
                              </div>
                            </div>
                          </div>

                          {/* Free Processing */}
                          <div className="flex items-start space-x-2">
                            <Shield className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-purple-700 dark:text-purple-300">Diplomatic & Official - FREE Processing</p>
                              <div className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                                <div>• Diplomatic passport holders</div>
                                <div>• Official passport holders</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 pt-2 border-t border-blue-200 dark:border-blue-700">
                          <p className="text-xs text-blue-600 dark:text-blue-400 italic">
                            💡 Processing: 24-48 hours for ETA applications | Apply 3-7 days before travel
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Visa on Arrival */}
                <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
                  <CardHeader>
                    <CardTitle className="text-green-800 dark:text-green-200 flex items-center space-x-2">
                      <CheckCircle className="h-6 w-6" />
                      <span>Visa on Arrival</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">
                      Citizens of Maldives, Seychelles, and Singapore can obtain visas upon arrival at
                      Sri Lankan airports. Extensions may be required for stays beyond the initial permitted period.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {["Maldives", "Seychelles", "Singapore"].map((country) => (
                        <Badge key={country} className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs">
                          {country}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Updated Policy */}
                <Card className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20">
                  <CardHeader>
                    <CardTitle className="text-orange-800 dark:text-orange-200 flex items-center space-x-2">
                      <Info className="h-6 w-6" />
                      <span>Policy Update</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">
                      Effective from July 2025, Sri Lanka has significantly expanded its free visa program,
                      allowing citizens from 40 countries to obtain ETAs without fees.
                    </p>
                    <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 text-xs mt-2">
                      Updated July 2025
                    </Badge>
                  </CardContent>
                </Card>
              </div>

              {/* Free Visa Countries */}
              <Card className="border-2 border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="text-green-800 dark:text-green-200 flex items-center space-x-2 text-2xl">
                    <Heart className="h-7 w-7" />
                    <span>Free ETA Program (No Visa Fees)</span>
                  </CardTitle>
                  <p className="text-green-700 dark:text-green-300 mt-2">
                    Citizens from the following 42 countries can obtain Electronic Travel Authorization free of charge:
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {[
                      "Australia", "Austria", "Bahrain", "Belarus", "Belgium", "Canada", "China", "Czech Republic",
                      "Denmark", "Finland", "France", "Germany", "Hungary", "India", "Indonesia", "Iran",
                      "Israel", "Italy", "Japan", "Kazakhstan", "Kuwait", "Malaysia", "Nepal", "Netherlands",
                      "New Zealand", "Norway", "Oman", "Poland", "Qatar", "Russia", "Saudi Arabia", "Singapore",
                      "South Korea", "Spain", "Sweden", "Switzerland", "Thailand", "Turkey", "Ukraine",
                      "United Arab Emirates", "United Kingdom", "United States"
                    ].map((country) => (
                      <div key={country} className="flex items-center space-x-2 p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                        <span className="text-sm text-green-800 dark:text-green-200 font-medium">{country}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Info className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-800 dark:text-green-200 mb-1">Important Notes:</h4>
                        <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                          <li>• Free ETA must be obtained online <strong>at least 3-7 days before travel</strong> (recommended)</li>
                          <li>• Processing time: 24-48 hours for most applications</li>
                          <li>• Standard 30-day tourist stay permitted</li>
                          <li>• Extension fees may apply for longer stays</li>
                          <li>• Policy effective from July 2025</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Other Countries */}
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20">
                  <CardHeader>
                    <CardTitle className="text-amber-800 dark:text-amber-200 flex items-center space-x-2">
                      <DollarSign className="h-6 w-6" />
                      <span>Standard ETA Process</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-700 dark:text-amber-300 text-sm mb-3">
                      Citizens from countries not listed in the free visa program must apply for an ETA
                      through the standard process with applicable fees.
                    </p>
                    <div className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
                      <div className="flex justify-between">
                        <span>Tourist ETA:</span>
                        <span className="font-medium">USD 50</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Business ETA:</span>
                        <span className="font-medium">USD 50</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Transit Visa:</span>
                        <span className="font-medium">USD 25</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-800 dark:text-gray-200 flex items-center space-x-2">
                      <AlertTriangle className="h-6 w-6" />
                      <span>Special Considerations</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                      <div>
                        <h4 className="font-medium mb-1">Embassy Applications:</h4>
                        <p>Some countries may require visa applications through Sri Lankan embassies or consulates.</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Document Verification:</h4>
                        <p>All travelers must meet passport validity and other entry requirements regardless of visa status.</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Policy Updates:</h4>
                        <p>Visa policies are subject to change. Check current requirements before travel.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Actions Section */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Quick Actions & Resources
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Everything you need to complete your visa application process quickly and efficiently
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {/* Apply for ETA */}
                <Card className="border-2 border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onClick={() => window.open('https://eta.gov.lk', '_blank', 'noopener,noreferrer')}>
                  <CardContent className="p-6 text-center">
                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ExternalLink className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-bold text-green-800 dark:text-green-200 mb-2">Apply Online</h3>
                    <p className="text-sm text-green-700 dark:text-green-300 mb-3">Start your ETA application on the official government portal</p>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white w-full">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>

                {/* Check Status */}
                <Card className="border-2 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onClick={() => window.open('https://eta.gov.lk/etaslvisa/web/track_status.jsp', '_blank', 'noopener,noreferrer')}>
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Eye className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Check Status</h3>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">Track your application progress and get updates</p>
                    <Button size="sm" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 w-full">
                      Track Now
                    </Button>
                  </CardContent>
                </Card>

                {/* Download Forms */}
                <Card className="border-2 border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onClick={() => window.open('https://eta.gov.lk/etaslvisa/web/registration.jsp', '_blank', 'noopener,noreferrer')}>
                  <CardContent className="p-6 text-center">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Download className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Get Forms</h3>
                    <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">Download application forms and required documents</p>
                    <Button size="sm" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 w-full">
                      Download
                    </Button>
                  </CardContent>
                </Card>

                {/* Fee Calculator */}
                <Card className="border-2 border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onClick={() => {
                    const nationality = prompt("Enter your nationality to check visa fees:");
                    if (nationality) {
                      const freeCountries = ["Australia", "Austria", "Bahrain", "Belarus", "Belgium", "Canada", "China", "Czech Republic", "Denmark", "Finland", "France", "Germany", "Hungary", "India", "Indonesia", "Iran", "Israel", "Italy", "Japan", "Kazakhstan", "Kuwait", "Malaysia", "Nepal", "Netherlands", "New Zealand", "Norway", "Oman", "Poland", "Qatar", "Russia", "Saudi Arabia", "Singapore", "South Korea", "Spain", "Sweden", "Switzerland", "Thailand", "Turkey", "Ukraine", "United Arab Emirates", "United Kingdom", "United States"];
                      const isFreee = freeCountries.some(country => country.toLowerCase().includes(nationality.toLowerCase()));
                      if (isFreee) {
                        alert(`Good news! Citizens of ${nationality} are eligible for FREE ETA under the expanded program (July 2025). Processing time: 24-48 hours.`);
                      } else {
                        alert(`Standard ETA fees apply for ${nationality}:\n• Tourist ETA: USD 50\n• Business ETA: USD 50\n• Transit Visa: USD 25\n• Multiple Entry: USD 100\n\nProcessing time: 24-48 hours`);
                      }
                    }
                  }}>
                  <CardContent className="p-6 text-center">
                    <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CreditCard className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-orange-800 dark:text-orange-200 mb-2">Check Fees</h3>
                    <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">Calculate visa fees based on your nationality</p>
                    <Button size="sm" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 w-full">
                      Calculate
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Quick Links */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                      <Building className="h-5 w-5 mr-2" />
                      Embassy Contacts
                    </h4>
                    <div className="space-y-2 text-sm">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-gray-700 dark:text-gray-300 hover:text-blue-600"
                        onClick={() => window.open('https://www.mfa.gov.lk/missions/', '_blank', 'noopener,noreferrer')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Find Embassy Near You
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-gray-700 dark:text-gray-300 hover:text-blue-600"
                        onClick={() => window.open('tel:+94112422541')}
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Embassy Helpline
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Required Documents
                    </h4>
                    <div className="space-y-2 text-sm">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-gray-700 dark:text-gray-300 hover:text-blue-600"
                        onClick={() => {
                          const element = document.createElement('a');
                          element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`TOURIST VISA REQUIREMENTS:

1. Valid passport (minimum 6 months validity from arrival)
2. Recent passport-size photograph (2x2 inches, white background)
3. Return or onward flight tickets
4. Proof of accommodation in Sri Lanka
5. Bank statements (last 3 months)
6. Travel insurance policy (recommended)
7. Yellow fever vaccination certificate (if arriving from affected area)
8. Completed ETA application form
9. Payment method for visa fees (credit/debit card)

BUSINESS VISA ADDITIONAL REQUIREMENTS:
10. Business invitation letter from Sri Lankan company
11. Employment verification letter
12. Company registration documents
13. Purpose of visit documentation

PROCESSING:
- Online application: https://eta.gov.lk
- Processing time: 24-48 hours
- Apply 3-7 days before travel (recommended)
- Print ETA approval to carry during travel

CONTACT:
- ETA Help: +94-11-2422541
- Email: info@eta.gov.lk`));
                          element.setAttribute('download', 'sri-lanka-visa-documents-checklist.txt');
                          element.style.display = 'none';
                          document.body.appendChild(element);
                          element.click();
                          document.body.removeChild(element);
                        }}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Checklist
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-gray-700 dark:text-gray-300 hover:text-blue-600"
                        onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
                      >
                        <Navigation2 className="h-4 w-4 mr-2" />
                        View Requirements
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      Processing Info
                    </h4>
                    <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Standard: 24-48 hours</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                        <span>Rush: Available at embassy</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                        <span>Arrive: At port of entry</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Types of Sri Lankan Visas
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Understanding the three main categories of visas available for entering Sri Lanka
              </p>
            </div>

            <div className="space-y-6">
              {/* Visit Visa */}
              <Card className="border-2 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300">
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => toggleSection('visit')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                        <Eye className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-blue-700 dark:text-blue-400">Visit Visa</CardTitle>
                        <p className="text-gray-600 dark:text-gray-300">Short-term entry permits for tourism and business</p>
                      </div>
                    </div>
                    {expandedSection === 'visit' ? (
                      <ChevronUp className="h-6 w-6 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-500" />
                    )}
                  </div>
                </CardHeader>

                {expandedSection === 'visit' && (
                  <CardContent className="pt-0">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        A Visit Visa represents an official entry permit that demonstrates the Sri Lankan Government's
                        consent for foreign nationals to enter the country. This visa clearly outlines the permitted
                        duration of stay and specific conditions that must be observed during the visit.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Tourist Visa */}
                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full">
                            <MapPin className="h-5 w-5 text-green-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Tourist Visa</h3>
                        </div>
                        <div className="space-y-3">
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            Designed for genuine tourists seeking to explore Sri Lanka's natural beauty, culture, and attractions.
                          </p>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Perfect for:</h4>
                            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                              <li>• Sightseeing and holiday activities</li>
                              <li>• Visiting friends and relatives</li>
                              <li>• Medical treatment purposes</li>
                              <li>• Participating in cultural events (art, music, dance)</li>
                              <li>• Short-term sports participation</li>
                              <li>• Photography and exploration tours</li>
                            </ul>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-4">
                            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                              Single Entry
                            </Badge>
                            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                              Double Entry
                            </Badge>
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <Button
                              size="sm"
                              className="w-full bg-green-600 hover:bg-green-700 text-white"
                              onClick={() => window.open('https://eta.gov.lk/etaslvisa/web/apply?purpose=tourist', '_blank', 'noopener,noreferrer')}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Apply for Tourist ETA
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Business Purpose Visa */}
                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-full">
                            <Briefcase className="h-5 w-5 text-purple-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Business Purpose Visa</h3>
                        </div>
                        <div className="space-y-3">
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            Specifically issued for foreign nationals conducting legitimate business activities in Sri Lanka for short durations.
                          </p>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Business activities include:</h4>
                            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                              <li>• Corporate meetings and conferences</li>
                              <li>• Trade negotiations and partnerships</li>
                              <li>• Market research and analysis</li>
                              <li>• Project consultations</li>
                              <li>• Investment opportunity assessments</li>
                              <li>• Professional networking events</li>
                            </ul>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-4">
                            <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                              Single Entry
                            </Badge>
                            <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                              Double Entry
                            </Badge>
                            <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                              Multiple Entry
                            </Badge>
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <Button
                              size="sm"
                              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                              onClick={() => window.open('https://eta.gov.lk/etaslvisa/web/apply?purpose=business', '_blank', 'noopener,noreferrer')}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Apply for Business ETA
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Visit Visa Conditions */}
                    <div className="mt-6 grid md:grid-cols-2 gap-6">
                      <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                        <div className="flex items-start space-x-3">
                          <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-amber-800 dark:text-amber-200 mb-2">Important Conditions</h4>
                            <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                              <li>• No employment activities allowed (paid or unpaid)</li>
                              <li>• Must use visa before expiry date</li>
                              <li>• Entry must occur within validity period</li>
                              <li>• Prohibited from engaging in unauthorized business</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                        <div className="flex items-start space-x-3">
                          <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Extension Information</h4>
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                              Visit visa extensions are available through the Department of Immigration and Emigration
                              or online portal. Extensions are single entry and become invalid upon departure from Sri Lanka.
                            </p>
                            <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
                              Note: Business visas currently cannot be extended online.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>

              {/* Residence Visa */}
              <Card className="border-2 border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300">
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => toggleSection('residence')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                        <Home className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-green-700 dark:text-green-400">Residence Visa</CardTitle>
                        <p className="text-gray-600 dark:text-gray-300">Long-term permits for extended stays</p>
                      </div>
                    </div>
                    {expandedSection === 'residence' ? (
                      <ChevronUp className="h-6 w-6 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-500" />
                    )}
                  </div>
                </CardHeader>

                {expandedSection === 'residence' && (
                  <CardContent className="pt-0">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        A Residence Visa serves as a permit enabling non-Sri Lankan nationals to obtain residential
                        facilities for specific purposes. The immigration system recognizes thirteen distinct subcategories,
                        each designed to address different circumstances and requirements.
                      </p>
                    </div>

                    <div className="space-y-6">
                      {/* Employment Categories */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                          <Briefcase className="h-6 w-6 text-blue-600 mr-2" />
                          Employment Category
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/10">
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Professional personnel for government-approved projects</li>
                              <li>• Expatriate staff in Board of Investment (BOI) projects and dependents</li>
                              <li>• Banking sector personnel and their dependents</li>
                              <li>• Employees in registered private companies/institutions</li>
                              <li>• Personnel employed in Colombo Port City</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Investor Category */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                          <DollarSign className="h-6 w-6 text-green-600 mr-2" />
                          Investor Category
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-green-50 dark:bg-green-900/10">
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Individuals seeking to invest monetary capital in Sri Lanka</li>
                              <li>• Foreign nationals engaging in business activities</li>
                              <li>• Commercial enterprise establishment</li>
                              <li>• Investment project development</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Religious Category */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                          <BookOpen className="h-6 w-6 text-purple-600 mr-2" />
                          Religious Category
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-purple-50 dark:bg-purple-900/10">
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Members of the Clergy</li>
                              <li>• Personnel engaged in religious activities</li>
                              <li>• Religious mission workers</li>
                              <li>• Spiritual counselors and advisors</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Student Category */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                          <GraduationCap className="h-6 w-6 text-indigo-600 mr-2" />
                          Student Category
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-indigo-50 dark:bg-indigo-900/10">
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                              <li>• University students enrolled in Sri Lankan institutions</li>
                              <li>• Students in government-approved educational institutions</li>
                              <li>• International exchange program participants</li>
                              <li>• Research scholars and academic visitors</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* NGO and Volunteer Category */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                          <Users className="h-6 w-6 text-orange-600 mr-2" />
                          NGO & Volunteer Category
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-orange-50 dark:bg-orange-900/10">
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Personnel attached to Non-Governmental Organizations</li>
                              <li>• International Non-Government Organization staff and dependents</li>
                              <li>• Volunteer workers in approved programs</li>
                              <li>• Humanitarian aid workers</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Family & Personal Categories */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                          <Heart className="h-6 w-6 text-red-600 mr-2" />
                          Family & Personal Categories
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-red-50 dark:bg-red-900/10">
                            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Family Members</h4>
                            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Spouses of Sri Lankans and dependents</li>
                              <li>• Children holding foreign nationality</li>
                              <li>• Extended family members</li>
                            </ul>
                          </div>

                          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-red-50 dark:bg-red-900/10">
                            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Ex-Sri Lankans</h4>
                            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Former Sri Lankan citizens</li>
                              <li>• Their dependents</li>
                              <li>• Returning expatriates</li>
                            </ul>
                          </div>

                          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-red-50 dark:bg-red-900/10">
                            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Special Categories</h4>
                            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Registered Indians (1954 Agreement) - Extension only</li>
                              <li>• Historical treaty beneficiaries</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Official & Diplomatic */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                          <Shield className="h-6 w-6 text-blue-600 mr-2" />
                          Diplomatic & Official Category
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/10">
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Diplomats attached to foreign missions in Sri Lanka</li>
                              <li>• Embassy and consulate officers</li>
                              <li>• Their spouses and dependents</li>
                              <li>• International organization representatives</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Specialized Programs */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                          <Home className="h-6 w-6 text-teal-600 mr-2" />
                          Specialized Programs
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-teal-50 dark:bg-teal-900/10">
                            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">My Dream Home Programme</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">Extension only for current visa holders</p>
                          </div>

                          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-teal-50 dark:bg-teal-900/10">
                            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Resident Guest Programme</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">Extension only for current visa holders</p>
                          </div>

                          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-teal-50 dark:bg-teal-900/10">
                            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Court Visa</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">For individuals with pending court cases requiring court appearances</p>
                          </div>
                        </div>
                      </div>

                      {/* Medical Category */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                          <Heart className="h-6 w-6 text-pink-600 mr-2" />
                          Medical Category
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-pink-50 dark:bg-pink-900/10">
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Individuals receiving medical treatments in Sri Lanka</li>
                              <li>• Medical assistants and caregivers</li>
                              <li>• Dependents of medical visa holders</li>
                              <li>• Long-term medical care recipients</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <Info className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-green-800 dark:text-green-200 mb-1">Eligibility Assessment</h4>
                          <p className="text-sm text-green-700 dark:text-green-300">
                            Each residence visa category has specific eligibility criteria and documentation requirements.
                            Applicants should carefully review the requirements for their intended category before applying.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>

              {/* Transit Visa */}
              <Card className="border-2 border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all duration-300">
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => toggleSection('transit')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
                        <Plane className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-orange-700 dark:text-orange-400">Transit Visa</CardTitle>
                        <p className="text-gray-600 dark:text-gray-300">Short-term passage through Sri Lanka</p>
                      </div>
                    </div>
                    {expandedSection === 'transit' ? (
                      <ChevronUp className="h-6 w-6 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-500" />
                    )}
                  </div>
                </CardHeader>

                {expandedSection === 'transit' && (
                  <CardContent className="pt-0">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg mb-6">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        A Transit Visa is an entry authorization granted to foreign nationals who need to pass through
                        Sri Lanka for a brief period while traveling to their final destination. This visa is specifically
                        designed for travelers who have connecting flights or need to transit through Sri Lankan territory.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Key Features:</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                            <span>Short-term entry permit</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                            <span>Usually valid for 24-72 hours</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                            <span>No intention to stay in Sri Lanka</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                            <span>Must have onward travel documents</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Requirements:</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li className="flex items-start space-x-2">
                            <li className="flex items-start space-x-2">
                              <span className="inline-block h-4 w-4 rounded-full bg-blue-200 mt-1 mr-1" />
                              <span>Valid passport (6+ months)</span>
                            </li>
                            <FileText className="h-4 w-4 text-blue-600 mt-1" />
                            <span>Confirmed onward ticket</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <UserCheck className="h-4 w-4 text-blue-600 mt-1" />
                            <span>Valid visa for final destination</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Building className="h-4 w-4 text-blue-600 mt-1" />
                            <span>No intention to leave airport area</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">Important Note</h4>
                          <p className="text-sm text-blue-700 dark:text-blue-300">
                            Transit visa requirements may vary based on your nationality and specific travel circumstances.
                            Some travelers may be eligible for transit without visa (TWOV) if they meet certain conditions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>

            {/* Visa Exemptions and Requirements Section */}
            <div className="mt-12 space-y-8">
              {/* Visa Exemptions */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
                  <CardHeader>
                    <CardTitle className="text-green-800 dark:text-green-200 flex items-center space-x-2">
                      <CheckCircle className="h-6 w-6" />
                      <span>Visa Exemptions</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-700 dark:text-green-300 mb-4">
                      The following individuals are exempt from visa requirements:
                    </p>
                    <ul className="space-y-2 text-green-700 dark:text-green-300">
                      <li>• Sri Lankan dual citizens with valid documentation</li>
                      <li>• Children up to 21 years registered under section 5(2) of Citizenship Act 1948</li>
                      <li>• Children under 21 born in Sri Lanka to Sri Lankan parents holding foreign nationality</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
                  <CardHeader>
                    <CardTitle className="text-blue-800 dark:text-blue-200 flex items-center space-x-2">
                      <Shield className="h-6 w-6" />
                      <span>Gratis Visa (Free Processing)</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">
                      No fees required for visa processing:
                    </p>
                    <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                      <li>• Diplomatic passport holders</li>
                      <li>• Official passport holders</li>
                      <li>• Passports with valid diplomatic/official endorsements</li>
                      <li>• As recommended by relevant Line Ministry</li>
                      <li>• Bilateral agreement beneficiaries</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* General Eligibility Requirements */}
              <Card className="border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-gray-100 flex items-center space-x-2">
                    <FileText className="h-6 w-6 text-blue-600" />
                    <span>General Eligibility Requirements</span>
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Sri Lanka Immigration and Emigration may grant or issue a visa if you meet the following criteria:
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-gray-100">Suitability Assessment</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Immigration authorities are satisfied that you are suitable to enter Sri Lanka
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-gray-100">Purpose Approval</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            The purpose for your entry to Sri Lanka is approved by immigration authorities
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-gray-100">Valid Passport</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Passport valid for minimum 6 months from your arrival date in Sri Lanka
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-gray-100">Financial Proof</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Adequate funds for maintenance in Sri Lanka and return passage payment
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-gray-100">Return Assurance</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Written assurance (ticket) to return to country of domicile or visa for next destination
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Visit Visa Conditions */}
              <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20">
                <CardHeader>
                  <CardTitle className="text-amber-800 dark:text-amber-200 flex items-center space-x-2">
                    <AlertTriangle className="h-6 w-6" />
                    <span>Visit Visa Conditions</span>
                  </CardTitle>
                  <p className="text-amber-700 dark:text-amber-300 mt-2">
                    Important conditions that must be observed during your stay in Sri Lanka:
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-medium text-amber-800 dark:text-amber-200">Employment Restrictions</h4>
                      <ul className="space-y-2 text-amber-700 dark:text-amber-300 text-sm">
                        <li>• No employment activities (paid or unpaid) allowed</li>
                        <li>• Cannot engage in trade or business other than specified</li>
                        <li>• Volunteer work restrictions apply</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-amber-800 dark:text-amber-200">Validity Conditions</h4>
                      <ul className="space-y-2 text-amber-700 dark:text-amber-300 text-sm">
                        <li>• Must utilize visa before expiry date</li>
                        <li>• Entry required within indicated validity period</li>
                        <li>• Single/double/multiple entry as specified</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                    <h4 className="font-medium text-amber-800 dark:text-amber-200 mb-2">Extension Information</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-amber-700 dark:text-amber-300">
                      <div>
                        <p className="mb-2"><strong>Application Process:</strong></p>
                        <ul className="space-y-1">
                          <li>• Apply through Department of Immigration and Emigration</li>
                          <li>• Online applications available for most visa types</li>
                          <li>• Must apply before current visa expires</li>
                        </ul>
                      </div>
                      <div>
                        <p className="mb-2"><strong>Extension Terms:</strong></p>
                        <ul className="space-y-1">
                          <li>• Extensions are single entry only</li>
                          <li>• Canceled automatically upon departure</li>
                          <li>• Business visas: currently no online extension</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
                onClick={() => window.open('tel:+94771234567')}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Visa Help Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => window.open('https://eta.gov.lk', '_blank', 'noopener,noreferrer')}
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Start ETA Application
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => window.open('mailto:visa@ceylanka-tours.com?subject=Visa Assistance Request&body=Hello, I need assistance with my Sri Lanka visa application. Please provide guidance.')}
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
