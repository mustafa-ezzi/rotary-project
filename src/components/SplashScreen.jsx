import React from "react";

const SplashScreen = ({ onComplete }) => {
  const partnerLogos = [
    { src: "/Logos.png", alt: "District 3271" },

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

        /* Enhanced mobile responsiveness */
        @media (max-width: 640px) {
          .cs-body {
            padding: 1rem 0.75rem;
          }
          .cs-main-content {
            padding: 0 0.75rem;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .cs-welcome-heading {
            word-break: break-word;
            letter-spacing: 0.05em;
          }
          .cs-credit-text {
            line-height: 1.5;
          }
          .cs-divider {
            width: 80px;
          }
        }

        @media (max-height: 800px) {
          .cs-main-content {
            justify-content: flex-start;
            padding-top: 1rem;
          }
        }

        @media (max-width: 1024px) and (max-height: 1366px) {
          .cs-main-content {
            min-height: 100%;
          }
        }

        /* Landscape mode adjustments */
        @media (max-height: 600px) {
          .cs-logo-container {
            gap: 0.5rem;
            margin-bottom: 0.5rem;
          }
          .cs-separator {
            margin: 0.5rem 0;
          }
        }
      `}</style>

      <div className="cs-body fixed inset-0 z-[9999] flex items-center justify-center bg-[#070b18] px-2 xs:px-3 sm:px-4 md:px-6 py-4 xs:py-5 sm:py-6 overflow-y-auto min-h-screen">

        {/* Grid */}
        <div className="cs-grid-bg absolute inset-0 pointer-events-none" />

        {/* Ambient glows - responsive */}
        <div className="hidden sm:block absolute left-[-100px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.16) 0%, transparent 70%)" }} />
        <div className="hidden sm:block absolute right-[-100px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)" }} />
        <div className="hidden md:block absolute top-[-80px] left-1/2 -translate-x-1/2 w-[400px] h-[200px] md:w-[600px] md:h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)" }} />
        <div className="hidden md:block absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[350px] h-[180px] md:w-[500px] md:h-[250px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)" }} />

        {/* Main content - centered */}
        <div className="cs-main-content relative z-10 w-full max-w-4xl h-screen flex flex-col items-center justify-center text-center px-2 sm:px-4">

          {/* Welcome heading */}
          <h1 className="cs-welcome-heading cs-brand-text text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 md:mb-10 px-2">
            Welcome to CyberShield
          </h1>

          {/* Partner logos - larger and centered */}
          <div className="mb-8 sm:mb-12 flex items-center justify-center flex-wrap gap-4">
            {partnerLogos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-24 xs:h-28 sm:h-36 md:h-40 lg:h-48 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
              />
            ))}
          </div>

          {/* Gradient divider */}
          <div className="cs-divider h-px w-24 xs:w-28 sm:w-32 mb-8 sm:mb-12" />

          {/* Lock image + CyberShield wordmark */}
          <div className="cs-logo-container flex flex-col items-center justify-center gap-3 sm:gap-6 mb-6 sm:mb-8">
            <img
              src="/cybershield.png"
              alt="CyberShield lock"
              className="cs-logo-anim h-28 xs:h-32 sm:h-48 md:h-56 lg:h-72 w-auto object-contain"
              style={{ maxWidth: "none" }}
            />
            <div className="w-full">
              <div className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.22em] text-violet-400 mt-2 px-1">
                A Project of Rotaract Club Karachi Safe City
              </div>
              <div className="text-xs sm:text-sm md:text-base font-bold tracking-[0.22em] text-violet-400 mt-2 px-1">
                An Initiative Dedicated to Fostering Digital Safety Awareness
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="cs-separator flex items-center justify-center gap-1 sm:gap-2 my-6 sm:my-8">
            <div className="h-px flex-1 max-w-[80px] sm:max-w-[100px] bg-white/10" />
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-pink-400 shadow-[0_0_10px_#f472b6]" />
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-violet-400" />
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-sky-400 shadow-[0_0_10px_#60a5fa]" />
            <div className="h-px flex-1 max-w-[80px] sm:max-w-[100px] bg-white/10" />
          </div>

          {/* Heading */}
          <p className="cs-credit-text text-[0.6rem] xs:text-[0.65rem] sm:text-xs md:text-sm font-bold tracking-[0.2em] text-slate-500 mb-4 sm:mb-6 md:mb-8 px-2">
            Designed, Developed &amp; Presented By <br className="xs:hidden" />
            <span className="hidden xs:inline">Rtr. Mustafa Ezzi / Rtr. Lamiya Antaria</span>
            <span className="xs:hidden">
              Rtr. Mustafa Ezzi <br /> Rtr. Lamiya Antaria
            </span>
            <br className="hidden xs:inline" />
            <span className="text-[0.55rem] xs:text-[0.6rem] sm:text-xs">Club IT Chair / Club President</span>
          </p>

          {/* CTA */}
          <button
            type="button"
            onClick={onComplete}
            className="cs-btn-gradient inline-flex items-center justify-center gap-2 sm:gap-2.5 rounded-full px-4 xs:px-5 sm:px-9 md:px-12 py-2 xs:py-2.5 sm:py-4 text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-white shadow-[0_4px_28px_rgba(139,92,246,0.5)] focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-400/50 transition-all duration-200"
          >
            Continue
            <span className="inline-flex items-center justify-center w-4 xs:w-4.5 sm:w-5 h-4 xs:h-4.5 sm:h-5 rounded-full border border-white/50 text-[10px] sm:text-[12px] leading-none">
              ›
            </span>
          </button>

        </div>
      </div>
    </>
  );
};

export default SplashScreen;