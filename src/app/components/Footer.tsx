"use client";

import Image from "next/image";
import Link from "next/link";
export default function FooterSection() {
  const corporateLinks = [
    "Newsroom",
    "About Us",
    "Sustainability",
    "Find a Store",
  ];

  const productLinks = [
    "Cooking",
    "Cooling",
    "Cleaning",
    "Professional Cooking",
  ];

  const serviceLinks = [
    "Service Center",
    "Warranty Registration",
    "Contact Service",
  ];

  const programLinks = [
    "TradeIn",
    "Rental",
    "CIAO",
    "Product registration",
    "Modena Agent",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Get in the Loop</h3>
              <p className="text-gray-400 text-sm">
                Be the first to know all the best offers, news, and new products
                from MODENA.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter Email"
                className="bg-gray-800 border border-gray-700 px-4 py-3 rounded text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 flex-1 md:w-80"
              />
              <button className="bg-white text-gray-900 px-8 py-3 rounded font-semibold hover:bg-red-600 hover:text-white transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 border-b border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span className="w-5 h-5 border border-gray-600 rounded-full flex items-center justify-center">
              <img src="/world.svg" alt="World icon" className="w-3 h-3" />
            </span>
            <span>Indonesia, EN</span>
          </div>

          <div className="flex gap-4">
            <Link href="#" aria-label="X" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors">
              <img src="/x.svg" alt="X" className="w-5 h-5 object-contain" />
            </Link>

            <Link href="#" aria-label="Instagram" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors">
              <img src="/ig.svg" alt="Instagram" className="w-5 h-5 object-contain" />
            </Link>

            <Link href="#" aria-label="YouTube" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors">
              <img src="/yt.svg" alt="YouTube" className="w-5 h-5 object-contain" />
            </Link>

            <Link href="#" aria-label="Facebook" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors">
              <img src="/fb.svg" alt="Facebook" className="w-5 h-5 object-contain" />
            </Link>

            <Link href="#" aria-label="TikTok" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors">
              <img src="/tk.svg" alt="TikTok" className="w-5 h-5 object-contain" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="flex-shrink-0">
            <div className="mb-8">
              <Link href="/" className="flex items-center">
                  <Image
                    src="/logo3.svg"
                    alt="MODENA Logo"
                    width={120}   
                    height={40}   
                    className="h-10"/>
              </Link>
              <p className="text-gray-400 text-sm mt-10">
                Crafting Comfort and Convenience
              </p>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div>
              <h4 className="font-semibold mb-4 text-white">Corporate</h4>
              <ul className="space-y-3">
                {corporateLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-semibold mb-4 text-white hover:text-red-600 transition-colors" 
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-3">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-gray-400 text-sm hover:text-red-600 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Service</h4>
              <ul className="space-y-3">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-gray-400 text-sm hover:text-red-600 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Program</h4>
              <ul className="space-y-3">
                {programLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-gray-400 text-sm hover:text-red-600 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="hover:text-red-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-red-600 transition-colors">
                Cookie Policy
              </Link>
              <Link href="#" className="hover:text-red-600 transition-colors">
                Terms and Conditions
              </Link>
              <Link href="#" className="hover:text-red-600 transition-colors">
                Sitemap
              </Link>
              <Link href="#" className="hover:text-red-600 transition-colors">
                Imprint
              </Link>
              <Link href="#" className="hover:text-red-600 transition-colors">
                Indonesia
              </Link>
            </div>
            <div>Copyright 2025 MODENA. All Rights Reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
