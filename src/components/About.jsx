import React from "react";

const About = () => {
  return (
    <section
      className="
        py-20 px-6
        bg-white dark:bg-slate-950
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ================= LEFT COLUMN ================= */}
          <div>
            <h2
              className="
                text-4xl font-bold mb-6
                text-black dark:text-white
              "
            >
              Trust-Driven
              <br />
              <span className="gradient-text">Wealth Management</span>
            </h2>

            <p
              className="
                mb-8 text-lg
                text-black dark:text-white
              "
            >
              We combine institutional expertise with cutting-edge technology to
              deliver personalized wealth solutions for modern investors.
            </p>

            {/* FEATURE LIST */}
            <div className="space-y-4">
              {[
                "AI-Powered Analytics",
                "Real-time Market Insights",
                "Risk-Managed Strategies",
                "Transparent Pricing",
              ].map((feature) => (
                <div key={feature} className="flex items-center">
                  <div
                    className="
                      w-2 h-2 rounded-full mr-3
                      bg-blue-600 dark:bg-blue-400
                    "
                  ></div>

                  <span
                    className="
                      text-black dark:text-white
                    "
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT COLUMN – STATS ================= */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "98%", label: "Client Retention" },
              { value: "$2.5B+", label: "Assets Managed" },
              { value: "24/7", label: "Monitoring" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="
                  p-6 rounded-2xl
                  bg-gradient-to-br
                  from-gray-50 to-white
                  dark:from-slate-900 dark:to-slate-800
                  border border-slate-200 dark:border-slate-700
                  shadow-sm dark:shadow-none
                "
              >
                <div
                  className="
                    text-3xl font-bold mb-2
                    gradient-text
                  "
                >
                  {stat.value}
                </div>

                <div
                  className="
                    text-black dark:text-white
                  "
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
