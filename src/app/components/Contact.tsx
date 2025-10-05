"use client";

export default function Contact() {
  return (
    <div className="w-screen h-screen bg-gray-100 flex">
      <div className="w-1/2 h-full bg-gradient-to-br from-white to-gray-100 flex flex-col justify-center p-12 rounded-tl-[60px]">
        <div className="space-y-6 max-w-lg mx-auto text-left">
          <span className="text-xs font-semibold text-gray-600 tracking-wider uppercase border border-gray-300 px-3 py-1 rounded">
            FOR BUSINESS
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Simplify Daily Operations with Seamless Go Subscription Service
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            Its the smarter choice for busy spaces: less downtime, fewer service costs, more peace of mind.
          </p>

          <button className="bg-white border-2 border-gray-900 text-gray-900 px-8 py-3 rounded font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>

      <div
        className="w-1/2 h-full bg-cover bg-center rounded-tr-[60px]"
        style={{
          backgroundImage: `url('/images/contact.png')`,
        }}
      />
    </div>
  );
}
