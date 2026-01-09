import { motion } from "framer-motion";
import chartImg from "../assets/chart.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const FeaturesWhiteBlueAnimated = () => {
  return (
    <section
      className="
        py-28 overflow-hidden
        bg-white dark:bg-slate-950
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span
            className="
              inline-block px-6 py-2 rounded-full
              bg-blue-50 dark:bg-blue-500/15
              text-blue-600 dark:text-blue-400
              font-semibold
            "
          >
            Our Features
          </span>

          <h2
            className="
              mt-6 text-4xl md:text-5xl font-extrabold
              text-slate-900 dark:text-white
            "
          >
            Smarter Trading with{" "}
            <span
              className="
                bg-gradient-to-r from-blue-600 to-cyan-500
                bg-clip-text text-transparent
              "
            >
              Real-Time Market Insights
            </span>
          </h2>

          <p
            className="
              mt-5 text-lg
              text-slate-600 dark:text-slate-300
            "
          >
            Powerful research tools and disciplined strategies designed for
            confident investing.
          </p>
        </motion.div>

        {/* ================= FEATURE CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            mt-20 rounded-3xl p-12
            grid grid-cols-1 lg:grid-cols-2 gap-14 items-center
            bg-white dark:bg-slate-900
            border border-slate-200 dark:border-slate-800
            shadow-xl dark:shadow-none
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="
                text-3xl md:text-4xl font-bold mb-6
                text-slate-900 dark:text-white
              "
            >
              Real-time Market Insights
            </h3>

            <ul className="space-y-4 text-lg">
              {[
                "Research-based Buy/Sell recommendations",
                "Logical, insight-driven market analysis",
                "Timely alerts with clear rationale",
                "Model portfolio monitoring alerts",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="
                    flex items-start gap-3
                    text-slate-700 dark:text-slate-300
                  "
                >
                  <span className="text-blue-600 dark:text-blue-400 font-bold">
                    ✔
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="
                mt-10 px-10 py-4 rounded-full font-semibold
                text-white
                bg-gradient-to-r from-blue-600 to-cyan-500
                shadow-lg hover:shadow-xl
                transition-all
              "
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="
                relative rounded-2xl p-3
                bg-blue-50 dark:bg-blue-500/10
                border border-blue-200 dark:border-blue-500/30
              "
            >
              <img
                src={chartImg}
                alt="Market Chart"
                className="rounded-xl max-h-[320px]"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ================= APP SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <span
            className="
              inline-block px-8 py-3 rounded-full
              bg-blue-600 dark:bg-blue-500
              text-white font-semibold text-lg
            "
          >
            WealthFino Mobile App
          </span>

          <p
            className="
              mt-4
              text-slate-600 dark:text-slate-300
            "
          >
            Research • Trade • Charts — anytime, anywhere
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesWhiteBlueAnimated;
