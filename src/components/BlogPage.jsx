import React from "react";

const blogs = [
  {
    category: "Buy • Sell • Hold",
    title: "Short-Term Stock to Watch: Triveni Turbine",
    desc: "Triveni Turbine Ltd. is trading close to a major support zone, indicating a potential short-term trend reversal with favorable risk-reward.",
    img: "/blogs/bl1.jpeg",
    date: "29-08-2025",
  },
  {
    category: "Analysis • Strategy",
    title: "Short-Term Investment Opportunity – Vodafone Idea Ltd.",
    desc: "Vodafone Idea is showing accumulation near critical support levels with potential upside on volume confirmation.",
    img: "/blogs/bl2.jpeg",
  },
  {
    category: "Buy • Sell • Hold",
    title: "Short-Term Target – Deepak Nitrite Ltd.",
    desc: "Deepak Nitrite is consolidating with bullish structure and favorable momentum indicators for short-term traders.",
    img: "/blogs/bl1.jpeg",
  },
];

const BlogPage = () => {
  return (
    <div
      className="
        min-h-screen px-16 py-20
        bg-white dark:bg-slate-950
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <h1
          className="
    text-center
    text-4xl md:text-5xl font-extrabold
    tracking-tight
    text-transparent bg-clip-text
    bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500
    dark:bg-gradient-to-r dark:from-cyan-400 dark:via-sky-400 dark:to-emerald-400
    dark:drop-shadow-[0_0_18px_rgba(34,211,238,0.35)]
    mb-16 pb-5
  "
        >
          Market Blogs & Insights
        </h1>

        {/* ================= BLOG GRID ================= */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="
                group p-[3.5px] rounded-3xl
                bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400
                hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
                transition-all duration-500
              "
            >
              <article
                className="
                  rounded-3xl overflow-hidden
                  bg-white dark:bg-slate-900
                  h-full flex flex-col
                  transition-transform duration-500
                  group-hover:-translate-y-2
                "
              >
                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-52 object-cover"
                  />

                  {/* LABEL */}
                  <span
                    className="
                      absolute top-4 left-4
                      bg-green-600 text-white
                      text-xs px-3 py-1 rounded-full font-semibold
                      shadow
                    "
                  >
                    CHART EXPLANATION
                  </span>

                  {/* DATE */}
                  {blog.date && (
                    <span
                      className="
                        absolute top-4 right-4
                        bg-white/90 dark:bg-slate-800/80
                        text-slate-800 dark:text-slate-200
                        text-xs px-3 py-1 rounded-full font-semibold
                        backdrop-blur
                      "
                    >
                      {blog.date}
                    </span>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {blog.category}
                  </p>

                  <h2 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white leading-snug">
                    {blog.title}
                  </h2>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                    {blog.desc}
                  </p>

                  <button
                    className="
                      mt-6 w-fit px-6 py-2 rounded-full text-sm font-medium
                      bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400
                      text-slate-900
                      hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]
                      transition
                    "
                    aria-label={`Read more about ${blog.title}`}
                  >
                    Read More →
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* ================= FLOATING ACTION BUTTONS ================= */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4">
        <button
          className="
            w-12 h-12 rounded-full
            bg-gradient-to-r from-blue-500 to-cyan-400
            text-white shadow-lg
            flex items-center justify-center
          "
        >
          📄
        </button>

        <button
          className="
            w-12 h-12 rounded-full
            bg-gradient-to-r from-emerald-400 to-green-500
            text-white shadow-lg
            flex items-center justify-center
          "
        >
          💬
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
