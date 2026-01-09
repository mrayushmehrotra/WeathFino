import React from "react";
import WealthFino_Logo from "../assets/WealthFino_Logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0E1116] text-[#D1D5DB]">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <div className="mb-6">
              <img
                src={WealthFino_Logo}
                alt="WealthFino"
                className="w-14 mb-4 rounded-xl"
              />
            </div>

            <p className="text-sm leading-relaxed mb-6">
              Join our trading community for shared insights, interactive
              learning, and a collaborative community to enhance your Knowledge.
            </p>

            {/* APP STORE */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-3">
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
            </div>

            {/* DISCLAIMER */}
            <h4 className="text-white font-semibold mb-2">Disclaimer</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Investment in securities market is subject to market risks. Read
              all the related documents carefully before investing. Registration
              granted by SEBI and certification from NISM is no way guarantee
              performance of the intermediary or provide any assurance of
              returns to investors.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
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

          {/* CONTACT INFORMATION */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Contact Information
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                📧 info@krishnapathak.com
              </li>
              <li className="flex items-center gap-3">📞 +91 9883455700</li>
              <li className="flex items-center gap-3">
                💬 WhatsApp Support - 9353523685
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <div className="bg-[#1B2433] rounded-xl p-6 mb-6">
              <p className="text-white font-medium mb-1">Krishna Pathak</p>
              <p className="text-sm mb-2">SEBI Registered Research Analyst</p>
              <p className="text-sm">
                SEBI Reg. No : INH300009914 <br />
                BSE Enlistment No : 5590
              </p>
            </div>

            <h4 className="text-white font-semibold mb-3">Address</h4>
            <p className="text-sm leading-relaxed">
              RS-39/43, 5/3C Golden Park, Sankarpur West, Near Rabindranagar
              Co-operative, Durgapur, West Bengal - 713206
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-10"></div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-8 text-gray-400 mb-6">
          <span>▶️</span>
          <span>✖</span>
          <span>📷</span>
          <span>✈️</span>
        </div>

        {/* COPYRIGHT */}
        <p className="text-center text-sm text-gray-400">
          Copyright © {year} WealthFino. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
