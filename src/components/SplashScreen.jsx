import React from "react";

const SplashScreen = ({ onComplete }) => {
  const partnerLogos = [
    { src: "/district-3271.png", alt: "District 3271" },
    { src: "/RCK safe-city.png", alt: "RCK Safe City" },
    { src: "/rotaract.png", alt: "Rotaract" },
    { src: "/interact.png", alt: "Interact" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=Exo+2:wght@400;600;700;800&display=swap');
        .cs-body { font-family: 'Exo 2', sans-serif; }

        @keyframes logofloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes logoglowpulse {
          0%, 100% { filter: drop-shadow(0 0 16px rgba(236,72,153,0.6)) drop-shadow(0 0 34px rgba(99,102,241,0.4)); }
          50%       { filter: drop-shadow(0 0 30px rgba(236,72,153,0.9)) drop-shadow(0 0 60px rgba(99,102,241,0.65)); }
        }
        .cs-logo-anim {
          animation: logofloat 4s ease-in-out infinite, logoglowpulse 3s ease-in-out infinite;
        }

        .cs-grid-bg {
          background-image:
            linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .cs-divider {
          background: linear-gradient(90deg, transparent, rgba(236,72,153,0.6), rgba(99,102,241,0.6), transparent);
        }
        .cs-brand-text {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: linear-gradient(130deg, #f472b6 0%, #a78bfa 45%, #60a5fa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }
        .cs-btn-gradient {
          background: linear-gradient(130deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%);
          transition: all 0.2s;
        }
        .cs-btn-gradient:hover {
          transform: scale(1.06);
          box-shadow: 0 8px 40px rgba(139,92,246,0.7) !important;
        }
        .cs-btn-gradient:active { transform: scale(0.97); }

        .cs-card-border {
          background: linear-gradient(135deg, rgba(244,114,182,0.25), rgba(167,139,250,0.15), rgba(96,165,250,0.2));
          padding: 1.5px;
          border-radius: 26px;
        }
        .cs-card-inner {
          background: rgba(7,11,24,0.92);
          border-radius: 25px;
        }
      `}</style>

      <div className="cs-body fixed inset-0 z-[9999] flex items-center justify-center bg-[#070b18] px-4 py-4 sm:px-6 overflow-hidden">

        {/* Grid */}
        <div className="cs-grid-bg absolute inset-0 pointer-events-none" />

        {/* Ambient glows */}
        <div className="absolute left-[-100px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.16) 0%, transparent 70%)" }} />
        <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)" }} />
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)" }} />

        {/* Gradient border card */}
        <div className="cs-card-border w-full max-w-3xl shadow-[0_0_80px_rgba(139,92,246,0.12),0_32px_100px_rgba(0,0,0,0.7)]">
          <div className="cs-card-inner relative z-10 w-full p-7 text-center sm:p-10 md:p-12">

            {/* Partner logos */}
            <div className="mb-6 flex flex-wrap items-center justify-center gap-5 sm:gap-7">
              {partnerLogos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-auto object-contain sm:h-13 md:h-14 opacity-90 hover:opacity-100 transition-opacity duration-200"
                />
              ))}
            </div>

            {/* Gradient divider */}
            <div className="cs-divider h-px w-full mb-8" />

            {/* Lock image + CyberShield wordmark side by side */}
            <div className="flex items-center justify-center gap-5 mb-3">
              <img
                src="/cybershield.png"
                alt="CyberShield lock"
                className="cs-logo-anim h-20 w-auto object-contain sm:h-24 md:h-28"
                style={{ maxWidth: "90px" }}
              />
              <div className="text-left">
                <div className="cs-brand-text text-[2.5rem] sm:text-[2.9rem] md:text-[3.6rem]">
                  CyberShield
                </div>
                <div className="text-[0.65rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.22em] text-violet-400 mt-0.5">
                  A Project of Rotaract Club Karachi Safe City
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="flex items-center justify-center gap-2 my-5">
              <div className="h-px flex-1 max-w-[100px] bg-white/10" />
              <div className="w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_10px_#f472b6]" />
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <div className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_10px_#60a5fa]" />
              <div className="h-px flex-1 max-w-[100px] bg-white/10" />
            </div>

            {/* Heading */}
           
            <p className="text-[0.68rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.2em] text-slate-500 mb-8">
              Designed &amp; Presented by Rotary Club of Karachi
            </p>

            {/* CTA */}
            <button
              type="button"
              onClick={onComplete}
              className="cs-btn-gradient inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-3 text-[0.76rem] sm:text-[0.8rem] font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_4px_28px_rgba(139,92,246,0.5)] focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-400/50"
            >
              Continue
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-white/50 text-[12px] leading-none">
                ›
              </span>
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default SplashScreen;