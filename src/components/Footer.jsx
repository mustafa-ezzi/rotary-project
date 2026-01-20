import React from "react";
import { Link } from "react-router-dom";
import { Shield, Mail, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-2 rounded-xl">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">CyberShield</span>
                <span className="text-xs text-purple-300">Security Training Platform</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              Empowering individuals and organizations to recognize and prevent scams through realistic, safe simulations and comprehensive training.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@CyberShield.com" className="hover:text-purple-400 transition-colors">
                info@CyberShield.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/bank-verification" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Start Training
                </Link>
              </li>
              <li>
                <Link to="/teams" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  For Teams
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-500/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 CyberShield. All rights reserved. Educational platform for security awareness.
            </div>

            {/* Developer Credit */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400">Designed & Developed with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span className="text-gray-400">by</span>
              <a
                href="https://www.trisitesolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 font-semibold transition-colors inline-flex items-center gap-1"
              >
                TriSite Solutions
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;