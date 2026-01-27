"use client"

import { useState } from 'react'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    const mailtoLink = `mailto:Marketingnutmage@gmail.com?subject=${subject}&body=${body}`
    
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
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+919319527526" className="flex items-center gap-2 hover:text-green-600 transition-colors">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-sm">
                  <div className="text-xs text-gray-500">Call</div>
                  <div className="font-semibold text-gray-800">+91-9319527526</div>
                </div>
              </a>
              
              <a href="mailto:Marketingnutmage@gmail.com" className="flex items-center gap-2 hover:text-green-600 transition-colors">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="text-sm">
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="font-semibold text-gray-800 text-xs">Marketingnutmage@gmail.com</div>
                </div>
              </a>

              <a href="https://wa.me/919810159907" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <div className="text-sm">
                  <div className="text-xs font-medium">WhatsApp</div>
                  <div className="font-semibold">+91-9810159907</div>
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
              <a href="mailto:Marketingnutmage@gmail.com" className="text-green-600 hover:text-green-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="https://wa.me/919810159907" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="ml-2 text-green-600 hover:text-green-700 focus:outline-none p-1"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="bg-green-600 border-t border-green-700">
          <div className="max-w-7xl mx-auto px-4">
            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-wrap justify-center gap-2 lg:gap-8 py-2 lg:py-3">
              <a href="#home" className="text-white text-xs lg:text-sm font-semibold hover:text-green-100 transition-colors py-2">HOME</a>
              <a href="/about" className="text-white text-xs lg:text-sm font-semibold hover:text-green-100 transition-colors py-2">ABOUT US</a>
              <a href="#products" className="text-white text-xs lg:text-sm font-semibold hover:text-green-100 transition-colors py-2">OUR PRODUCTS</a>
              <a href="/gallery" className="text-white text-xs lg:text-sm font-semibold hover:text-green-100 transition-colors py-2">GALLERY</a>
              <a href="#contact" className="text-white text-xs lg:text-sm font-semibold hover:text-green-100 transition-colors py-2">CONTACT US</a>
            </div>

            {/* Mobile Menu - Industry Level Dropdown */}
            {mobileMenuOpen && (
              <div className="lg:hidden absolute left-0 right-0 bg-green-600 shadow-lg border-t border-green-700 z-50">
                <div className="max-w-7xl mx-auto px-4 py-2">
                  <a 
                    href="#home" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center text-white text-sm font-semibold hover:bg-green-700 py-3 px-4 rounded-lg transition-all border-b border-green-500/20"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    HOME
                  </a>
                  <a 
                    href="/about" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center text-white text-sm font-semibold hover:bg-green-700 py-3 px-4 rounded-lg transition-all border-b border-green-500/20"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    ABOUT US
                  </a>
                  <a 
                    href="#products" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center text-white text-sm font-semibold hover:bg-green-700 py-3 px-4 rounded-lg transition-all border-b border-green-500/20"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    OUR PRODUCTS
                  </a>
                  <a 
                    href="/gallery" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center text-white text-sm font-semibold hover:bg-green-700 py-3 px-4 rounded-lg transition-all border-b border-green-500/20"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    GALLERY
                  </a>
                  <a 
                    href="#contact" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center text-white text-sm font-semibold hover:bg-green-700 py-3 px-4 rounded-lg transition-all"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    CONTACT US
                  </a>
                </div>
              </div>
            )}
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
                  <a href="https://wa.me/919810159907" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* We Are Here Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">We are here!</h2>
            <div className="w-16 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Your partner in premium dry fruits and nuts. We source the finest products from around the globe.
            </p>
          </div>

          {/* Image Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group h-48">
              <img src="/69.png" alt="SOFIA Global Trade Ventures" className="w-full h-full object-cover" />
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group h-48">
              <img src="/3.jpg" alt="Quality Walnuts" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-bold text-lg">Quality Walnuts</h3>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group h-48">
              <img src="/4.jpg" alt="Fresh Cashews" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-bold text-lg">Fresh Cashews</h3>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group h-48">
              <img src="/5.jpg" alt="Pure Makhana" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-bold text-lg">Pure Makhana</h3>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">Hand-picked and carefully selected products ensuring the highest quality standards</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Fresh & Natural</h3>
              <p className="text-gray-600 text-sm">Direct sourcing ensures maximum freshness and natural taste in every product</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Trusted Service</h3>
              <p className="text-gray-600 text-sm">Years of experience and commitment to customer satisfaction and reliable delivery</p>
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
              <div className="w-full h-48 md:h-56 lg:h-64 bg-gray-50 overflow-hidden">
                <img src="/2.jpg" alt="Pistachios" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Pistachios</h3>
                <p className="text-sm md:text-base text-gray-600">High-quality pistachios, celebrated for unique flavor and vibrant color.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="w-full h-48 md:h-56 lg:h-64 bg-gray-50 overflow-hidden">
                <img src="/3.jpg" alt="Walnuts" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Walnuts</h3>
                <p className="text-sm md:text-base text-gray-600">Premium quality walnuts, selected for rich taste and health benefits.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="w-full h-48 md:h-56 lg:h-64 bg-gray-50 overflow-hidden">
                <img src="/4.jpg" alt="Cashews" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Cashews</h3>
                <p className="text-sm md:text-base text-gray-600">Full range of cashew grades, from whole kernels to broken pieces.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="w-full h-48 md:h-56 lg:h-64 bg-gray-50 overflow-hidden">
                <img src="/5.jpg" alt="Makhana" className="w-full h-full object-cover" />
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
              <a href="https://wa.me/919810159907" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold transition-colors text-sm md:text-base">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
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
          {/* Company Info */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500">
                <img src="/images/nut-mage-logo.jpg" alt="Nut Mage Logo" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold ml-3">Nut Mage</h3>
            </div>
            <p className="text-gray-300 text-sm md:text-base">Your trusted partner for premium dry fruits and nuts.</p>
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
                <a href="https://wa.me/919810159907" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold transition-colors mt-2">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
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
