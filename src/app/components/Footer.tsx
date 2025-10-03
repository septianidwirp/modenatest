"use client";

export default function FooterSection() {
  const corporateLinks = [
    "Newsroom",
    "About Us",
    "Sustainability",
    "Find a Store"
  ];

  const productLinks = [
    "Cooking",
    "Cooling",
    "Cleaning",
    "Professional Cooking"
  ];

  const serviceLinks = [
    "Service Center",
    "Warranty Registration",
    "Contact Service"
  ];

  const programLinks = [
    "TradeIn",
    "Rental",
    "CIAO",
    "Product registration",
    "Modena Agent"
  ];

  const socialIcons = [
    { name: "X", icon: "𝕏" },
    { name: "Instagram", icon: "📷" },
    { name: "YouTube", icon: "▶" },
    { name: "Facebook", icon: "f" },
    { name: "TikTok", icon: "♪" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Get in the Loop</h3>
              <p className="text-gray-400 text-sm">
                Be the first to know all the best offers, news, and new products from MODENA.
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

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Logo Section - Left */}
          <div className="flex-shrink-0">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-wider mb-4">MODENA</h2>
              <p className="text-gray-400 text-sm">
                Crafting Comfort and Convenience
              </p>
            </div>
          </div>

          {/* Links Grid - Center/Right */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Corporate */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Corporate</h4>
              <ul className="space-y-3">
                {corporateLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 text-sm hover:text-red-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-3">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 text-sm hover:text-red-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Service</h4>
              <ul className="space-y-3">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 text-sm hover:text-red-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Program */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Program</h4>
              <ul className="space-y-3">
                {programLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 text-sm hover:text-red-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Language and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-12 pt-8 border-t border-gray-800">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4 md:mb-0">
            <span className="w-5 h-5 border border-gray-600 rounded-full flex items-center justify-center text-xs">🌍</span>
            <span>Indonesia, EN</span>
          </div>
          
          <div className="flex gap-4">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href="#"
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors text-lg"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-600 transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-red-600 transition-colors">Terms and Conditions</a>
              <a href="#" className="hover:text-red-600 transition-colors">Sitemap</a>
              <a href="#" className="hover:text-red-600 transition-colors">Imprint</a>
            </div>
            <div>
              Copyright 2025 MODENA. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}