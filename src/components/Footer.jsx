import React from "react";
import WealthFino_Logo from "../assets/WealthFino_Logo.png";

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
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-11"
              />
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
            <ul className="space-y-3 text-sm text-slate-600 dark:text-gray-400">
              <li>Privacy Policy</li>
              <li>Client Consent and Terms & Conditions</li>
              <li>PMLA Policy</li>
              <li>Terms & Conditions</li>
              <li>Disclosure, USER & KYC Agreement</li>
              <li>Disclaimer for Website</li>
              <li>Redressal Of Grievance</li>
              <li>Social Media Disclaimers</li>
              <li>Legal & Risk Disclosure</li>
              <li>Refund & Cancellation Policy</li>
              <li>Internal Policy on Conflict of Interest</li>
              <li>Investor Charter</li>
              <li>Complaints Board</li>
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h4 className="font-semibold mb-5 text-slate-900 dark:text-white">
              Contact Information
            </h4>

            <ul className="space-y-4 text-sm text-slate-600 dark:text-gray-400">
              <li className="flex items-center gap-3">
                📧 info@krishnapathak.com
              </li>
              <li className="flex items-center gap-3">📞 +91 9883455700</li>
              <li className="flex items-center gap-3">
                💬 WhatsApp Support - 9353523685
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
          <span>▶️</span>
          <span>✖</span>
          <span>📷</span>
          <span>✈️</span>
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
