import { useEffect, useRef } from "react";

export default function TradingViewTicker() {
  const containerRef = useRef(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || scriptLoadedRef.current) return;

    const loadScript = () => {
      // Clear previous content
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }

      const script = document.createElement("script");
      script.id = "tradingview-ticker-script";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript";
      script.async = true;

      script.innerHTML = JSON.stringify({
        symbols: [
          { proName: "BSE:RELIANCE", title: "Reliance Industries" },
          { proName: "BSE:TCS", title: "Tata Consultancy Services" },
          { proName: "BSE:HDFCBANK", title: "HDFC Bank" },
          { proName: "BSE:INFY", title: "Infosys" },
          { proName: "BSE:ICICIBANK", title: "ICICI Bank" },
          { proName: "BSE:BHARTIARTL", title: "Bharti Airtel" },
          { proName: "BSE:HINDUNILVR", title: "Hindustan Unilever" },
          { proName: "BSE:LT", title: "Larsen & Toubro" },
          { proName: "BSE:SBIN", title: "State Bank of India" },
          { proName: "BSE:AXISBANK", title: "Axis Bank" },
        ],
        showSymbolLogo: true,
        isTransparent: false,
        displayMode: "regular",
        colorTheme: "dark",
        locale: "en",
      });

      if (containerRef.current) {
        containerRef.current.appendChild(script);
        scriptLoadedRef.current = true;
      }
    };

    loadScript();

    // Cleanup
    return () => {
      const existingScript = document.getElementById(
        "tradingview-ticker-script"
      );

      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }

      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }

      scriptLoadedRef.current = false;
    };
  }, []);

  return (
    <div className="tradingview-widget-container w-full">
      <div
        ref={containerRef}
        className="tradingview-widget-container__widget"
        style={{
          height: "46px",
          width: "100%",
        }}
      />
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
}
