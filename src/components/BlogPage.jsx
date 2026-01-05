import React from "react";

const blogs = [
  {
    category: "Buy • Sell • Hold",
    title: "Short-Term Stock to Watch: Triveni Turbine",
    desc: "Short-Term Stock to Watch: Triveni Turbine Current Market Price (CMP): ₹514 Triveni Turbine Ltd. is trading close to a major support zone, indicating a potential trend reversal...",
    img: "/blog1.png", // replace with your image path
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
    desc: "Current Market Price (CMP): ₹1765 Add-on Accumulation Zone: ₹1700 – ₹1720 🎯 Potential Upside Targets • 1st Target: ₹1980 • 2nd Target: ₹2071 • 3rd Target: ₹2155...",
    img: "/blog3.png",
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black px-6 py-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-3xl font-semibold mb-10">Blogs</h1>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />

                {/* Chart Label */}
                <span className="absolute top-3 left-3 bg-green-700 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  CHART EXPLANATION
                </span>

                {/* Date */}
                {blog.date && (
                  <span className="absolute top-3 right-3 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
                    {blog.date}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm text-gray-500 font-medium">
                  {blog.category}
                </p>

                <h2 className="mt-2 text-lg font-semibold text-gray-900 leading-snug">
                  {blog.title}
                </h2>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed flex-1">
                  {blog.desc}
                </p>

                <button className="mt-6 w-fit px-6 py-2 border border-gray-400 rounded-full text-sm font-medium hover:bg-gray-100 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4">
        <button className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg">
          📄
        </button>
        <button className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg">
          💬
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
