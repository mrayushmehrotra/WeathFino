import React from "react";
import WealthFino_Logo from "/WealthFino_Logo.png";

import { NavLink } from "react-router-dom";

import {
  Youtube,
  X,
  Instagram,
  Send,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        bg-white dark:bg-[#0E1116]
        text-slate-700 dark:text-[#D1D5DB]
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* ================= BRAND ================= */}
          <div>
            <img
              src={WealthFino_Logo}
              alt="WealthFino"
              className="w-14 mb-6 rounded-xl"
            />

            <p className="text-sm leading-relaxed mb-6 text-slate-600 dark:text-gray-400">
              Join our trading community for shared insights, interactive
              learning, and a collaborative community to enhance your Knowledge.
            </p>

            {/* APP STORE */}
            <div className="flex gap-3 mb-6">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-11"
              />
              <a
                href="https://play.google.com/store/apps/details?id=com.wealthfino.mobile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-11 cursor-pointer"
                />
              </a>
            </div>

            {/* DISCLAIMER */}
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">
              Disclaimer
            </h4>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-400">
              Investment in securities market is subject to market risks. Read
              all the related documents carefully before investing. Registration
              granted by SEBI and certification from NISM is no way guarantee
              performance of the intermediary or provide any assurance of
              returns to investors.
            </p>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h4 className="font-semibold mb-5 text-slate-900 dark:text-white">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                { label: "Privacy Policy", path: "/policies/privacy-policy" },
                {
                  label: "Client Consent and Terms & Conditions",
                  path: "/policies/client-term",
                },
                { label: "PMLA Policy", path: "/policies/pmla-policy" },
                {
                  label: "Terms & Conditions",
                  path: "/policies/terms-conditions",
                },
                {
                  label: "Disclosure, USER & KYC Agreement",
                  path: "/policies/disclosure-user-kyc",
                },
                {
                  label: "Disclaimer for Website",
                  path: "/policies/website-disclaimer",
                },
                {
                  label: "Redressal Of Grievance",
                  path: "/policies/redressal-of-grievance",
                },
                {
                  label: "Social Media Disclaimers",
                  path: "/policies/social-media-disclaimers",
                },
                {
                  label: "Legal & Risk Disclosure",
                  path: "/policies/legal-risk-disclosure",
                },
                { label: "Refund Policy", path: "/policies/refund-policy" },
                {
                  label: "Cancellation Policy",
                  path: "/policies/cancellation-policy",
                },
                {
                  label: "Internal Policy on Conflict of Interest",
                  path: "/policies/conflict-of-interest-policy",
                },
                {
                  label: "Investor Charter",
                  path: "/policies/investor-charter",
                },
                {
                  label: "Complaints Board",
                  path: "/policies/complaints-board",
                },
                { label: "Code of Conduct", path: "/policies/code-of-conduct" },
                {
                  label: "Data Deletion Policy",
                  path: "/policies/data-deletion",
                },
                {
                  label: "Pro Points Policy",
                  path: "/policies/pro-points-policy",
                },
              ].map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `
            block transition-colors duration-200
            ${
              isActive
                ? "text-sky-600 dark:text-sky-400 font-semibold"
                : "text-slate-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400"
            }
            `
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h4 className="font-semibold mb-5 text-slate-900 dark:text-white">
              Contact Information
            </h4>

            <ul className="space-y-4 text-sm text-slate-600 dark:text-gray-400">
              {/* Email */}
              <li className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                <span
                  className="w-9 h-9 flex items-center justify-center rounded-lg 
                   bg-gray-200 dark:bg-slate-800"
                >
                  <Mail className="w-4 h-4 text-blue-500" />
                </span>
                <a
                  href="mailto:info@krishnapathak.com"
                  className="hover:text-blue-600 dark:hover:text-white transition"
                >
                  info@krishnapathak.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                <span
                  className="w-9 h-9 flex items-center justify-center rounded-lg 
                   bg-gray-200 dark:bg-slate-800"
                >
                  <Phone className="w-4 h-4 text-pink-500" />
                </span>
                <a
                  href="tel:+919883455700"
                  className="hover:text-pink-600 dark:hover:text-white transition"
                >
                  +91 9883455700
                </a>
              </li>

              {/* WhatsApp */}
              <li className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                <span
                  className="w-9 h-9 flex items-center justify-center rounded-lg 
                   bg-gray-200 dark:bg-slate-800"
                >
                  <MessageCircle className="w-4 h-4 text-green-500" />
                </span>
                <a
                  href="https://wa.me/919353523685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600 dark:hover:text-white transition"
                >
                  WhatsApp Support - 9353523685
                </a>
              </li>
            </ul>
          </div>

          {/* ================= LEGAL ================= */}
          <div>
            <div
              className="
                rounded-xl p-6 mb-6
                bg-slate-100 dark:bg-[#1B2433]
              "
            >
              <p className="font-medium mb-1 text-slate-900 dark:text-white">
                Krishna Pathak
              </p>
              <p className="text-sm mb-2 text-slate-600 dark:text-gray-400">
                SEBI Registered Research Analyst
              </p>
              <p className="text-sm text-slate-600 dark:text-gray-400">
                SEBI Reg. No : INH300009914 <br />
                BSE Enlistment No : 5590
              </p>
            </div>

            <h4 className="font-semibold mb-3 text-slate-900 dark:text-white">
              Address
            </h4>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-400">
              RS-39/43, 5/3C Golden Park, Sankarpur West, Near Rabindranagar
              Co-operative, Durgapur, West Bengal - 713206
            </p>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="border-t border-slate-200 dark:border-white/10 my-10"></div>

        {/* ================= SOCIAL ================= */}
        <div className="flex justify-center gap-8 text-slate-500 dark:text-gray-400 mb-6">
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@WealthFino"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Youtube size={22} />
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="X"
          >
            <X size={22} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/wealthfino.in/?igsh=Mm5zZGNtYTQ1amc4&utm_source=qr#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-colors"
          >
            <Instagram size={22} />
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/WealthFino"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 transition-colors"
          >
            <Send size={22} />
          </a>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <p className="text-center text-sm text-slate-500 dark:text-gray-400">
          Copyright © {year} WealthFino. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
