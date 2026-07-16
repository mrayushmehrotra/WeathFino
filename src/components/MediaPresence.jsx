import { motion } from "framer-motion";
import React, { useState } from "react";

const logos = [
  {
    src: "/Media_Presence/media-presence-8.png",
    alt: "MENAFN",
    link: "https://menafn.com/1109670065/DAM-Capital-Advisors-Near-Breakout-Level-SEBI-RA-Krishna-Pathak-Highlights-Bullish-Technical-Setup",
  },
  {
    src: "/Media_Presence/media-presence-9.png",
    alt: "BOROK Times",
    link: "https://boroktimes.com/krishna-pathak-29-is-transforming-stock-market-analysis-to-provide-better-insights-and-reliable-guidance-for-investors",
  },
  {
    src: "/Media_Presence/media-presence-1.png",
    alt: "Economic Times",
    link: "https://economictimes.indiatimes.com/markets/confidence-to-take-a-trade-comes-from-knowledge-of-the-subject-better-focus-on-learning/articleshow/105551518.cms",
  },
  {
    src: "/Media_Presence/media-presence-10.png",
    alt: "CNBC",
    link: "",
  },
  {
    src: "/Media_Presence/media-presence-7.png",
    alt: "inshorts",
    link: "https://shrts.in/VwRG8",
  },
  {
    src: "/Media_Presence/media-presence-2.png",
    alt: "Money Control",
    link: "",
  },
  {
    src: "/Media_Presence/media-presence-4.png",
    alt: "MSN",
    link: "https://www.msn.com/en-us/money/topstocks/bajaj-electricals-near-key-breakout-zone-sebi-ra-krishna-pathak-sees-strong-potential-upside/ar-AA1GyUjn",
  },
  {
    src: "/Media_Presence/media-presence-11.png",
    alt: "Asianet News",
    link: "https://newsable.asianetnews.com/markets/rec-stock-at-crucial-zone-sebi-ra-krishna-pathak-sees-buying-opportunity-multi-level-targets/articleshow-46fh1f0",
  },
  {
    src: "/Media_Presence/media-presence-3.png",
    alt: "GapUp by Rigi",
    link: "",
  },
  {
    src: "/Media_Presence/media-presence-5.png",
    alt: "Investing.com",
    link: "https://in.investing.com/news/stock-market-news/nifty-ends-lower-on-weekly-expiry-financials-autos-it-lead-broad-market-selloff-4873602",
  },
  {
    src: "/Media_Presence/media-presence-6.png",
    alt: "Stocktwits",
    link: "https://stocktwits.com/news-articles/markets/equity/asian-paints-eyes-reversal-from-support-sebi-ra-krishna-pathak-sees-accumulation-opportunity",
  },
];

const MediaPresence = () => {
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => {
    setIsPaused((p) => !p);
  };

  return (
    <section
      className="
        py-12 md:py-20 relative overflow-hidden
        bg-[#D4AF37]/5 dark:bg-[#111]
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
          <div className="w-32 h-1.5 bg-[#856315] dark:bg-[#D4AF37] rounded-full mb-4 shadow-sm" />

          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold pb-3 text-black dark:text-white tracking-tight drop-shadow-sm">
            <span className="text-black dark:text-white px-1">
              Featured
            </span>{" "}
            In
          </h2>

          <div className="w-32 h-1.5 bg-[#856315] dark:bg-[#D4AF37] rounded-full mt-4 ml-auto shadow-sm" />
        </div>

        <p className="text-lg md:text-xl font-normal max-w-4xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
          We're proud to be recognized by leading business &amp; financial
          platforms. Our insights are making headlines—featured by the most
          trusted business and financial platforms.
        </p>
      </motion.div>

      {/* ================= LOGO CAROUSEL ================= */}
      <div className="relative w-full overflow-hidden mt-8">
        <style>{`
          @keyframes scroll-logos {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .logo-track {
            animation: scroll-logos 30s linear infinite;
          }
          .logo-track.paused {
            animation-play-state: paused;
          }
        `}</style>
        <div
          className={`logo-track flex gap-8 md:gap-12 pr-8 md:pr-12 w-max items-center${isPaused ? ' paused' : ''}`}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 bg-white/80 dark:bg-white/5 backdrop-blur-md p-5 md:p-8 rounded-2xl border border-slate-300 dark:border-white/10 shadow-md dark:shadow-none transition-transform hover:-translate-y-1"
            >
              {logo.link ? (
                <a href={logo.link} target="_blank" rel="noopener noreferrer" aria-label={`Read about ${logo.alt} feature`}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="
                      h-10 md:h-14 lg:h-16 w-auto object-contain
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
                    h-10 md:h-14 mix-blend-difference  lg:h-16 w-auto object-contain
                    opacity-70 hover:opacity-100
                    transition duration-500 cursor-pointer
                  "
                />
              )}
            </div>
          ))}
        </div>

        <button
          onClick={togglePause}
          aria-label={isPaused ? "Play carousel" : "Pause carousel"}
          className="absolute top-0 right-4 z-20 p-2.5 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md border border-slate-300 dark:border-white/20 shadow-md hover:bg-white dark:hover:bg-white/20 transition-all"
        >
          {isPaused ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-800 dark:text-white">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-800 dark:text-white">
              <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
};

export default MediaPresence;
