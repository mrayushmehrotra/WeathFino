import React from "react";
import ChartCard from "./ChartCard";

const TradingTools = () => {
  const tools = [
    {
      icon: "📈",
      title: "Advanced Charts",
      description: "Real-time charting with 100+ technical indicators",
      features: ["Candlestick patterns", "Drawing tools", "Multi-timeframe"],
    },
    {
      icon: "🤖",
      title: "AI Signals",
      description: "Machine learning trading signals and predictions",
      features: ["Pattern recognition", "Risk scoring", "Auto-alerts"],
    },
    {
      icon: "⚡",
      title: "Lightning Execution",
      description: "Sub-millisecond order execution",
      features: ["Direct market access", "Low latency", "High frequency"],
    },
    {
      icon: "🛡️",
      title: "Risk Management",
      description: "Advanced risk controls and protection",
      features: ["Stop-loss orders", "Position sizing", "Exposure limits"],
    },
  ];

  const demoData = {
    aapl: {
      price: 185.25,
      change: 1.25,
      open: 183.8,
      high: 186.5,
      low: 182.9,
      volume: 45200000,
      chartData: [45, 50, 55, 60, 65, 70, 75, 80, 75, 70, 65, 70, 75, 80, 85],
    },
    btc: {
      price: 62542.5,
      change: 1245.3,
      open: 61200.8,
      high: 62800.0,
      low: 61050.25,
      volume: 3520000000,
      chartData: [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 80, 75, 70, 75, 80],
    },
  };

  return (
    <section className="py-20 bg-trading-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-trading-blue/10 px-4 py-2 rounded-full mb-6">
            <span className="text-trading-blue font-medium">
              PROFESSIONAL TOOLS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-trading-navy">Trade With</span>{" "}
            <span className="gradient-text">Institutional Power</span>
          </h2>
          <p className="text-black text-xl max-w-3xl mx-auto">
            Everything professional traders need, built into one seamless
            platform.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {tools.map((tool) => (
            <div key={tool.title} className="trading-card p-8 card-hover">
              <div className="text-4xl mb-6">{tool.icon}</div>
              <h3 className="text-2xl font-bold text-trading-navy mb-4">
                {tool.title}
              </h3>
              <p className="text-black mb-6">{tool.description}</p>
              <ul className="space-y-2">
                {tool.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-sm text-black"
                  >
                    <div className="w-1.5 h-1.5 bg-trading-cyan rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Live Charts Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-trading-navy mb-8 text-center">
            Live Market Charts
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <ChartCard
              title="Apple Inc. (AAPL)"
              data={demoData.aapl}
              color="green"
            />
            <ChartCard
              title="Bitcoin (BTC)"
              data={demoData.btc}
              color="orange"
            />
          </div>
        </div>

        {/* Demo CTA */}
        <div className="bg-gradient-to-r from-trading-blue to-trading-cyan rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">Try Platform Risk-Free</h3>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Experience professional trading with $100,000 in virtual funds. No
            credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-trading-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100">
              Start Demo Account
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10">
              Watch Platform Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingTools;
