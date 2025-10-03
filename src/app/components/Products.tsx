"use client";

export default function Products() {
  return (
    <section className="relative bg-gradient-to-br from-teal-100 via-cyan-200 to-blue-600 py-20 px-6 overflow-hidden">
      {/* Decorative Background Blur Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-300/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                All-In Care At<br />
                No Extra Cost
              </h2>
            </div>
            <div className="text-right max-w-md">
              <p className="text-sm text-gray-800 leading-relaxed">
                All the services you need, already included.<br />
                So you can focus on what matters: living, not maintaining.
              </p>
            </div>
          </div>
        </div>

        {/* Video Cards Carousel */}
        <div className="relative mb-16">
          {/* Left Arrow */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="flex gap-4 px-12 overflow-x-auto scrollbar-hide">
            {/* Card 1 - FREE Water Checking */}
            <div className="flex-shrink-0 w-[280px] h-[320px] rounded-2xl overflow-hidden relative group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop"
                alt="Water Checking"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xl font-bold">FREE Water Checking</p>
                <p className="text-sm">(TDS & PH)</p>
              </div>
            </div>

            {/* Card 2 - 4x General Checking */}
            <div className="flex-shrink-0 w-[280px] h-[320px] rounded-2xl overflow-hidden relative group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="General Checking"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xl font-bold">4x General</p>
                <p className="text-xl font-bold">Checking & Cleaning</p>
              </div>
            </div>

            {/* Card 3 - FREE Filter Changing */}
            <div className="flex-shrink-0 w-[280px] h-[320px] rounded-2xl overflow-hidden relative group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
                alt="Filter Changing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xl font-bold">FREE Filter Changing</p>
                <p className="text-sm">(Seamless Subscription Service)</p>
              </div>
            </div>

            {/* Card 4 - Additional Card */}
            <div className="flex-shrink-0 w-[280px] h-[320px] rounded-2xl overflow-hidden relative group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=800&auto=format&fit=crop"
                alt="Service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </div>

          {/* Right Arrow */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Products Section */}
        <div className="text-center mb-8">
          <p className="text-xs text-blue-900 font-semibold mb-2 tracking-wider">OUR PRODUCTS</p>
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-1">
            Choose What You Need
          </h3>
          <p className="text-3xl lg:text-4xl font-bold text-white">
            for Your Home
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Side - Product List */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
            <div className="space-y-4">
              {/* Product 1 */}
              <div className="flex items-center gap-4 p-4 bg-white/30 rounded-xl hover:bg-white/40 transition-colors cursor-pointer">
                <span className="text-2xl font-bold text-white">01</span>
                <div className="flex-1">
                  <p className="text-xs text-blue-900 font-semibold">WATER FILTER</p>
                  <p className="text-sm font-bold text-gray-900">MODENA Top Table</p>
                </div>
              </div>

              {/* Product 2 */}
              <div className="flex items-center gap-4 p-4 bg-white/20 rounded-xl hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-2xl font-bold text-white/70">02</span>
                <div className="flex-1">
                  <p className="text-xs text-blue-900 font-semibold">WATER</p>
                  <p className="text-sm font-bold text-gray-900">MODENA RO Reverse</p>
                  <p className="text-sm font-bold text-gray-900">Osmosis 6-stage</p>
                </div>
              </div>

              {/* Product 3 */}
              <div className="flex items-center gap-4 p-4 bg-white/20 rounded-xl hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-2xl font-bold text-white/70">03</span>
                <div className="flex-1">
                  <p className="text-xs text-blue-900 font-semibold">WATER</p>
                  <p className="text-sm font-bold text-gray-900">Water Purifier RO Reverse</p>
                  <p className="text-sm font-bold text-gray-900">Osmosis 6-stage</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Product Detail Card */}
          <div className="bg-blue-900/40 backdrop-blur-sm rounded-2xl p-6 text-white">
            <div className="mb-6">
              <p className="text-xs text-cyan-300 mb-2">WATER PURIFIER - RO/NON RO</p>
              <h4 className="text-2xl font-bold mb-4">Water Purifier RO Top Table</h4>

              <div className="flex gap-4 mb-6">
                <div className="flex items-center gap-2 text-xs">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                  TDS: PureCrystal Clear
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  Instant Hot/Cold
                </div>
              </div>

              {/* Product Image */}
              <div className="bg-white/10 rounded-xl p-6 mb-6 flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1595514535116-2fc1b5b76e4e?q=80&w=300&auto=format&fit=crop"
                  alt="Water Purifier"
                  className="h-48 object-contain"
                />
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-5 h-5 rounded bg-cyan-400"></div>
                  <span>Volume Control Music</span>
                </div>
                <div>
                  <p className="text-xs font-semibold mb-2">Filter Lifetime</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white/10 rounded p-2">
                      <p className="text-cyan-300">A-SED001</p>
                      <p>6 Months</p>
                    </div>
                    <div className="bg-white/10 rounded p-2">
                      <p className="text-cyan-300">A-CTO001</p>
                      <p>6 Months</p>
                    </div>
                    <div className="bg-white/10 rounded p-2">
                      <p className="text-cyan-300">A-SED001</p>
                      <p>6 Months</p>
                    </div>
                    <div className="bg-white/10 rounded p-2">
                      <p className="text-cyan-300">A-SED001</p>
                      <p>6 Months</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Packages */}
              <div className="mb-4">
                <p className="text-xs font-semibold mb-3">Packages & Durations*</p>
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <p className="text-xs mb-1">6 Month</p>
                    <p className="font-bold">Rp330.000</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <p className="text-xs mb-1">12 Month</p>
                    <p className="font-bold">Rp265.000</p>
                  </div>
                  <div className="bg-cyan-400 text-gray-900 rounded-lg p-3 text-center">
                    <p className="text-xs mb-1">18 Month</p>
                    <p className="font-bold">Rp240.000</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <p className="text-xs mb-1">24 Month</p>
                    <p className="font-bold">Rp235.000</p>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="flex items-start gap-2 text-xs text-cyan-300">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="leading-relaxed">
                  *Ini, untuk FREE Filter Replacement dan FREE Maintenance visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}