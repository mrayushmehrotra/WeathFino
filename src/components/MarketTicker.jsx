import { useEffect, useState } from "react";

const TickerTape = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
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
        bg-gray-100 text-black
        dark:bg-[#0b1022] dark:text-white
      "
    >
      <div className="absolute right-4 -top-8 z-10 flex gap-2">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="text-xs bg-slate-200 dark:bg-slate-800 text-black dark:text-white px-3 py-1 rounded shadow-sm border border-slate-300 dark:border-slate-700"
          aria-label={isPaused ? "Resume Ticker Tape" : "Pause Ticker Tape"}
        >
          {isPaused ? "Resume" : "Pause"}
        </button>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-xs bg-slate-200 dark:bg-slate-800 text-black dark:text-white px-3 py-1 rounded shadow-sm border border-slate-300 dark:border-slate-700"
          aria-label={isVisible ? "Hide TradingView Tape" : "Show TradingView Tape"}
        >
          {isVisible ? "Hide Tape" : "Show Tape"}
        </button>
      </div>
      
      {/* Ticker Tape */}
      <div className={`mt-2 pb-4 px-2 ${!isVisible ? 'hidden' : ''}`}>
        <div
          className={`
            overflow-hidden rounded-md
            border border-gray-300
            bg-white
            dark:border-[#D4AF37]/30 dark:bg-[#05070f]
            ${isPaused ? "[&_tv-ticker-tape]:pointer-events-none" : ""}
            [&_tv-ticker-tape]:filter [&_tv-ticker-tape]:brightness-[0.6] [&_tv-ticker-tape]:contrast-[1.3] [&_tv-ticker-tape]:saturate-[1.2]
            dark:[&_tv-ticker-tape]:brightness-[1.5] dark:[&_tv-ticker-tape]:contrast-[1.1] dark:[&_tv-ticker-tape]:saturate-[1.3]
          `}
          style={isPaused ? { opacity: 0.8 } : {}}
        >
          {!isPaused && (
            <tv-ticker-tape key={theme} theme={theme} transparent="true" symbols="BSE:RELI1!,BSE:HDFCAMC,BSE:ICIC1!,BSE:INFY,BSE:TCS,BSE:LT,BSE:HINDUNILVR,BSE:SBIN,BSE:BHARTIARTL,BSE:ITC,BSE:AXIS1!,BSE:BAJAJFINSV,BSE:KOTAKBANK,BSE:HCLTECH,BSE:MARUTI,BSE:TITAN"></tv-ticker-tape>
          )}
          {isPaused && (
            <div className="h-10 flex items-center justify-center text-sm font-semibold text-black dark:text-white">
              Ticker Tape Paused
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TickerTape;
