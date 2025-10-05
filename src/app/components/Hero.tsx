"use client";

export default function Hero() {
  return (
    <section className="relative w-full aspect-[1438/663] overflow-hidden bg-white mt-[192px]">
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src="/hero.svg"
          alt="Kitchen background"
          className="w-full h-full object-cover object-center rounded-bl-[60px] rounded-br-[60px]"
        />
      </div>

      <div className="absolute inset-0 max-w-[1440px] mx-auto px-6 flex items-center">
        <div className="max-w-xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-[#1a4d5c] leading-tight mb-6">
            Hydrate with<br />
            Peace of Mind
          </h1>

          <p className="text-lg text-[#2d5d6b] mb-8">
            Enjoy MODENA appliances with no upfront cost<br />
            through Seamless Go Subscription Service
          </p>
        </div>
      </div>
    </section>
  );
}
