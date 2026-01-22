import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-2xl sticky top-0 z-50 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
           <div className=" p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
  <img 
    src="/cybershield.png" 
    alt="CyberShield Logo"
    className="w-10 h-14 object-contain"
  />
</div>

            <div className="flex flex-col">
              <span className="font-bold text-xl text-white">CyberShield</span>
              <span className="text-xs text-purple-300">Security Training</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/bank-verification"
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
              >
                Training
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/teams"
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
              >
                For Teams
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/bank-verification"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/50"
              >
                Get Started
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fadeIn">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  to="/"
                  className="block text-gray-300 hover:text-white font-medium py-2 px-4 rounded-lg hover:bg-white/10 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/bank-verification"
                  className="block text-gray-300 hover:text-white font-medium py-2 px-4 rounded-lg hover:bg-white/10 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Training
                </Link>
              </li>
              <li>
                <Link
                  to="/teams"
                  className="block text-gray-300 hover:text-white font-medium py-2 px-4 rounded-lg hover:bg-white/10 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  For Teams
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block text-gray-300 hover:text-white font-medium py-2 px-4 rounded-lg hover:bg-white/10 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/bank-verification"
                  className="block text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;