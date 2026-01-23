import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Training", path: "/bank-verification" },
    { name: "Presenter", path: "/presenter" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "Reveal", path: "/reveal" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    // Changed: bg-slate-900/80 + backdrop-blur-lg for universal blending
    <nav className="w-full bg-slate-900/80 backdrop-blur-lg sticky top-0 z-50 border-b border-white/10 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/cybershield.png"
                alt="CyberShield Logo"
                className="w-10 h-14 object-contain relative z-10"
              />
              <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-white tracking-tight">CyberShield</span>
              <span className="text-[10px] uppercase tracking-widest text-purple-400 font-semibold">Security Training</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="text-gray-300 hover:text-white font-medium transition-all duration-300 text-sm relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/bank-verification"
                className="bg-white text-slate-900 hover:bg-purple-500 hover:text-white font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-white/5 active:scale-95"
              >
                Get Started
              </Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-xl transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 absolute top-20 left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-white/10 px-4 animate-in slide-in-from-top duration-300">
            <ul className="flex flex-col gap-2 mt-4">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="block text-gray-300 hover:text-white font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;