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
    },
    {
      src: "/69.png",
      title: "Mixed Dry Fruits",
      description: "A perfect blend of various premium dry fruits and nuts"
    },
    {
      src: "/1.jpg",
      title: "Premium Collection",
      description: "Our finest selection of mixed nuts and dry fruits showcase"
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500">
                  <img src="/images/nut-mage-logo.jpg" alt="Nut Mage Logo" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold ml-3">Nut Mage</h3>
              </div>
              <p className="text-gray-300">Your trusted partner for premium quality dry fruits and nuts.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+919319527526" className="hover:text-green-400">+91-9319527526</a>
                </div>
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+919810159907" className="hover:text-green-400">+91-9810159907</a>
                </div>
                <div className="flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:Marketingnutmage@gmail.com" className="hover:text-green-400">Marketingnutmage@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:Imranimpexp07@gmail.com" className="hover:text-green-400">Imranimpexp07@gmail.com</a>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/" className="hover:text-green-400">Home</a></li>
                <li><a href="/#products" className="hover:text-green-400">Our Products</a></li>
                <li><a href="/gallery" className="hover:text-green-400">Gallery</a></li>
                <li><a href="/#contact" className="hover:text-green-400">Contact</a></li>
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
