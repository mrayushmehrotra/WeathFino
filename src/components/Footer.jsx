import React from "react";
import WealthFino_Logo from "/WealthFino_Logo.png";

import { NavLink } from "react-router-dom";

import { Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-white dark:bg-[#0E1116]
        text-slate-700 dark:text-[#D1D5DB]
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
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  WealthFino
                </h3>
                <p className="text-sm text-slate-600 dark:text-gray-400 mt-1">
                  Smart Trading Community
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gradient-to-r from-slate-50/50 to-transparent dark:from-gray-900/30 dark:to-transparent rounded-2xl p-5 border border-slate-100 dark:border-gray-800">
              <p className="text-sm leading-relaxed text-slate-700 dark:text-gray-300">
                Join our trading community for shared insights, interactive
                learning, and a collaborative environment to enhance your
                financial knowledge.
              </p>
            </div>

            {/* App Downloads */}
            <div>
              {/* <h4 className="text-sm font-semibold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
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
                    alt="App Store"
                    className="h-10"
                  />
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.wealthfino.mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200 dark:border-gray-700 hover:border-slate-300 dark:hover:border-gray-600 bg-white dark:bg-gray-900"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-10"
                  />
                </a>
              </div>
            </div>

            {/* Disclaimer Card */}
            <div className="rounded-2xl p-5 bg-gradient-to-br from-amber-50/50 to-orange-50/30 dark:from-amber-900/20 dark:to-orange-900/10 border border-amber-200 dark:border-amber-800/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-amber-600 dark:text-amber-400"
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
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Important Disclaimer
                </h4>
              </div>

              <p className="text-xs leading-relaxed text-slate-700 dark:text-gray-300">
                Investment in securities market is subject to market risks. Read
                all the related documents carefully before investing.
                Registration granted by SEBI and certification from NISM is no
                way guarantee performance of the intermediary or provide any
                assurance of returns to investors.
              </p>
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="bg-gradient-to-br from-white to-slate-50 dark:from-gray-900 dark:to-slate-900 rounded-2xl p-3 shadow-lg border border-slate-200 dark:border-gray-800">
            <div className="flex items-center mb-2">
              <h4 className="font-bold text-xl text-slate-900 dark:text-white">
                Quick Links
              </h4>
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
              ].map((item, index) => {
                return (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) => {
                      const baseClasses =
                        "flex items-center  p-2 rounded-xl transition-all duration-200 group";
                      const activeClasses = isActive
                        ? "bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-900/30 dark:to-blue-900/30 border border-sky-200 dark:border-sky-800 shadow-sm text-sky-700 dark:text-sky-300"
                        : "hover:bg-slate-100/80 dark:hover:bg-gray-800/50 border border-transparent text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white";

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
              <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-10 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
              <div className="pl-4">
                <h4 className="font-bold text-2xl text-slate-900 dark:text-white mb-1">
                  Get in Touch
                </h4>
                <p className="text-sm text-slate-600 dark:text-gray-400">
                  Connect with us through multiple channels
                </p>
              </div>
            </div>

            {/* Modern Contact Cards Grid */}
            <div className="grid grid-cols-1 gap-2">
              {/* Email Card - Modern Gradient */}
              <a
                href="mailto:info@krishnapathak.com"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-gray-900 dark:to-slate-900 p-2 border border-slate-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 dark:from-blue-500/0 dark:via-blue-500/10 dark:to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                <div className="relative flex items-center gap-2">
                  {/* Icon with modern glow */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-2xl"></div>
                    <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wider">
                        Email
                      </span>
                    </div>
                    <p className="text font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      info@krishnapathak.com
                    </p>
                  </div>
                </div>
              </a>

              {/* Phone Card - Modern Gradient */}
              <a
                href="tel:+919883455700"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-gray-900 dark:to-slate-900 p-2 border border-slate-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 hover:shadow-xl"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 dark:from-purple-500/0 dark:via-purple-500/10 dark:to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                <div className="relative flex items-center gap-5">
                  {/* Icon with modern glow */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-2xl"></div>
                    <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wider">
                        Direct Call
                      </span>
                      <svg
                        className="w-5 h-5 text-purple-500 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300"
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
                    <p className="text-lg font-medium text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
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
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-gray-900 dark:to-slate-900 p-2 border border-slate-200 dark:border-gray-800 hover:border-green-300 dark:hover:border-green-700 transition-all duration-300 hover:shadow-xl"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0 dark:from-green-500/0 dark:via-green-500/10 dark:to-green-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                {/* Live indicator */}

                <div className="relative flex items-center gap-5">
                  {/* Icon with modern glow */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-2xl"></div>
                    <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between ">
                      <span className="text-sm font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wider">
                        WhatsApp Support
                      </span>
                      <svg
                        className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300"
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
                    <p className="text-lg font-medium text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
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
            <div className="rounded-2xl p-6 bg-gradient-to-br from-slate-50 to-white dark:from-[#1B2433] dark:to-gray-900 border border-slate-200 dark:border-gray-800 shadow-sm">
              {/* Name and Title */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                  Krishna Pathak
                </h3>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
                  <svg
                    className="w-3 h-3 text-blue-600 dark:text-blue-400"
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
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
                    SEBI Registered
                  </span>
                </div>
              </div>

              {/* Registration Details */}
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-1">
                    SEBI Registration Number
                  </p>
                  <p className="text-sm font-mono text-slate-900 dark:text-white">
                    INH300009914
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-1">
                    BSE Enlistment Number
                  </p>
                  <p className="text-sm font-mono text-slate-900 dark:text-white">
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
                    className="w-4 h-4 text-slate-600 dark:text-gray-400"
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
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Registered Office
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-gray-500">
                    Official business address
                  </p>
                </div>
              </div>

              <div className="pl-11">
                <p className="text-sm leading-relaxed text-slate-700 dark:text-gray-300">
                  RS-39/43, 5/3C Golden Park,
                  <br />
                  Sankarpur West, Near Rabindranagar Co-operative,
                  <br />
                  Durgapur, West Bengal - 713206
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
                <h4 className="text-sm font-semibold text-slate-700 dark:text-gray-300 mb-1">
                  Stay Connected
                </h4>
                <p className="text-xs text-slate-500 dark:text-gray-500">
                  Follow us for updates and insights
                </p>
              </div>

              {/* Social Icons with modern design */}
              <div className="flex items-center gap-5">
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
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
                    className="text-slate-600 dark:text-gray-400 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-300"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
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
                    className="text-slate-600 dark:text-gray-400 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors duration-300"
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
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="group relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                >
                  <div className="absolute inset-0 bg-blue-500 opacity-10 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
                  <div className="absolute inset-0 border border-blue-200 dark:border-blue-800/30 rounded-full group-hover:border-blue-400 dark:group-hover:border-blue-600 transition-colors duration-300"></div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-slate-600 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300"
                  >
                    <path
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                {/* Twitter/X */}
                <a
                  href="#"
                  className="group relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                >
                  <div className="absolute inset-0 bg-slate-700 opacity-10 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
                  <div className="absolute inset-0 border border-slate-200 dark:border-gray-800 rounded-full group-hover:border-slate-400 dark:group-hover:border-gray-600 transition-colors duration-300"></div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-slate-600 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300"
                  >
                    <path
                      d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2"
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
            <p className="text-sm text-slate-600 dark:text-gray-400">
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
