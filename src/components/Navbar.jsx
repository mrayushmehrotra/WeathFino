import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import WealthFino_Logo from "../assets/WealthFino_Logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current path

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Blogs", path: "/blogs" },
    { label: "Charts", path: "/charts" },
    { label: "About", path: "/about-us" },
    { label: "Pricing", path: "/pricing" },
    { label: "Policies", path: "/policies" },
    { label: "Contact", path: "/contact" },
  ];

  // Function to check if a link is active
  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") {
      return true;
    }
    if (path !== "/" && location.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white  border-b border-trading-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* ================= LOGO ================= */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12  from-trading-green to-trading-cyan rounded-lg flex items-center justify-center">
               <img src={WealthFino_Logo} alt="" />
            </div>
           
              <div className="w-10">
             
              </div>
               
             
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`font-medium transition-colors relative group ${
                  isActive(item.path)
                    ? "text-trading-blue"
                    : "text-gray-600 hover:text-trading-blue"
                }`}
              >
                {item.label}
                {/* Active indicator line */}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-trading-green to-trading-cyan rounded-full" />
                )}
                {/* Hover effect line */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-trading-green to-trading-cyan rounded-full group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            <div className="flex items-center space-x-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.wealthfino.mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Download
              </a>
            </div>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-trading-navy"
          >
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-current" />
              <div className="w-6 h-0.5 bg-current" />
              <div className="w-6 h-0.5 bg-current" />
            </div>
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-trading-border">
            <div className="space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 pl-4 border-l-2 transition-all ${
                    isActive(item.path)
                      ? "border-trading-blue text-trading-blue font-medium bg-blue-50"
                      : "border-transparent text-gray-600 hover:text-trading-blue"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 space-y-3">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center btn-secondary"
                >
                  Log In
                </Link>
                <Link
                  to="/start-trading"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center btn-primary"
                >
                  Start Trading
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
