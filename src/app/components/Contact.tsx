"use client";

export default function SubscriptionHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-[60px]">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-xs font-semibold text-gray-600 tracking-wider uppercase border border-gray-300 px-3 py-1 rounded">
                FOR BUSINESS
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Simplify Daily Operations with Seamless Go Subscription Service
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              It's the smarter choice for busy spaces: less downtime, fewer service costs, more peace of mind.
            </p>
            
            <div className="pt-4">
              <button className="bg-white border-2 border-gray-900 text-gray-900 px-8 py-3 rounded font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                alt="Professional business woman"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}