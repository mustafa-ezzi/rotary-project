import React from "react";
import { Lock } from "lucide-react";

const SplashScreen = ({ onComplete }) => {
  const partnerLogos = [
    { src: "/district-3271.png", alt: "District 3271" },
    { src: "/RCK safe-city.png", alt: "RCK Safe City" },
    { src: "/rotaract.png", alt: "Rotaract" },
    { src: "/interact.png", alt: "Interact" },
  ];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 px-4 py-6 sm:px-6">
      <div className="w-full max-w-4xl rounded-2xl border border-white/15 bg-white/[0.04] p-4 shadow-[0_20px_80px_rgba(2,6,23,0.75)] backdrop-blur-xl sm:p-6 md:p-8 lg:p-10">
        <div className="mb-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {partnerLogos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto object-contain sm:h-12 md:h-14"
            />
          ))}
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <img
            src="/cybershield.png"
            alt="CyberShield"
            className="mx-auto mb-4 h-20 w-auto object-contain sm:mb-5 sm:h-24 md:h-28"
          />

          <div className="flex items-center justify-center gap-2 mb-3">
            <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black uppercase leading-tight tracking-tight text-white">
              A Project of <span className="text-blue-500">Rotaract Club</span> of Karachi
            </h1>
          </div>
          <p className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wide text-purple-400">
            Designed &amp; Presented by Rotary Club of Karachi
          </p>

          <button
            type="button"
            onClick={onComplete}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 px-5 py-2 text-xs sm:text-sm font-bold uppercase tracking-wide text-white transition-transform duration-200 hover:scale-105 hover:from-sky-400 hover:to-blue-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/50 sm:mt-6 sm:px-7 sm:py-2.5"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
