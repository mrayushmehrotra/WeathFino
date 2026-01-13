import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

import WealthFino_Logo from "../assets/WealthFino_Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 🌙 Theme State
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const location = useLocation();

  // Apply theme to <html>
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
    { label: "Blogs", path: "/blogs" },
    { label: "Charts", path: "/charts" },
    { label: "About", path: "/about-us" },
    { label: "Pricing", path: "/pricing" },
    { label: "Policies", path: "/policies" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-trading-navy border-b border-trading-border dark:border-gray-700 transition-colors">
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
                className={`font-medium transition relative ${
                  isActive(item.path)
                    ? "text-trading-blue"
                    : "text-gray-600 dark:text-gray-300 hover:text-trading-blue"
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-trading-green to-trading-cyan rounded-full" />
                )}
              </Link>
            ))}

            {/* 🌙 THEME TOGGLE */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-105 transition"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-gray-800" />
              )}
            </button>

            <a
              href="https://play.google.com/store/apps/details?id=com.wealthfino.mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download
            </a>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-trading-navy dark:text-white"
          >
            ☰
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-trading-border dark:border-gray-700">
            <div className="space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 pl-4 border-l-2 transition ${
                    isActive(item.path)
                      ? "border-trading-blue text-trading-blue bg-blue-50 dark:bg-gray-800"
                      : "border-transparent text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* 🌙 MOBILE THEME BUTTON */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="mt-4 w-full flex items-center justify-center gap-2 py-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
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
