import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blogs" },
    { label: "Charts", href: "/charts" },
    { label: "About", href: "/about-us" },
    { label: "Pricing", path: "/pricing" },
    { label: "Policies", path: "/policies" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-trading-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
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
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) =>
              item.path ? (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-gray-600 hover:text-trading-blue font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-trading-blue font-medium transition-colors"
                >
                  {item.label}
                </a>
              )
            )}

            <div className="flex items-center space-x-12">
              <button className="btn-primary">Start Trading</button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-trading-navy"
          >
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-current"></div>
              <div className="w-6 h-0.5 bg-current"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-3">
              {menuItems.map((item) =>
                item.path ? (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="block py-2 text-gray-600 hover:text-trading-blue"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block py-2 text-gray-600 hover:text-trading-blue"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}

              <div className="pt-4 space-y-3">
                <button className="w-full btn-secondary">Log In</button>
                <button className="w-full btn-primary">Start Trading</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
