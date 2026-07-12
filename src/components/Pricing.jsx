import React, { useRef, useState } from "react";
import NumberFlow from "@number-flow/react";
import { CheckCheck, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import KYCModal from "./KYCModal";

const plans = [
  {
    name: "Edge Index Option ",
    description: "Daily 2-3 Index Insights with precise chart logic.",
    price: 1999,
    yearlyPrice: 16999,
    oldPrice: "₹ 23,999",
    buttonText: "Buy Now",
    buttonVariant: "outline",
    badge: "50% OFF",
    popular: false,
    features: [
      { text: "Daily 2-3 Index Insights", gold: true },
      { text: "Intraday / BTST Setups", gold: false },
      { text: "Chart Logic Explained", gold: true },
      { text: "Live Market Support", gold: false },
      { text: "Nifty | Bank Nifty | Sensex ", gold: true },
    ],
  },
  {
    name: "Alpha Stock Option",
    description: "All-in-one comprehensive club with exclusive live sessions.",
    price: 2999,
    yearlyPrice: 19999,
    oldPrice: "₹ 35,999",
    buttonText: "Buy Now",
    buttonVariant: "default",
    popular: true,
    badge: "LIMITED OFFER",
    features: [
      { text: "3-4 Stock Option Calls Daily", gold: true },
      { text: "Chart Explanation with Logic", gold: false },
      { text: "Live Sessions", gold: true },
      { text: "Free Study Material", gold: false },
      { text: "Live Market Support", gold: true },
    ],
  },
  {
    name: "Equity Trades Pro",
    description: "Focused on high-value short & long term equity trades.",
    price: 2999,
    yearlyPrice: 14999,
    oldPrice: "₹ 21,999",
    buttonText: "Buy Now",
    buttonVariant: "outline",
    badge: "BEST VALUE",
    popular: false,
    features: [
      { text: "2-3 Stock Insights", gold: true },
      { text: "Short / Long Term Trades", gold: false },
      { text: "BTST, Swing & Positional", gold: true },
      { text: "Chart Explanation with Logic", gold: false },
      { text: "Real-time Market Queries", gold: true },
    ],
  },
];

const PricingSwitch = ({ onSwitch }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-50 mx-auto flex w-fit rounded-full bg-neutral-100 dark:bg-[#111] border border-gray-200 dark:border-white/10 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={`relative z-10 w-fit sm:h-12 h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
            selected === "0"
              ? "text-black"
              : "text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white"
          }`}
        >
          {selected === "0" && (
            <motion.span
              layout
              layoutId="switch"
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border border-[#D4AF37]/50 shadow-sm shadow-yellow-600/20 bg-gradient-to-t from-[#F3D98B] via-[#D4AF37] to-[#B8962E]"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={`relative z-10 w-fit sm:h-12 h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
            selected === "1"
              ? "text-black"
              : "text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white"
          }`}
        >
          {selected === "1" && (
            <motion.span
              layout
              layoutId="switch"
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border border-[#D4AF37]/50 shadow-sm shadow-yellow-600/20 bg-gradient-to-t from-[#F3D98B] via-[#D4AF37] to-[#B8962E]"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yearly
            <span className="rounded-full bg-black/10 dark:bg-black/40 px-2 py-0.5 text-[10px] font-bold text-black dark:text-white uppercase tracking-wider">
              Save 20%
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

const revealVariants = {
  visible: (i) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.15,
      duration: 0.5,
    },
  }),
  hidden: {
    filter: "blur(10px)",
    y: -20,
    opacity: 0,
  },
};

const TimelineContent = ({
  as: Component = "div",
  animationNum,
  children,
  className,
  ...props
}) => {
  const MotionComponent = motion[Component] || motion.div;
  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={animationNum}
      variants={revealVariants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [isKYCOpen, setIsKYCOpen] = useState(false);
  const pricingRef = useRef(null);

  const togglePricingPeriod = (value) => setIsYearly(parseInt(value) === 1);

  return (
    <div
      className="px-4 pt-32 pb-20 min-h-screen mx-auto relative bg-slate-50 dark:bg-black transition-colors duration-300"
      ref={pricingRef}
    >
      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-[500px] z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, #D4AF37 0%, transparent 60%)`,
          opacity: 0.15,
        }}
      />

      <div className="text-center mb-10 max-w-3xl mx-auto relative z-10">
        <TimelineContent
          as="h2"
          animationNum={0}
          className="md:text-6xl sm:text-4xl text-3xl font-extrabold text-gray-900 dark:text-white mb-6 font-playfair"
        >
          Skip The Hype.{" "}
          <TimelineContent
            as="span"
            animationNum={1}
            className="border-2 border-dashed border-[#D4AF37] px-4 py-1 rounded-2xl bg-yellow-50 dark:bg-[#D4AF37]/10 text-[#7A5800] dark:text-[#D4AF37] capitalize inline-block mt-2 md:mt-0"
          >
            Learn The Why!
          </TimelineContent>
        </TimelineContent>

        <TimelineContent
          as="p"
          animationNum={2}
          className="sm:text-lg text-base text-gray-600 dark:text-gray-300 sm:w-[70%] w-[80%] mx-auto font-medium"
        >
          Helping the next generation of traders with educational insights and
          learning tools. Join now to access premium features.
        </TimelineContent>
      </div>

      <TimelineContent
        as="div"
        animationNum={3}
        className="mb-12 relative z-10"
      >
        <PricingSwitch onSwitch={togglePricingPeriod} />
      </TimelineContent>

      <div className="grid lg:grid-cols-3 max-w-7xl gap-8 py-6 mx-auto relative z-10">
        {plans.map((plan, index) => (
          <TimelineContent key={plan.name} as="div" animationNum={4 + index}>
            <div
              className={`relative h-full flex flex-col rounded-3xl border ${
                plan.popular
                  ? "border-[#D4AF37] ring-4 ring-[#D4AF37]/20 bg-gradient-to-b from-yellow-50/50 to-white dark:from-[#D4AF37]/5 dark:to-[#0a0a0a]"
                  : "border-gray-200 dark:border-white/10 bg-white dark:bg-[#050505]"
              }`}
            >
              <div className="p-8 pb-6 text-left flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="bg-[#D4AF37] text-black px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 font-medium h-10">
                  {plan.description}
                </p>

                <div className="flex flex-col mb-8">
                  <span
                    className={`line-through text-gray-600 dark:text-gray-400 text-lg mb-1 transition-opacity duration-300 ${!isYearly ? "opacity-0 select-none" : "opacity-100"}`}
                  >
                    {plan.oldPrice}
                  </span>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                      ₹
                      <NumberFlow
                        value={isYearly ? plan.yearlyPrice : plan.price}
                        className="text-5xl"
                      />
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2 font-medium">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsKYCOpen(true)}
                  className={`w-full p-4 text-lg font-bold rounded-xl transition-all duration-300 mt-auto ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#F3D98B] via-[#D4AF37] to-[#B8962E] text-black shadow-lg shadow-yellow-500/20 hover:scale-[1.02]"
                      : "bg-gray-900 dark:bg-white text-white dark:text-black shadow-lg hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-[1.02]"
                  }`}
                >
                  {plan.buttonText}
                </button>

                <ul className="space-y-4 font-medium py-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span
                        className={`grid place-content-center mt-0.5 mr-3 rounded-full p-1 ${feature.gold ? "text-[#7A5800] dark:text-[#D4AF37] bg-yellow-50 dark:bg-yellow-900/20" : "text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-white/5"}`}
                      >
                        <CheckCircle
                          size={16}
                          className={feature.gold ? "stroke-[3]" : "stroke-[2]"}
                        />
                      </span>
                      <span
                        className={`text-sm ${feature.gold ? "text-gray-900 dark:text-white font-bold" : "text-gray-600 dark:text-gray-400"}`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TimelineContent>
        ))}
      </div>
      <KYCModal isOpen={isKYCOpen} onClose={() => setIsKYCOpen(false)} />
    </div>
  );
}
