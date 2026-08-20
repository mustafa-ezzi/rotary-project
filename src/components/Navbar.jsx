import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Awareness", path: "/bank-verification" },
    { name: "Preventions", path: "/roadmap" },
    { name: "Cyber Crime Officia", path: "/contact" },
    { name: "Feedback Portal", path: "/feedback" },
  ];

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=Exo+2:wght@400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; }
        .nav-brand { font-family: 'Rajdhani', sans-serif; }
        .nav-body  { font-family: 'Exo 2', sans-serif; }

        /* ══ STICKY GLASS ══ */
        .nav-glass {
          position: sticky;
          top: 0; left: 0; right: 0;
          z-index: 9999;
          width: 100%;
          background: rgba(230, 220, 255, 0.18);
          backdrop-filter: blur(32px) saturate(220%) brightness(1.10);
          -webkit-backdrop-filter: blur(32px) saturate(220%) brightness(1.10);
          border-bottom: 1px solid rgba(255,255,255,0.35);
          box-shadow: 0 2px 20px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.5);
          transition: background 0.35s, box-shadow 0.35s, border-color 0.35s;
        }
        .nav-glass.scrolled {
          background: rgba(16, 9, 42, 0.60);
          border-bottom-color: rgba(255,255,255,0.12);
          box-shadow: 0 6px 36px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07);
        }

        /* shimmer */
        .nav-shimmer {
          position: absolute; top: 0; left: 0; right: 0; height: 1px; pointer-events: none;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.75) 25%, rgba(192,132,252,0.85) 50%, rgba(244,114,182,0.75) 75%, transparent 100%);
        }

        /* ══ INNER ROW ══ */
        .nav-inner {
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 16px;
          height: 66px;
        }
        @media (min-width: 640px)  { .nav-inner { padding: 0 24px; } }
        @media (min-width: 1024px) { .nav-inner { padding: 0 36px; height: 84px; } }
        @media (min-width: 1280px) { .nav-inner { padding: 0 48px; } }

        /* ══ LOGO ══ */
        .nav-logo-img {
          height: 56px; width: auto; object-fit: contain; display: block;
        }
        @media (min-width: 1024px) { .nav-logo-img { height: 72px; } }

        @keyframes navglow {
          0%,100% { filter: drop-shadow(0 0 5px rgba(244,114,182,0.4)); }
          50%      { filter: drop-shadow(0 0 14px rgba(244,114,182,0.8)) drop-shadow(0 0 24px rgba(139,92,246,0.45)); }
        }
        .nav-logo-glow { animation: navglow 3.5s ease-in-out infinite; }

        /* ══ NAV LINKS (2xl+ only to avoid overflow) ══ */
        .nav-links-wrap {
          display: none;
          align-items: center;
          gap: 2px;
          flex-shrink: 0;
          margin-left: auto;
        }
        @media (min-width: 1536px) { .nav-links-wrap { display: flex; } }

        .nav-link-item {
          position: relative;
          font-size: 0.80rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: rgba(255,255,255,0.88);
          white-space: nowrap;
          padding: 6px 9px;
          border-radius: 8px;
          text-decoration: none;
          text-shadow: 0 1px 5px rgba(0,0,0,0.3);
          transition: color 0.18s, background 0.18s;
        }
        .nav-link-item::after {
          content: '';
          position: absolute; bottom: 2px; left: 9px; right: 9px;
          height: 2px;
          background: linear-gradient(90deg, #f472b6, #a78bfa);
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.24s ease;
        }
        .nav-link-item:hover,
        .nav-link-item.active { color: #fff; background: rgba(255,255,255,0.09); }
        .nav-link-item:hover::after,
        .nav-link-item.active::after { transform: scaleX(1); }

        /* ══ CTA ══ */
        .nav-cta {
          display: inline-flex; align-items: center;
          position: relative; overflow: hidden;
          font-size: 0.77rem; font-weight: 700;
          letter-spacing: 0.10em; text-transform: uppercase;
          color: #fff; white-space: nowrap;
          padding: 9px 20px; border-radius: 100px;
          margin-left: 10px;
          background: linear-gradient(130deg, #e879a4 0%, #8b5cf6 55%, #3b82f6 100%);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.22) inset, 0 4px 18px rgba(139,92,246,0.38);
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none; flex-shrink: 0;
        }
        .nav-cta::before {
          content: ''; position: absolute; inset: 0;
          background: rgba(255,255,255,0.14); opacity: 0; transition: opacity 0.18s;
        }
        .nav-cta:hover { transform: translateY(-1px) scale(1.03); box-shadow: 0 0 0 1px rgba(255,255,255,0.28) inset, 0 8px 26px rgba(139,92,246,0.52); }
        .nav-cta:hover::before { opacity: 1; }
        .nav-cta:active { transform: scale(0.97); }

        /* ══ HAMBURGER (hidden at 2xl+) ══ */
        .ham-btn {
          display: flex; align-items: center; justify-content: center;
          width: 40px; height: 40px; border-radius: 10px;
          background: rgba(255,255,255,0.14); border: 1px solid rgba(255,255,255,0.28);
          color: #ffffff; cursor: pointer; flex-shrink: 0; margin-left: auto;
          transition: background 0.18s;
          padding: 0;
          outline: none;
        }
        .ham-btn:hover { background: rgba(255,255,255,0.22); }
        .ham-btn svg { 
          width: 20px !important; 
          height: 20px !important; 
          stroke: currentColor;
          stroke-width: 2.5;
          color: #ffffff;
          display: block;
        }
        @media (min-width: 1536px) { .ham-btn { display: none; } }

        /* ══ DRAWER OVERLAY ══ */
        .mobile-overlay {
          position: fixed; inset: 0; z-index: 10000;
          background: rgba(0,0,0,0.52); backdrop-filter: blur(4px);
          opacity: 0; pointer-events: none;
          transition: opacity 0.35s ease;
        }
        .mobile-overlay.open { opacity: 1; pointer-events: auto; }

        /* ══ DRAWER PANEL ══ */
        .mobile-drawer {
          position: fixed; top: 0; right: 0; z-index: 10001;
          height: 100dvh; width: min(82vw, 360px);
          display: flex; flex-direction: column;
          background: rgba(14, 8, 36, 0.95);
          backdrop-filter: blur(32px) saturate(160%);
          -webkit-backdrop-filter: blur(32px) saturate(160%);
          border-left: 1px solid rgba(255,255,255,0.12);
          box-shadow: -8px 0 60px rgba(0,0,0,0.5);
          transform: translateX(100%);
          transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-drawer.open { transform: translateX(0); }

        .drawer-body {
          flex: 1; overflow-y: auto; padding: 16px 16px 24px;
          scrollbar-width: none; -ms-overflow-style: none;
        }
        .drawer-body::-webkit-scrollbar { display: none; }

        .m-link-row {
          display: flex; align-items: center; justify-content: space-between;
          padding: 13px 12px; border-radius: 12px;
          border: 1px solid transparent; text-decoration: none;
          transition: background 0.16s, border-color 0.16s; margin-bottom: 3px;
        }
        .m-link-row:hover, .m-link-row.active {
          background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.11);
        }
      `}</style>

      {/* ══ NAVBAR ══ */}
      <nav className={`nav-body nav-glass ${scrolled ? "scrolled" : ""}`} style={{ position: "sticky" }}>
        <div className="nav-shimmer" />
        <div className="nav-inner">

          {/* Logo */}
          <Link to="/" style={{ display: "flex", alignItems: "center", flexShrink: 0, textDecoration: "none", marginRight: "8px" }}>
            <img src="/cybershield.png" alt="CyberShield" className="nav-logo-img nav-logo-glow" />
          </Link>

          {/* Nav links + CTA (2xl+) */}
          <div className="nav-links-wrap">
            {links.map((link) => (
              <Link key={link.name} to={link.path} className={`nav-link-item ${isActive(link.path) ? "active" : ""}`}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="ham-btn" style={{ background: "rgba(255,255,255,0.14)" }}>
            {isOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
          </button>
        </div>
      </nav>

      {/* ══ OVERLAY ══ */}
      <div className={`mobile-overlay ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)} />

      {/* ══ DRAWER ══ */}
      <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", height: "64px", borderBottom: "1px solid rgba(255,255,255,0.09)", flexShrink: 0 }}>
          <Link to="/" onClick={() => setIsOpen(false)} style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <img src="/cybershield.png" alt="CyberShield" style={{ height: "44px", width: "auto", objectFit: "contain" }} />
            <div>
            </div>
          </Link>
          <button onClick={() => setIsOpen(false)} className="ham-btn" style={{ margin: 0 }}>
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="drawer-body">

          {/* Links */}
          <nav>
            {links.map((link, i) => (
              <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className={`m-link-row ${isActive(link.path) ? "active" : ""}`}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ fontSize: "9px", fontWeight: 900, color: "rgba(167,139,250,0.45)", letterSpacing: "0.2em", width: "20px", fontFamily: "monospace" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: "0.93rem", fontWeight: 600, color: isActive(link.path) ? "#fff" : "rgba(255,255,255,0.85)" }}>
                    {link.name}
                  </span>
                </div>
                <ChevronRight size={14} style={{ color: "rgba(255,255,255,0.22)", flexShrink: 0 }} />
              </Link>
            ))}
          </nav>

        </div>

        {/* Footer */}
        <div style={{ padding: "12px 20px", borderTop: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }}>
          <p style={{ fontSize: "8px", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(255,255,255,0.2)", textAlign: "center", fontWeight: 700, margin: 0 }}>
            CyberShield · Digital Safety Awareness
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
