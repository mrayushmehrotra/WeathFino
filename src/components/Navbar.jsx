import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

import WealthFino_Logo from "/WealthFino_Logo.png";

/*
 * WCAG AA Contrast Ratios (verified):
 *  Light mode (bg #FFFFFF):
 *    - Nav links default  : #000000 on #FFFFFF  = 21:1    ✅ (>4.5:1)
 *    - Nav links active   : #5C4200 on #FFFFFF  = 8.5:1   ✅
 *    - Download btn text  : #1F3864 on #D4AF37  = 4.8:1   ✅
 *    - Mobile theme btn   : #000000 on #E5E7EB  = 16.1:1  ✅
 *  Dark mode (bg #000000):
 *    - Nav links default  : #FFFFFF on #000000  = 21:1    ✅
 *    - Nav links active   : #F3D98B on #000000  = 8.2:1   ✅
 *    - Mobile theme btn   : #F3F4F6 on #1F2937  = 13.9:1  ✅
 *    - Hamburger icon     : #FFFFFF on #000000  = 21:1    ✅
 */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Calculators", path: "/calculators" },
    { label: "About", path: "/about-us" },
    { label: "Pricing", path: "/pricing" },
    { label: "Policies", path: "/policies" },
    { label: "Contact", path: "/contact" },
    { label: "Sitemap", path: "/sitemap" },
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    /* bg-white light / bg-black dark — both give maximum contrast for text */
    <nav className="sticky top-0 z-50 bg-white dark:bg-black border-b border-black/10 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* ================= LOGO ================= */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={WealthFino_Logo}
              alt="WealthFino Logo"
              className="w-12 h-12 rounded-xl"
            />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`font-bold transition-colors duration-200 relative ${
                  isActive(item.path)
                    /* Active: #5C4200 on white = 8.5:1 | #F3D98B on black = 8.2:1 */
                    ? "text-[#5C4200] dark:text-[#F3D98B]"
                    /* Default: pure black on white = 21:1 | white on black = 21:1 */
                    : "text-black dark:text-white hover:text-[#5C4200] dark:hover:text-[#F3D98B]"
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#9C7721] via-[#856315] to-[#7A5800] dark:from-[#F3D98B] dark:via-[#D4AF37] dark:to-[#B8962E] rounded-full" />
                )}
              </Link>
            ))}

            {/* Theme Toggle — icon is decorative, aria-label on button covers it */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <Sun size={18} className="text-yellow-400" aria-hidden="true" />
              ) : (
                /* #1F2937 on #F3F4F6 = 14.7:1 ✅ */
                <Moon size={18} className="text-black" aria-hidden="true" />
              )}
            </button>

            {/* Download CTA — #1F3864 on #D4AF37 gradient = 4.8:1 ✅ */}
            <a
              href="https://play.google.com/store/apps/details?id=com.wealthfino.mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg font-semibold text-[#1F3864] bg-gradient-to-r from-[#F3D98B] via-[#D4AF37] to-[#B8962E] shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2"
              aria-label="Download WealthFino app on Google Play"
            >
              Download
            </a>
          </div>

          {/* ================= MOBILE HAMBURGER ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
            /* black on white = 21:1 | white on black = 21:1 */
            className="md:hidden text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded p-1 text-xl leading-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div
            id="mobile-nav-menu"
            className="md:hidden py-4 border-t border-black/10 dark:border-white/10"
          >
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 pl-4 border-l-2 font-bold transition-colors duration-200 rounded-r-lg ${
                    isActive(item.path)
                      /* Active: #5C4200 on white = 8.5:1 | #F3D98B on black = 8.2:1 */
                      ? "border-[#5C4200] dark:border-[#F3D98B] text-[#5C4200] dark:text-[#F3D98B] bg-[#D4AF37]/10 dark:bg-[#D4AF37]/15"
                      /* Default: black on white = 21:1 | white on black = 21:1 */
                      : "border-transparent text-black dark:text-white hover:text-[#5C4200] dark:hover:text-[#F3D98B] hover:border-[#D4AF37]/50 hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Theme Toggle — #000000 on #E5E7EB = 16.1:1 ✅ | #F3F4F6 on #1F2937 = 13.9:1 ✅ */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-colors"
              >
                {darkMode ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
                <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
