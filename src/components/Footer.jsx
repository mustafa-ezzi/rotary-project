import React from "react";
import { Link } from "react-router-dom";
import { Mail, Heart, ExternalLink, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    // Changed: Uses slate-950 for a clean, neutral "grounding" effect
    <footer className="w-full bg-slate-950 border-t border-white/5 relative overflow-hidden">
      {/* Subtle Glow Effect for Purple Blending */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/cybershield.png" alt="Logo" className="w-8 h-10 object-contain" />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">CyberShield</span>
                <span className="text-xs text-slate-500">Professional Security Awareness</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Empowering individuals and organizations with the knowledge to stay safe in an increasingly complex digital world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Navigation</h4>
              <nav className="flex flex-col gap-2 text-sm text-slate-400">
                <Link to="/" className="hover:text-purple-400 transition-colors">Home Overview</Link>
                <Link to="/bank-verification" className="hover:text-purple-400 transition-colors">Training Lab</Link>
                <Link to="/contact" className="hover:text-purple-400 transition-colors">Support Center</Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Legal</h4>
              <nav className="flex flex-col gap-2 text-sm text-slate-400">
                <Link to="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
                <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                  <Mail className="w-3 h-3" />
                  <span>info@cybershield.com</span>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>© {new Date().getFullYear()} CyberShield</span>
            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-green-500" /> Secure Platform
            </span>
          </div>
          
          <div className="text-xs text-slate-500 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 animate-pulse" /> by{" "}
            <a 
              href="https://www.trisitesolutions.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-300 hover:text-green-400 font-bold flex items-center gap-1 transition-colors"
            >
              TriSite Solutions <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;