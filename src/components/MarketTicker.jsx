import { useEffect } from "react";

const TickerTape = () => {
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
        w-full transition-colors duration-300
        bg-gray-100 text-gray-900
        dark:bg-black dark:text-white
      "
    >
      {/* Ticker Tape */}
      <div className="mt-2 pb-4 px-2">
        <div
          className="
            overflow-hidden rounded-md
            border border-gray-300
            bg-white
            dark:border-gray-800 dark:bg-black
          "
        >
          <tv-ticker-tape symbols="BSE:RELI1!,BSE:HDFCAMC,BSE:ICIC1!,BSE:INFY,BSE:TCS,BSE:LT,BSE:HINDUNILVR,BSE:SBIN,BSE:BHARTIARTL,BSE:ITC,BSE:AXIS1!,BSE:BAJAJFINSV,BSE:KOTAKBANK,BSE:HCLTECH,BSE:MARUTI,BSE:TITAN"></tv-ticker-tape>
        </div>
      </div>
    </div>
  );
};

export default TickerTape;
