import React, { useState, useEffect } from "react";

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  const partnerLogos = [
    { src: "/district-3271.png", alt: "District 3271" },
    { src: "/RCK safe-city.png", alt: "RCK Safe City" },
    { src: "/rotaract.png", alt: "Rotaract" },
    { src: "/interact.png", alt: "Interact" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 4000); // Increased slightly to 4s to give time to read names

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/20 blur-[120px] rounded-full"></div>

      {/* Center Section: Main Logo */}
      <div className="relative flex flex-col items-center animate-in fade-in zoom-in duration-1000">
        <div className="relative mb-6">
          <img
            src="/cybershield.png"
            alt="CyberShield Logo"
            className="w-20 h-24 md:w-28 md:h-36 object-contain relative z-10 animate-pulse"
          />
          <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full scale-150"></div>
        </div>
        
        <h1 className="text-2xl md:text-4xl font-black text-white tracking-tighter mb-2">
          CYBER<span className="text-purple-500">SHIELD</span>
        </h1>
        <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
      </div>

      {/* Bottom Section: Credits & Partners */}
      <div className="absolute bottom-10 w-full px-6 max-w-2xl flex flex-col items-center">
        
        {/* NEW: Presenter Credits */}
        <div className="mb-8 text-center animate-in slide-in-from-bottom duration-1000 delay-500">
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-3">
            Presented By
          </p>
          <div className="space-y-1">
            <p className="text-white/90 text-xs md:text-sm font-bold tracking-wide">
              RTR. Mustafa Moiz Ezzi 
              <span className="block text-[10px] text-purple-400/80 font-medium tracking-normal uppercase mt-0.5">Club IT Chairman</span>
            </p>
            <div className="h-px w-4 bg-white/10 mx-auto my-2"></div>
            <p className="text-white/90 text-xs md:text-sm font-bold tracking-wide">
              RTR Lamia Antaria 
              <span className="block text-[10px] text-purple-400/80 font-medium tracking-normal uppercase mt-0.5">Club President</span>
            </p>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="w-full pt-6 border-t border-white/5">
          <p className="text-[9px] uppercase tracking-[0.4em] text-slate-600 font-bold text-center mb-6">
            In Collaboration With
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 items-center justify-items-center opacity-60">
            {partnerLogos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-6 md:h-8 w-auto object-contain filter grayscale brightness-200 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${1200 + index * 150}ms` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Progress Loader Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 animate-progress w-full"></div>
      
      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 4s linear forwards;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;