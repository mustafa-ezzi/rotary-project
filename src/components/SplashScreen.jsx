import React from "react";

const SplashScreen = ({ onComplete }) => {
  const partnerLogos = [
    { src: "/district-3271.png", alt: "District 3271" },
    { src: "/RCK safe-city.png", alt: "RCK Safe City" },
    { src: "/rotaract.png", alt: "Rotaract" },
    { src: "/interact.png", alt: "Interact" },
  ];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 px-4 py-6 sm:px-6">
      <div className="w-full max-w-5xl rounded-3xl border border-white/15 bg-white/[0.04] p-5 shadow-[0_20px_80px_rgba(2,6,23,0.75)] backdrop-blur-xl sm:p-8 md:p-10 lg:p-12">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {partnerLogos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto object-contain sm:h-14 md:h-16"
            />
          ))}
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <img
            src="/cybershield.png"
            alt="CyberShield"
            className="mx-auto mb-5 h-28 w-auto object-contain sm:mb-6 sm:h-32 md:h-36 lg:h-40"
          />

          <h1 className="text-balance text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            A Project of <span className="text-blue-500">Rotaract Club</span> of Karachi
          </h1>
          <p className="mt-4 text-balance text-lg font-semibold uppercase tracking-wide text-purple-400 sm:mt-5 sm:text-2xl md:text-3xl lg:text-4xl">
            Designed &amp; Presented by Rotary Club of Karachi
          </p>

          <button
            type="button"
            onClick={onComplete}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-transform duration-200 hover:scale-105 hover:from-sky-400 hover:to-blue-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/50 sm:mt-10 sm:px-8 sm:py-3 sm:text-base"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
