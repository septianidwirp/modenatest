"use client";

export default function CTASection() {
  return (
    <div className="w-full bg-gray-100">
      <div className="w-full">
        <div className="grid md:grid-cols-2 rounded-t-[60px] overflow-hidden shadow-2xl">
          {/* Left - Image */}
          <div className="relative h-96 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1000&auto=format&fit=crop"
              alt="Person holding glass of water"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - CTA Content */}
          <div className="bg-cyan-400 flex flex-col items-center justify-center p-12 text-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-2">
              Ready to Go?
            </h2>
            <p className="text-white text-3xl md:text-4xl font-bold mb-8">
              Let's Get Started!
            </p>
            <button className="bg-white text-cyan-500 px-8 py-3 rounded font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}