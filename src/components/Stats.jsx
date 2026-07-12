import React from "react";

const Stats = () => {
  const stats = [
    { value: "5,000+", label: "Active Investors" },
    { value: "$2.5B+", label: "Assets Managed" },
    { value: "24.7%", label: "Avg. Return" },
    { value: "99.5%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            By The
            <span className="gradient-text"> Numbers</span>
          </h2>
          <p className="text-black">
            Quantifiable results and performance metrics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl font-bold gradient-text mb-4">
                {stat.value}
              </div>
              <div className="text-black font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Performance Chart */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-bold">Performance Benchmark</h3>
              <p className="text-black">5-Year Comparison</p>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gradient-to-r from-secondary to-accent rounded-full mr-2"></div>
                <span>WealthFino</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-300 rounded-full mr-2"></div>
                <span>S&P 500</span>
              </div>
            </div>
          </div>

          {/* Simple Chart */}
          <div className="h-48 flex items-end space-x-2">
            {[40, 60, 75, 55, 90, 120, 145].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-gradient-to-t from-secondary to-accent rounded-t-lg transition-all duration-500 hover:opacity-80"
                  style={{ height: `${height}%` }}
                ></div>
                <div className="text-sm text-black mt-2">{2019 + i}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
