import TradingViewChart from "./TradingViewChart";

const ChartPage = () => {
  return (
    <div
      className="min-h-screen   bg-white 
    dark:bg-[#05070d] text-black dark:text-whiteflex flex items-center justify-center p-20"
    >
      {/* OUTER GLOW FRAME */}
      <div
        className="w-full max-w-[1600px] rounded-[22px] p-[3px]
        bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
        shadow-[0_0_60px_rgba(56,189,248,0.35)]"
      >
        {/* INNER DARK CONTAINER */}
        <div className="bg-[#05070d] rounded-[20px] p-6">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white" aria-label="WealthFino">
              <span aria-hidden="true">Wealth</span><span className="text-green-400" aria-hidden="true">Fino</span>
            </h1>

            <div className="flex gap-3 mb-6">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-11"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-11"
              />
            </div>
          </div>

          {/* CHART HOLDER */}
          <div
            className="rounded-xl overflow-hidden border border-slate-700
            h-[72vh] bg-black"
          >
            <TradingViewChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
