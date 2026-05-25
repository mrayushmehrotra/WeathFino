// import { motion } from "framer-motion";
// import chartImg from "../assets/MeetingImg.png";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
// };

// const FeaturesWhiteBlueAnimated = () => {
//   return (
//     <section
//       className="
//         py-25 overflow-hidden
//         bg-white dark:bg-slate-950
//         transition-colors duration-300
//       "
//     >
//       <div className="max-w-7xl mx-auto px-6 mt-4 ">
//         {/* ================= HEADER ================= */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto"
//         >
//           <span
//             className="
//               inline-block px-6 py-2 rounded-full
//               bg-blue-50 dark:bg-blue-500/15
//               text-blue-600 dark:text-blue-400
//               font-semibold
//               text-4xl
//             "
//           >
//             Our Features
//           </span>

//           <h2
//             className="
//               mt-6 text-2xl md:text-4xl font-extrabold
//               text-slate-900 dark:text-white
//             "
//           >
//             <div className="mb-6">Equity & Stock Option Research </div>

//             <span
//               className="
//                 bg-gradient-to-r from-blue-600 to-cyan-500
//                 bg-clip-text text-transparent"
//             >
//               Real-Time Market Insights
//             </span>
//           </h2>
//         </motion.div>

//         {/* ================= FEATURE CARD ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="
//             mt-10 rounded-3xl p-12
//             grid grid-cols-1 lg:grid-cols-2 gap-14 items-center
//             bg-white dark:bg-slate-900
//             border border-slate-200 dark:border-slate-800
//             shadow-xl dark:shadow-none
//              bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,#0000),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,#0000),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,#0000),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]
//           "
//         >
//           {/* LEFT CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h3
//               className="
//                 text-3xl md:text-4xl font-bold mb-6
//                 text-slate-900 dark:text-blue-600
//               "
//             >
//               Real-Time Market Insights
//             </h3>

//             <ul className="space-y-3 text-lg ">
//               {[
//                 "Research-based Buy/Sell recommendations",
//                 "Logical, insight-driven market analysis",
//                 "Timely alerts with clear rationale",
//                 "Model portfolio monitoring alerts",
//               ].map((item, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.15 }}
//                   className="
//                     flex items-start gap-3
//                     text-slate-700 dark:text-slate-900
//                   "
//                 >
//                   <span className="text-blue-600 dark:text-blue-400 font-bold">
//                     ✔
//                   </span>
//                   {item}
//                 </motion.li>
//               ))}
//             </ul>

//             {/* CTA */}
//             <motion.button
//               whileHover={{ scale: 1.08 }}
//               whileTap={{ scale: 0.96 }}
//               className="
//                 mt-10 px-10 py-4 rounded-full font-semibold
//                 text-white
//                 bg-gradient-to-r from-blue-600 to-cyan-500
//                 shadow-lg hover:shadow-xl
//                 transition-all
//               "
//             >
//               Get Started
//             </motion.button>
//           </motion.div>

//           {/* RIGHT IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="flex justify-center"
//           >
//             <motion.div
//               whileHover={{ scale: 1.03 }}
//               className="
//                 relative rounded-2xl p-3
//                 bg-blue-50 dark:bg-blue-500/10
//                 border border-blue-200 dark:border-blue-500/30
//               "
//             >
//               <img
//                 src={chartImg}
//                 alt="Market Chart"
//                 className="rounded-xl max-h-[320px]"
//               />
//             </motion.div>
//           </motion.div>
//         </motion.div>

//         {/* ================= APP SECTION ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mt-24 text-center"
//         ></motion.div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesWhiteBlueAnimated;

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import chartImg from "/MeetingImg.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const FeaturesWhiteBlueAnimated = () => {
  return (
    <section
      className="
        py-24 overflow-hidden
        bg-white dark:bg-black
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 mt-4">
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
              bg-[#D4AF37]/15 dark:bg-[#D4AF37]/15
              text-[#B8962E] dark:text-[#D4AF37]
              font-semibold
              text-4xl
            "
          >
            Our Features
          </span>

          <h2
            className="
              mt-6 text-2xl md:text-4xl font-extrabold
              text-slate-900 dark:text-white
            "
          >
            <div className="mb-6">Equity & Stock Option Research</div>

            <span
              className="
                bg-gradient-to-r
                from-[#F3D98B] via-[#D4AF37] to-[#B8962E]
                bg-clip-text text-transparent
              "
            >
              Real-Time Market Insights
            </span>
          </h2>
        </motion.div>

        {/* ================= FEATURE CARD WITH THEME BORDER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            mt-14 rounded-[26px] p-[3px]
            bg-gradient-to-r
            from-[#F3D98B] via-[#D4AF37] to-[#B8962E]
            shadow-[0_0_60px_rgba(212,175,55,0.35)]
          "
        >
          {/* INNER CARD */}
          <div
            className="
              rounded-[24px] p-12
              grid grid-cols-1 lg:grid-cols-2 gap-14 items-center
              bg-white dark:bg-gradient-to-br dark:from-[#0b1022] dark:via-[#05070f] dark:to-[#0b1022]
              border border-slate-200 dark:border-white/5
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
                  text-[#B8962E] dark:text-[#D4AF37]
                "
              >
                Real-Time Market Insights
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
                    <span className="text-[#B8962E] dark:text-[#D4AF37] font-bold">
                      <CheckCircle className="w-5 h-5" />
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
                  text-black
                  bg-gradient-to-r from-[#F3D98B] via-[#D4AF37] to-[#B8962E]
                  shadow-[0_8px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_12px_25px_rgba(212,175,55,0.35)]
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
                  bg-[#D4AF37]/5 dark:bg-[#D4AF37]/10
                  border border-[#D4AF37]/30 dark:border-[#D4AF37]/30
                  shadow-[0_0_30px_rgba(212,175,55,0.25)]
                "
              >
                <img
                  src={chartImg}
                  alt=""
                  className="rounded-xl max-h-[320px]"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesWhiteBlueAnimated;
