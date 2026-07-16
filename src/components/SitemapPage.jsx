import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Info,
  Phone,
  DollarSign,
  Calculator,
  FileText,
  Shield,
  ChevronRight,
} from "lucide-react";

const siteStructure = [
  {
    category: "Main Pages",
    icon: Home,
    color: "blue",
    pages: [
      { label: "Home", path: "/" },
      { label: "About Us", path: "/about-us" },
      { label: "Contact", path: "/contact" },
      { label: "Pricing", path: "/pricing" },
      { label: "Calculators", path: "/calculators" },
    ],
  },
  {
    category: "Legal & Compliance",
    icon: Shield,
    color: "indigo",
    pages: [
      { label: "Terms & Conditions", path: "/policies/terms-conditions" },
      { label: "Privacy Policy", path: "/policies/privacy-policy" },
      { label: "Investor Charter", path: "/policies/investor-charter" },
      { label: "Client Term", path: "/policies/client-term" },
      { label: "Code of Conduct", path: "/policies/code-of-conduct" },
      { label: "Website Disclaimer", path: "/policies/website-disclaimer" },
      { label: "Social Media Disclaimers", path: "/policies/social-media-disclaimers" },
      { label: "Legal Risk Disclosure", path: "/policies/legal-risk-disclosure" },
    ],
  },
  {
    category: "Policies",
    icon: FileText,
    color: "emerald",
    pages: [
      { label: "Refund Policy", path: "/policies/refund-policy" },
      { label: "Cancellation Policy", path: "/policies/cancellation-policy" },
      { label: "PMLA Policy", path: "/policies/pmla-policy" },
      { label: "Conflict of Interest Policy", path: "/policies/conflict-of-interest-policy" },
      { label: "Pro Points Policy", path: "/policies/pro-points-policy" },
      { label: "Data Deletion Policy", path: "/policies/data-deletion" },
      { label: "Disclosure & User KYC", path: "/policies/disclosure-user-kyc" },
    ],
  },
  {
    category: "Support & Grievances",
    icon: Phone,
    color: "purple",
    pages: [
      { label: "Complaints Board", path: "/policies/complaints-board" },
      { label: "Redressal of Grievance", path: "/policies/redressal-of-grievance" },
      { label: "Accessibility Statement", path: "/policies/accessibility-statement" },
    ],
  },
];

const colorMap = {
  blue: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-100 dark:border-blue-800/30",
    icon: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
    heading: "text-blue-700 dark:text-blue-300",
    dot: "bg-blue-400",
    hover: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  indigo: {
    bg: "bg-indigo-50 dark:bg-indigo-900/20",
    border: "border-indigo-100 dark:border-indigo-800/30",
    icon: "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300",
    heading: "text-indigo-700 dark:text-indigo-300",
    dot: "bg-indigo-400",
    hover: "hover:text-indigo-600 dark:hover:text-indigo-400",
  },
  emerald: {
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    border: "border-emerald-100 dark:border-emerald-800/30",
    icon: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300",
    heading: "text-emerald-700 dark:text-emerald-300",
    dot: "bg-emerald-400",
    hover: "hover:text-emerald-600 dark:hover:text-emerald-400",
  },
  purple: {
    bg: "bg-purple-50 dark:bg-purple-900/20",
    border: "border-purple-100 dark:border-purple-800/30",
    icon: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
    heading: "text-purple-700 dark:text-purple-300",
    dot: "bg-purple-400",
    hover: "hover:text-purple-600 dark:hover:text-purple-400",
  },
};

const SitemapPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-white/5" />
        <div className="relative container mx-auto px-6 py-20 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Site Map</h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            A complete overview of all pages and sections on the WealthFino platform.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-950 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteStructure.map(({ category, icon: Icon, color, pages }) => {
            const c = colorMap[color];
            return (
              <div
                key={category}
                className={`rounded-2xl border p-6 md:p-8 ${c.bg} ${c.border}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.icon}`}>
                    <Icon size={20} />
                  </div>
                  <h2 className={`text-lg font-bold ${c.heading}`}>{category}</h2>
                </div>
                <ul className="space-y-3">
                  {pages.map(({ label, path }) => (
                    <li key={path}>
                      <Link
                        to={path}
                        className={`flex items-center gap-3 text-gray-700 dark:text-gray-300 ${c.hover} transition-colors duration-200 group`}
                      >
                        <ChevronRight
                          size={16}
                          className={`flex-shrink-0 ${c.heading} opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform`}
                        />
                        <span className="text-sm font-medium">{label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-16 text-center text-sm text-gray-500 dark:text-gray-500">
          Can't find what you're looking for?{" "}
          <Link to="/contact" className="text-[#D4AF37] hover:underline font-medium">
            Contact us
          </Link>{" "}
          and we'll help you out.
        </p>
      </div>
    </div>
  );
};

export default SitemapPage;
