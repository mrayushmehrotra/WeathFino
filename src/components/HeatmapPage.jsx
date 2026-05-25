import TradingViewHeatmap from "../components/TradingViewHeatmap";

const HeatmapPage = () => {
  return (
    <div
      className="min-h-screen bg-[#D4AF37]/5 
    dark:bg-[#0b1022] text-black dark:text-white flex items-center justify-center p-20"
    >
      {/* OUTER GLOW BORDER */}
      <div
        className="w-full max-w-[1600px] rounded-[22px] p-[3px]
        bg-gradient-to-r from-[#F3D98B] via-[#D4AF37] to-[#B8962E]
        shadow-[0_0_60px_rgba(212,175,55,0.25)] 
         "
      >
        {/* INNER DARK FRAME */}
        <div className="bg-[#05070f] rounded-[20px] p-6">
          {/* TITLE */}
          <div className="flex justify-center mb-6">
            <div
              className="px-10 py-3 rounded-lg font-playfair text-3xl tracking-wide font-bold text-black
              bg-gradient-to-r from-[#F3D98B] via-[#D4AF37] to-[#B8962E] shadow-[0_8px_20px_rgba(212,175,55,0.35)]"
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
