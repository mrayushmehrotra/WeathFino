import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.wealthfino.mobile&hl=en_IN";

const MembershipPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial delay before showing
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // show after 3 seconds

    // Set up repeating cycle: show for 10s, hide for 30s
    const cycleInterval = setInterval(() => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 10000);
    }, 40000); // 10s show + 30s hide = 40s cycle

    // Also hide the first one after 10s
    const hideInitial = setTimeout(() => {
      setIsVisible(false);
    }, 13000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideInitial);
      clearInterval(cycleInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 z-50 w-[90vw] max-w-sm"
        >
          {/* Notification Card */}
          <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-[#0b1022] border border-gray-200 dark:border-white/10 shadow-[0_20px_50px_rgba(212,175,55,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5 cursor-pointer" onClick={() => window.open(PLAY_STORE_URL, "_blank", "noopener noreferrer")}>
            
            {/* Live Indicator */}
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-red-500">
                Live Activity
              </span>
            </div>

            <div className="flex items-start gap-4">
              {/* Flame Icon / Badge */}
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F3D98B] to-[#D4AF37] flex items-center justify-center shadow-inner">
                <span className="text-2xl">🔥</span>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm md:text-base font-bold text-black dark:text-white leading-tight mb-1">
                  More than 100+ people joined Wealthfino this month!
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Early members get exclusive insights.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(PLAY_STORE_URL, "_blank", "noopener noreferrer");
              }}
              className="mt-4 w-full py-2.5 rounded-xl font-bold text-sm bg-gray-50 dark:bg-white/5 text-[#1F3864] dark:text-[#D4AF37] border border-gray-200 dark:border-white/10 hover:bg-[#F3D98B]/20 dark:hover:bg-white/10 transition-colors"
            >
              Join Premium — It's Free ✨
            </button>
            
            {/* Progress Bar (10 seconds) */}
            <motion.div 
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#F3D98B] via-[#D4AF37] to-[#B8962E]"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 10, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MembershipPopup;
