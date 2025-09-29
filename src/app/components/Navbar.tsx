import React from "react";

const Navbar = () => {
  return (
    <header 
      id="header" 
      className="relative z-[100] w-full !fixed top-0 left-0 bg-white"
    >
      {/* Top Bar */}
      <div className="bg-[#f5f5f5] border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center justify-between h-12">
            {/* Left Side - Temukan Toko */}
            <div className="flex items-center">
              <a href="#" className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Temukan Toko
              </a>
            </div>

            {/* Right Side - Corporate & Language */}
            <div className="flex items-center gap-8">
              {/* Corporate Dropdown */}
              <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1">
                Corporate
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Language Selector */}
              <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                Indonesia/Bahasa Indonesia
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <svg className="h-10" viewBox="0 0 120 40" fill="currentColor">
                  <text x="0" y="30" fontSize="28" fontWeight="bold" fontFamily="Arial, sans-serif">
                    MODENA
                  </text>
                </svg>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
              <a href="#" className="text-[15px] font-normal text-gray-900 hover:text-red-600 transition-colors">
                Home
              </a>
              <a href="#" className="text-[15px] font-normal text-gray-900 hover:text-red-600 transition-colors">
                Professional
              </a>
              <a href="#" className="text-[15px] font-normal text-gray-900 hover:text-red-600 transition-colors">
                Seamless IoT
              </a>
              <a href="#" className="text-[15px] font-normal text-gray-900 hover:text-red-600 transition-colors">
                Energy
              </a>
              <a href="#" className="text-[15px] font-normal text-gray-900 hover:text-red-600 transition-colors">
                Subscription
              </a>
              <a href="#" className="text-[15px] font-normal text-gray-900 hover:text-red-600 transition-colors">
                Program
              </a>
              <a href="#" className="text-[15px] font-normal text-gray-900 hover:text-red-600 transition-colors">
                Support
              </a>
              <a href="#" className="text-[15px] font-normal text-gray-900 hover:text-red-600 transition-colors">
                Pay
              </a>
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center gap-6">
              {/* Search Icon */}
              <button className="p-1 text-gray-900 hover:text-red-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Cart Icon */}
              <button className="p-1 text-gray-900 hover:text-red-600 transition-colors relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>

              {/* User Icon */}
              <button className="p-1 text-gray-900 hover:text-red-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Mobile Menu Button */}
              <button className="lg:hidden p-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sub Navigation - Seamless Subscription */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Left Side - Logo and Text */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full border-2 border-gray-900 flex items-center justify-center">
                  <span className="text-lg font-bold">M</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold tracking-wider">SEAMLESS</span>
                  <span className="text-[10px] text-gray-600 -mt-1">Subscription Service</span>
                </div>
              </div>
              <div className="bg-gray-900 text-white px-2 py-0.5 rounded text-[10px] font-medium ml-1">
                GO
              </div>
            </div>

            {/* Right Side Navigation */}
            <nav className="flex items-center gap-8">
              <a href="#" className="text-sm text-gray-900 hover:text-red-600 transition-colors">
                Smart Lifestyle
              </a>
              <a href="#" className="text-sm text-gray-900 hover:text-red-600 transition-colors">
                Our Products
              </a>
              <a href="#" className="text-sm text-gray-900 hover:text-red-600 transition-colors">
                How to Subscribe
              </a>
              <a href="#" className="text-sm text-gray-900 hover:text-red-600 transition-colors">
                B2B
              </a>
              <a href="#" className="text-sm text-gray-900 hover:text-red-600 transition-colors">
                FAQ
              </a>
              <a href="#" className="bg-gray-900 text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-gray-800 transition-colors">
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (Hidden by default) */}
      <div className="lg:hidden hidden bg-white border-t border-gray-200">
        <nav className="px-6 py-4 space-y-2">
          <a href="#" className="block py-2 text-sm font-normal text-gray-900 hover:text-red-600 transition-colors">
            Home
          </a>
          <a href="#" className="block py-2 text-sm font-normal text-gray-900 hover:text-red-600 transition-colors">
            Professional
          </a>
          <a href="#" className="block py-2 text-sm font-normal text-gray-900 hover:text-red-600 transition-colors">
            Seamless IoT
          </a>
          <a href="#" className="block py-2 text-sm font-normal text-gray-900 hover:text-red-600 transition-colors">
            Energy
          </a>
          <a href="#" className="block py-2 text-sm font-normal text-gray-900 hover:text-red-600 transition-colors">
            Subscription
          </a>
          <a href="#" className="block py-2 text-sm font-normal text-gray-900 hover:text-red-600 transition-colors">
            Program
          </a>
          <a href="#" className="block py-2 text-sm font-normal text-gray-900 hover:text-red-600 transition-colors">
            Support
          </a>
          <a href="#" className="block py-2 text-sm font-normal text-gray-900 hover:text-red-600 transition-colors">
            Pay
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
