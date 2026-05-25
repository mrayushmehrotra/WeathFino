import React from "react";
import phone from "/phone.png";

const UHomeLightBlue = () => {
  return (
    <section
      className="
        relative min-h-screen w-full overflow-hidden
        text-gray-900 dark:text-gray-100
        transition-colors duration-300
        bg-gradient-to-b
        from-white via-slate-50 to-slate-100
        dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
      "
    >
      {/* SOFT RADIAL GLOWS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-[160px]" />
        <div className="absolute top-[10%] right-[-10%] w-[420px] h-[420px] rounded-full bg-cyan-400/10 dark:bg-cyan-400/20 blur-[160px]" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-10 pt-24 grid md:grid-cols-2 gap-20 items-center">
        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Master the Markets <br />
            <span className="text-blue-700 dark:text-blue-400">
              with Certified Expertise.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-gray-700 dark:text-gray-300 text-lg">
            Your path to professional trading, backed by
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              {" "}
              SEBI-registered analysts
            </span>{" "}
            and a thriving global community.
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
                  bg-white dark:bg-slate-800
                  border border-blue-200 dark:border-slate-700
                  shadow-sm dark:shadow-none
                  hover:border-blue-300 dark:hover:border-blue-500
                  transition-all duration-300
                "
              >
                <div
                  className="
                    w-9 h-9 rounded-full
                    bg-gradient-to-br from-blue-500 to-blue-600
                    text-white font-bold
                    flex items-center justify-center
                  "
                >
                  {i === 0 ? "✓" : i === 1 ? "★" : i === 2 ? "🌍" : "👨‍🏫"}
                </div>

                <p className="text-sm text-gray-800 dark:text-gray-200">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap gap-5 items-center">
            <button
              className="
                px-8 py-3 rounded-full border-2 border-white dark:border-white/20
                bg-gradient-to-r from-blue-700 to-blue-900
                text-white font-semibold
                shadow-[0_10px_30px_rgba(37,99,235,0.35)]
                hover:shadow-[0_18px_50px_rgba(37,99,235,0.55)]
                transition-all duration-300
              "
            >
              Start Your Pro Journey
            </button>

            <div className="flex gap-3">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download WealthFino on the App Store"
                className="h-11"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get WealthFino on Google Play"
                className="h-11"
              />
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <img
            src={phone}
            alt="WealthFino mobile app showing live trade alerts and portfolio dashboard"
            className="
              w-[320px] md:w-[380px]
              rotate-6
              drop-shadow-[0_30px_60px_rgba(37,99,235,0.25)]
            "
          />

          {/* GLOW */}
          <div className="absolute -z-10 w-[460px] h-[460px] bg-blue-500/20 dark:bg-blue-500/30 blur-[180px] rounded-full" />
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white dark:from-slate-950 to-transparent" />
    </section>
  );
};

export default UHomeLightBlue;
