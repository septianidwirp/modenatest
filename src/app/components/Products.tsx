"use client";
import { useRef } from "react";

export default function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{
        backgroundImage: "url('/images/product.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-300/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-[1200px] mx-auto">

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
                So you can focus on what matters—living, not maintaining.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mb-16">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 px-12 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            <div className="flex-shrink-0 w-[280px] h-[320px] rounded-2xl overflow-hidden relative group cursor-pointer">
              <img
                src="/images/product1.png"
                alt="Water Checking"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[310px] h-[67px] flex items-center justify-center text-center text-white">
                <p className="text-base font-normal leading-[32px] tracking-[-0.5%]">
                  <span className="font-bold">FREE Water Checking</span> <br/> (TDS & PH)
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 w-[280px] h-[320px] rounded-2xl overflow-hidden relative group cursor-pointer">
              <img
                src="/images/product2.png"
                alt="4X general"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[310px] h-[67px] flex items-center justify-center text-center text-white">
                <p className="text-base font-normal leading-[32px] tracking-[-0.5%]">
                  <span className="font-bold">4X General <br/> Checking & Cleaning</span> 
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 w-[280px] h-[320px] rounded-2xl overflow-hidden relative group cursor-pointer">
              <img
                src="/images/product3.png"
                alt="Free Filter"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[310px] h-[67px] flex items-center justify-center text-center text-white">
                <p className="text-base font-normal leading-[32px] tracking-[-0.5%]">
                  <span className="font-bold">FREE Filter Changing</span> <br/> (Based on Replacement Cycle)
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 w-[280px] h-[320px] rounded-2xl overflow-hidden relative group cursor-pointer">
              <img
                src="/images/product4.png"
                alt="Free Repair"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[310px] h-[67px] flex items-center justify-center text-center text-white">
                <p className="text-base font-normal leading-[32px] tracking-[-0.5%]">
                  <span className="font-bold">FREE Repair Cost</span>
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 w-[280px] h-[320px] rounded-2xl overflow-hidden relative group cursor-pointer">
              <img
                src="/images/product5.png"
                alt="Free Spare parts"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[310px] h-[67px] flex items-center justify-center text-center text-white">
                <p className="text-base font-normal leading-[32px] tracking-[-0.5%]">
                  <span className="font-bold">FREE Spare Parts</span>
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 w-[280px] h-[320px] rounded-2xl overflow-hidden relative group cursor-pointer">
              <img
                src="/images/product6.png"
                alt="20% Off"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[310px] h-[67px] flex items-center justify-center text-center text-white">
                <p className="text-base font-normal leading-[32px] tracking-[-0.5%]">
                  <span className="font-bold">20% OFF For Accessories</span>
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

      <div className="bg-blue-900/30 backdrop-blur-sm rounded-3xl p-8">
        <div className="text-center mb-8 relative z-10">
          <p className="text-xs text-blue-900 font-semibold mb-2 tracking-wider">OUR PRODUCTS</p>
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-1">
            Choose What You Need
          </h3>
          <p className="text-3xl lg:text-4xl font-bold text-white">
            for Your Home
          </p>
        </div>


        <div className="grid lg:grid-cols-2 gap-6 relative z-10">
          <div className=" rounded-2xl p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/30 rounded-xl hover:bg-white/40 transition-colors cursor-pointer">
                <span className="text-2xl font-bold text-white">01</span>
                <div className="flex-1">
                  <p className="text-xs text-blue-900 font-semibold">WATER FILTER</p>
                  <p className="text-sm font-bold text-gray-900">MODENA Top Table</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-2xl font-bold text-white/70">02</span>
                <div className="flex-1">
                  <p className="text-xs text-blue-900 font-semibold">WATER</p>
                  <p className="text-sm font-bold text-gray-900">MODENA RO Reverse</p>
                  <p className="text-sm font-bold text-gray-900">Osmosis 6-stage</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-2xl font-bold text-white/70">03</span>
                <div className="flex-1">
                  <p className="text-xs text-blue-900 font-semibold">WATER</p>
                  <p className="text-sm font-bold text-gray-900">Water Purifier RO Reverse</p>
                  <p className="text-sm font-bold text-gray-900">Osmosis 6-stage</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl flex justify-center">
      <img
        src="/images/productbawah.png"
        alt="Water Purifier"
        className="w-full object-contain"
      />
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
