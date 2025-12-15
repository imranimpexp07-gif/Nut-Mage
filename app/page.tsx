"use client"

import { useState } from 'react'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const phone = formData.get('phone')
    const email = formData.get('email')
    const message = formData.get('message')
    
    // Create mailto link
    const subject = `Contact Form Submission from ${name}`
    const body = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}`
    const mailtoLink = `mailto:Marketingnutmage@gmail.com,Imranimpexp07@gmail.com?subject=${subject}&body=${body}`
    
    window.location.href = mailtoLink
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const searchValue = searchTerm.toLowerCase().trim()
    
    if (!searchValue) return

    // Define search terms and their corresponding sections/actions
    const searchMap: { [key: string]: () => void } = {
      // Products
      'pistachio': () => scrollToSection('products'),
      'pistachios': () => scrollToSection('products'),
      'walnut': () => scrollToSection('products'),
      'walnuts': () => scrollToSection('products'),
      'cashew': () => scrollToSection('products'),
      'cashews': () => scrollToSection('products'),
      'makhana': () => scrollToSection('products'),
      'lotus seeds': () => scrollToSection('products'),
      'nuts': () => scrollToSection('products'),
      'dry fruits': () => scrollToSection('products'),
      
      // Pages/Sections
      'products': () => scrollToSection('products'),
      'gallery': () => window.location.href = '/gallery',
      'contact': () => scrollToSection('contact'),
      'about': () => scrollToSection('about'),
      'home': () => scrollToSection('home'),
      
      // Contact info
      'phone': () => scrollToSection('contact'),
      'email': () => scrollToSection('contact'),
      'call': () => scrollToSection('contact'),
      'contact us': () => scrollToSection('contact'),
      
      // Default product search
      'premium': () => scrollToSection('products'),
      'quality': () => scrollToSection('products'),
      'organic': () => scrollToSection('products'),
      'fresh': () => scrollToSection('products'),
    }

    // Check for exact matches first
    if (searchMap[searchValue]) {
      searchMap[searchValue]()
      setSearchTerm('')
      return
    }

    // Check for partial matches
    const partialMatch = Object.keys(searchMap).find(key => 
      key.includes(searchValue) || searchValue.includes(key)
    )

    if (partialMatch) {
      searchMap[partialMatch]()
      setSearchTerm('')
      return
    }

    // If no match found, default to products section
    scrollToSection('products')
    setSearchTerm('')
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

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

            {/* Search Bar - Center */}
            <div className="flex-1 max-w-sm lg:max-w-md">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-sm bg-gray-50"
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
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
              
              <a href="mailto:marketingnutmage@gmail.com" className="flex items-center gap-2 hover:text-green-600 transition-colors">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="text-sm">
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="font-semibold text-gray-800 text-xs">marketingnutmage@gmail.com</div>
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
              <a href="mailto:marketingnutmage@gmail.com" className="text-green-600 hover:text-green-700">
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
              <a href="#home" className="text-white text-xs lg:text-sm font-semibold hover:text-green-100 transition-colors py-2">HOME</a>
              <a href="/about" className="text-white text-xs lg:text-sm font-semibold hover:text-green-100 transition-colors py-2">ABOUT US</a>
              <a href="#products" className="text-white text-xs lg:text-sm font-semibold hover:text-green-100 transition-colors py-2">OUR PRODUCTS</a>
              <a href="/gallery" className="text-white text-xs lg:text-sm font-semibold hover:text-green-100 transition-colors py-2">GALLERY</a>
              <a href="#contact" className="text-white text-xs lg:text-sm font-semibold hover:text-green-100 transition-colors py-2">CONTACT US</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section with Background */}
      <section 
        id="home"
        className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/1.jpg')`
        }}
      >
        <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between p-4">
          {/* Center Logo Above Text - Mobile and Desktop */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            {/* Logo - Increased size */}
            <div className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-green-500 shadow-2xl mb-6 lg:mb-8">
              <img 
                src="/images/nut-mage-logo.jpg" 
                alt="Nut Mage" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Below Logo */}
            <div className="text-white z-10">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 tracking-wide drop-shadow-lg">
                Your Partner in Premium
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-300 tracking-wide drop-shadow-md">
                Dry Fruits & Nuts
              </h2>
            </div>
          </div>

          {/* Book Now Section - Desktop Only */}
          <div className="hidden lg:block absolute top-8 right-8">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg mb-4 text-lg shadow-lg transition-colors">
                  BOOK NOW
                </button>
                <div className="space-y-1">
                  <div className="text-lg font-bold">
                    <a href="tel:+919319527526" className="hover:underline">+91-9319527526</a>
                  </div>
                  <div className="text-lg font-bold">
                    <a href="tel:+919810159907" className="hover:underline">+91-9810159907</a>
                  </div>
                  <div className="text-sm opacity-90">www.nutmage.com</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* We Are Here Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">We are here!</h2>
            <div className="w-16 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Your partner in premium dry fruits and nuts. We source the finest products from around the globe.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Hand-picked and carefully selected products ensuring the highest quality standards</p>
            </div>
            
            <div className="text-center bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Fresh & Natural</h3>
              <p className="text-gray-600">Direct sourcing ensures maximum freshness and natural taste in every product</p>
            </div>
            
            <div className="text-center bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Trusted Service</h3>
              <p className="text-gray-600">Years of experience and commitment to customer satisfaction and reliable delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Premium Products */}
      <section id="products" className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Our Premium Selection</h2>
            <p className="text-base md:text-lg text-gray-600 px-4">Discover our carefully curated collection of premium dry fruits and nuts</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="w-full h-48 md:h-56 lg:h-64 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500">Pistachios</span>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Pistachios</h3>
                <p className="text-sm md:text-base text-gray-600">High-quality pistachios, celebrated for unique flavor and vibrant color.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="w-full h-48 md:h-56 lg:h-64 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500">Walnuts</span>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Walnuts</h3>
                <p className="text-sm md:text-base text-gray-600">Premium quality walnuts, selected for rich taste and health benefits.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="w-full h-48 md:h-56 lg:h-64 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500">Cashews</span>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Cashews</h3>
                <p className="text-sm md:text-base text-gray-600">Full range of cashew grades, from whole kernels to broken pieces.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="w-full h-48 md:h-56 lg:h-64 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500">Makhana</span>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Makhana</h3>
                <p className="text-sm md:text-base text-gray-600">Makhana (Lotus Seeds). Available in all grades, sourced for light texture and nutritional value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 md:py-12 lg:py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 px-4">NEED MORE INFORMATION?</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-4 md:mb-6 px-4">Contact us for our best products.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center text-base md:text-lg px-4">
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-xl md:text-2xl">📞</span>
                <a href="tel:+919319527526" className="text-green-700 hover:text-green-800 font-semibold hover:underline text-sm md:text-base lg:text-lg">
                  +91-9319527526
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-xl md:text-2xl">📞</span>
                <a href="tel:+919810159907" className="text-green-700 hover:text-green-800 font-semibold hover:underline text-sm md:text-base lg:text-lg">
                  +91-9810159907
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 text-sm md:text-base" 
                  required
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number" 
                  className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 text-sm md:text-base" 
                  required
                />
              </div>
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 text-sm md:text-base" 
                required
              />
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows={4} 
                className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 resize-none text-sm md:text-base" 
                required
              ></textarea>
              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-2 md:px-12 md:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all text-sm md:text-base"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-green-500">
                  <img src="/images/nut-mage-logo.jpg" alt="Nut Mage Logo" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg md:text-xl font-bold ml-3">Nut Mage</h3>
              </div>
              <p className="text-gray-300 text-sm md:text-base">Your trusted partner for premium quality dry fruits and nuts.</p>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-base md:text-lg font-bold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span>📍</span>
                  <span className="text-sm md:text-base text-gray-300">C-62,63, Sec-1 Avantika, Rohini, New Delhi, NORTH DELHI, DELHI, 110085</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span>📞</span>
                  <a href="tel:+919319527526" className="hover:text-green-400 text-sm md:text-base">+91-9319527526</a>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span>📞</span>
                  <a href="tel:+919810159907" className="hover:text-green-400 text-sm md:text-base">+91-9810159907</a>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span>✉️</span>
                  <a href="mailto:Marketingnutmage@gmail.com" className="hover:text-green-400 text-sm md:text-base break-all">Marketingnutmage@gmail.com</a>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span>✉️</span>
                  <a href="mailto:Imranimpexp07@gmail.com" className="hover:text-green-400 text-sm md:text-base break-all">Imranimpexp07@gmail.com</a>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span>✉️</span>
                  <a href="mailto:Sofia_07@gmail.com" className="hover:text-green-400 text-sm md:text-base break-all">Sofia_07@gmail.com</a>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-base md:text-lg font-bold mb-4">Our Products</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="text-sm md:text-base">Makhana (Lotus Seeds)</li>
                <li className="text-sm md:text-base">Premium Cashew Nuts</li>
                <li className="text-sm md:text-base">Organic Walnuts</li>
                <li className="text-sm md:text-base">Fresh Pistachios</li>
              </ul>
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
