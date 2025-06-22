import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  destinations: [
    { name: "Colombo", href: "/destinations/colombo" },
    { name: "Kandy", href: "/destinations/kandy" },
    { name: "Galle", href: "/destinations/galle" },
    { name: "Sigiriya", href: "/destinations/sigiriya" },
    { name: "Ella", href: "/destinations/ella" },
  ],
  travel: [
    { name: "Travel Guide", href: "/travel-guide" },
    { name: "Hotels & Accommodation", href: "/hotels" },
    { name: "Transportation", href: "/transportation" },
    { name: "Travel Packages", href: "/packages" },
    { name: "Visa Information", href: "/visa" },
  ],
  experience: [
    { name: "Cultural Tours", href: "/culture" },
    { name: "Wildlife Safari", href: "/wildlife" },
    { name: "Beach Activities", href: "/beaches" },
    { name: "Adventure Sports", href: "/adventure" },
    { name: "Food & Cuisine", href: "/food" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Advertise With Us", href: "/advertise" },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
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
                <span>+94 11 2426900</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@ceylankatours.com</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <Link href="/https://www.facebook.com/share/162UMVMEzY/?mibextid=wwXIfr" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
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
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {currentYear} CeyLanka Tours. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
