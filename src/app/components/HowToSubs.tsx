"use client";

export default function HowToSubs() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            How to Subscribe
          </h2>
        </div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-0">
            
            {/* Step 1 */}
            <div className="relative lg:-mr-12 z-10">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
              </div>

              <div className="mt-6 rounded-3xl overflow-hidden shadow-xl bg-black w-full lg:w-[300px] h-[400px] relative group">
                <img 
                  src="/images/step1.png"
                  alt="Apply Online"
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent"></div>
                
                <div className="absolute top-5 left-1/2 -translate-x-1/2 text-center px-5 w-[240px]">
                  <h3 className="text-white text-base font-bold mb-2">Apply Online</h3>
                  <p className="text-white text-sm leading-relaxed">
                    Click the button to start your <br />
                    subscription process.
                  </p>
                </div>
              </div>

              {/* Arrow Prev */}
              <div className="hidden lg:flex absolute top-1/2 -right-5 -translate-y-1/2 z-30 w-10 h-10 bg-cyan-500 rounded-full items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative lg:-mr-12 z-10">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
              </div>

              <div className="mt-6 rounded-3xl overflow-hidden shadow-xl bg-black w-full lg:w-[300px] h-[400px] relative group">
                <img 
                  src="/images/step2.png"
                  alt="Apply Online"
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent"></div>
                
                <div className="absolute top-5 left-1/2 -translate-x-1/2 text-center px-5 w-[240px]">
                  <h3 className="text-white text-base font-bold mb-2">Initial Check</h3>
                  <p className="text-white text-sm leading-relaxed">
                    Our team will reach out and ask <br />
                    a view questions to understand <br />
                    your needs.
                  </p>
                </div>
              </div>

              {/* Arrow Prev */}
              <div className="hidden lg:flex absolute top-1/2 -right-5 -translate-y-1/2 z-30 w-10 h-10 bg-cyan-500 rounded-full items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </div>
            </div>

            {/* Step 3*/}
            <div className="relative lg:-mr-12 z-10">
              {/* Circle with number */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
              </div>

              <div className="mt-6 rounded-3xl overflow-hidden shadow-xl bg-black w-full lg:w-[300px] h-[400px] relative group">
                <img 
                  src="/images/step3.png"
                  alt="Apply Online"
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent"></div>
                
                <div className="absolute top-5 left-1/2 -translate-x-1/2 text-center px-5 w-[240px]">
                  <h3 className="text-white text-base font-bold mb-2">Verification Process</h3>
                  <p className="text-white text-sm leading-relaxed">
                    We'll review the information <br />
                    provided to confirm your eligibility.
                  </p>
                </div>
              </div>

              {/* Arrow Prev */}
              <div className="hidden lg:flex absolute top-1/2 -right-5 -translate-y-1/2 z-30 w-10 h-10 bg-cyan-500 rounded-full items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </div>
            </div>

            {/* Step 4*/}
            <div className="relative lg:-mr-12 z-10">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
              </div>

              <div className="mt-6 rounded-3xl overflow-hidden shadow-xl bg-black w-full lg:w-[300px] h-[400px] relative group">
                <img 
                  src="/images/step4.png"
                  alt="Apply Online"
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent"></div>
                
                <div className="absolute top-5 left-1/2 -translate-x-1/2 text-center px-5 w-[240px]">
                  <h3 className="text-white text-base font-bold mb-2">Eligibility Review</h3>
                  <p className="text-white text-sm leading-relaxed">
                    We assess your apllication <br />
                    before final approval.
                  </p>
                </div>
              </div>

              {/* Arrow Prev */}
              <div className="hidden lg:flex absolute top-1/2 -right-5 -translate-y-1/2 z-30 w-10 h-10 bg-cyan-500 rounded-full items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </div>
            </div>

            {/* Step 5*/}
            <div className="relative lg:-mr-12 z-10">

              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-white text-sm font-bold">5</span>
                </div>
              </div>

              <div className="mt-6 rounded-3xl overflow-hidden shadow-xl bg-black w-full lg:w-[300px] h-[400px] relative group">
                <img 
                  src="/images/step5.png"
                  alt="Apply Online"
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent"></div>
                
                <div className="absolute top-5 left-1/2 -translate-x-1/2 text-center px-5 w-[240px]">
                  <h3 className="text-white text-base font-bold mb-2">You're All Set</h3>
                  <p className="text-white text-sm leading-relaxed">
                    We'll notify you once <br />
                    everything's ready to go.
                  </p>
                </div>
              </div>

              {/* Arrow Prev */}
              <div className="hidden lg:flex absolute top-1/2 -right-5 -translate-y-1/2 z-30 w-10 h-10 bg-cyan-500 rounded-full items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}