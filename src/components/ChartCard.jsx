import React from "react";

const ChartCard = ({
  title,
  data,
  timeframe = "1D",
  color = "trading-green",
}) => {
  const colorClasses = {
    "trading-green": "from-trading-green to-trading-cyan",
    "trading-blue": "from-trading-blue to-trading-cyan",
    "trading-orange": "from-trading-orange to-trading-coral",
    "trading-violet": "from-trading-violet to-trading-blue",
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-trading-navy">{title}</h3>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-2xl font-bold text-trading-navy">
              ${data.current.toFixed(2)}
            </span>
            <span
              className={`px-2 py-1 rounded text-sm font-bold ${
                data.change >= 0
                  ? "bg-trading-green/10 text-trading-green"
                  : "bg-trading-coral/10 text-trading-coral"
              }`}
            >
              {data.change >= 0 ? "↗" : "↘"} {Math.abs(data.change).toFixed(2)}{" "}
              ({data.changePercent}%)
            </span>
          </div>
        </div>
        <div className="flex space-x-2">
          {["1D", "1W", "1M", "1Y"].map((tf) => (
            <button
              key={tf}
              className={`px-3 py-1 rounded-lg text-sm ${
                timeframe === tf
                  ? "bg-trading-blue text-white"
                  : "bg-gray-100 text-black"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Visualization */}
      <div className="h-48 relative">
        <div className="absolute inset-0 flex items-end space-x-px">
          {data.points.map((point, i) => (
            <div
              key={i}
              className={`flex-1 bg-gradient-to-t ${colorClasses[color]} rounded-t opacity-70`}
              style={{ height: `${point}%` }}
            />
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
        {[
          { label: "Open", value: `$${data.open.toFixed(2)}` },
          { label: "High", value: `$${data.high.toFixed(2)}` },
          { label: "Volume", value: `${(data.volume / 1000000).toFixed(1)}M` },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-sm text-trading-dark">{stat.label}</div>
            <div className="font-bold text-trading-navy">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartCard;
