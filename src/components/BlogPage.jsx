import React from "react";

const blogs = [
  {
    category: "Buy • Sell • Hold",
    title: "Short-Term Stock to Watch: Triveni Turbine",
    desc: "Short-Term Stock to Watch: Triveni Turbine Current Market Price (CMP): ₹514 Triveni Turbine Ltd. is trading close to a major support zone, indicating a potential trend reversal...",
    img: "/blog1.png",
    date: "29-08-2025",
  },
  {
    category: "Analysis • Strategy",
    title: "Short-Term Investment Opportunity – VODAFONE IDEA LTD.",
    desc: "Short-Term Investment Opportunity – VODAFONE IDEA LTD. Current Market Price (CMP): ₹6.58 • Add-on Accumulation Zone: ₹5 – ₹5.50 Potential Upside Target...",
    img: "/blog2.png",
  },
  {
    category: "Buy • Sell • Hold",
    title: "Short-Term Target – DEEPAK NITRITE LTD",
    desc: "Current Market Price (CMP): ₹1765 Add-on Accumulation Zone: ₹1700 – ₹1720 🎯 Potential Upside Targets...",
    img: "/blog3.png",
  },
];

const BlogPage = () => {
  return (
    <div
      className="
        min-h-screen px-6 py-16
        bg-white dark:bg-slate-950
        transition-colors duration-300
      "
    >
      {/* ================= HEADER ================= */}
      <div className="max-w-7xl mx-auto">
        <h1
          className="
            text-3xl font-semibold mb-10
            text-slate-900 dark:text-white
          "
        >
          Blogs
        </h1>

        {/* ================= BLOG GRID ================= */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="
                rounded-2xl overflow-hidden flex flex-col
                bg-white dark:bg-slate-900
                border border-slate-200 dark:border-slate-800
                shadow-lg dark:shadow-none
                transition
              "
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />

                {/* LABEL */}
                <span
                  className="
                    absolute top-3 left-3
                    bg-green-700 text-white
                    text-xs px-3 py-1 rounded-full font-semibold
                  "
                >
                  CHART EXPLANATION
                </span>

                {/* DATE */}
                {blog.date && (
                  <span
                    className="
                      absolute top-3 right-3
                      bg-green-100 dark:bg-green-500/20
                      text-green-700 dark:text-green-400
                      text-xs px-3 py-1 rounded-full font-semibold
                    "
                  >
                    {blog.date}
                  </span>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">
                <p
                  className="
                    text-sm font-medium
                    text-slate-500 dark:text-slate-400
                  "
                >
                  {blog.category}
                </p>

                <h2
                  className="
                    mt-2 text-lg font-semibold leading-snug
                    text-slate-900 dark:text-white
                  "
                >
                  {blog.title}
                </h2>

                <p
                  className="
                    mt-3 text-sm leading-relaxed flex-1
                    text-slate-600 dark:text-slate-300
                  "
                >
                  {blog.desc}
                </p>

                <button
                  className="
                    mt-6 w-fit px-6 py-2 rounded-full text-sm font-medium
                    border border-slate-300 dark:border-slate-700
                    text-slate-700 dark:text-slate-300
                    hover:bg-slate-100 dark:hover:bg-slate-800
                    transition
                  "
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= FLOATING BUTTONS ================= */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4">
        <button
          className="
            w-12 h-12 rounded-full
            bg-purple-600 text-white
            flex items-center justify-center
            shadow-lg
          "
        >
          📄
        </button>

        <button
          className="
            w-12 h-12 rounded-full
            bg-green-500 text-white
            flex items-center justify-center
            shadow-lg
          "
        >
          💬
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
