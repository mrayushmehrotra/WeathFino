import React from "react";
import phone from "../assets/phone.png";

const UHome = () => {
  return (
    <section
      className="
        relative min-h-screen w-full overflow-hidden
        text-gray-900 dark:text-white
      "
      style={{
        background: `
          radial-gradient(70% 70% at 15% 15%, rgba(212,175,55,0.18), transparent 60%),
          radial-gradient(60% 60% at 85% 30%, rgba(255,215,160,0.10), transparent 65%),
          linear-gradient(180deg, #0b1022 0%, #070b18 45%, #05070f 100%)
        `,
      }}
    >
      {/* LIGHT MODE BACKGROUND */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          background: `
            radial-gradient(70% 70% at 15% 15%, rgba(212,175,55,0.08), transparent 60%),
            radial-gradient(60% 60% at 85% 30%, rgba(255,215,160,0.06), transparent 65%),
            linear-gradient(180deg, #ffffff 0%, #f8fafc 45%, #eef2f7 100%)
          `,
        }}
      />

      {/* GOLD DIAGONAL TEXTURE (dark only) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] dark:block hidden"
        style={{
          background:
            "linear-gradient(120deg, transparent 40%, rgba(212,175,55,0.45) 50%, transparent 60%)",
          backgroundSize: "420px 420px",
        }}
      />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-10 pt-18 grid md:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Master the Markets <br />
            <span className="dark:text-white text-gray-900">
              with Certified Expertise.
            </span>
          </h1>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-lg">
            Your path to professional trading, backed by SEBI-registered
            analysts and a thriving global community.
          </p>

          {/* FEATURE CARDS */}
          <div className="grid grid-cols-2 gap-4 mt-10 max-w-lg">
            {[
              "SEBI Registered Analyst (INH100001234)",
              "Certified Financial Technician",
              "Global Markets Expert",
              "Premium Mentorship",
            ].map((item, i) => (
              <div
                key={i}
                className="
                  flex items-center gap-3 p-4 rounded-xl
                  bg-white dark:bg-white/5
                  backdrop-blur-md
                  border border-[#D4AF37]/30
                  hover:border-[#D4AF37]/60
                  transition-all
                "
              >
                <div
                  className="
                    w-9 h-9 rounded-full
                    bg-gradient-to-br from-[#F3D98B] via-[#D4AF37] to-[#B8962E]
                    text-black font-bold
                    flex items-center justify-center
                  "
                >
                  ★
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap gap-5 items-center">
            <button
              className="
                px-8 py-3 rounded-full
                bg-gradient-to-r from-[#F3D98B] via-[#D4AF37] to-[#B8962E]
                text-black font-semibold
                shadow-[0_12px_35px_rgba(212,175,55,0.45)]
                hover:shadow-[0_20px_60px_rgba(212,175,55,0.65)]
                hover:brightness-110
                transition-all duration-300
              "
            >
              Start Your Pro Journey
            </button>

            <div className="flex gap-3">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-11"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-11"
              />
            </div>
          </div>
        </div>

        {/* RIGHT PHONE */}
        <div className="relative flex justify-center">
          <img
            src={phone}
            alt="Trading App"
            className="
              w-[320px] md:w-[380px]
              rotate-6
              drop-shadow-[0_45px_90px_rgba(0,0,0,0.85)]
            "
          />

          {/* GOLD HALO */}
          <div className="absolute -z-10 w-[460px] h-[460px] bg-[#D4AF37]/25 blur-[180px] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default UHome;
