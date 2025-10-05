"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header 
      id="header" 
      className={`fixed top-0 left-0 z-[100] w-full bg-white transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >

      <div className="bg-[#f5f5f5] border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center justify-between h-12">

            <div className="flex items-center">
              <a href="#" className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Find a Store
              </a>
            </div>

            <div className="flex items-center gap-8">
              <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                Bahasa Indonesia
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="MODENA Logo"
                  width={120}   
                  height={40}   
                  className="h-10"
                />
              </Link>
            </div>

            <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
              <Link href="#" className="text-[15px] font-normal text-gray-900 hover:text-red-600 transition-colors">
                Home
              </Link>
              <Link href="#" className="text-[15px] font-normal text-gray-900 hover:text-red-600 transition-colors">
                Professional
              </Link>
              <Link href="#" className="text-[15px] font-normal text-gray-900 hover:text-red-600 transition-colors">
                Seamless IoT
              </Link>
              <Link href="#" className="text-[15px] font-normal text-gray-900 hover:text-red-600 transition-colors">
                Energy
              </Link>
              <Link href="#" className="text-[15px] font-normal text-gray-900 hover:text-red-600 transition-colors">
                Program
              </Link>
              <Link href="#" className="text-[15px] font-normal text-gray-900 hover:text-red-600 transition-colors">
                Support
              </Link>
              <Link href="#" className="text-[15px] font-normal text-gray-900 hover:text-red-600 transition-colors">
                Pay
              </Link>
            </nav>


            <div className="flex items-center gap-6">
              <button className="p-1 text-gray-900 hover:text-red-600 transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.51847 9.07407C3.51847 6.00582 6.00578 3.51852 9.07402 3.51852C12.1423 3.51852 14.6296 6.00582 14.6296 9.07407C14.6296 12.1423 12.1423 14.6296 9.07402 14.6296C6.00578 14.6296 3.51847 12.1423 3.51847 9.07407ZM9.07402 1.66667C4.98303 1.66667 1.66663 4.98308 1.66663 9.07407C1.66663 13.1651 4.98303 16.4815 9.07402 16.4815C10.7858 16.4815 12.3619 15.9008 13.6163 14.9258L16.7526 18.0621C17.1142 18.4237 17.7005 18.4237 18.0621 18.0621C18.4237 17.7005 18.4237 17.1143 18.0621 16.7527L14.9257 13.6163C15.9008 12.362 16.4814 10.7858 16.4814 9.07407C16.4814 4.98308 13.165 1.66667 9.07402 1.66667Z" fill="#292929"/>
                </svg>
              </button>

              <button className="p-1 text-gray-900 hover:text-red-600 transition-colors relative">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.83301 16.667C6.75337 16.667 7.49982 17.4127 7.5 18.333C7.5 19.2535 6.75348 20 5.83301 20C4.91268 19.9998 4.16699 19.2534 4.16699 18.333C4.16717 17.4128 4.91279 16.6672 5.83301 16.667ZM14.167 16.667C15.0872 16.6672 15.8328 17.4128 15.833 18.333C15.833 19.2534 15.0873 19.9998 14.167 20C13.2465 20 12.5 19.2535 12.5 18.333C12.5002 17.4127 13.2466 16.667 14.167 16.667ZM1.01855 0C1.63061 0.000338904 2.22137 0.22508 2.67871 0.631836C3.13601 1.03861 3.42828 1.59922 3.5 2.20703L3.53516 2.5H17.0088C17.3748 2.49962 17.7368 2.57933 18.0684 2.73438C18.4 2.88949 18.6934 3.1162 18.9277 3.39746C19.1625 3.67793 19.3322 4.0068 19.4258 4.36035C19.5194 4.71404 19.534 5.08434 19.4688 5.44434L18.8154 9.07227C18.6421 10.0336 18.1362 10.9038 17.3867 11.5303C16.6371 12.1568 15.6908 12.5001 14.7139 12.5H4.78125C4.95318 12.9862 5.27075 13.4077 5.69141 13.7061C6.11213 14.0044 6.61507 14.1655 7.13086 14.167H15.833C16.054 14.167 16.2666 14.2549 16.4229 14.4111C16.5789 14.5674 16.667 14.7791 16.667 15C16.667 15.2209 16.5789 15.4326 16.4229 15.5889C16.2666 15.7451 16.054 15.833 15.833 15.833H7.13086C6.10991 15.833 5.12419 15.4588 4.36133 14.7803C3.59848 14.1018 3.11123 13.1663 2.99219 12.1523L1.8457 2.40234C1.82179 2.1997 1.72475 2.01255 1.57227 1.87695C1.41979 1.74137 1.22259 1.66707 1.01855 1.66699H0.833008C0.612188 1.66691 0.400329 1.57895 0.244141 1.42285C0.0878603 1.26657 0 1.05402 0 0.833008C8.61579e-05 0.612111 0.087937 0.400344 0.244141 0.244141C0.400344 0.087937 0.612111 8.61579e-05 0.833008 0H1.01855ZM4.51562 10.833H14.7139C15.3007 10.8339 15.8698 10.6289 16.3203 10.2529C16.7708 9.87693 17.0747 9.35382 17.1787 8.77637L17.833 5.14844C17.8548 5.02806 17.8498 4.90436 17.8184 4.78613C17.7869 4.66785 17.7301 4.55757 17.6514 4.46387C17.5726 4.37019 17.4743 4.29452 17.3633 4.24316C17.2523 4.19187 17.1311 4.16633 17.0088 4.16699H3.73145L4.51562 10.833Z" fill="#292929"/>
                </svg>
              </button>

              <button className="p-1 text-gray-900 hover:text-red-600 transition-colors relative">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1_26128)">
                  <path d="M17.0313 7.42413C17.0313 6.88014 16.5902 6.43908 16.0462 6.43908H3.3641L6.45465 3.34853C6.83948 2.96369 6.83948 2.33972 6.45465 1.95489C6.06982 1.57005 5.44585 1.57005 5.06101 1.95489L0.288586 6.72731C0.0066904 7.00921 -0.0772447 7.43284 0.0747887 7.80105C0.227614 8.16925 0.586318 8.40918 0.985406 8.40918H16.0462C16.5902 8.40918 17.0313 7.96812 17.0313 7.42413Z" fill="#292929"/>
                  <path d="M20.0248 12.1982C19.872 11.83 19.5133 11.59 19.1142 11.59H4.05341C3.50941 11.59 3.06836 12.0311 3.06836 12.5751C3.06836 13.1191 3.50941 13.5601 4.05341 13.5601H16.7355L13.645 16.6507C13.2601 17.0355 13.2601 17.6595 13.645 18.0443C14.0298 18.4292 14.6538 18.4292 15.0386 18.0443L19.811 13.2719C20.0929 12.99 20.1769 12.5664 20.0248 12.1982Z" fill="#292929"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_1_26128">
                  <rect width="20" height="20" fill="white"/>
                  </clipPath>
                  </defs>
              </svg>
              </button>

              <button className="p-1 text-gray-900 hover:text-red-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              <button className="lg:hidden p-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sub Navigation*/}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center justify-between h-16">

            <div className="flex items-center gap-3">
              <div className="w-32 h-9 relative"> 
                <Image
                  src="/logo2.svg"
                  alt="SEAMLESS Subscription GO"
                  fill
                  className="object-contain"
                />
              </div>
            </div>


            <nav className="flex items-center gap-8">
              <Link href="#" className="text-sm text-gray-900 hover:text-red-600 transition-colors">
                Smart Lifestyle
              </Link>
              <Link href="#" className="text-sm text-gray-900 hover:text-red-600 transition-colors">
                Our Products
              </Link>
              <Link href="#" className="text-sm text-gray-900 hover:text-red-600 transition-colors">
                How to Subscribe
              </Link>
              <Link href="#" className="text-sm text-gray-900 hover:text-red-600 transition-colors">
                B2B
              </Link>
              <Link href="#" className="text-sm text-gray-900 hover:text-red-600 transition-colors">
                FAQ
              </Link>
              <Link href="#" className="bg-gray-900 text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-gray-800 transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Navigation*/}
      <div className="lg:hidden hidden bg-white border-t border-gray-200">
        <nav className="px-6 py-4 space-y-2">
          <Link href="#" className="block py-2 text-sm font-normal text-gray-900 hover:text-red-600 transition-colors">
            Home
          </Link>
          <Link href="#" className="block py-2 text-sm font-normal text-gray-900 hover:text-red-600 transition-colors">
            Professional
          </Link>
          <Link href="#" className="block py-2 text-sm font-normal text-gray-900 hover:text-red-600 transition-colors">
            Seamless IoT
          </Link>
          <Link href="#" className="block py-2 text-sm font-normal text-gray-900 hover:text-red-600 transition-colors">
            Energy
          </Link>
          <Link href="#" className="block py-2 text-sm font-normal text-gray-900 hover:text-red-600 transition-colors">
            Subscription
          </Link>
          <Link href="#" className="block py-2 text-sm font-normal text-gray-900 hover:text-red-600 transition-colors">
            Program
          </Link>
          <Link href="#" className="block py-2 text-sm font-normal text-gray-900 hover:text-red-600 transition-colors">
            Support
          </Link>
          <Link href="#" className="block py-2 text-sm font-normal text-gray-900 hover:text-red-600 transition-colors">
            Pay
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;