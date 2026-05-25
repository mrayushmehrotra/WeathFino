import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import KYCModal from "../components/KYCModal";
import phone from "/phone6.png";

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================= COMPONENT ================= */

const UHome = () => {
  const [isKYCOpen, setIsKYCOpen] = useState(false);
  return (
    <section
      className="
        relative min-h-screen w-full overflow-hidden font-inter
        text-gray-900 dark:text-white

        [--bg-start:#f9fafb]
        [--bg-mid:#f3f4f6]
        [--bg-end:#e5e7eb]

        dark:[--bg-start:#0b1022]
        dark:[--bg-mid:#070b18]
        dark:[--bg-end:#05070f]
      "
      style={{
        background: `
          radial-gradient(70% 70% at 15% 15%, rgba(212,175,55,0.18), transparent 60%),
          radial-gradient(60% 60% at 85% 30%, rgba(255,215,160,0.10), transparent 65%),
          linear-gradient(
            180deg,
            var(--bg-start) 0%,
            var(--bg-mid) 45%,
            var(--bg-end) 100%
          )
        `,
      }}
    >
      {/* GOLD TEXTURE */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          background:
            "linear-gradient(120deg, transparent 40%, rgba(212,175,55,0.45) 50%, transparent 60%)",
          backgroundSize: "420px 420px",
        }}
      />

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 lg:pt-32 pb-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-100px)]">
        {/* ================= LEFT ================= */}
        <div>
          {/* PROFILE CARDS */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-14 max-w-2xl"
          >
            {[
              "Krishna Pathak",
              "SEBI Registered Research Analyst",
              "SEBI Reg. No. INH300009914",
              "BSE Enlistment No : 5590",
            ].map((text, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="
                  flex items-center gap-4 px-4 py-3 rounded-2xl
                  backdrop-blur-xl bg-white/60 dark:bg-[#0d1224]/60
                  border border-white/40 dark:border-[#D4AF37]/20
                  shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]
                  transition-all duration-500 hover:bg-white/80 dark:hover:bg-[#0d1224]/80
                "
              >
                {/* ICON */}
                <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-black shrink-0 shadow-[0_4px_10px_rgba(212,175,55,0.4)]">
                  <Star className="w-5 h-5 fill-current" />
                </div>

                <p className="text-gray-900 dark:text-white text-sm sm:text-base font-medium leading-tight">
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* HEADING */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-playfair text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mt-6"
          >
            Research-Based Trade <br />
            <span className="opacity-90 italic font-medium">Insights.</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-inter mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed"
          >
            Research-based recommendations on Equity and Stock Options by a SEBI
            Registered Research Analyst.
          </motion.p>

          {/* CTA + STORES */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <button
              className="
                w-full sm:w-fit px-8 py-4 text-lg rounded-full border border-white/20 dark:border-[#D4AF37]/40
                backdrop-blur-md bg-gradient-to-r from-[#F3D98B] via-[#D4AF37] to-[#B8962E]
                text-black font-semibold tracking-wide
                shadow-[0_12px_35px_rgba(212,175,55,0.45)]
                hover:shadow-[0_15px_45px_rgba(212,175,55,0.6)]
                hover:scale-105 transition-all duration-500
              "
              onClick={() => setIsKYCOpen(true)}
            >
              Start Your Pro Journey
            </button>

            <div className="w-full flex justify-center sm:w-auto sm:justify-start">
              <a
                href="https://play.google.com/store/apps/details?id=com.wealthfino.mobile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get WealthFino on Google Play"
                  className="h-14 md:h-16 cursor-pointer hover:scale-105 transition-transform"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <motion.img
            src={phone}
            alt="WealthFino mobile app showing live trade alerts and
portfolio dashboard"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="
              w-[280px] sm:w-[340px] md:w-[400px] lg:w-[460px] xl:w-[500px]
              rotate-3 lg:rotate-6
              drop-shadow-[0_45px_90px_rgba(0,0,0,0.85)]
            "
          />

          {/* GOLD HALO */}
          <div className="absolute -z-10 w-full max-w-[500px] aspect-square bg-[#D4AF37]/25 blur-[120px] md:blur-[180px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
      </div>

      <KYCModal isOpen={isKYCOpen} onClose={() => setIsKYCOpen(false)} />
    </section>
  );
};

export default UHome;
