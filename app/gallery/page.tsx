"use client"

export default function Gallery() {
  const nutImages = [
    {
      src: "/2.jpg",
      title: "Premium Pistachios",
      description: "Fresh, green pistachios sourced directly from the best farms"
    },
    {
      src: "/3.jpg",
      title: "Quality Walnuts",
      description: "Brain-healthy walnuts packed with omega-3 fatty acids"
    },
    {
      src: "/4.jpg",
      title: "Premium Cashews",
      description: "High-quality cashews with rich, buttery flavor"
    },
    {
      src: "/5.jpg",
      title: "Fresh Makhana",
      description: "Light, nutritious lotus seeds perfect for healthy snacking"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-500 shadow-md">
                <img 
                  src="/images/nut-mage-logo.jpg" 
                  alt="Nut Mage Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-3">
                <div className="text-xl font-bold text-gray-800">Nut Mage</div>
                <div className="text-sm text-gray-600">Premium Dry Fruits</div>
              </div>
            </div>
            
            <nav>
              <a 
                href="/" 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Back to Home
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Gallery Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
            Our Gallery
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            Explore our premium collection of nuts and dry fruits through our curated gallery
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {nutImages.map((image, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Contact us to get these premium quality nuts and dry fruits delivered fresh to your doorstep
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="tel:+919319527526" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              📞 +91-9319527526
            </a>
            <a 
              href="tel:+919810159907" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              📞 +91-9810159907
            </a>
            <a 
              href="https://wa.me/919810159907" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold transition-colors flex items-center gap-2"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Company Info */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500">
                <img src="/images/nut-mage-logo.jpg" alt="Nut Mage Logo" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold ml-3">Nut Mage</h3>
            </div>
            <p className="text-gray-300">Your trusted partner for premium quality dry fruits and nuts.</p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Phone */}
            <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-650 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-green-400">
                <span className="text-xl">📞</span>
                <h4 className="font-bold text-sm">PHONE</h4>
              </div>
              <div className="space-y-2 text-xs">
                <div><a href="tel:+919319527526" className="text-gray-300 hover:text-green-400 transition-colors">+91-9319527526</a></div>
                <div><a href="tel:+919810159907" className="text-gray-300 hover:text-green-400 transition-colors">+91-9810159907</a></div>
                <a href="https://wa.me/919810159907" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold transition-colors mt-2">
                  💬 WhatsApp
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-650 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-green-400">
                <span className="text-xl">✉️</span>
                <h4 className="font-bold text-sm">EMAIL</h4>
              </div>
              <div className="text-xs">
                <a href="mailto:Marketingnutmage@gmail.com" className="text-gray-300 hover:text-green-400 transition-colors break-all">Marketingnutmage@gmail.com</a>
              </div>
            </div>

            {/* Business Details */}
            <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-650 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-green-400">
                <span className="text-xl">🔖</span>
                <h4 className="font-bold text-sm">BUSINESS INFO</h4>
              </div>
              <div className="space-y-2 text-xs text-gray-300">
                <div><span className="text-gray-400">IEC:</span> EUGPA4906P</div>
                <div><span className="text-gray-400">GSTIN:</span> 07EUGPA4906P1ZC</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-650 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-green-400">
                <span className="text-xl">📋</span>
                <h4 className="font-bold text-sm">QUICK LINKS</h4>
              </div>
              <ul className="space-y-2 text-xs text-gray-300">
                <li><a href="/" className="hover:text-green-400 transition-colors">Home</a></li>
                <li><a href="/#products" className="hover:text-green-400 transition-colors">Products</a></li>
                <li><a href="/#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Nut Mage. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
