import React, { useState, useEffect } from "react"; // Added useEffect
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // FIX: Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function to ensure scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const links = [
    { name: "Home", path: "/" },
    { name: "Training", path: "/bank-verification" },
    { name: "Presenter", path: "/presenter" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "Reveal", path: "/reveal" },
    { name: "Contact", path: "/contact" },
  ];

  const partnerLogos = [
    { src: "/district-3271.png", alt: "District 3271" },
    { src: "/RCK safe-city.png", alt: "RCK Safe City" },
    { src: "/rotaract.png", alt: "Rotaract" },
    { src: "/interact.png", alt: "Interact" },
  ];

  return (
    <nav className="w-full bg-slate-900/90 backdrop-blur-xl sticky top-0 z-50 border-b border-white/10 shadow-2xl">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* LEFT: Brand Section */}
          <div className="flex items-center gap-4 lg:gap-6 flex-1">
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative">
                <img
                  src="/cybershield.png"
                  alt="CyberShield Logo"
                  className="w-10 h-12 md:w-12 md:h-14 object-contain relative z-10"
                />
                <div className="absolute inset-0 bg-purple-500/30 blur-xl rounded-full scale-125 opacity-50"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg md:text-xl text-white tracking-tight leading-none">CyberShield</span>
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-purple-400 font-bold mt-1">Security Training</span>
              </div>
            </Link>

            {/* PARTNERS STRIP (Desktop Only) */}
            <div className="hidden lg:flex items-center gap-4 ml-4 pl-4 border-l border-white/10">
              <div className="flex items-center gap-6">
                {partnerLogos.map((logo, index) => (
                  <img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-9 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] transition-transform hover:scale-110"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Desktop Menu */}
          <ul className="hidden xl:flex items-center gap-8 ml-4">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="text-gray-300 hover:text-white font-semibold transition-colors duration-300 text-sm tracking-wide relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/bank-verification"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold px-7 py-3 rounded-full transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] active:scale-95 whitespace-nowrap text-sm"
              >
                Get Started
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-colors"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* MOBILE OVERLAY MENU */}
        <div
          className={`xl:hidden fixed inset-0 w-full h-screen z-[100] transition-all duration-500 overflow-hidden ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Subtle blurred backdrop - Click to close */}
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Menu Content Container */}
          <div 
            className={`relative flex flex-col h-full w-[85%] max-w-[400px] ml-auto bg-slate-900 border-l border-white/10 shadow-2xl transition-transform duration-500 ease-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Header: Logo & Close Button */}
            <div className="flex items-center justify-between px-6 h-20 border-b border-white/5">
              <div className="flex items-center gap-2">
                <img src="/cybershield.png" alt="Logo" className="w-6 h-8 object-contain" />
                <span className="font-bold text-white text-sm tracking-tight">CyberShield</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 rounded-full bg-white/5 border border-white/10 text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Area */}
            {/* Added: overscroll-contain to stop scroll bleed */}
            <div className="flex flex-col flex-1 overflow-y-auto p-6 no-scrollbar overscroll-contain">
              <nav className="space-y-1">
                {links.map((link, i) => (
                  <Link
                    key={i}
                    to={link.path}
                    className="group flex items-center justify-between py-4 border-b border-white/5 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-black text-purple-500/60 tracking-tighter">0{i+1}</span>
                      <span className="text-lg font-bold text-white/90 group-hover:text-purple-400 transition-colors">
                        {link.name}
                      </span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-purple-500 transition-all"></div>
                  </Link>
                ))}
              </nav>

              <div className="mt-8">
                <Link
                  to="/bank-verification"
                  className="block w-full text-center py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl text-sm shadow-lg active:scale-95 transition-transform"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started Now
                </Link>
              </div>

              {/* Partners Grid */}
              <div className="mt-12 pb-10">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-5 text-center">
                    Supported By
                  </p>
                  <div className="grid grid-cols-2 gap-6 items-center">
                    {partnerLogos.map((logo, index) => (
                      <img
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                        className="h-7 w-auto mx-auto object-contain opacity-80 brightness-110"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;