import React from "react";

const ChartCard = ({ title = "Asset", data = {}, color = "green" }) => {
  // Default data structure
  const defaultData = {
    price: 100.0,
    change: 1.5,
    open: 99.5,
    high: 101.0,
    low: 98.0,
    volume: 1000000,
    chartData: [50, 55, 60, 65, 70, 65, 60, 55, 50, 55, 60, 65, 70, 75, 80],
  };

  // Merge provided data with defaults
  const mergedData = { ...defaultData, ...data };

  const colorConfig = {
    green: {
      gradient: "from-trading-green to-trading-cyan/50",
      text: "text-trading-green",
    },
    blue: {
      gradient: "from-trading-blue to-trading-cyan/50",
      text: "text-trading-blue",
    },
    orange: {
      gradient: "from-trading-orange to-trading-coral/50",
      text: "text-trading-orange",
    },
  };

  const config = colorConfig[color] || colorConfig.green;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-black">{title}</h3>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-2xl font-bold text-black">
              $
              {typeof mergedData.price === "number"
                ? mergedData.price.toFixed(2)
                : "0.00"}
            </span>
            <span
              className={`px-2 py-1 rounded text-sm font-bold ${
                mergedData.change >= 0
                  ? "bg-trading-green/10 text-trading-green"
                  : "bg-trading-coral/10 text-trading-coral"
              }`}
            >
              {mergedData.change >= 0 ? "↗" : "↘"}{" "}
              {typeof mergedData.change === "number"
                ? Math.abs(mergedData.change).toFixed(2)
                : "0.00"}
            </span>
          </div>
        </div>
        <div className="text-sm text-black">
          24H Volume: $
          {typeof mergedData.volume === "number"
            ? (mergedData.volume / 1000000).toFixed(1)
            : "0.0"}
          M
        </div>
      </div>

      {/* Chart Visualization */}
      <div className="h-40 mb-6">
        <div className="h-full flex items-end space-x-1">
          {Array.isArray(mergedData.chartData) &&
            mergedData.chartData.map((value, index) => (
              <div
                key={index}
                className={`flex-1 bg-gradient-to-t ${config.gradient} rounded-t`}
                style={{ height: `${value}%` }}
              ></div>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
        {[
          { label: "Open", value: mergedData.open, key: "open" },
          { label: "High", value: mergedData.high, key: "high" },
          { label: "Low", value: mergedData.low, key: "low" },
        ].map((item) => (
          <div key={item.key} className="text-center">
            <div className="text-sm text-black">{item.label}</div>
            <div className="font-bold text-black">
              ${typeof item.value === "number" ? item.value.toFixed(2) : "0.00"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartCard;
