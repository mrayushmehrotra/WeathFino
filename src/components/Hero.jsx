import React from "react";
import phone from "../assets/phone.png";

const UHomeLightBlue = () => {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden text-gray-900"
      style={{
        background: `
          radial-gradient(70% 70% at 15% 15%, rgba(59, 130, 246, 0.08), transparent 60%),
          radial-gradient(60% 60% at 85% 30%, rgba(96, 165, 250, 0.05), transparent 65%),
          linear-gradient(180deg, #ffffff 0%, #f8fafc 45%, #f1f5f9 100%)
        `,
      }}
    >
      {/* BLUE DIAGONAL TEXTURE */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          background:
            "linear-gradient(120deg, transparent 40%, rgba(59, 130, 246, 0.15) 50%, transparent 60%)",
          backgroundSize: "420px 420px",
        }}
      />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-10 pt-18 grid md:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Master the Markets <br />
            <span className="text-blue-700">with Certified Expertise.</span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-lg">
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
                  bg-white/95 backdrop-blur-sm
                  border border-blue-200
                  hover:border-blue-300
                  shadow-sm hover:shadow-md
                  transition-all duration-300
                "
              >
                <div
                  className="
                    w-9 h-9 rounded-full
                    bg-gradient-to-br from-blue-500 to-blue-600
                    text-white font-bold
                    flex items-center justify-center
                    shadow-sm
                  "
                >
                  {i === 0 ? "✓" : i === 1 ? "★" : i === 2 ? "🌍" : "👨‍🏫"}
                </div>
                <p className="text-sm text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap gap-5 items-center">
            <button
              className="
                px-8 py-3 rounded-full
                bg-gradient-to-r from-blue-600 to-blue-700
                text-white font-semibold
                shadow-[0_8px_25px_rgba(59,130,246,0.35)]
                hover:shadow-[0_15px_40px_rgba(59,130,246,0.5)]
                hover:brightness-105
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
              drop-shadow-[0_25px_50px_rgba(59,130,246,0.15)]
            "
          />

          {/* BLUE GLOW */}
          <div className="absolute -z-10 w-[460px] h-[460px] bg-blue-400/10 blur-[160px] rounded-full" />
        </div>
      </div>

      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-50/50 to-transparent" />
    </section>
  );
};

export default UHomeLightBlue;
