import { useEffect, useState } from "react";

const TickerTape = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [theme, setTheme] = useState(
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Load TradingView script only once
    if (!document.getElementById("tv-ticker-script")) {
      const script = document.createElement("script");
      script.id = "tv-ticker-script";
      script.type = "module";
      script.src =
        "https://widgets.tradingview-widget.com/w/en/tv-ticker-tape.js";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="
        relative w-full transition-colors duration-300
        bg-gray-100 text-gray-900
        dark:bg-[#0b1022] dark:text-white
      "
    >
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="absolute right-4 -top-8 z-10 text-xs bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3 py-1 rounded shadow-sm border border-slate-300 dark:border-slate-700"
        aria-label={isVisible ? "Hide TradingView Tape" : "Show TradingView Tape"}
      >
        {isVisible ? "Hide Tape" : "Show Tape"}
      </button>
      
      {/* Ticker Tape */}
      <div className={`mt-2 pb-4 px-2 ${!isVisible ? 'hidden' : ''}`}>
        <div
          className="
            overflow-hidden rounded-md
            border border-gray-300
            bg-white
            dark:border-[#D4AF37]/30 dark:bg-[#05070f]
          "
        >
          <tv-ticker-tape key={theme} theme={theme} transparent="true" symbols="BSE:RELI1!,BSE:HDFCAMC,BSE:ICIC1!,BSE:INFY,BSE:TCS,BSE:LT,BSE:HINDUNILVR,BSE:SBIN,BSE:BHARTIARTL,BSE:ITC,BSE:AXIS1!,BSE:BAJAJFINSV,BSE:KOTAKBANK,BSE:HCLTECH,BSE:MARUTI,BSE:TITAN"></tv-ticker-tape>
        </div>
      </div>
    </div>
  );
};

export default TickerTape;
