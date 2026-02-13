"use client"

import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, X, MessageCircle } from "lucide-react"
import { useState } from "react"

// Custom TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z" />
  </svg>
)

// Custom WhatsApp icon component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a6.963 6.963 0 0 0-6.957 6.962c0 1.541.43 3.036 1.248 4.336L2.37 22l4.59-1.204a6.963 6.963 0 0 0 10.465-6.356c0-3.862-3.137-7.006-6.992-7.006m0-2C20.627 4.98 24 8.35 24 12.584c0 4.234-3.373 7.604-7.512 7.604-.993 0-1.952-.194-2.853-.574l-3.016.788.793-2.976A7.521 7.521 0 0 1 11.984 4.98" />
  </svg>
)

const footerLinks = {
  destinations: [
    { name: "Colombo city", href: "/destinations/colombo-city-tour" },
    { name: "Kandy", href: "/destinations/kandy" },
    { name: "Galle", href: "/destinations/galle-fort" },
    { name: "Sigiriya", href: "/destinations/sigiriya-rock-fortress" },
    { name: "Ella", href: "/destinations/ella" },
  ],
  travel: [
    { name: "Travel Guide", href: "/travel-guide" },
    // { name: "Hotels & Accommodation", href: "/hotels" },
    { name: "Travel packages", href: "/tours" },
    { name: "Visa Information", href: "/visa" },
  ],
  experience: [
    { name: "Cultural Tours", href: "/culture" },
    { name: "Wildlife Safari", href: "/wildlife" },
    { name: "Beach Activities", href: "/beaches" },
    { name: "Adventure Sports", href: "/adventure" },
    { name: "Food & Cuisine", href: "/famous-cuisine" },
  ],
  company: [
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    // { name: "Terms of Service", href: "/terms" },
    // { name: "Disclaimer", href: "/disclaimer" },
    // { name: "Cookie Policy", href: "/cookies" },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  return (
    <>
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">CeyLanka Tours</h3>
                <p className="text-gray-300 text-sm">Your ultimate guide to exploring the pearl of the Indian Ocean</p>
              </div>

              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Colombo, Sri Lanka</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <button
                    onClick={() => setShowPhoneModal(true)}
                    className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                  >
                    <span>+94 70 764 6765</span>
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a 
                    href="mailto:ceylankatoursinfo@gmail.com"
                    className="hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    ceylankatoursinfo@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <Link href="https://www.facebook.com/share/162UMVMEzY/?mibextid=wwXIfr" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <TikTokIcon className="h-5 w-5" />
                </Link>
                <Link href="https://www.instagram.com/ceylanka_tours?igsh=ZHV6Ymh1ZGxpdmdh" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Destinations */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Destinations</h4>
              <ul className="space-y-2">
                {footerLinks.destinations.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Travel */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Travel</h4>
              <ul className="space-y-2">
                {footerLinks.travel.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experience */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Experience</h4>
              <ul className="space-y-2">
                {footerLinks.experience.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row lg:flex-row justify-between items-center space-y-4 sm:space-y-2 lg:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <p className="text-gray-400 text-sm">© {currentYear} CeyLanka Tours. All rights reserved.</p>
                <p className="text-gray-400 text-sm">Made with ❤️ for Sri Lanka</p>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                {/* <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms
              </Link> */}
                {/* <Link href="/disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">
                Disclaimer
              </Link> */}
                {/* <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </Link> */}
                <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Sitemap
                </Link>
                <Link href="/contact-us" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Phone Contact Modal */}
      {showPhoneModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-11/12 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
              <button
                onClick={() => setShowPhoneModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-5 w-5 cursor-pointer" />
              </button>
            </div>

            <p className="text-gray-600 mb-6">Choose how you'd like to contact us:</p>

            <div className="space-y-3">
              {/* WhatsApp Button */}
              <Link
                href="https://wa.me/94707646765"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowPhoneModal(false)}
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                WhatsApp Message
              </Link>

              {/* Phone Call Button */}
              <a
                href="tel:+94707646765"
                onClick={() => setShowPhoneModal(false)}
                className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center"
              >
                ☎️ Phone Call
              </a>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">+94 70 764 6765</p>
          </div>
        </div>
      )}
    </>
  )
}
