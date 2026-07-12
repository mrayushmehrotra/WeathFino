import React from "react";
import WealthFino_Logo from "/WealthFino_Logo.png";

import { NavLink } from "react-router-dom";

import { Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-white dark:bg-[#0b1022]
        text-black dark:text-white
        transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* ================= TOP GRID ================= */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* ================= BRAND ================= */}
          <div className="space-y-8">
            {/* Logo with Branding */}
            <div className="flex items-start gap-4">
              <img
                src={WealthFino_Logo}
                alt="WealthFino"
                className="w-16 h-16 rounded-2xl shadow-lg border border-slate-200 dark:border-gray-800 p-2 bg-white dark:bg-gray-900"
              />
              <div>
                <h3 className="font-playfair text-2xl font-bold text-black dark:text-white">
                  WealthFino
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Smart Trading Community
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gradient-to-r from-slate-50/50 to-transparent dark:from-[#D4AF37]/5 dark:to-transparent rounded-2xl p-5 border border-slate-100 dark:border-[#D4AF37]/10">
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                Join our trading community for shared insights, interactive
                learning, and a collaborative environment to enhance your
                financial knowledge.
              </p>
            </div>

            {/* App Downloads */}
            <div>
              {/* <h4 className="text-sm font-semibold mb-4 text-black dark:text-white flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.53 3.51 7.64 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Download Our Mobile App
              </h4> */}

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="p-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200 dark:border-gray-700 hover:border-slate-300 dark:hover:border-gray-600 bg-white dark:bg-gray-900"
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download WealthFino on the App Store"
                    className="h-10"
                  />
                </a>


              </div>
            </div>

            {/* Disclaimer Card */}
            <div className="rounded-2xl p-5 bg-gradient-to-br from-[#F3D98B]/10 to-[#D4AF37]/5 dark:from-[#D4AF37]/10 dark:to-[#B8962E]/5 border border-[#D4AF37]/30 dark:border-[#D4AF37]/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 dark:bg-[#D4AF37]/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#B8962E] dark:text-[#D4AF37]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.904 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-black dark:text-white">
                  Important Disclaimer
                </h3>
              </div>

              <p className="text-xs leading-relaxed text-gray-800 dark:text-gray-200">
                Investment in securities market is subject to market risks. Read
                all the related documents carefully before investing.
                Registration granted by SEBI and certification from NISM is no
                way guarantee performance of the intermediary or provide any
                assurance of returns to investors.
              </p>
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="bg-gradient-to-br from-white to-slate-50 dark:from-[#0b1022] dark:to-[#05070f] rounded-2xl p-3 shadow-lg border border-slate-200 dark:border-[#D4AF37]/20">
            <div className="flex items-center mb-2">
              <h3 className="font-playfair font-bold text-2xl text-black dark:text-white">
                Quick Links
              </h3>
            </div>

            <div className="space-y-1">
              {[
                {
                  label: "Privacy Policy",
                  path: "/policies/privacy-policy",
                  icon: "🛡️",
                },
                {
                  label: "Client Consent and Terms & Conditions",
                  path: "/policies/client-term",
                  icon: "📝",
                },
                {
                  label: "PMLA Policy",
                  path: "/policies/pmla-policy",
                  icon: "⚖️",
                },
                {
                  label: "Terms & Conditions",
                  path: "/policies/terms-conditions",
                  icon: "📄",
                },
                {
                  label: "Disclosure, USER & KYC Agreement",
                  path: "/policies/disclosure-user-kyc",
                  icon: "🔐",
                },
                {
                  label: "Disclaimer for Website",
                  path: "/policies/website-disclaimer",
                  icon: "🌐",
                },
                {
                  label: "Redressal Of Grievance",
                  path: "/policies/redressal-of-grievance",
                  icon: "🔄",
                },
                {
                  label: "Social Media Disclaimers",
                  path: "/policies/social-media-disclaimers",
                  icon: "💬",
                },
                {
                  label: "Legal & Risk Disclosure",
                  path: "/policies/legal-risk-disclosure",
                  icon: "⚡",
                },
                {
                  label: "Refund Policy",
                  path: "/policies/refund-policy",
                  icon: "💳",
                },
                {
                  label: "Cancellation Policy",
                  path: "/policies/cancellation-policy",
                  icon: "❌",
                },
                {
                  label: "Internal Policy on Conflict of Interest",
                  path: "/policies/conflict-of-interest-policy",
                  icon: "⚖️",
                },
                {
                  label: "Investor Charter",
                  path: "/policies/investor-charter",
                  icon: "📊",
                },
                {
                  label: "Complaints Board",
                  path: "/policies/complaints-board",
                  icon: "📋",
                },
                {
                  label: "Code of Conduct",
                  path: "/policies/code-of-conduct",
                  icon: "👥",
                },
                {
                  label: "Data Deletion Policy",
                  path: "/policies/data-deletion",
                  icon: "🗑️",
                },
                {
                  label: "Pro Points Policy",
                  path: "/policies/pro-points-policy",
                  icon: "⭐",
                },
                {
                  label: "Accessibility Statement",
                  path: "/policies/accessibility-statement",
                  icon: "♿",
                },
              ].map((item, index) => {
                return (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) => {
                      const baseClasses =
                        "flex items-center  p-2 rounded-xl transition-all duration-200 group";
                      const activeClasses = isActive
                        ? "bg-gradient-to-r from-[#F3D98B]/10 to-[#D4AF37]/10 dark:from-[#D4AF37]/20 dark:to-[#B8962E]/20 border border-[#D4AF37]/50 shadow-sm text-black dark:text-white"
                        : "hover:bg-slate-100/80 dark:hover:bg-gray-800/50 border border-transparent text-black dark:text-white hover:text-black dark:hover:text-white";

                      return `${baseClasses} ${activeClasses}`;
                    }}
                  >
                    <span className="text-sm font-medium transition-colors duration-200 flex-1">
                      {item.label}
                    </span>
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/* ================= CONTACT ================= */}
          <div className="space-y-2">
            {/* Header with modern design */}
            <div className="relative">
              <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-10 bg-gradient-to-b from-[#F3D98B] via-[#D4AF37] to-[#B8962E] rounded-full"></div>
              <div className="pl-4">
                <h3 className="font-playfair font-bold text-3xl text-black dark:text-white mb-1">
                  Get in Touch
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Connect with us through multiple channels
                </p>
              </div>
            </div>

            {/* Modern Contact Cards Grid */}
            <div className="grid grid-cols-1 gap-2">
              {/* Email Card - Modern Gradient */}
              <a
                href="mailto:info@krishnapathak.com"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-gray-900 dark:to-[#05070f] p-2 border border-slate-200 dark:border-gray-800 hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 dark:from-[#D4AF37]/0 dark:via-[#D4AF37]/10 dark:to-[#D4AF37]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                <div className="relative flex items-center gap-2">
                  {/* Icon with modern glow */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl rounded-2xl"></div>
                    <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#F3D98B] via-[#D4AF37] to-[#B8962E] flex items-center justify-center shadow-lg shadow-[#D4AF37]/30">
                      <Mail className="w-5 h-5 text-[#1F3864]" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-black dark:text-white uppercase tracking-wider">
                        Email
                      </span>
                    </div>
                    <p className="text font-medium text-gray-800 dark:text-gray-200 group-hover:text-[#8B6914] dark:group-hover:text-[#D4AF37] transition-colors">
                      info@krishnapathak.com
                    </p>
                  </div>
                </div>
              </a>

              {/* Phone Card - Modern Gradient */}
              <a
                href="tel:+919883455700"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-gray-900 dark:to-[#05070f] p-2 border border-slate-200 dark:border-gray-800 hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 dark:from-[#D4AF37]/0 dark:via-[#D4AF37]/10 dark:to-[#D4AF37]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                <div className="relative flex items-center gap-5">
                  {/* Icon with modern glow */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl rounded-2xl"></div>
                    <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#F3D98B] via-[#D4AF37] to-[#B8962E] flex items-center justify-center shadow-lg shadow-[#D4AF37]/30">
                      <Phone className="w-6 h-6 text-[#1F3864]" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-black dark:text-white uppercase tracking-wider">
                        Direct Call
                      </span>
                      <svg
                        className="w-5 h-5 text-[#D4AF37] opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200 group-hover:text-[#8B6914] dark:group-hover:text-[#D4AF37] transition-colors">
                      +91 9883455700
                    </p>
                  </div>
                </div>
              </a>

              {/* WhatsApp Card - Modern Gradient with Badge */}
              <a
                href="https://wa.me/919353523685"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-gray-900 dark:to-[#05070f] p-2 border border-slate-200 dark:border-gray-800 hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 dark:from-[#D4AF37]/0 dark:via-[#D4AF37]/10 dark:to-[#D4AF37]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                {/* Live indicator */}

                <div className="relative flex items-center gap-5">
                  {/* Icon with modern glow */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl rounded-2xl"></div>
                    <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#F3D98B] via-[#D4AF37] to-[#B8962E] flex items-center justify-center shadow-lg shadow-[#D4AF37]/30">
                      <MessageCircle className="w-5 h-5 text-[#1F3864]" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between ">
                      <span className="text-sm font-semibold text-black dark:text-white uppercase tracking-wider">
                        WhatsApp Support
                      </span>
                      <svg
                        className="w-5 h-5 text-[#D4AF37] opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200 group-hover:text-[#8B6914] dark:group-hover:text-[#D4AF37] transition-colors">
                      9353523685
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* ================= LEGAL ================= */}
          <div className="space-y-6">
            {/* SEBI Registration Card */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-slate-50 to-white dark:from-[#0b1022] dark:to-[#05070f] border border-slate-200 dark:border-[#D4AF37]/20 shadow-sm">
              {/* Name and Title */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-1">
                  Krishna Pathak
                </h3>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 dark:bg-[#D4AF37]/10 border border-[#D4AF37]/30 dark:border-[#D4AF37]/30">
                  <svg
                    className="w-3 h-3 text-[#B8962E] dark:text-[#D4AF37]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-md font-extrabold text-black dark:text-white">
                    SEBI Registered
                  </span>
                </div>
              </div>

              {/* Registration Details */}
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-1">
                    SEBI Registration Number
                  </p>
                  <p className="text-sm font-mono text-gray-900 dark:text-gray-100">
                    INH300009914
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-1">
                    BSE Enlistment Number
                  </p>
                  <p className="text-sm font-mono text-gray-900 dark:text-gray-100">
                    5590
                  </p>
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-black dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="font-semibold text-black dark:text-white">
                    Registered Address
                  </h3>
                  {/* <p className="text-xs text-black dark:text-white">
                    Official business address
                  </p> */}
                </div>
              </div>

              <div className="pl-11">
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  RS-39/43, 5/3C Golden Park, Sankarpur West, Near Rabindranagar
                  Co-operative, Durgapur, West Bengal - 713206
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-black dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="font-semibold text-black dark:text-white">
                    Correspondence Address
                  </h3>
                  {/* <p className="text-xs text-black dark:text-white">
                    Official business address
                  </p> */}
                </div>
              </div>

              <div className="pl-11">
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  207,Jayanivas,Padukamandir Road Bharat Housing Society,
                  Subramanyapura Below Digicomm Semiconductor, BANGALORE,
                  KARNATAKA, 560061
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SOCIAL ================= */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-gray-800">
          {/* Social Media Links */}
          <div className="mb-10">
            <div className="flex flex-col items-center gap-4">
              {/* Header */}
              <div className="text-center mb-2">
                <h3 className="text-sm font-semibold text-black dark:text-white mb-1">
                  Stay Connected
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Follow us for updates and insights
                </p>
              </div>

              {/* Social Icons with modern design */}
              <div className="flex items-center gap-5">
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/c/WealthFino"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit WealthFino on YouTube"
                  className="group relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                >
                  <div className="absolute inset-0 bg-red-500 opacity-10 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
                  <div className="absolute inset-0 border border-red-200 dark:border-red-800/30 rounded-full group-hover:border-red-400 dark:group-hover:border-red-600 transition-colors duration-300"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black dark:text-white group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-300"
                    aria-hidden="true"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                  <span className="sr-only">Visit WealthFino on YouTube</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/wealthfino.in"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit WealthFino on Instagram"
                  className="group relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 opacity-10 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
                  <div className="absolute inset-0 border border-pink-200 dark:border-pink-800/30 rounded-full group-hover:border-pink-400 dark:group-hover:border-pink-600 transition-colors duration-300"></div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-black dark:text-white group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors duration-300"
                    aria-hidden="true"
                  >
                    <path
                      d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="sr-only">Visit WealthFino on Instagram</span>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/WealthFino/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit WealthFino on Facebook"
                  className="group relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                >
                  <div className="absolute inset-0 bg-blue-600 opacity-10 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
                  <div className="absolute inset-0 border border-blue-200 dark:border-blue-800/30 rounded-full group-hover:border-blue-500 dark:group-hover:border-blue-600 transition-colors duration-300"></div>

                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                    aria-hidden="true"
                  >
                    <path
                      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="sr-only">Visit WealthFino on Facebook</span>
                </a>
                {/* Telegram */}
                <a
                  href="https://t.me/WealthFino"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Join WealthFino on Telegram"
                  className="group relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                >
                  <div className="absolute inset-0 bg-sky-500 opacity-10 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
                  <div className="absolute inset-0 border border-sky-200 dark:border-sky-800/30 rounded-full group-hover:border-sky-400 dark:group-hover:border-sky-600 transition-colors duration-300"></div>
                  <span className="sr-only">Join WealthFino on Telegram</span>

                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-black dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors duration-300"
                    aria-hidden="true"
                  >
                    <path
                      d="M22 2L11 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2L15 22l-4-9-9-4z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Copyright © {new Date().getFullYear()} WealthFino. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
