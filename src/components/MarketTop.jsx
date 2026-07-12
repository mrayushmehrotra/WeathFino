import React, { useState } from "react";
import { MARKET_STOCKS } from "../data/stocks";
import { Pause, Play } from "lucide-react"
import "./MarketTop.css";

export default function MarketTop() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="h-[48px] w-full overflow-hidden border-b border-gray-200 dark:border-white/10 bg-white dark:bg-[#0b1022] flex font-sans transition-colors duration-100">
      <button
        type="button"
        onClick={() => setIsPaused(!isPaused)}
        aria-label={isPaused ? "Play marquee" : "Pause marquee"}
        title={isPaused ? "Play marquee (P)" : "Pause marquee (P)"}
        className="flex items-center justify-center px-3 text-black hover:text-black dark:text-white dark:hover:text-white bg-gray-50 hover:bg-gray-200 dark:bg-[#0b1022] dark:hover:bg-gray-800 z-10 border-r border-gray-200 dark:border-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] dark:focus:ring-[#D4AF37]"
      >
        {isPaused ? (
          <Play aria-label="Play stock ticker" className="h-3.5 w-3.5" />
        ) : (
          <Pause aria-label="Pause stock ticker" className="h-3.5 w-3.5" />
        )}
      </button>

      <div className="flex-1 overflow-hidden relative bg-white dark:bg-[#0b1022]" aria-label="Live market marquee">
        <div className={`flex whitespace-nowrap h-full items-center custom-marquee ${isPaused ? 'is-paused' : ''}`}>
          {/* Double the list for seamless looping */}
          {[...MARKET_STOCKS, ...MARKET_STOCKS].map((stock, i) => {
            const isPositive = stock.chg.startsWith('+');
            const colorClass = isPositive
              ? 'text-green-700 dark:text-green-400'
              : 'text-red-700 dark:text-red-400';

            return (
              <React.Fragment key={i}>
                {/* Insert the static greeting items at the start of each block */}
                {i % MARKET_STOCKS.length === 0 && (
                  <>
                    <span className="inline-flex items-center mx-4 font-medium text-black dark:text-white">Good Morning</span>
                    <span className="inline-flex items-center mx-4 font-medium text-black dark:text-white">Welcome to Wealthfino</span>
                  </>
                )}

                <span title={stock.title} className="inline-flex items-center gap-1.5 mx-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800/60 px-2 py-0.5 rounded transition-colors">
                  <span className="font-bold text-black dark:text-white">{stock.sym}</span>
                  <span className="text-black dark:text-white ml-1 font-medium">{stock.px}</span>
                  <span className={`font-bold ${colorClass}`}>
                    {stock.chg} <span>{stock.pct}</span>
                  </span>
                </span>

                {/* Insert the static closing item at the end of each block */}
                {(i + 1) % MARKET_STOCKS.length === 0 && (
                  <span className="inline-flex items-center mx-4 font-bold text-black dark:text-[#c7cdd6]">NIFTY 100 • 2026-05-25</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
