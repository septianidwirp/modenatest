"use client";

export default function CTASection() {
  return (
    <div className="w-full bg-gray-100 -mt-20">
      <div className="w-full">
        <div className="grid md:grid-cols-2 rounded-t-[60px] overflow-hidden shadow-2xl">
          <div className="relative h-96 md:h-auto">
            <img
              src="/images/cta.png" 
              alt="cta"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-cyan-400 flex flex-col justify-center p-12 text-left h-full">
            <div className="max-w-md ml-4 space-y-6">
              <h2 className="text-white text-4xl md:text-5xl font-bold">
                Ready to Go?
              </h2>
              <p className="text-white text-3xl md:text-4xl font-bold">
                Lets Get Started!
              </p>
              <button className="bg-white text-cyan-500 px-8 py-3 rounded font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}