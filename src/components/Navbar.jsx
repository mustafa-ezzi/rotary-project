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
  ];

  const partnerLogos = [
    { src: "/Logos.png", alt: "District 3271" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=Exo+2:wght@500;600;700;800&display=swap');

        .nav-brand { font-family: 'Rajdhani', sans-serif; }
        .nav-body  { font-family: 'Exo 2', sans-serif; }

        /* ── Glass panel ── */
        .nav-glass {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.12);
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }
        .nav-glass.scrolled {
          background: rgba(15, 10, 35, 0.55);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255,255,255,0.08);
        }

        /* ── Nav links ── */
        .nav-link-item {
          position: relative;
          font-size: clamp(0.75rem, 0.9vw, 0.95rem);
          font-weight: 600;
          letter-spacing: 0.05em;
          color: rgba(255, 255, 255, 0.82);
          transition: color 0.2s;
          padding-bottom: 2px;
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0;
          width: 0; height: 2px;
          background: linear-gradient(90deg, #f472b6, #a78bfa);
          border-radius: 2px;
          transition: width 0.28s ease;
        }
        .nav-link-item:hover { color: #fff; }
        .nav-link-item:hover::after { width: 100%; }

        /* ── CTA button ── */
        .nav-cta {
          position: relative;
          overflow: hidden;
          font-size: clamp(0.68rem, 0.85vw, 0.88rem);
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #fff;
          padding: clamp(8px, 0.7vw, 12px) clamp(18px, 1.5vw, 28px);
          border-radius: 100px;
          background: linear-gradient(130deg, #e879a4 0%, #8b5cf6 55%, #3b82f6 100%);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.15) inset, 0 4px 20px rgba(139,92,246,0.35);
          transition: transform 0.22s, box-shadow 0.22s;
        }
        .nav-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.12);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .nav-cta:hover { transform: translateY(-1px) scale(1.03); box-shadow: 0 0 0 1px rgba(255,255,255,0.2) inset, 0 8px 28px rgba(139,92,246,0.5); }
        .nav-cta:hover::before { opacity: 1; }
        .nav-cta:active { transform: scale(0.97); }

        /* ── Logo glow ── */
        @keyframes navglow {
          0%,100% { filter: drop-shadow(0 0 5px rgba(244,114,182,0.45)); }
          50%      { filter: drop-shadow(0 0 12px rgba(244,114,182,0.8)) drop-shadow(0 0 22px rgba(139,92,246,0.45)); }
        }
        .nav-logo-glow { animation: navglow 3.5s ease-in-out infinite; }

        /* ── Divider ── */
        .nav-divider {
          width: 1px;
          align-self: stretch;
          background: rgba(255,255,255,0.12);
          margin: 12px 0;
        }

        /* ── Height ── */
        .nav-height { height: clamp(60px, 6vw, 88px); }

        /* ── Mobile drawer ── */
        .mobile-drawer {
          transform: translateX(100%);
          transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(12, 8, 30, 0.92);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          border-left: 1px solid rgba(255,255,255,0.10);
        }
        .mobile-drawer.open { transform: translateX(0); }

        .mobile-overlay {
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.38s ease;
        }
        .mobile-overlay.open { opacity: 1; pointer-events: auto; }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* ── Mobile link rows ── */
        .m-link-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 12px;
          border-radius: 12px;
          border: 1px solid transparent;
          transition: background 0.18s, border-color 0.18s;
          text-decoration: none;
        }
        .m-link-row:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.08);
        }

        /* ── Partner image sizes ── */
        .nav-partner-img { height: clamp(28px, 4vw, 60px); }
        .nav-logo-img    { height: clamp(36px, 5vw, 68px); width: auto; }

        /* Top shimmer line */
        .nav-shimmer {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(167,139,250,0.5) 40%, rgba(244,114,182,0.5) 60%, transparent 100%);
        }

        /* Hamburger button */
        .ham-btn {
          display: flex; align-items: center; justify-content: center;
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          color: #fff;
          transition: background 0.18s;
          cursor: pointer;
        }
        .ham-btn:hover { background: rgba(255,255,255,0.14); }
      `}</style>

      <nav className={`nav-body nav-glass w-full sticky top-0 z-50 ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-shimmer" />

        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="nav-height flex items-center justify-between gap-4">

            {/* ── LEFT: Logo ── */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative">
                <img
                  src="/cybershield.png"
                  alt="CyberShield"
                  className="nav-logo-img object-contain relative z-10 nav-logo-glow"
                />
                <div className="absolute inset-0 bg-purple-500/15 blur-2xl rounded-full scale-150 opacity-50 group-hover:opacity-80 transition-opacity" />
              </div>
            </Link>

            {/* ── CENTER: Partner logos (lg+) ── */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-7 px-6 xl:px-8 flex-shrink-0">
              <div className="nav-divider" />
              {partnerLogos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="nav-partner-img w-auto object-contain opacity-75 hover:opacity-100 transition-all duration-200 hover:scale-105"
                />
              ))}
              <div className="nav-divider" />
            </div>

            {/* ── RIGHT: Links + CTA (xl+) ── */}
            <div className="hidden xl:flex items-center gap-7 2xl:gap-9 flex-shrink-0">
              <ul className="flex items-center gap-6 2xl:gap-8 list-none m-0 p-0">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="nav-link-item">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/bank-verification" className="nav-cta whitespace-nowrap">
                Get Started
              </Link>
            </div>

            {/* ── Partner logos on md screens ── */}
            <div className="hidden md:flex lg:hidden items-center gap-3 flex-shrink-0">
              {partnerLogos.map((logo) => (
                <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-7 w-auto object-contain opacity-65" />
              ))}
            </div>

            {/* ── Hamburger ── */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="ham-btn xl:hidden flex-shrink-0"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ══ MOBILE OVERLAY ══ */}
      <div
        className={`mobile-overlay fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm xl:hidden ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      {/* ══ MOBILE DRAWER ══ */}
      <div className={`mobile-drawer fixed top-0 right-0 z-[100] h-screen w-[80vw] max-w-[340px] flex flex-col xl:hidden shadow-2xl ${isOpen ? "open" : ""}`}>

        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-white/[0.08] shrink-0">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
            <img src="/cybershield.png" alt="CyberShield" className="h-8 w-auto object-contain" />
            <div>
              <div className="nav-brand text-sm font-bold text-white tracking-wide leading-none">CyberShield</div>
              <div className="text-[8px] uppercase tracking-[0.18em] text-violet-400 font-bold mt-0.5">RCK Safe City</div>
            </div>
          </Link>
          <button onClick={() => setIsOpen(false)} className="ham-btn">
            <X size={16} />
          </button>
        </div>

        {/* Drawer body */}
        <div className="flex-1 overflow-y-auto no-scrollbar overscroll-contain p-5">

          <nav className="space-y-1 mb-6">
            {links.map((link, i) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="m-link-row"
              >
                <div className="flex items-center gap-3.5">
                  <span className="text-[9px] font-black text-violet-400/50 tracking-widest w-5 font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.95rem] font-bold text-white/85">
                    {link.name}
                  </span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-white/15 group-hover:bg-violet-400 transition-colors" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            to="/bank-verification"
            onClick={() => setIsOpen(false)}
            className="nav-cta block w-full text-center py-3.5 rounded-xl text-[0.8rem] tracking-[0.15em] mb-8"
            style={{ borderRadius: "14px" }}
          >
            Get Started Now
          </Link>

          {/* Partners panel */}
          <div className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-[8px] uppercase tracking-[0.3em] text-white/30 font-bold mb-4 text-center">
              Supported By
            </p>
            <div className="grid grid-cols-2 gap-5 items-center justify-items-center">
              {partnerLogos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Drawer footer */}
        <div className="px-5 py-4 border-t border-white/[0.06] shrink-0">
          <p className="text-[8px] uppercase tracking-[0.2em] text-white/25 text-center font-bold">
            CyberShield · RCK Safe City · Karachi
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;