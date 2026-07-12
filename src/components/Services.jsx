import React from "react";

const Services = () => {
  const services = [
    {
      title: "Algorithmic Trading",
      description: "AI-driven execution for optimal market positions",
      icon: "🤖",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Wealth Management",
      description: "Personalized portfolio strategies",
      icon: "📈",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Market Intelligence",
      description: "Real-time insights and analytics",
      icon: "🔍",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Financial Education",
      description: "Learn trading strategies and market analysis",
      icon: "🎓",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      className="
        py-20 px-6
        bg-gray-50 dark:bg-slate-950
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <h2
            className="
              text-4xl font-bold mb-4
              text-black dark:text-white
            "
          >
            Comprehensive
            <span className="gradient-text"> Financial Solutions</span>
          </h2>

          <p
            className="
              text-black dark:text-white
            "
          >
            End-to-end services for modern investors
          </p>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="
                p-8 rounded-2xl
                bg-white dark:bg-slate-900
                border border-slate-200 dark:border-slate-800
                shadow-sm dark:shadow-none
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-md
              "
            >
              {/* ICON */}
              <div
                className={`
                  text-4xl mb-6 w-16 h-16 rounded-xl
                  bg-gradient-to-br ${service.color}
                  flex items-center justify-center
                  text-white
                `}
              >
                {service.icon}
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-xl font-bold mb-3
                  text-black dark:text-white
                "
              >
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  text-black dark:text-white
                "
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
