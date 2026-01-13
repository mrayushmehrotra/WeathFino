import { motion } from "framer-motion";
import React from "react";

const logos = [
  {
    src: "src/assets/Media_Presence/media-presence-8.png",
    alt: "MENAFN",
    link: "https://menafn.com/1109670065/DAM-Capital-Advisors-Near-Breakout-Level-SEBI-RA-Krishna-Pathak-Highlights-Bullish-Technical-Setup",
  },
  {
    src: "src/assets/Media_Presence/media-presence-9.png",
    alt: "BOROK Times",
    link: "https://boroktimes.com/krishna-pathak-29-is-transforming-stock-market-analysis-to-provide-better-insights-and-reliable-guidance-for-investors",
  },
  {
    src: "src/assets/Media_Presence/media-presence-1.png",
    alt: "Economic Times",
    link: "https://economictimes.indiatimes.com/markets/confidence-to-take-a-trade-comes-from-knowledge-of-the-subject-better-focus-on-learning/articleshow/105551518.cms",
  },
  {
    src: "src/assets/Media_Presence/media-presence-10.png",
    alt: "CNBC",
    link: "",
  },
  {
    src: "src/assets/Media_Presence/media-presence-7.png",
    alt: "inshorts",
    link: "https://shrts.in/VwRG8",
  },
  {
    src: "src/assets/Media_Presence/media-presence-2.png",
    alt: "Money Control",
    link: "",
  },
  {
    src: "src/assets/Media_Presence/media-presence-4.png",
    alt: "MSN",
    link: "https://www.msn.com/en-us/money/topstocks/bajaj-electricals-near-key-breakout-zone-sebi-ra-krishna-pathak-sees-strong-potential-upside/ar-AA1GyUjn",
  },
  {
    src: "src/assets/Media_Presence/media-presence-11.png",
    alt: "Asianet News",
    link: "https://newsable.asianetnews.com/markets/rec-stock-at-crucial-zone-sebi-ra-krishna-pathak-sees-buying-opportunity-multi-level-targets/articleshow-46fh1f0",
  },
  {
    src: "src/assets/Media_Presence/media-presence-3.png",
    alt: "GapUp by Rigi",
    link: "",
  },
  {
    src: "src/assets/Media_Presence/media-presence-5.png",
    alt: "Investing.com",
    link: "https://in.investing.com/news/stock-market-news/nifty-ends-lower-on-weekly-expiry-financials-autos-it-lead-broad-market-selloff-4873602",
  },
  {
    src: "src/assets/Media_Presence/media-presence-6.png",
    alt: "Stocktwits",
    link: "https://stocktwits.com/news-articles/markets/equity/asian-paints-eyes-reversal-from-support-sebi-ra-krishna-pathak-sees-accumulation-opportunity",
  },
];

const MediaPresence = () => {
  return (
    <section
      className="
        py-20 relative overflow-hidden
        bg-blue-50 dark:bg-black
        transition-colors duration-300
      "
    >
      {/* ================= HEADING ================= */}
      <motion.div
        className="relative z-10 text-center mb-14 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className="inline-flex flex-col items-center mb-12">
          <div className="w-24 h-1 bg-blue-800 dark:bg-blue-400 rounded-full mb-2" />

          <h2 className="text-4xl md:text-5xl font-extrabold pb-3 text-slate-900 dark:text-white">
            <span className="bg-gradient-to-r from-blue-700 via-cyan-400 to-emerald-400 bg-clip-text text-transparent px-1">
              Featured
            </span>{" "}
            In
          </h2>

          <div className="w-24 h-1 bg-emerald-400 rounded-full mt-2 ml-auto" />
        </div>

        <p className="text-base md:text-lg font-medium max-w-2xl mx-auto text-slate-700 dark:text-slate-300">
          We're proud to be recognized by leading business & financial
          platforms. Our insights are making headlines—featured by the most
          trusted business and financial platforms.
        </p>
      </motion.div>

      {/* ================= LOGO CAROUSEL ================= */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-10 pr-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 bg-blue-50 p-3   rounded-xl"
            >
              {logo.link ? (
                <a href={logo.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="
                      h-7 md:h-10 w-auto object-contain
                      opacity-80 hover:opacity-100 
                      transition duration-500 cursor-pointer
                    "
                  />
                </a>
              ) : (
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="
                    h-7 md:h-10 w-auto object-contain
                    opacity-70 hover:opacity-100
                    transition duration-500 cursor-pointer
                  "
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MediaPresence;
