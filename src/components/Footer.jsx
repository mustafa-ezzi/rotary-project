import React from "react";
import { Link } from "react-router-dom";
import { Mail, Heart, ExternalLink, ShieldCheck, Award } from "lucide-react";

const Footer = () => {
  const partnerLogos = [
    { src: "/district-3271.png", alt: "District 3271" },
    { src: "/RCK safe-city.png", alt: "RCK Safe City" },
    { src: "/rotaract.png", alt: "Rotaract" },
    { src: "/interact.png", alt: "Interact" },
  ];

  return (
    <footer className="w-full bg-slate-950 border-t border-white/5 relative overflow-hidden">
      {/* Subtle Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Info (Takes 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img src="/cybershield.png" alt="Logo" className="w-10 h-12 object-contain" />
              <div className="flex flex-col">
                <span className="font-black text-xl text-white tracking-tight">CyberShield</span>
                <span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold">Security Training</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              An initiative dedicated to fostering digital safety awareness. Empowering our community to navigate the web with confidence and security.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 bg-white/5 w-fit px-4 py-2 rounded-full border border-white/5">
              <Mail className="w-3.5 h-3.5 text-purple-400" />
              <span>info@cybershield.com</span>
            </div>
          </div>

          {/* Partners Section (Takes 5 cols) - Added Here */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-500" /> Official  Chapters
            </h4>
            <div className="flex flex-wrap items-center gap-6 md:gap-8 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
              {partnerLogos.map((logo, index) => (
                <img 
                  key={index} 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-10 md:h-12 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              ))}
            </div>
          </div>

          {/* Quick Links (Takes 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">Navigation</h4>
            <nav className="grid grid-cols-1 gap-4 text-sm">
              <Link to="/" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-purple-500 rounded-full"></span> Home Overview
              </Link>
              <Link to="/bank-verification" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-purple-500 rounded-full"></span> Training Lab
              </Link>
              <Link to="/contact" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-purple-500 rounded-full"></span> Support Center
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar: Presented By Section */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="text-[11px] text-slate-500 flex items-center gap-2">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
               © {new Date().getFullYear()} CyberShield | All Rights Reserved
            </div>
          </div>

          {/* Custom Presenter Credits */}
          <div className="flex flex-col md:flex-row items-center gap-6 bg-purple-500/5 px-6 py-4 rounded-2xl border border-purple-500/10">
            <span className="text-[10px] uppercase tracking-widest text-purple-400 font-black">Presented by:</span>
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-white font-bold text-sm">Rtr. Mustafa Ezzi</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Club IT Chair</p>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/10"></div>
              <div className="text-center md:text-left">
                <p className="text-white font-bold text-sm">Rtr. Lamiya Antaria</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Club President</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;