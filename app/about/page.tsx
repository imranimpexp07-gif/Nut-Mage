"use client"

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-white border-b border-gray-100">
        {/* Sleek Top Bar */}
        <div className="max-w-7xl mx-auto px-4 py-3 lg:py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo - Compact */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border border-green-500 shadow-sm">
                <img 
                  src="/images/nut-mage-logo.jpg" 
                  alt="Nut Mage Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm lg:text-base font-bold text-gray-900">Nut Mage</div>
                <div className="text-xs text-gray-500">Premium Dry Fruits</div>
              </div>
            </div>

            {/* Contact Info - Right */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="tel:+919319527526" className="flex items-center gap-2 hover:text-green-600 transition-colors">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-sm">
                  <div className="text-xs text-gray-500">Call</div>
                  <div className="font-semibold text-gray-800">+91-9319527526</div>
                </div>
              </a>
              
              <a href="mailto:Marketing@nutmage.com" className="flex items-center gap-2 hover:text-green-600 transition-colors">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="text-sm">
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="font-semibold text-gray-800 text-xs">Marketing@nutmage.com</div>
                </div>
              </a>
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden flex items-center gap-2">
              <a href="tel:+919319527526" className="text-green-600 hover:text-green-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a href="mailto:Marketing@nutmage.com" className="text-green-600 hover:text-green-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="bg-green-600 border-t border-green-700">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 lg:gap-8 py-2 lg:py-3">
              <a href="/" className="text-white text-xs lg:text-sm font-semibold hover:text-green-100 transition-colors py-2">HOME</a>
              <a href="/about" className="text-white text-xs lg:text-sm font-semibold hover:text-green-100 transition-colors py-2 border-b-2 border-white">ABOUT US</a>
              <a href="/#products" className="text-white text-xs lg:text-sm font-semibold hover:text-green-100 transition-colors py-2">OUR PRODUCTS</a>
              <a href="/gallery" className="text-white text-xs lg:text-sm font-semibold hover:text-green-100 transition-colors py-2">GALLERY</a>
              <a href="/#contact" className="text-white text-xs lg:text-sm font-semibold hover:text-green-100 transition-colors py-2">CONTACT US</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Nut Mage</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Your trusted partner for premium dry fruits and nuts
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p className="font-semibold text-gray-800">
                  Nutmage is a brand owned by Sofia Global Trade Ventures, a Sole Proprietorship firm registered under the laws of India.
                </p>
                <p>
                  Nut Mage was founded with a simple yet powerful vision: to bring the finest quality dry fruits and nuts from around the globe to your doorstep. We believe that premium nutrition should be accessible to everyone who values quality and health.
                </p>
                <p>
                  With years of experience in the industry, we have established strong relationships with trusted suppliers and farmers worldwide. This enables us to source only the best products that meet our stringent quality standards.
                </p>
                <p>
                  Our commitment to excellence extends beyond just the products we offer. We take pride in providing exceptional customer service, ensuring that every interaction with Nut Mage is a pleasant and satisfying experience.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img src="/69.png" alt="Nut Mage Products" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
            <div className="w-16 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide our customers with the highest quality dry fruits and nuts, sourced ethically and sustainably from the best regions around the world. We are committed to delivering freshness, purity, and exceptional taste in every product.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the most trusted and preferred brand for premium dry fruits and nuts in India and beyond. We envision a future where healthy snacking is not just a choice, but a lifestyle that everyone can embrace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Nut Mage?</h2>
            <div className="w-16 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We stand out in the industry for our unwavering commitment to quality and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Every product is carefully handpicked and tested to ensure it meets our high-quality standards
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Global Sourcing</h3>
              <p className="text-gray-600">
                We source our products from the finest regions worldwide, ensuring authentic taste and quality
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fresh Guarantee</h3>
              <p className="text-gray-600">
                Our direct sourcing and efficient supply chain ensure maximum freshness in every pack
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Certified & Safe</h3>
              <p className="text-gray-600">
                All our products are certified and undergo rigorous quality checks for safety and purity
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Customer First</h3>
              <p className="text-gray-600">
                Our dedicated team is always ready to assist you and ensure your complete satisfaction
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fair Pricing</h3>
              <p className="text-gray-600">
                We offer competitive prices without compromising on quality, making premium products accessible
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Premium Quality?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today to get started with the finest dry fruits and nuts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/#contact" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="/#products" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors"
            >
              View Products
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
            {/* Address */}
            <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-650 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-green-400">
                <span className="text-xl">📍</span>
                <h4 className="font-bold text-sm">ADDRESS</h4>
              </div>
              <p className="text-gray-300 text-xs leading-relaxed">
                C-62, Sec-1 Avantika, Rohini,<br/>
                New Delhi, NORTH DELHI,<br/>
                Delhi, 110085
              </p>
            </div>

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
                <a href="mailto:Marketing@nutmage.com" className="text-gray-300 hover:text-green-400 transition-colors break-all">Marketing@nutmage.com</a>
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
          </div>

          {/* Products */}
          <div className="text-center mb-6">
            <h4 className="text-base font-bold mb-3 text-green-400">OUR PREMIUM PRODUCTS</h4>
            <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-300">
              <span className="bg-gray-700 px-3 py-1 rounded-full">Makhana</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">Premium Cashews</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">Organic Walnuts</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">Fresh Pistachios</span>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
            <p className="text-gray-400 text-sm md:text-base mb-2">© 2024 Nut Mage. All Rights Reserved.</p>
            <p className="text-gray-500 text-xs md:text-sm">
              Powered by <a href="https://helmer.world" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors underline">Helmer</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
