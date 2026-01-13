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
        relative w-[220px] md:w-[400px] shrink-0
        rounded-3xl p-[3px]
        bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500
        shadow-[0_0_60px_rgba(99,102,241,0.35)]
        transition-all duration-700
        ${isActive ? "opacity-100 scale-100 z-10" : "opacity-30 scale-90 z-0"}
        ${isVisible ? "translate-y-0" : "translate-y-10"}
      `}
    >
      <div
        className={`rounded-3xl bg-[#0b0f1a] p-6 border h-full flex flex-col transition-all duration-500 ${
          isActive ? "border-white/20 scale-100" : "border-white/5 scale-95"
        }`}
      >
        {/* IMAGE */}
        <div
          className={`rounded-xl overflow-hidden mb-6 border bg-gradient-to-br transition-all duration-500 ${
            isActive
              ? "border-white/20 from-blue-900/30 to-purple-900/30"
              : "border-white/10 from-blue-900/10 to-purple-900/10"
          }`}
        >
          <div className="relative overflow-hidden">
            <img
              src={image}
              alt={title}
              className={`w-full h-40 object-cover transition-transform duration-700 ${
                isActive ? "scale-100" : "scale-95"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>

        <h3
          className={`text-2xl font-bold text-center mb-2 transition-all duration-300 ${
            isActive ? "text-white" : "text-slate-500"
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-center mb-6 transition-all duration-300 ${
            isActive ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>

        <ul className="space-y-3 text-sm mb-8">
          {points.map((p, i) => (
            <li
              key={i}
              className={`flex gap-3 transition-all duration-500 ${
                isActive
                  ? "opacity-100 translate-x-0 text-slate-200"
                  : "opacity-0 translate-x-4 text-slate-500"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span
                className={`transition-colors duration-300 ${
                  isActive ? "text-cyan-400" : "text-slate-600"
                }`}
              >
                •
              </span>
              {p}
            </li>
          ))}
        </ul>

        <button
          className={`
            mt-auto w-full py-3 rounded-full font-semibold
            relative overflow-hidden transition-all duration-500
            ${
              isActive
                ? "opacity-100 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white"
                : "opacity-0 bg-gray-800 text-gray-400 scale-95"
            }
          `}
        >
          <span className="relative z-10">{cta}</span>
          {isActive && (
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-shimmer"></div>
          )}
        </button>
      </div>
    </div>
  );
};

/* ================= MAIN PAGE ================= */
const FeatureSection = () => {
  const [activeIndexes, setActiveIndexes] = useState([0, 1]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  const cards = [
    {
      title: "Community Engagement",
      subtitle: "Connect, discuss, and learn with a vibrant trading community.",
      image: "/assets/Imagess/comunity.jpg",
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
      image: "/assets/Imagess/tradelogic1.jpg",
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
      image: "/assets/Imagess/marketview.jpg",
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

  // Rotate active cards every 5 seconds (AUTOMATIC ONLY)
  useEffect(() => {
    const rotateCards = () => {
      setActiveIndexes((prev) => {
        const nextIndexes = prev.map((index) => (index + 1) % cards.length);
        return nextIndexes;
      });
    };

    // Start automatic rotation
    const interval = setInterval(rotateCards, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [cards.length]);

  useEffect(() => {
    // Header animation
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
    <div className="min-h-screen bg-[#0a0a0f] py-20 overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[1px] bg-cyan-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      {/* HEADER */}
      <div
        ref={headerRef}
        className={`text-center mb-16 transition-all duration-1000 ${
          headerVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="inline-block px-10 py-4 rounded-lg bg-gradient-to-r from-blue-700 via-cyan-400 to-emerald-400 relative overflow-hidden">
          <h1 className="text-3xl md:text-4xl font-bold text-black relative z-10">
            WealthFino Mobile App
          </h1>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-700 via-cyan-400 to-emerald-400 rounded-lg blur-lg opacity-50 -z-10"></div>
        </div>
        <p className="mt-6 text-lg md:text-xl text-white">
          Research, Trade and Charts.
        </p>
      </div>

      {/* AUTOMATIC CARD ROTATION CONTAINER */}
      <div className="flex justify-center items-center min-h-[500px]">
        <div className="relative w-full max-w-6xl mx-auto px-4">
          {/* Cards Container - Centered */}
          <div className="relative h-[480px] flex items-center justify-center">
            {/* Cards */}
            {cards.map((card, index) => {
              const position = activeIndexes.indexOf(index);
              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ${
                    position === 0
                      ? "left-1/4 -translate-x-1/2 z-20"
                      : position === 1
                      ? "right-1/4 translate-x-1/2 z-10"
                      : "opacity-0 scale-0"
                  }`}
                >
                  <FeatureCard
                    {...card}
                    isActive={activeIndexes.includes(index)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-float {
          animation: float ease-in-out infinite;
        }

        .animate-shimmer {
          background-size: 1000px 100%;
          animation: shimmer 2s infinite linear;
        }

        /* Smooth transitions */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default FeatureSection;
