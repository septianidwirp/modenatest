"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <div className="w-full h-screen relative bg-gray-100 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/contact.png"
          alt="Contact Background"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-6xl mx-auto h-full flex items-center">
        <div className="bg-white/80 md:bg-white/70 rounded-[60px] p-12 max-w-2xl shadow-2xl">
          <span className="text-xs font-semibold text-gray-600 tracking-wider uppercase border border-gray-300 px-3 py-1 rounded">
            FOR BUSINESS
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mt-4">
            Simplify Daily Operations with Seamless Go Subscription Service
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
            It&apos;ts the smarter choice for busy spaces: less downtime, fewer service costs, more peace of mind.
          </p>

          <button className="bg-white border-2 border-gray-900 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 mt-6">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
