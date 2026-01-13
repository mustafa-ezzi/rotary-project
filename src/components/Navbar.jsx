import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-8 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/bank-logo.png" // replace with your logo path
          alt="Bank Logo"
          className="w-80 h-20 object-contain -ml-12"
        />
        {/* <span className="font-bold text-xl text-gray-800">SecureBank</span> */}
      </div>

      {/* Menu Links */}
      <ul className="flex gap-6 text-gray-600 font-medium text-sm">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/verify">Verify</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
