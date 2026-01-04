import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Mail, Cookie, Eye, Lock, Globe, CheckCircle, XCircle, AlertTriangle, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - Ceylon Lanka Tours",
  description: "Our privacy policy explains how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicy() {
  const lastUpdated = "January 4, 2026"

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Shield className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-xl opacity-90 mb-6">Your trust is our priority</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              GDPR Compliant
            </Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">
              <Lock className="h-4 w-4 mr-2" />
              Secure & Protected
            </Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">
              Last Updated: {lastUpdated}
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
        {/* Introduction */}
        <Card className="mb-8 border-l-4 border-l-blue-500 shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <Eye className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Ceylon Lanka Tours ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, and safeguard your personal information when you visit our website 
                  or use our services.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Eye className="h-6 w-6 text-blue-600" />
            Information We Collect
          </h2>
          
          <Card className="mb-4 border-l-4 border-l-green-500 hover:shadow-md transition-shadow">
            <CardHeader className="bg-green-50 dark:bg-green-900/20">
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                1. Personal Information You Provide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                When you contact us or subscribe to our newsletter, we collect:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Full name</li>
                <li>• Email address</li>
                <li>• Phone number (including country code)</li>
                <li>• Country of residence</li>
                <li>• Travel dates and preferences</li>
                <li>• Number of travelers</li>
                <li>• Special requests or inquiries</li>
                <li>• Marketing consent (for newsletter subscriptions)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500 hover:shadow-md transition-shadow">
            <CardHeader className="bg-purple-50 dark:bg-purple-900/20">
              <CardTitle className="text-lg flex items-center gap-2">
                <Cookie className="h-5 w-5 text-purple-600" />
                2. Automatically Collected Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                We automatically collect technical information when you visit our website:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• IP address (anonymized)</li>
                <li>• Browser type and version</li>
                <li>• Device type and operating system</li>
                <li>• Pages visited and time spent</li>
                <li>• Referring website</li>
                <li>• Geographic location (country/region level)</li>
                <li>• Cookies and similar technologies</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Globe className="h-6 w-6 text-blue-600" />
            How We Use Your Information
          </h2>
          
          <Card className="border-l-4 border-l-cyan-500 hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div><strong className="text-green-700 dark:text-green-400">Respond to inquiries:</strong> <span className="text-sm text-muted-foreground">Answer your travel questions</span></div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div><strong className="text-green-700 dark:text-green-400">Process bookings:</strong> <span className="text-sm text-muted-foreground">Manage travel arrangements</span></div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div><strong className="text-green-700 dark:text-green-400">Send newsletters:</strong> <span className="text-sm text-muted-foreground">With your consent only</span></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div><strong className="text-blue-700 dark:text-blue-400">Improve website:</strong> <span className="text-sm text-muted-foreground">Optimize user experience</span></div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div><strong className="text-blue-700 dark:text-blue-400">Display relevant ads:</strong> <span className="text-sm text-muted-foreground">Google AdSense</span></div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div><strong className="text-blue-700 dark:text-blue-400">Legal compliance:</strong> <span className="text-sm text-muted-foreground">Meet requirements</span></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-2">
                  <Mail className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1">Marketing Communications</p>
                    <p className="text-xs text-blue-700 dark:text-blue-300">
                      You can unsubscribe from our newsletter at any time using the link in every email or by contacting us directly.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Cookie className="h-6 w-6 text-blue-600" />
            Cookies and Tracking
          </h2>
          
          <Card className="border-l-4 border-l-orange-500 hover:shadow-md transition-shadow">
            <CardContent className="pt-6 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">What are Cookies?</h4>
                <p className="text-sm text-muted-foreground">
                  Cookies are small text files stored on your device. We use them to improve your experience and 
                  understand how our website is used.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Types of Cookies We Use:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li>• <strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li>• <strong>Analytics Cookies:</strong> Help us understand website usage (Google Analytics)</li>
                  <li>• <strong>Advertising Cookies:</strong> Used to display relevant ads (Google AdSense)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Google Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
          
          <div className="space-y-4">
            <Card className="border-l-4 border-l-blue-500 hover:shadow-md transition-shadow">
              <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  Google Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  We use Google Analytics to analyze website traffic and user behavior. This service collects:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4 mb-3">
                  <li>• Page views and navigation patterns</li>
                  <li>• Time spent on pages</li>
                  <li>• Geographic location (country/city level)</li>
                  <li>• Device and browser information</li>
                  <li>• Traffic sources</li>
                </ul>
                <p className="text-xs text-muted-foreground">
                  Data is retained for 26 months. Opt out: <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a>
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500 hover:shadow-md transition-shadow">
              <CardHeader className="bg-green-50 dark:bg-green-900/20">
                <CardTitle className="text-lg flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-green-600" />
                  Google AdSense
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  We use Google AdSense to display advertisements. Google may use cookies to show personalized ads 
                  based on your browsing history.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg mb-3">
                  <p className="text-xs text-yellow-800 dark:text-yellow-300 mb-2">
                    <strong>Data Collected by Google AdSense:</strong>
                  </p>
                  <ul className="space-y-1 text-xs text-yellow-700 dark:text-yellow-400 ml-4">
                    <li>• Cookie IDs and advertising identifiers</li>
                    <li>• IP address (for location targeting)</li>
                    <li>• Pages visited on our website</li>
                    <li>• Browser and device information</li>
                    <li>• Ad clicks and interactions</li>
                  </ul>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  <strong>Control Your Ads:</strong>
                </p>
                <ul className="space-y-1 text-xs text-muted-foreground ml-4">
                  <li>• <a href="https://www.google.com/settings/ads" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a> - Manage personalized ads</li>
                  <li>• <a href="https://optout.aboutads.info/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance</a> - Opt out of interest-based ads</li>
                  <li>• Browser Settings - Block third-party cookies</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data Sharing */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Lock className="h-6 w-6 text-blue-600" />
            Data Sharing and Protection
          </h2>
          
          <Card className="mb-4 border-l-4 border-l-red-500 bg-red-50 dark:bg-red-900/10 hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                  <XCircle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="font-bold text-lg text-red-700 dark:text-red-400 mb-2">We DO NOT Sell Your Data</p>
                  <p className="text-sm text-red-800 dark:text-red-300">
                    Ceylon Lanka Tours never sells, rents, or trades your personal information to third parties 
                    for commercial purposes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500 hover:shadow-md transition-shadow">
            <CardHeader className="bg-yellow-50 dark:bg-yellow-900/20">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                When We May Share Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Service Providers:</strong> Email services, hosting, analytics (Google Analytics, AdSense)</li>
                <li>• <strong>Travel Partners:</strong> Hotels and tour operators (only to fulfill your bookings)</li>
                <li>• <strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Your Rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
          
          <Card className="border-l-4 border-l-indigo-500 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-900/10 dark:to-purple-900/10 hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-indigo-600" />
                </div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-300">You have the right to:</p>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Access your personal information</li>
                <li>• Correct inaccurate data</li>
                <li>• Request deletion of your data</li>
                <li>• Withdraw marketing consent</li>
                <li>• Opt out of cookies and tracking</li>
                <li>• Export your data</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Data Retention */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
          
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Contact Information:</strong> 3 years after last contact or until deletion requested</li>
                <li>• <strong>Analytics Data:</strong> 26 months (Google Analytics standard)</li>
                <li>• <strong>Legal Records:</strong> As required by law</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Children's Privacy */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Children&apos;s Privacy</h2>
          
          <Card className="border-l-4 border-l-orange-500 bg-orange-50 dark:bg-orange-900/10 hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-orange-800 dark:text-orange-300">
                    Our website is not intended for children under 13. We do not knowingly collect personal information 
                    from children. If you believe a child has provided us with information, please contact us immediately.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Mail className="h-6 w-6 text-blue-600" />
            Contact Us
          </h2>
          
          <Card className="border-l-4 border-l-cyan-500 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">
                For privacy-related questions, data requests, or to exercise your rights, contact us:
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <a href="mailto:ceylankatoursinfo@gmail.com" className="text-blue-600 hover:underline">
                    ceylankatoursinfo@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="h-4 w-4 text-green-600" />
                  <span className="text-muted-foreground">www.ceylonlankatours.com</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                We will respond to all inquiries within 48 hours.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Changes to Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
          
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with 
                an updated "Last Updated" date. Significant changes will be communicated via email to registered users.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <div className="text-center py-8 border-t mt-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-4">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <p className="text-sm font-semibold text-foreground mb-2">
            This Privacy Policy is effective as of {lastUpdated}
          </p>
          <p className="text-sm text-muted-foreground">
            Ceylon Lanka Tours - Committed to your privacy and security
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="outline" className="text-xs">
              <Lock className="h-3 w-3 mr-1" />
              Secure
            </Badge>
            <Badge variant="outline" className="text-xs">
              <CheckCircle className="h-3 w-3 mr-1" />
              Transparent
            </Badge>
            <Badge variant="outline" className="text-xs">
              <Shield className="h-3 w-3 mr-1" />
              Protected
            </Badge>
          </div>
        </div>

      </div>
    </main>
  )
}
