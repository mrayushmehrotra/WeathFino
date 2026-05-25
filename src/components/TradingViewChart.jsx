import React, { useEffect, useRef, useState } from "react";

const TradingViewChart = () => {
  const chartContainerRef = useRef(null);
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
    if (!chartContainerRef.current) return;

    // Prevent duplicate widget
    chartContainerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "BSE:RELIANCE",
      interval: "D",
      timezone: "Asia/Kolkata",
      theme: theme,
      style: "1",
      locale: "en",
      toolbar_bg: theme === "dark" ? "#0f172a" : "#f1f5f9",
      enable_publishing: false,
      allow_symbol_change: true,
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: false,
    });

    chartContainerRef.current.appendChild(script);

    return () => {
      if (chartContainerRef.current) {
        chartContainerRef.current.innerHTML = "";
      }
    };
  }, [theme]);

  return (
    <div key={theme} className="tradingview-widget-container w-full h-full bg-slate-50 dark:bg-black rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
      <div ref={chartContainerRef} className="tradingview-widget-container__widget w-full h-full" />
    </div>
  );
};

export default TradingViewChart;
