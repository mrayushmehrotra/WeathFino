import { useEffect, useRef } from "react";

const TradingViewChart = () => {
  const chartContainerRef = useRef(null);

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
      theme: "dark",
      style: "1",
      locale: "en",
      toolbar_bg: "#0f172a",
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
  }, []);

  return (
    <div className="w-full h-[calc(100vh-80px)] bg-black rounded-xl overflow-hidden border border-slate-800">
      <div ref={chartContainerRef} className="w-full h-full" />
    </div>
  );
};

export default TradingViewChart;
