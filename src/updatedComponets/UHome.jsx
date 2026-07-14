import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, TrendingUp, Users, Award, ArrowRight, Star, CheckCircle } from "lucide-react";

import MembershipPopup from "../components/MembershipPopup";
import ConnectModal from "../components/ConnectModal";
import phone from "/hero_real.png";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/* ================= ANIMATED COUNTER ================= */
function AnimatedCount({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = Math.ceil(to / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ================= STAT CARD ================= */
function StatCard({ icon: Icon, value, suffix, label, delay }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={delay}
      className="
        flex flex-col items-center sm:items-start gap-1 px-5 py-4 rounded-2xl
        bg-white/70 dark:bg-white/5
        border border-gray-200/80 dark:border-[#D4AF37]/15
        backdrop-blur-lg
        shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)]
        hover:border-[#D4AF37]/50 dark:hover:border-[#D4AF37]/40
        transition-all duration-300 cursor-default
      "
    >
      <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 dark:bg-[#D4AF37]/20 flex items-center justify-center mb-1">
        <Icon className="w-4 h-4 text-[#7A5800] dark:text-[#D4AF37]" aria-hidden="true" />
      </div>
      <span className="text-2xl font-extrabold text-gray-900 dark:text-white leading-none tabular-nums">
        <AnimatedCount to={value} suffix={suffix} />
      </span>
      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{label}</span>
    </motion.div>
  );
}

/* ================= CREDENTIAL BADGE ================= */
function CredentialBadge({ text, delay }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={delay}
      whileHover={{ y: -3, scale: 1.02 }}
      className="
        flex items-center gap-3 px-4 py-3 rounded-xl
        bg-white/80 dark:bg-[#0d1224]/70
        border border-gray-200 dark:border-[#D4AF37]/20
        shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]
        backdrop-blur-xl transition-all duration-300 cursor-default
      "
    >
      <div className="shrink-0 w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-[0_4px_10px_rgba(212,175,55,0.4)]">
        <Star className="w-4 h-4 text-black fill-black" aria-hidden="true" />
      </div>
      <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-tight">{text}</span>
    </motion.div>
  );
}

/* ================= MAIN COMPONENT ================= */
const UHome = () => {
  const stats = [
    // { icon: Users, value: 10000, suffix: "+", label: "Active Members" },
    // { icon: TrendingUp, value: 5, suffix: "yr+", label: "Track Record" },
    // { icon: Award, value: 98, suffix: "%", label: "Accuracy Rate" },
    // { icon: ShieldCheck, value: 100, suffix: "%", label: "SEBI Compliant" },
  ];

  const credentials = [
    "Krishna Pathak",
    "SEBI Registered Research Analyst",
    "SEBI Reg. No. INH300009914",
    "BSE Enlistment No: 5590",
  ];

  const features = [
    "Daily equity & options insights",
    "Chart logic explained clearly",
    "Live market support sessions",
    "SEBI compliant recommendations",
  ];

  return (
    <section
      className="
        relative min-h-screen w-full overflow-x-hidden font-inter
        text-gray-900 dark:text-white

        [--bg-start:#f9fafb]
        [--bg-mid:#f3f4f6]
        [--bg-end:#e9eaec]

        dark:[--bg-start:#0b1022]
        dark:[--bg-mid:#070b18]
        dark:[--bg-end:#05070f]
      "
      style={{
        background: `
          radial-gradient(70% 60% at 10% 10%, rgba(212,175,55,0.14), transparent 60%),
          radial-gradient(50% 50% at 90% 20%, rgba(255,215,160,0.08), transparent 65%),
          linear-gradient(180deg, var(--bg-start) 0%, var(--bg-mid) 50%, var(--bg-end) 100%)
        `,
      }}
    >
      {/* ── SUBTLE GOLD TEXTURE ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
        style={{
          background: "linear-gradient(120deg, transparent 40%, rgba(212,175,55,0.5) 50%, transparent 60%)",
          backgroundSize: "500px 500px",
        }}
      />

      {/* ── MAIN GRID ── */}
      <div className="
        relative max-w-7xl mx-auto
        px-5 sm:px-8 lg:px-14
        pt-28 sm:pt-32 lg:pt-36
        pb-16 sm:pb-20 lg:pb-28
        grid grid-cols-1 lg:grid-cols-2
        gap-10 lg:gap-16 xl:gap-24
        items-center
      ">

        {/* ════════ LEFT COLUMN ════════ */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="flex flex-col"
        >
          {/* TRUST PILL */}
          <motion.div variants={fadeUp} className="mb-6 inline-flex">
            <span className="
              inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest
              bg-[#D4AF37]/15 dark:bg-[#D4AF37]/15
              text-[#2E1D00] dark:text-[#F3D98B]
              border border-[#D4AF37]/30
            ">
              <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
              SEBI Registered · INH300009914
            </span>
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            variants={fadeUp}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight"
          >
            Research-Based
            <br />
            <span className="italic font-extrabold opacity-90">Trade Insights.</span>
          </motion.h1>

          {/* SUBHEADING */}
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed"
          >
            Equity &amp; Stock Option recommendations by a{" "}
            <span className="font-semibold text-gray-900 dark:text-white">SEBI Registered Research Analyst</span>
            {" "}— with chart logic, live support, and zero guesswork.
          </motion.p>

          {/* FEATURE LIST */}
          <motion.ul
            variants={stagger}
            className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5"
            aria-label="Key features"
          >
            {features.map((f, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-200 font-medium"
              >
                <CheckCircle
                  className="w-4 h-4 shrink-0 text-[#7A5800] dark:text-[#D4AF37]"
                  aria-hidden="true"
                />
                {f}
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA BUTTONS */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <button
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.wealthfino.mobile&hl=en_IN",
                  "_blank",
                  "noopener noreferrer",
                )
              }
              className="
                cursor-pointer
                inline-flex items-center justify-center gap-2
                px-7 py-3.5 rounded-full
                bg-gradient-to-r from-[#F3D98B] via-[#D4AF37] to-[#B8962E]
                text-gray-900 font-bold text-sm sm:text-base tracking-wide
                shadow-[0_10px_32px_rgba(212,175,55,0.4)]
                hover:shadow-[0_14px_40px_rgba(212,175,55,0.55)]
                hover:scale-[1.03] active:scale-[0.98]
                transition-all duration-300
              "
            >
              Start Your Pro Journey
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <a
              href="/about-us"
              className="
                cursor-pointer
                inline-flex items-center justify-center gap-2
                px-7 py-3.5 rounded-full
                border border-gray-300 dark:border-gray-600
                text-gray-800 dark:text-gray-200 font-semibold text-sm sm:text-base
                hover:border-[#D4AF37] dark:hover:border-[#D4AF37]
                hover:text-[#4A2E00] dark:hover:text-[#D4AF37]
                transition-all duration-300
              "
            >
              Learn More
            </a>
          </motion.div>

          {/* CREDENTIAL CARDS — mobile: 2-col grid; desktop: same */}
          <motion.div
            variants={stagger}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3"
            aria-label="Credentials"
          >
            {credentials.map((text, i) => (
              <CredentialBadge key={i} text={text} delay={i} />
            ))}
          </motion.div>

          {/* STATS ROW */}
          <motion.div
            variants={stagger}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3"
            aria-label="Key statistics"
          >
            {stats.map((s, i) => (
              <StatCard key={i} {...s} delay={i} />
            ))}
          </motion.div>
        </motion.div>

        {/* ════════ RIGHT COLUMN — PHONE MOCKUP ════════ */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="
            relative flex justify-center items-center
            lg:justify-end
            mt-4 lg:mt-0
            min-h-[320px] sm:min-h-[400px] lg:min-h-0
          "
        >
          {/* GOLD AMBIENT GLOW */}
          <div
            aria-hidden="true"
            className="
              absolute -z-10 rounded-full
              w-[260px] sm:w-[360px] lg:w-[440px]
              aspect-square
              bg-[#D4AF37]/30 dark:bg-[#D4AF37]/20
              blur-[80px] sm:blur-[120px] lg:blur-[160px]
              top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            "
          />

          {/* SECONDARY SOFT GLOW */}
          <div
            aria-hidden="true"
            className="
              absolute -z-10 rounded-full
              w-[180px] sm:w-[260px]
              aspect-square
              bg-blue-400/10 dark:bg-blue-500/10
              blur-[60px] sm:blur-[100px]
              top-[30%] left-[60%]
            "
          />

          {/* FLOATING PHONE IMAGE */}
          <motion.img
            src={phone}
            alt="WealthFino mobile app showing live trade alerts and portfolio dashboard"
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
            className="
              relative z-10
              w-[240px] sm:w-[300px] md:w-[360px] lg:w-[420px] xl:w-[480px]
              rotate-2 sm:rotate-3 lg:rotate-5
              drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)]
              dark:drop-shadow-[0_40px_80px_rgba(0,0,0,0.85)]
            "
          />

          {/* FLOATING BADGE — bottom right: SEBI shield */}



        </motion.div>
      </div>

      <MembershipPopup />
      <ConnectModal />
    </section>
  );
};

export default UHome;
