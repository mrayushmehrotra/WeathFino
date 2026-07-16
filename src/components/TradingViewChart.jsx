import React, { useEffect, useRef, useState, memo } from "react";

const TradingViewWidget = () => {
  const container = useRef();
  const [theme, setTheme] = useState(
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  // Listen for global theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Clear container to prevent duplicate widgets on theme change
    if (container.current) {
      container.current.innerHTML = "";
    }

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    // Use width and height as 100% to ensure it contains the entire width/height of the parent
    script.innerHTML = JSON.stringify({
      allow_symbol_change: true,
      calendar: false,
      details: false,
      hide_side_toolbar: true,
      hide_top_toolbar: false,
      hide_legend: false,
      hide_volume: false,
      hotlist: false,
      interval: "D",
      locale: "en",
      save_image: true,
      style: "1",
      symbol: "BSE:SENSEX",
      theme: theme,
      timezone: "Etc/UTC",
      gridColor: "rgba(255, 224, 178, 0)",
      watchlist: [],
      withdateranges: false,
      compareSymbols: [],
      studies: [],
      autosize: true, // Also keeps it responsive
      width: "100%",
      height: "100%",
    });

    container.current.appendChild(script);
  }, [theme]);

  return (
    <div 
      style={{ touchAction: "none", WebkitTextSizeAdjust: "none", textSizeAdjust: "none" }}
      className="tradingview-widget-container relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] bg-slate-50 dark:bg-black rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800"
    >
      <div className="tradingview-widget-container__widget w-full h-full" ref={container}></div>
      {/* Transparent overlay to block browser zoom / pinch gestures */}
      <div
        aria-hidden="true"
        role="link"
        tabIndex={0}
        title="Open on TradingView"
        style={{ touchAction: "none", userSelect: "none", WebkitUserSelect: "none", cursor: "pointer" }}
        className="absolute inset-0 z-10 bg-transparent"
        onClick={() => window.open("https://www.tradingview.com/symbols/BSE-SENSEX/", "_blank", "noopener,noreferrer")}
        onKeyDown={(e) => { if (e.key === "Enter") window.open("https://www.tradingview.com/symbols/BSE-SENSEX/", "_blank", "noopener,noreferrer"); }}
        onWheel={(e) => e.preventDefault()}
        onTouchStart={(e) => { if (e.touches.length > 1) e.preventDefault(); }}
        onTouchMove={(e) => { if (e.touches.length > 1) e.preventDefault(); }}
      />
      <div className="tradingview-widget-copyright hidden">
        <a href="https://www.tradingview.com/symbols/BSE-SENSEX/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">SENSEX chart</span>
        </a>
        <span className="trademark"> by TradingView</span>
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
