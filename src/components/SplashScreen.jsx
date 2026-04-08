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
          50%       { transform: translateY(-6px); }
        }
        @keyframes logoglowpulse {
          0%, 100% { filter: drop-shadow(0 0 12px rgba(236,72,153,0.6)) drop-shadow(0 0 24px rgba(99,102,241,0.4)); }
          50%       { filter: drop-shadow(0 0 22px rgba(236,72,153,0.9)) drop-shadow(0 0 44px rgba(99,102,241,0.65)); }
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
        .cs-btn-gradient:hover { transform: scale(1.06); box-shadow: 0 8px 40px rgba(139,92,246,0.7) !important; }
        .cs-btn-gradient:active { transform: scale(0.97); }

        @media (max-height: 600px) {
          .cs-partner-img   { height: 3rem !important; }
          .cs-lock-img      { height: 5rem !important; }
          .cs-subtitle      { font-size: 0.6rem !important; }
          .cs-credit-text   { font-size: 0.55rem !important; }
        }
      `}</style>

      <div
        className="cs-body fixed inset-0 z-[9999] flex items-center justify-center bg-[#070b18] overflow-hidden"
        style={{ height: "100dvh" }}
      >
        <div className="cs-grid-bg absolute inset-0 pointer-events-none" />

        {/* Ambient glows */}
        <div className="hidden sm:block absolute left-[-100px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.16) 0%, transparent 70%)" }} />
        <div className="hidden sm:block absolute right-[-100px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)" }} />
        <div className="hidden md:block absolute top-[-60px] left-1/2 -translate-x-1/2 w-[500px] h-[220px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)" }} />

        {/* Main content */}
        <div className="relative z-10 w-full max-w-2xl flex flex-col items-center justify-center text-center px-3 sm:px-6 gap-2 sm:gap-3"
          style={{ height: "100dvh" }}
        >

          {/* Welcome heading */}

          {/* Partner logos */}
          <div className="flex items-center justify-center flex-wrap gap-3">
            {partnerLogos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="cs-partner-img w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                style={{ height: "clamp(4rem, 10vmin, 9rem)" }}
              />
            ))}
          </div>

          {/* Divider */}
          <div className="cs-divider h-px w-20 sm:w-32" />

          <h1 className="cs-brand-text text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-none">
            Welcome to 
          </h1>
          {/* Lock image */}
          <img
            src="/cybershield.png"
            alt="CyberShield lock"
            className="cs-logo-anim cs-lock-img w-auto object-contain"
            style={{ height: "clamp(6rem, 22vmin, 15rem)", maxWidth: "none" }}
          />

          {/* Subtitles */}
          <div className="cs-subtitle flex flex-col gap-0.5 sm:gap-1">
            <p className="font-bold uppercase tracking-[0.2em] text-violet-400"
              style={{ fontSize: "clamp(0.6rem, 1.6vmin, 1rem)" }}>
              A Project of Rotaract Club Karachi Safe City
            </p>
            <p className="font-bold tracking-[0.18em] text-violet-400"
              style={{ fontSize: "clamp(0.6rem, 1.6vmin, 1rem)" }}>
              An Initiative Dedicated to Fostering Digital Safety Awareness
            </p>
          </div>

          {/* Separator dots */}
          <div className="flex items-center justify-center gap-1 sm:gap-2">
            <div className="h-px w-16 sm:w-24 bg-white/10" />
            <div className="w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_8px_#f472b6]" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <div className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#60a5fa]" />
            <div className="h-px w-16 sm:w-24 bg-white/10" />
          </div>

          {/* Credits */}
          <div className="cs-credit-section w-full">
            <p className="cs-credit-text font-bold tracking-[0.18em] text-slate-500 mb-2"
              style={{ fontSize: "clamp(0.6rem, 1.4vmin, 0.85rem)" }}>
              Designed, Developed &amp; Presented By
            </p>
            <div className="flex gap-12 sm:gap-20 justify-center px-4">
              <div className="text-center">
                <p className="font-bold tracking-[0.15em] text-slate-400"
                  style={{ fontSize: "clamp(0.65rem, 1.6vmin, 0.95rem)" }}>
                  Rtr. Mustafa Ezzi
                </p>
                <p className="font-semibold tracking-[0.15em] text-slate-600 mt-0.5"
                  style={{ fontSize: "clamp(0.55rem, 1.3vmin, 0.8rem)" }}>
                  Club IT Chair
                </p>
              </div>
              <div className="text-center">
                <p className="font-bold tracking-[0.15em] text-slate-400"
                  style={{ fontSize: "clamp(0.65rem, 1.6vmin, 0.95rem)" }}>
                  Rtr. Lamiya Antaria
                </p>
                <p className="font-semibold tracking-[0.15em] text-slate-600 mt-0.5"
                  style={{ fontSize: "clamp(0.55rem, 1.3vmin, 0.8rem)" }}>
                  Club President
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={onComplete}
            className="cs-btn-gradient inline-flex items-center justify-center gap-2 rounded-full font-extrabold uppercase tracking-[0.15em] text-white shadow-[0_4px_28px_rgba(139,92,246,0.5)] focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-400/50"
            style={{ fontSize: "clamp(0.75rem, 1.6vmin, 1rem)", padding: "clamp(0.5rem, 1.4vmin, 1.1rem) clamp(1.2rem, 3.5vmin, 2.8rem)" }}
          >
            Continue
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-white/50 text-[12px] leading-none">›</span>
          </button>

        </div>
      </div>
    </>
  );
};

export default SplashScreen;