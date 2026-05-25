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
        bg-gradient-to-b from-[#F3D98B] via-[#D4AF37] to-[#B8962E]
        shadow-[0_0_60px_rgba(212,175,55,0.25)]"
      >
        {/* INNER DARK CONTAINER */}
        <div className="bg-[#05070d] rounded-[20px] p-6">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white" aria-label="WealthFino">
              <span aria-hidden="true">Wealth</span><span className="text-[#D4AF37]" aria-hidden="true">Fino</span>
            </h1>

            <div className="flex gap-3 mb-6">
              <a
                href="https://play.google.com/store/apps/details?id=com.wealthfino.mobile"
                target="_blank"
                rel="noopener noreferrer"
              >         <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-11"
                />
              </a>
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
