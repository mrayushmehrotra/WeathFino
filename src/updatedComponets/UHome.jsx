import React from "react";
import { motion } from "framer-motion";
import phone from "../assets/phone.png";

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
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden text-white"
      style={{
        background: `
          radial-gradient(70% 70% at 15% 15%, rgba(212,175,55,0.18), transparent 60%),
          radial-gradient(60% 60% at 85% 30%, rgba(255,215,160,0.10), transparent 65%),
          linear-gradient(180deg, #0b1022 0%, #070b18 45%, #05070f 100%)
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
      <div className="relative max-w-7xl mx-auto px-10 pt-12 grid md:grid-cols-2 gap-20 items-center">
        {/* ================= LEFT ================= */}
        <div>
          {/* ===== PROFILE DATA CARDS ===== */}
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
                  flex items-center gap-4
                  px-2 py-2
                  rounded-2xl
                  bg-gradient-to-br from-[#0d1224] to-[#060810]
                  border border-[#D4AF37]/30
                  shadow-[0_18px_40px_rgba(0,0,0,0.6)]
                "
              >
                {/* GOLD ICON */}
                <div
                  className="
                    w-10 h-10 rounded-full
                    bg-[#D4AF37]
                    flex items-center justify-center
                    text-black text-xl font-bold
                    shrink-0
                  "
                >
                  ★
                </div>

                {/* TEXT */}
                <p className="text-white text-lg font-medium leading-snug">
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
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Master the Markets <br />
            <span className="text-white/90">with Certified Expertise.</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-gray-400 max-w-lg"
          >
            Your path to professional trading, backed by SEBI-registered
            analysts and a trusted trading ecosystem.
          </motion.p>

          {/* CTA + STORE BUTTONS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-12 flex flex-col gap-4"
          >
            <button
              className="
                w-fit
                px-8 py-3 rounded-full
                bg-gradient-to-r from-[#F3D98B] via-[#D4AF37] to-[#B8962E]
                text-black font-semibold
                shadow-[0_12px_35px_rgba(212,175,55,0.45)]
                hover:scale-105 transition
              "
            >
              Start Your Pro Journey
            </button>

            <div className="flex gap-3">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-11 cursor-pointer"
              />
              <a
                href="https://play.google.com/store/apps/details?id=com.wealthfino.mobile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-11 cursor-pointer"
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
          className="relative flex justify-center"
        >
          <motion.img
            src={phone}
            alt="Trading App"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="
              w-[320px] md:w-[380px]
              rotate-6
              drop-shadow-[0_45px_90px_rgba(0,0,0,0.85)]
            "
          />

          {/* GOLD HALO */}
          <div className="absolute -z-10 w-[460px] h-[460px] bg-[#D4AF37]/25 blur-[180px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default UHome;
