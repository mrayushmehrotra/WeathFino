import React from "react";

const MarketIndicator = ({ status, symbol, price, change }) => {
  const isPositive = change >= 0;

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-trading-border hover:border-trading-blue transition-colors">
      <div className="flex items-center space-x-3">
        <div
          className={`w-3 h-3 rounded-full ${
            isPositive ? "bg-trading-green animate-pulse" : "bg-trading-coral"
          }`}
        ></div>
        <div>
          <div className="font-bold text-trading-navy">{symbol}</div>
          <div className="text-sm text-black">{status}</div>
        </div>
      </div>
      <div className="text-right">
        <div className="font-bold text-lg">${price.toFixed(2)}</div>
        <div
          className={`text-sm font-medium ${
            isPositive ? "text-trading-green" : "text-trading-coral"
          }`}
        >
          {isPositive ? "+" : ""}
          {change.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default MarketIndicator;
