import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Training", path: "/bank-verification" },
    { name: "Presenter", path: "/presenter" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "Reveal", path: "/reveal" },
    // { name: "Contact", path: "/contact" },
  ];

  const partnerLogos = [
    { src: "/Logos.png", alt: "District 3271" },
    // { src: "/RCK safe-city.png", alt: "RCK Safe City" },
    // { src: "/rotaract.png", alt: "Rotaract" },
    // { src: "/interact.png", alt: "Interact" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=Exo+2:wght@500;600;700;800&display=swap');
        .nav-brand { font-family: 'Rajdhani', sans-serif; }
        .nav-body  { font-family: 'Exo 2', sans-serif; }

        .nav-link-line::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0;
          width: 0; height: 2px;
          background: linear-gradient(90deg, #ec4899, #8b5cf6);
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        .nav-link-line:hover::after { width: 100%; }

        .nav-gradient-btn {
          background: linear-gradient(130deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%);
          transition: all 0.25s;
        }
        .nav-gradient-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 24px rgba(139,92,246,0.55);
        }
        .nav-gradient-btn:active { transform: scale(0.97); }

        @keyframes navglow {
          0%,100% { filter: drop-shadow(0 0 6px rgba(236,72,153,0.5)); }
          50%      { filter: drop-shadow(0 0 14px rgba(236,72,153,0.85)) drop-shadow(0 0 24px rgba(99,102,241,0.5)); }
        }
        .nav-logo-glow { animation: navglow 3s ease-in-out infinite; }

        .mobile-drawer {
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-drawer.open { transform: translateX(0); }

        .mobile-overlay {
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }
        .mobile-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }

        /* Scrollbar hide */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* Clamp font sizes for big screens */
        .nav-brand-name {
          font-size: clamp(1rem, 1.5vw, 1.5rem);
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          background: linear-gradient(130deg, #f472b6, #a78bfa, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }
        .nav-tagline {
          font-size: clamp(0.5rem, 0.7vw, 0.72rem);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 700;
          color: #a78bfa;
          margin-top: 3px;
        }
        .nav-link-text {
          font-size: clamp(0.72rem, 0.9vw, 0.95rem);
          font-weight: 600;
          letter-spacing: 0.05em;
        }
        .nav-partner-img {
          height: clamp(28px, 9vw, 74px);
        }
        .nav-logo-img {
          height: clamp(36px, 6vw, 70px);
          width: auto;
        }
        .nav-height {
          height: clamp(64px, 6vw, 96px);
        }
        .nav-get-started {
          font-size: clamp(0.68rem, 0.85vw, 0.9rem);
          padding: clamp(8px, 0.7vw, 14px) clamp(16px, 1.5vw, 28px);
        }
      `}</style>

      <nav className={`nav-body w-full sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-[#070b18]/95 border-white/10 shadow-[0_4px_40px_rgba(0,0,0,0.6)]"
          : "bg-[#070b18]/80 border-white/[0.06]"
      } backdrop-blur-xl`}>

        {/* Subtle top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-16">
          <div className="nav-height flex items-center justify-between gap-4">

            {/* ── LEFT: Logo + Brand ── */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative">
                <img
                  src="/cybershield.png"
                  alt="CyberShield"
                  className="nav-logo-img object-contain relative z-10 nav-logo-glow"
                />
                <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full scale-150 opacity-60 group-hover:opacity-90 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="nav-brand nav-brand-name">CyberShield</span>
                <span className="nav-tagline">A Project of RCK Safe City</span>
              </div>
            </Link>

            {/* ── CENTER: Partner logos (large screens only) ── */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 px-4 xl:px-6 border-x border-white/[0.08] flex-shrink-0">
              {partnerLogos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="nav-partner-img w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-200 hover:scale-110"
                />
              ))}
            </div>

            {/* ── RIGHT: Nav links + CTA ── */}
            <div className="hidden xl:flex items-center gap-6 2xl:gap-8 flex-shrink-0">
              <ul className="flex items-center gap-5 2xl:gap-7">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="nav-link-text nav-link-line relative text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/bank-verification"
                className="nav-gradient-btn nav-get-started rounded-full font-bold uppercase tracking-wider text-white whitespace-nowrap shadow-[0_0_16px_rgba(139,92,246,0.3)]"
              >
                Get Started
              </Link>
            </div>

            {/* ── Partner logos on md screens (between sm and xl) ── */}
            <div className="hidden md:flex lg:hidden items-center gap-3 flex-shrink-0">
              {partnerLogos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-7 w-auto object-contain opacity-70"
                />
              ))}
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="xl:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors flex-shrink-0"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════
          MOBILE DRAWER
      ══════════════════════════════════ */}
      <div className={`mobile-overlay fixed inset-0 z-[90] bg-slate-950/85 backdrop-blur-md xl:hidden ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)} />

      <div className={`mobile-drawer fixed top-0 right-0 z-[100] h-screen w-[82vw] max-w-[360px] bg-[#0d1120] border-l border-white/[0.08] shadow-[−8px_0_60px_rgba(0,0,0,0.6)] flex flex-col xl:hidden ${isOpen ? "open" : ""}`}>

        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-white/[0.07] shrink-0">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
            <img src="/cybershield.png" alt="CyberShield" className="h-8 w-auto object-contain" />
            <div>
              <div className="nav-brand text-sm font-bold text-white tracking-wide leading-none">CyberShield</div>
              <div className="text-[8px] uppercase tracking-[0.18em] text-violet-400 font-bold mt-0.5">RCK Safe City</div>
            </div>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer scrollable body */}
        <div className="flex-1 overflow-y-auto no-scrollbar overscroll-contain p-5">

          {/* Nav links */}
          <nav className="space-y-0.5 mb-6">
            {links.map((link, i) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between py-3.5 px-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-white/[0.06] transition-all duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <span className="text-[9px] font-black text-violet-500/50 tracking-widest w-5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.95rem] font-bold text-slate-200 group-hover:text-white transition-colors">
                    {link.name}
                  </span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-violet-400 transition-colors" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            to="/bank-verification"
            onClick={() => setIsOpen(false)}
            className="nav-gradient-btn block w-full text-center py-3.5 rounded-xl text-[0.8rem] font-extrabold uppercase tracking-[0.15em] text-white shadow-[0_4px_20px_rgba(139,92,246,0.4)] mb-8"
          >
            Get Started Now
          </Link>

          {/* Partners */}
          <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-5">
            <p className="text-[8px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-4 text-center">
              Supported By
            </p>
            <div className="grid grid-cols-2 gap-5 items-center justify-items-center">
              {partnerLogos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Drawer footer */}
        <div className="px-5 py-4 border-t border-white/[0.06] shrink-0">
          <p className="text-[8px] uppercase tracking-[0.2em] text-slate-600 text-center font-bold">
            CyberShield · RCK Safe City · Karachi
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;