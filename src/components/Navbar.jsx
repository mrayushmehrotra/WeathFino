import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Blogs", path: "/blogs" },
    { label: "Charts", path: "/charts" },
    { label: "About", path: "/about-us" },
    { label: "Pricing", path: "/pricing" },
    { label: "Policies", path: "/policies" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-trading-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* ================= LOGO ================= */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-trading-green to-trading-cyan rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-trading-navy">
                WealthFino
              </div>
              <div className="text-xs text-trading-blue font-medium">
                TRADING
              </div>
            </div>
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-gray-600 hover:text-trading-blue font-medium transition-colors"
              >
                {item.label}
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
                  className="block py-2 text-gray-600 hover:text-trading-blue"
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
