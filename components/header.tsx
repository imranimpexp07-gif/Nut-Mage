import Image from "next/image"
import { Search, Phone, Mail } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white shadow-xl relative z-50">
      {/* Top header with logo, search, and contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <Image
                src="/images/nut-mage-logo.jpg"
                alt="Nut Mage Logo"
                width={160}
                height={85}
                className="relative h-20 w-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-12">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
                <input
                  type="text"
                  placeholder="Search premium nuts & dry fruits..."
                  className="w-full pl-12 pr-6 py-4 border-2 border-gray-100 rounded-full focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 text-gray-700 placeholder-gray-400 bg-gray-50/50 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-full shadow-lg">
                  <Phone className="h-5 w-5 text-white" />
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">CALL US</div>
                <div className="flex flex-col space-y-1">
                  <a href="tel:+919319527526" className="text-sm font-semibold text-gray-800 hover:text-green-600 transition-colors">
                    +91-9319527526
                  </a>
                  <a href="tel:+919810159907" className="text-sm font-semibold text-gray-800 hover:text-green-600 transition-colors">
                    +91-9810159907
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-full shadow-lg">
                  <Mail className="h-5 w-5 text-white" />
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">E-MAIL</div>
                <a href="mailto:Marketingnutmage@gmail.com" className="text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                  Marketingnutmage@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Navigation Bar */}
      <nav className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-emerald-700"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-16 py-5">
            {[
              { name: "HOME", href: "#home", active: true },
              { name: "ABOUT US", href: "#about" },
              { name: "ALL PRODUCTS", href: "#products" },
              { name: "GALLERY", href: "#gallery" },
              { name: "CONTACT US", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative group px-4 py-2 font-bold text-lg tracking-wide transition-all duration-300 ${
                  item.active ? "text-amber-300 shadow-lg" : "text-white hover:text-amber-200"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 backdrop-blur-sm"></div>
                {item.active && (
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
