import { CheckCircle } from "lucide-react";

const plans = [
  {
    title: "Index Option Plan",
    oldPrice: "₹ 3,999",
    price: "₹ 1,999",
    badge: "50% OFF",
    validity: "1 Month",
    features: [
      { text: "Daily 2-3 Index Insights", gold: true },
      { text: "Intraday / BTST Setups", gold: false },
      { text: "Chart Logic Explained", gold: true },
      { text: "Live Market Support", gold: false },
    ],
  },
  {
    title: "KP One Club",
    oldPrice: "₹ 4,999",
    price: "₹ 2,999",
    badge: "LIMITED OFFER",
    validity: "1 Month",
    features: [
      { text: "3-4 Stock Option Calls Daily", gold: true },
      { text: "Chart Explanation with Logic", gold: false },
      { text: "Live Sessions", gold: true },
      { text: "Free Study Material", gold: false },
      { text: "Live Market Support", gold: true },
    ],
  },
  {
    title: "Equity Plan Highlights",
    oldPrice: "₹ 4,999",
    price: "₹ 2,999",
    badge: "BEST VALUE",
    validity: "1 Month",
    features: [
      { text: "2-3 Stock Insights", gold: true },
      { text: "Short / Long Term Trades", gold: false },
      { text: "BTST, Swing & Positional Trades", gold: true },
      { text: "Chart Explanation with Logic", gold: false },
      { text: "Real-time Market Queries", gold: true },
    ],
  },
];

const Pricing = () => {
  return (
    <div className="bg-[#F3F8FF] py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Skip The Hype. <span className="text-blue-500">Learn The Why!</span>
        </h1>
        <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
          Helping the next generation of traders with educational insights and
          learning tools. Join now to access premium features.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="space-y-16 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white border-2 border-black rounded-2xl shadow-xl p-8 md:p-10 flex flex-col md:flex-row gap-10"
          >
            {/* Left Features */}
            <div className="flex-1 space-y-4">
              {plan.features.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-5 py-4 rounded-xl shadow ${
                    item.gold
                      ? "bg-gradient-to-r from-yellow-300 to-yellow-600"
                      : "bg-gradient-to-r from-gray-700 to-black text-yellow-400"
                  }`}
                >
                  <CheckCircle className="w-6 h-6 text-black" />
                  <span
                    className={`font-medium ${
                      item.gold ? "text-black" : "text-yellow-400"
                    }`}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Pricing */}
            <div className="flex-1 flex flex-col justify-center relative">
              {/* Logo placeholder */}
              <div className="absolute top-0 right-0 text-slate-400 font-bold">
                WEALTHFINO
              </div>

              <h2 className="text-2xl font-bold mb-4">{plan.title}</h2>

              <p className="text-slate-600 mb-2">Subscription fees:</p>

              <div className="flex items-center gap-4 mb-4">
                <span className="line-through text-gray-400 text-xl">
                  {plan.oldPrice}
                </span>
                <span className="text-4xl font-bold">{plan.price}</span>
              </div>

              <span className="inline-block bg-yellow-200 text-black px-4 py-1 rounded-md text-sm mb-6 w-fit">
                Validity = {plan.validity}
              </span>

              <div className="relative w-full">
                <span className="absolute -top-4 left-6 bg-red-600 text-white text-xs px-4 py-1 rounded-full">
                  {plan.badge}
                </span>
                <button className="w-full border-2 border-black py-4 rounded-xl text-xl font-bold hover:bg-black hover:text-white transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
