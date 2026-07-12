import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Wallet,
  Coins,
  PieChart,
  BadgePercent,
  Scale,
  GitFork,
  ChevronRight,
  Calculator,
  LayoutDashboard,
} from "lucide-react";

import SIPCalculator from "../components/SIPCalculator/page";
import EMICalculator from "../components/EMICalculator/page";
import GoldCalculator from "../components/GoldCalculator/page";
import NetWorthCalculator from "../components/NetWorthCalculator/page";
import ROICalculator from "../components/ROICalculator/page";
import RiskCalculator from "../components/RiskCalculator/page";
import StockSplitCalculator from "../components/SpiltCalculator/page";

const CALCULATORS = [
  {
    id: "sip",
    label: "SIP",
    fullName: "SIP Calculator",
    icon: TrendingUp,
    description: "Systematic Investment Plan returns",
    badge: "Most Used",
    component: SIPCalculator,
    gradientFrom: "from-trading-green",
    gradientTo: "to-trading-cyan",
    activeBg: "bg-gradient-to-r from-trading-green to-trading-cyan",
    activeText: "text-white",
    fromHex: "#22C55E",
    toHex: "#06B6D4",
  },
  {
    id: "emi",
    label: "EMI",
    fullName: "EMI Calculator",
    icon: Wallet,
    description: "Loan EMI & amortization schedule",
    badge: "Popular",
    component: EMICalculator,
    gradientFrom: "from-trading-blue",
    gradientTo: "to-indigo-600",
    activeBg: "bg-gradient-to-r from-trading-blue to-indigo-600",
    activeText: "text-white",
    fromHex: "#2563EB",
    toHex: "#4F46E5",
  },
  {
    id: "gold",
    label: "Gold Price",
    fullName: "Gold Price Calculator",
    icon: Coins,
    description: "Gold cost with making charges & GST",
    badge: null,
    component: GoldCalculator,
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-500",
    activeBg: "bg-gradient-to-r from-amber-500 to-orange-500",
    activeText: "text-white",
    fromHex: "#F59E0B",
    toHex: "#F97316",
  },
  {
    id: "networth",
    label: "Net Worth",
    fullName: "Net Worth Calculator",
    icon: PieChart,
    description: "Assets vs liabilities at a glance",
    badge: "New",
    component: NetWorthCalculator,
    gradientFrom: "from-trading-violet",
    gradientTo: "to-purple-700",
    activeBg: "bg-gradient-to-r from-trading-violet to-purple-700",
    activeText: "text-white",
    fromHex: "#8B5CF6",
    toHex: "#7C3AED",
  },
  {
    id: "roi",
    label: "ROI",
    fullName: "ROI Calculator",
    icon: BadgePercent,
    description: "Return on investment analysis",
    badge: null,
    component: ROICalculator,
    gradientFrom: "from-trading-orange",
    gradientTo: "to-trading-coral",
    activeBg: "bg-gradient-to-r from-trading-orange to-trading-coral",
    activeText: "text-white",
    fromHex: "#F97316",
    toHex: "#EF4444",
  },
  {
    id: "risk",
    label: "Risk-Reward",
    fullName: "Risk-Reward Calculator",
    icon: Scale,
    description: "Trading risk-reward ratio",
    badge: null,
    component: RiskCalculator,
    gradientFrom: "from-trading-coral",
    gradientTo: "to-rose-600",
    activeBg: "bg-gradient-to-r from-trading-coral to-rose-600",
    activeText: "text-white",
    fromHex: "#EF4444",
    toHex: "#E11D48",
  },
  {
    id: "split",
    label: "Stock Split",
    fullName: "Stock Split Calculator",
    icon: GitFork,
    description: "Post-split price & share count",
    badge: null,
    component: StockSplitCalculator,
    gradientFrom: "from-trading-cyan",
    gradientTo: "to-teal-600",
    activeBg: "bg-gradient-to-r from-trading-cyan to-teal-600",
    activeText: "text-white",
    fromHex: "#06B6D4",
    toHex: "#0D9488",
  },
];

function SidebarItem({ calc, isActive, onClick }) {
  const Icon = calc.icon;
  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${calc.id}`}
      id={`tab-${calc.id}`}
      onClick={onClick}
      className={`group w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 cursor-pointer relative focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 ${isActive
          ? `${calc.activeBg} ${calc.activeText} shadow-md border border-transparent`
          : "text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700/60 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600"
        }`}
    >
      <span
        className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg transition-colors duration-200 ${isActive
            ? `bg-white/20 dark:bg-black/20 ${calc.activeText}`
            : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 group-hover:bg-gray-300 dark:group-hover:bg-gray-600 group-hover:text-gray-800 dark:group-hover:text-white"
          }`}
      >
        <Icon className="w-4 h-4" aria-hidden="true" />
      </span>

      <span className="flex-1 min-w-0">
        <span className="block text-sm font-semibold truncate">{calc.fullName}</span>
        <span
          className={`block text-xs truncate mt-0.5 transition-colors duration-200 ${isActive
              ? "text-white/90"
              : "text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-white"
            }`}
        >
          {calc.description}
        </span>
      </span>

      {calc.badge && (
        <span
          className={`flex-shrink-0 text-[10px] font-bold px-2.5 py-1.5 rounded-full transition-colors duration-200 ${isActive
              ? "bg-white/25 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 group-hover:bg-gray-300 dark:group-hover:bg-gray-600"
            }`}
        >
          {calc.badge}
        </span>
      )}

      {isActive && (
        <motion.span
          layoutId="sidebar-active-bar"
          className={`absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-gradient-to-b ${calc.gradientFrom} ${calc.gradientTo}`}
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
          aria-hidden="true"
        />
      )}
    </button>
  );
}

export default function Calculators() {
  const [active, setActive] = useState("sip");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const activeCalc = CALCULATORS.find((c) => c.id === active);
  const ActiveComponent = activeCalc?.component;
  const ActiveIcon = activeCalc?.icon;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark flex flex-col transition-colors duration-300">

      <div className="pt-20 pb-6 px-4 sm:px-6 bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-dark-border transition-colors duration-300">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-4 px-2 sm:px-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-900 dark:bg-gray-100 rounded-xl">
              <Calculator className="w-5 h-5 text-white dark:text-gray-900" aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Financial Calculators
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300 hidden sm:block">
                7 tools to plan, invest &amp; trade smarter
              </p>
            </div>
          </div>

          <button
            className="sm:hidden flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            onClick={() => setMobileSidebarOpen((v) => !v)}
            aria-label="Toggle calculator list"
          >
            <LayoutDashboard className="w-4 h-4" aria-hidden="true" />
            All tools
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileSidebarOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="sm:hidden overflow-hidden w-full bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-dark-border px-4"
          >
            <nav role="tablist" aria-label="Calculator types" className="py-2 space-y-1">
              {CALCULATORS.map((calc) => (
                <SidebarItem
                  key={calc.id}
                  calc={calc}
                  isActive={active === calc.id}
                  onClick={() => {
                    setActive(calc.id);
                    setMobileSidebarOpen(false);
                  }}
                />
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-1 max-w-screen-2xl mx-auto w-full px-0 sm:px-4 lg:px-8 py-0 sm:py-6 gap-0 sm:gap-6">

        <aside
          aria-label="Calculator navigation"
          className="hidden sm:flex flex-col w-64 lg:w-72 flex-shrink-0"
        >
          <div className="sticky top-24 bg-white dark:bg-dark-surface rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm overflow-hidden transition-colors duration-300">
            <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-100 dark:border-dark-border">
              <LayoutDashboard className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" />
              <span className="text-xs font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-widest">
                Tools
              </span>
            </div>

            <nav role="tablist" aria-label="Calculator types" className="p-2 space-y-1">
              {CALCULATORS.map((calc) => (
                <SidebarItem
                  key={calc.id}
                  calc={calc}
                  isActive={active === calc.id}
                  onClick={() => setActive(calc.id)}
                />
              ))}
            </nav>

            <div className="px-4 py-3 border-t border-gray-100 dark:border-dark-border">
              <p className="text-xs text-gray-700 dark:text-gray-300 text-center">
                All calculations are indicative only
              </p>
            </div>
          </div>
        </aside>

        <main className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-3 px-4 sm:px-0">
            <span>Calculators</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" />
            <span className="flex items-center gap-1.5 font-semibold text-gray-800 dark:text-gray-200">
              {ActiveIcon && (
                <ActiveIcon className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300" aria-hidden="true" />
              )}
              {activeCalc?.fullName}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              id={`panel-${active}`}
              role="tabpanel"
              aria-labelledby={`tab-${active}`}
              data-theme={active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              className="calculator-panel bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm overflow-hidden transition-colors duration-300"
            >
              {ActiveComponent && <ActiveComponent fromHex={activeCalc.fromHex} toHex={activeCalc.toHex} />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
