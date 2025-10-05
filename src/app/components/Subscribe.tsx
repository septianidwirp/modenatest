"use client";
import Image from "next/image";

export default function Subscribe() {
  return (
    <section className="w-full bg-white py-12">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-5xl font-semibold text-gray-900">
          Subscribe Now. Use Freely. <br /> Go Worry-Free.
        </h2>
        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          <b>Subscribe to a better way of enjoying appliances with
          Seamless Go Subscription Service</b>. No upfront <br/> stress, no
          maintenance worries-just the freedom to use without the usual
          ownership hassle.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 flex flex-col md:flex-row justify-center items-end gap-6 px-4">
        {/* Card 1 */}
        <div className="relative rounded-xl overflow-hidden shadow w-[260px] h-[438px]">
          <Image
            src="/images/Rectangle1.png" 
            alt="Multiple Plans Available"
            width={260}
            height={438}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-start justify-start p-4">
            <span className="text-white font-medium text-lg">
              Multiple Plans Available
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-xl overflow-hidden shadow w-[196px] h-[339px]">
          <Image
            src="/images/Rectangle1.png" 
            alt="Modena Staff"
            width={196}
            height={339}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 3 */}
        <div className="relative rounded-xl overflow-hidden shadow w-[306.6px] h-[270.77px]">
          <Image
            src="/images/Rectangle1.png" 
            alt="Subscription Price"
            width={306.6}
            height={270.77}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-2 rounded-md">
            <span className="text-white font-semibold text-lg">
              Start From Rp240,000/Month
            </span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative rounded-xl overflow-hidden shadow w-[196px] h-[339px]">
          <Image
            src="/images/Rectangle1.png" 
            alt="Seamless Care"
            width={196}
            height={339}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-start justify-start p-4">
            <span className="text-white font-medium text-lg">
              Seamless Care: From installation to regular maintenance—all
              handled.
            </span>
          </div>
        </div>

        {/* Card 5 */}
        <div className="relative rounded-xl overflow-hidden shadow w-[260px] h-[477.99px]">
          <Image
            src="/images/Rectangle1.png" 
            alt="Water Dispenser"
            width={260}
            height={477.99}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
