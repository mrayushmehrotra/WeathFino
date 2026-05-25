import React, { useEffect, useRef, useState } from "react";

/* ================= FEATURE CARD ================= */
const FeatureCard = ({ title, subtitle, image, points, cta, isActive }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`
        relative w-[90vw] max-w-[340px] md:max-w-none md:w-[420px] shrink-0
        rounded-3xl p-[3px]
        bg-gradient-to-b from-[#F3D98B] via-[#D4AF37] to-[#B8962E]
        dark:shadow-[0_0_60px_rgba(212,175,55,0.35)]
        light:shadow-[0_0_40px_rgba(212,175,55,0.2)]
        transition-all duration-700
        ${isActive ? "opacity-100 scale-100 z-10" : "opacity-30 scale-90 z-0"}
        ${isVisible ? "translate-y-0" : "translate-y-10"}
      `}
    >
      <div
        className={`
          rounded-3xl h-full flex flex-col transition-all duration-500
          dark:bg-[#0b1022] light:bg-white
          dark:border-white/20 light:border-gray-200
          ${isActive ? "border scale-100" : "border scale-95"}
          ${
            isActive
              ? "dark:border-white/20 light:border-gray-300"
              : "dark:border-white/5 light:border-gray-100"
          }
          p-8
        `}
      >
        {/* IMAGE - Fixed container */}
        <div
          className={`
            rounded-xl overflow-hidden mb-8 h-56 flex items-center justify-center border
            bg-gradient-to-br transition-all duration-500
            ${
              isActive
                ? "dark:from-[#D4AF37]/20 dark:to-[#B8962E]/20 light:from-[#F3D98B]/30 light:to-[#D4AF37]/30"
                : "dark:from-[#D4AF37]/5 dark:to-[#B8962E]/5 light:from-[#F3D98B]/10 light:to-[#D4AF37]/10"
            }
            ${
              isActive
                ? "dark:border-white/20 light:border-gray-300"
                : "dark:border-white/10 light:border-gray-200"
            }
          `}
        >
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isActive ? "scale-100" : "scale-95"
              }`}
            />
            <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-black/30 dark:to-transparent light:bg-gradient-to-t light:from-white/10 light:to-transparent"></div>
          </div>
        </div>

        <h3
          className={`
            text-2xl font-bold text-center mb-3 transition-all duration-300
            ${
              isActive
                ? "dark:text-white light:text-gray-900"
                : "dark:text-slate-500 light:text-gray-500"
            }
          `}
        >
          {title}
        </h3>

        <p
          className={`
            text-center mb-8 text-base font-semibold transition-all duration-300
            ${
              isActive
                ? "dark:text-slate-300 light:text-gray-600"
                : "dark:text-slate-600 light:text-gray-400"
            }
          `}
        >
          {subtitle}
        </p>

        <ul className="space-y-3 text-base font-semibold mb-10 flex-grow">
          {points.map((p, i) => (
            <li
              key={i}
              className={`
                flex gap-3 transition-all duration-500
                ${
                  isActive
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }
                ${
                  isActive
                    ? "dark:text-slate-200 light:text-gray-700"
                    : "dark:text-slate-500 light:text-gray-400"
                }
              `}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span
                className={`
                  transition-colors duration-300
                  ${
                    isActive
                      ? "dark:text-[#D4AF37] light:text-[#B8962E]"
                      : "dark:text-slate-600 light:text-gray-400"
                  }
                `}
              >
                •
              </span>
              {p}
            </li>
          ))}
        </ul>

        <button
          className={`
            w-full py-4 rounded-full font-semibold text-base
            relative overflow-hidden transition-all duration-500
            ${
              isActive
                ? `
                  opacity-100 text-black scale-100
                  dark:bg-gradient-to-r dark:from-[#F3D98B] dark:via-[#D4AF37] dark:to-[#B8962E]
                  light:bg-gradient-to-r light:from-[#F3D98B] light:via-[#D4AF37] light:to-[#B8962E]
                  dark:hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]
                  light:hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]
                `
                : "opacity-0 scale-95 dark:bg-gray-800 dark:text-gray-400 light:bg-gray-200 light:text-gray-500"
            }
          `}
        >
          <span className="relative font-bold text-lg z-10">{cta}</span>
          {isActive && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#F3D98B] via-[#D4AF37] to-[#B8962E] animate-shimmer"></div>
          )}
        </button>
      </div>
    </div>
  );
};

/* ================= MAIN PAGE ================= */
const FeatureSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  const cards = [
    {
      title: "Community Engagement",
      subtitle: "Connect, discuss, and learn with a vibrant trading community.",
      image: "/Imagess/comunity.jpg",
      points: [
        "Safe & respectful environment",
        "Live discussions",
        "Polls & Q&A sessions",
        "FREE Study Resources",
        "Share chart views & market logic",
      ],
      cta: "Get Started",
    },
    {
      title: "Trade with Logic",
      subtitle: "Stay updated with research-based insights and market learning",
      image: "/Imagess/tradelogic1.jpg",
      points: [
        "Define Clear Entry & Exit Rules",
        "Rely on Data, Not Emotions",
        "Respect Stop Losses",
        "Avoid Overtrading",
        "Learn Continuously",
      ],
      cta: "Become a Member",
    },
    {
      title: "Daily Market View",
      subtitle: "Improve your knowledge with daily educational content.",
      image: "/Imagess/marketview.jpg",
      points: [
        "Top Gainers & Losers",
        "Trends & Movers",
        "Watchlist Highlights",
        "Event Calendar",
        "FII/DII Activity",
      ],
      cta: "Start Now",
    },
  ];



  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          headerObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    return () => headerObserver.disconnect();
  }, []);

  return (
    <div className="min-h-screen dark:bg-[#0b1022] light:bg-gray-50 pt-16 pb-32 overflow-hidden relative">
      {/* Animated background particles - Different for light/dark */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[1px] rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          >
            <div className="dark:bg-[#D4AF37]/30 light:bg-[#D4AF37]/40 w-full h-full"></div>
          </div>
        ))}
      </div>

      {/* HEADER */}
      <div
        ref={headerRef}
        className={`text-center mb-20 transition-all duration-1000 ${
          headerVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="inline-block px-10 py-4 rounded-lg relative overflow-hidden">
          {/* Gradient background for dark/light */}
          <div className="absolute inset-0 rounded-lg -z-10">
            <div className="dark:bg-gradient-to-r dark:from-[#F3D98B] dark:via-[#D4AF37] dark:to-[#B8962E] w-full h-full blur-lg opacity-50"></div>
            <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-[#F3D98B] dark:via-[#D4AF37] dark:to-[#B8962E] light:bg-gradient-to-r light:from-[#F3D98B] light:via-[#D4AF37] light:to-[#B8962E] rounded-lg"></div>
          </div>

          <h1 className="text-2xl md:text-2xl font-bold relative z-10 dark:text-black light:text-white">
            WealthFino Mobile App
          </h1>
        </div>
        <p className="mt-6 text-lg md:text-xl dark:text-white light:text-gray-800">
          Research, Trade and Charts.
        </p>
      </div>

      {/* CARDS CONTAINER */}
      <div className="flex justify-center items-center mb-16 px-4">
        <div className="w-full max-w-9xl mx-auto">
          <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-8 xl:gap-10">
            {cards.map((card, index) => (
              <div key={index} className="flex justify-center w-full md:w-auto">
                <FeatureCard {...card} isActive={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
