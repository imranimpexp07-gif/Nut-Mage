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
      <header className="bg-white shadow-sm">
        {/* Top Header with Logo and Contact */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:items-center lg:justify-between">
            {/* Top Row: Logo and Contact Info */}
            <div className="flex items-center justify-between lg:flex-1">
              {/* Logo */}
              <div className="flex items-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 border-green-500 shadow-md">
                  <img 
                    src="/images/nut-mage-logo.jpg" 
                    alt="Nut Mage Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-lg lg:text-xl font-bold text-gray-800">Nut Mage</div>
                  <div className="text-xs lg:text-sm text-gray-600">Premium Dry Fruits</div>
                </div>
              </div>

              {/* Contact Info - Mobile Compact */}
              <div className="flex lg:hidden items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-700">
                      <a href="tel:+919319527526" className="hover:text-green-600">+91-9319527526</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="w-full lg:flex-1 max-w-md lg:mx-8">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search products, gallery, contact..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 lg:py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-green-500 text-sm lg:text-base"
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:text-green-600 transition-colors"
                >
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Contact Info - Desktop Full */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500">CALL US</div>
                  <div className="text-sm font-bold text-gray-700">
                    <a href="tel:+919319527526" className="hover:text-green-600">+91-9319527526</a>
                  </div>
                  <div className="text-sm font-bold text-gray-700">
                    <a href="tel:+919810159907" className="hover:text-green-600">+91-9810159907</a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500">E-MAIL</div>
                  <div className="text-sm font-bold text-gray-700 space-y-1">
                    <div><a href="mailto:Marketingnutmage@gmail.com" className="hover:text-green-600 break-all">Marketingnutmage@gmail.com</a></div>
                    <div><a href="mailto:Imranimpexp07@gmail.com" className="hover:text-green-600 break-all">Imranimpexp07@gmail.com</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="bg-green-600">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 lg:gap-12 py-3 lg:py-4">
              <a href="#home" className="text-white text-sm lg:text-base font-semibold hover:text-yellow-300 transition-colors">HOME</a>
              <a href="/about" className="text-white text-sm lg:text-base font-semibold hover:text-yellow-300 transition-colors">ABOUT US</a>
              <a href="#products" className="text-white text-sm lg:text-base font-semibold hover:text-yellow-300 transition-colors">OUR PRODUCTS</a>
              <a href="/gallery" className="text-white text-sm lg:text-base font-semibold hover:text-yellow-300 transition-colors">GALLERY</a>
              <a href="#contact" className="text-white text-sm lg:text-base font-semibold hover:text-yellow-300 transition-colors">CONTACT US</a>
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
        {/* Top Text Overlay */}
        <div className="absolute top-4 md:top-6 lg:top-8 left-1/2 transform -translate-x-1/2 text-center text-white z-10 px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 tracking-wide drop-shadow-lg">
            Your Partner in Premium
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-300 tracking-wide drop-shadow-md">
            Dry Fruits & Nuts
          </h2>
        </div>

        <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between p-4">
          {/* Center Logo for Mobile, Left for Desktop */}
          <div className="flex-1 flex justify-center items-center mt-16 lg:mt-0">
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-green-500 shadow-2xl">
              <img 
                src="/images/nut-mage-logo.jpg" 
                alt="Nut Mage" 
                className="w-full h-full object-cover"
              />
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

          {/* Side Images - Hidden on Mobile */}
          <div className="hidden lg:block absolute left-8 top-1/2 transform -translate-y-1/2 space-y-4">
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden shadow-lg">
              <img src="/pile-of-cashews.png" alt="Cashews" className="w-full h-full object-cover" />
            </div>
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden shadow-lg">
              <img src="/walnuts-pile.png" alt="Walnuts" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Side Product Images - Hidden on Mobile */}
          <div className="hidden md:grid absolute right-4 md:right-6 lg:right-8 bottom-16 md:bottom-8 grid-cols-2 gap-2 md:gap-3">
            <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-lg overflow-hidden shadow-lg">
              <img src="/pistachios-in-bowl.png" alt="Pistachios" className="w-full h-full object-cover" />
            </div>
            <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-lg overflow-hidden shadow-lg">
              <img src="/pile-of-almonds.png" alt="Almonds" className="w-full h-full object-cover" />
            </div>
            <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-lg overflow-hidden shadow-lg">
              <img src="/roasted-almonds.png" alt="Roasted Almonds" className="w-full h-full object-cover" />
            </div>
            <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-lg overflow-hidden shadow-lg">
              <img src="/fresh-pistachios.png" alt="Fresh Pistachios" className="w-full h-full object-cover" />
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
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="/69.png" className="w-full h-32 md:h-40 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-semibold"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="/3.jpg" alt="Quality Walnuts" className="w-full h-32 md:h-40 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">Quality Walnuts</div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="/4.jpg" alt="Fresh Cashews" className="w-full h-32 md:h-40 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">Fresh Cashews</div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="/5.jpg" alt="Pure Makhana" className="w-full h-32 md:h-40 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">Pure Makhana</div>
            </div>
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
              <img src="/2.jpg" alt="Pistachios" className="w-full h-48 md:h-56 lg:h-64 object-cover" />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Pistachios</h3>
                <p className="text-sm md:text-base text-gray-600">High-quality pistachios, celebrated for unique flavor and vibrant color.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src="/3.jpg" alt="Walnuts" className="w-full h-48 md:h-56 lg:h-64 object-cover" />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Walnuts</h3>
                <p className="text-sm md:text-base text-gray-600">Premium quality walnuts, selected for rich taste and health benefits.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src="/4.jpg" alt="Cashews" className="w-full h-48 md:h-56 lg:h-64 object-cover" />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Cashews</h3>
                <p className="text-sm md:text-base text-gray-600">Full range of cashew grades, from whole kernels to broken pieces.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src="/5.jpg" alt="Makhana" className="w-full h-48 md:h-56 lg:h-64 object-cover" />
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
