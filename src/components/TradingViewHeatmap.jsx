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
      isZoomEnabled: true,
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
    <div key={theme} className="tradingview-widget-container w-full h-full">
      <div
        ref={widgetRef}
        className="tradingview-widget-container__widget w-full h-full"
      />
    </div>
  );
};

export default TradingViewHeatmap;
