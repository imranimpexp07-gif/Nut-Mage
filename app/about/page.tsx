"use client"

import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        {/* Top Bar */}
        <div className="bg-green-700 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 mb-2 sm:mb-0">
              <span className="flex items-center gap-1">
                <span>📞</span>
                <a href="tel:+919319527526" className="hover:text-yellow-300 transition-colors">+91-9319527526</a>
              </span>
              <span className="flex items-center gap-1">
                <span>📞</span>
                <a href="tel:+919810159907" className="hover:text-yellow-300 transition-colors">+91-9810159907</a>
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
              <span className="flex items-center gap-1">
                <span>✉️</span>
                <a href="mailto:Marketingnutmage@gmail.com" className="hover:text-yellow-300 transition-colors">Marketingnutmage@gmail.com</a>
              </span>
              <span className="flex items-center gap-1">
                <span>✉️</span>
                <a href="mailto:Imranimpexp07@gmail.com" className="hover:text-yellow-300 transition-colors">Imranimpexp07@gmail.com</a>
              </span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="py-4 px-4">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 border-green-500">
                <img 
                  src="/images/nut-mage-logo.jpg" 
                  alt="Nut Mage" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl lg:text-3xl font-bold text-green-700">NUT MAGE</h1>
                <p className="text-xs lg:text-sm text-gray-600">Premium Dry Fruits & Nuts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="bg-green-600">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 lg:gap-12 py-3 lg:py-4">
              <a href="/" className="text-white text-sm lg:text-base font-semibold hover:text-yellow-300 transition-colors">HOME</a>
              <a href="/about" className="text-white text-sm lg:text-base font-semibold hover:text-yellow-300 transition-colors bg-green-700 px-3 py-1 rounded">ABOUT US</a>
              <a href="/#products" className="text-white text-sm lg:text-base font-semibold hover:text-yellow-300 transition-colors">OUR PRODUCTS</a>
              <a href="/gallery" className="text-white text-sm lg:text-base font-semibold hover:text-yellow-300 transition-colors">GALLERY</a>
              <a href="/#contact" className="text-white text-sm lg:text-base font-semibold hover:text-yellow-300 transition-colors">CONTACT US</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Nut Mage</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your trusted partner in premium quality dry fruits and nuts
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Company Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Company</h2>
              <div className="w-16 h-1 bg-green-500 mx-auto"></div>
            </div>
            
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                <strong>Nut Mage is a registered firm specializing in the import and export of premium quality dry fruits and nuts.</strong> 
                Our mission is to provide a wide range of products, including various grades of Makhana, Cashews, Walnuts, 
                and Pistachios, to meet the diverse needs of our clients.
              </p>
              
              <p>
                We maintain a strong network of trusted suppliers and uphold a commitment to rigorous quality control, 
                ensuring that every product we handle meets the highest standards. We are dedicated to building lasting 
                partnerships through reliability, transparency, and a passion for our products.
              </p>
            </div>
          </div>

          {/* Our Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                Rigorous quality control ensures every product meets the highest international standards
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Trusted Network</h3>
              <p className="text-gray-600">
                Strong network of reliable suppliers ensures consistent premium products
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Lasting Partnerships</h3>
              <p className="text-gray-600">
                Building relationships through reliability, transparency, and passion for excellence
              </p>
            </div>
          </div>

          {/* Our Products */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Product Range</h2>
              <div className="w-16 h-1 bg-green-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-2">Makhana</h3>
                <p className="text-gray-600">Various grades of premium fox nuts</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-2">Cashews</h3>
                <p className="text-gray-600">Premium quality cashew nuts in different grades</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-2">Walnuts</h3>
                <p className="text-gray-600">Fresh and nutritious walnut varieties</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-2">Pistachios</h3>
                <p className="text-gray-600">High-quality pistachio nuts</p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg shadow-lg p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Partner with Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the Nut Mage difference. Contact us today to discuss your premium dry fruits and nuts requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919319527526" 
                className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>📞</span> Call Now: +91-9319527526
              </a>
              <a 
                href="mailto:Marketingnutmage@gmail.com" 
                className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>✉️</span> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500">
                  <img 
                    src="/images/nut-mage-logo.jpg" 
                    alt="Nut Mage" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-green-400">NUT MAGE</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Your trusted partner in premium quality dry fruits and nuts. Specializing in import and export with a commitment to excellence.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Contact Info</h4>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+919319527526" className="hover:text-green-400 transition-colors">+91-9319527526</a>
                </p>
                <p className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+919810159907" className="hover:text-green-400 transition-colors">+91-9810159907</a>
                </p>
                <p className="flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:Marketingnutmage@gmail.com" className="hover:text-green-400 transition-colors">Marketingnutmage@gmail.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:Imranimpexp07@gmail.com" className="hover:text-green-400 transition-colors">Imranimpexp07@gmail.com</a>
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Address</h4>
              <p className="text-gray-300 leading-relaxed">
                C-62,63, Sec-1 Avantika<br />
                Rohini, New Delhi
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Nut Mage. All rights reserved. | Website designed by Helmer
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
