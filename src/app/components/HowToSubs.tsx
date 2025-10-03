"use client";

export default function HowToSubs() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            How to Subscribe
          </h2>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-[30px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-cyan-500 via-cyan-500 to-cyan-500 hidden lg:block"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Step 1 - Apply Online */}
            <div className="relative">
              {/* Circle with number */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
              </div>

              {/* Card */}
              <div className="mt-12 rounded-2xl overflow-hidden shadow-lg bg-black h-[280px] relative group">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop"
                  alt="Apply Online"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">Apply Online</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Check the features and apply for a Seamless Go subscription on our website.
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="absolute bottom-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Step 2 - Initial Check */}
            <div className="relative">
              {/* Circle with number */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
              </div>

              {/* Card */}
              <div className="mt-12 rounded-2xl overflow-hidden shadow-lg bg-black h-[280px] relative group">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                  alt="Initial Check"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">Initial Check</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Our team will check the availability of the product and verify your data.
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="absolute bottom-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Step 3 - Verification Process */}
            <div className="relative">
              {/* Circle with number */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
              </div>

              {/* Card */}
              <div className="mt-12 rounded-2xl overflow-hidden shadow-lg bg-black h-[280px] relative group">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop"
                  alt="Verification Process"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">Verification Process</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Wait for the verification process to be completed within 1x24 hours.
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="absolute bottom-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Step 4 - Eligibility Review */}
            <div className="relative">
              {/* Circle with number */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
              </div>

              {/* Card */}
              <div className="mt-12 rounded-2xl overflow-hidden shadow-lg bg-black h-[280px] relative group">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                  alt="Eligibility Review"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">Eligibility Review</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    We'll process your documents and check if you're ready to subscribe.
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="absolute bottom-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Step 5 - You're All Set */}
            <div className="relative">
              {/* Circle with number */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">5</span>
                </div>
              </div>

              {/* Card */}
              <div className="mt-12 rounded-2xl overflow-hidden shadow-lg bg-black h-[280px] relative group">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
                  alt="You're All Set"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">You're All Set</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Your order is confirmed! You'll be able to manage your subscription through the app.
                  </p>
                </div>

                {/* Checkmark indicator */}
                <div className="absolute bottom-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}