import React, { useEffect, useRef, useState } from "react";

const TradingViewHeatmap = () => {
  const widgetRef = useRef(null);
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
    if (!widgetRef.current) return;

    // Clear old widget (important for React)
    widgetRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
    script.async = true;
    script.type = "text/javascript";

    script.innerHTML = JSON.stringify({
      dataSource: "SENSEX",
      exchanges: ["BSE"],
      grouping: "sector",
      blockSize: "market_cap_basic",
      blockColor: "change",
      locale: "en",
      colorTheme: theme,
      hasTopBar: true,
      isZoomEnabled: false,
      hasSymbolTooltip: true,
      width: "100%",
      height: "100%",
    });

    widgetRef.current.appendChild(script);

    // Observer to remove invalid aria-checked attributes from TradingView injected buttons
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const buttons = document.querySelectorAll(
            ".tradingview-widget-container button[aria-checked]"
          );
          buttons.forEach((btn) => {
            btn.removeAttribute("aria-checked");
          });
        }
      });
    });

    observer.observe(widgetRef.current, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [theme]);

  return (
    <div key={theme} className="tradingview-widget-container relative w-full h-full" style={{ touchAction: "none", WebkitTextSizeAdjust: "none", textSizeAdjust: "none" }}>
      <div
        ref={widgetRef}
        className="tradingview-widget-container__widget w-full h-full"
      />
      {/* Transparent overlay to block browser zoom / pinch gestures */}
      <div
        role="link"
        tabIndex={0}
        title="Open on TradingView"
        style={{ touchAction: "none", userSelect: "none", WebkitUserSelect: "none", cursor: "pointer" }}
        className="absolute inset-0 z-10 bg-transparent"
        onClick={() => window.open("https://www.tradingview.com/", "_blank", "noopener,noreferrer")}
        onKeyDown={(e) => { if (e.key === "Enter") window.open("https://www.tradingview.com/", "_blank", "noopener,noreferrer"); }}
        onWheel={(e) => e.preventDefault()}
        onTouchStart={(e) => { if (e.touches.length > 1) e.preventDefault(); }}
        onTouchMove={(e) => { if (e.touches.length > 1) e.preventDefault(); }}
      />
    </div>
  );
};

export default TradingViewHeatmap;
