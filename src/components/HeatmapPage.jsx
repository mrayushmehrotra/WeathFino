import TradingViewHeatmap from "../components/TradingViewHeatmap";

const HeatmapPage = () => {
  return (
    <div
      className="min-h-screen bg-white 
    dark:bg-[#05070d] text-black dark:text-whiteflex items-center justify-center p-20"
    >
      {/* OUTER GLOW BORDER */}
      <div
        className="w-full max-w-[1600px] rounded-[22px] p-[3px]
        bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
        shadow-[0_0_60px_rgba(56,189,248,0.35)] 
         "
      >
        {/* INNER DARK FRAME */}
        <div className="bg-[#05070d]  rounded-[20px] p-6">
          {/* TITLE */}
          <div className="flex justify-center mb-6">
            <div
              className="px-10 py-3 rounded-lg text-2xl font-bold text-black
              bg-gradient-to-r from-cyan-300 to-blue-400 shadow-lg"
            >
              HEATMAP
            </div>
          </div>

          {/* HEATMAP HOLDER */}
          <div
            className="rounded-xl overflow-hidden border border-slate-700
            h-[72vh] bg-black"
          >
            <TradingViewHeatmap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatmapPage;
