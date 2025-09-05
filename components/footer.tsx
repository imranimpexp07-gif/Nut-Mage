import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-6">
            <div className="relative">
              <Image
                src="/images/nut-mage-logo.jpg"
                alt="Nut Mage Logo"
                width={120}
                height={120}
                className="rounded-full shadow-lg"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for premium quality dry fruits and nuts sourced from the finest locations worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Products', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Our Products</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Makhana (Lotus Seeds)</li>
              <li>Premium Cashew Nuts</li>
              <li>Organic Walnuts</li>
              <li>Fresh Pistachios</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-green-400 w-5 h-5 mt-1" />
                <div className="space-y-1">
                  <a href="tel:+919319527526" className="text-gray-300 hover:text-green-400 transition-colors block">
                    +91-9319527526
                  </a>
                  <a href="tel:+919810159907" className="text-gray-300 hover:text-green-400 transition-colors block">
                    +91-9810159907
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-green-400 w-5 h-5" />
                <a href="mailto:Marketingnutmage@gmail.com" className="text-gray-300 hover:text-green-400 transition-colors">
                  Marketingnutmage@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">© 2024 Nut Mage. All Rights Reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
