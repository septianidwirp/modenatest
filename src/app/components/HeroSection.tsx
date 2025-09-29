export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068&auto=format&fit=crop"
          alt="Kitchen background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay - dari biru di kiri ke transparan di kanan */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7eb5c8] via-[#7eb5c8]/60 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1440px] mx-auto px-6 h-full">
        <div className="flex items-center h-full">
          <div className="max-w-xl">
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1a4d5c] leading-tight mb-6">
              Hydrate with<br />
              Peace of Mind
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-[#2d5d6b] mb-8">
              Enjoy MODENA appliances with no upfront cost<br />
              through Seamless Go Subscription Service
            </p>
          </div>

          {/* Price Card - Right Side */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 lg:right-32">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 min-w-[280px]">
              <p className="text-sm text-gray-700 mb-2">Starting from</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-[#0d7a8f]">Rp240.000</span>
                <span className="text-lg text-gray-600">/month!</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}