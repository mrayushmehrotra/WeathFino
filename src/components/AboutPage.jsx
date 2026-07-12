import React from "react";
import { Check } from "lucide-react";
import sir_img from "/Imagess/sir.jpeg";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-black dark:to-black">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-black text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About Krishna Pathak
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-white/85">
            SEBI Registered Research Analyst | Founder of WealthFino Capital |
            Financial Educator
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container border-gray-500 border-[2px] mx-auto px-4 md:px-8 py-12 max-w-6xl">
        {/* About Me Section */}
        <section className="mb-16 bg-white dark:bg-black rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
            Learn and trade with simple tools and Research Based Insights.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-6 md:p-8 border border-blue-100 dark:border-blue-800/30">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Unlock Research Based Insights With Krishna Pathak
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Welcome to Krishna Pathak's Insight Hub, where we combine valuable
              knowledge with trading insights. We don't just offer
              recommendations; we explain the reasoning behind every trade and
              provide chart explanations with clear logic, making it easy for
              anyone to learn, regardless of age or background.
            </p>
            <p className="text-gray-700 dark:text-gray-200">
              Join us to keep learning, expand your understanding, and take the
              first step in your Learning journey.
            </p>
          </div>
        </section>

        {/* SEBI Registration Section */}

        {/* <section className="mb-16 bg-white  dark:bg-black rounded-2xl shadow-lg p-4 md:p-4">
         
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold ml-20 mb-2  text-black dark:text-white  ">
                Meet Krishna Pathak -
                  Your SEBI
                 Registered  
              </h2>
              <br /> <br />
              <p className="text-black dark:text-white mb-6">
                Krishna Pathak is a SEBI Registered Research Analyst and the
                founder of WealthFino Capital, a platform dedicated to promoting
                financial education, disciplined investing, and research-driven
                learning for retail investors.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-black dark:text-white">
                    <strong>SEBI Registered Research Analyst:</strong>{" "}
                    INH300009914
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-black dark:text-white">
                    Certifications in NISM Series XV: Research Analyst, NSE Goal
                    Planning
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-black dark:text-white">
                    Post Graduate Diploma in Management (PGDM)
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-black dark:text-white">
                    BSE Enlistment No - 5590
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-black dark:text-white">
                    Founder - WealthFino Capital
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 flex justify-center">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-700 dark:from-blue-600 dark:to-indigo-800 text-white rounded-2xl p-3 text-center shadow-lg">
               

                <img className="rounded-xl  " src={sir_img} alt="sir_img" />
              </div>
            </div>
          </div>
        </section> */}

        <section className="mb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div
              className="
        rounded-3xl shadow-xl p-8 md:p-12
        bg-white
        dark:bg-gradient-to-br dark:from-black dark:to-[#111]
        border border-gray-200
        dark:border-gray-700/60
      "
            >
              <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* IMAGE */}
                <div className="lg:w-1/3 flex justify-center">
                  <div
                    className="
              p-1.5 rounded-2xl
              bg-gradient-to-br from-sky-400 to-blue-600
              shadow-lg shadow-sky-400/20
              dark:shadow-sky-500/30
              transition-shadow duration-300
            "
                  >
                    <div
                      className="
                p-1 rounded-xl
                bg-white
                dark:bg-[#111]
              "
                    >
                      <div
                        className="
                  border rounded-lg overflow-hidden
                  border-gray-200
                  dark:border-gray-700/50
                "
                      >
                        <img
                          src={sir_img}
                          alt="Krishna Kumar Pathak, SEBI Registered Research Analyst and Founder of WealthFino Capital"
                          className="
                    rounded-lg max-w-xs
                    transform hover:scale-[1.02]
                    transition duration-700
                  "
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="lg:w-2/3">
                  <h1
                    className="
              text-4xl md:text-5xl font-extrabold mb-4 tracking-tight
              text-black
              dark:text-white
            "
                  >
                    Meet Krishna Pathak
                  </h1>

                  <h3
                    className="
              text-xl md:text-2xl font-bold mb-3
              text-black
              dark:text-white
            "
                  >
                    SEBI Registered Research Analyst
                  </h3>

                  <p
                    className="
              text-base md:text-lg leading-relaxed mb-8
              text-gray-700
              dark:text-gray-200
            "
                  >
                    Krishna Pathak is a SEBI Registered Research Analyst and the
                    founder of WealthFino Capital, dedicated to empowering
                    retail investors through disciplined investing, financial
                    education, and research-driven insights.
                  </p>

                  <div className="grid md:grid-cols-2 gap-5">
                    {[
                      "SEBI Registration No: INH300009914",
                      "NISM Series XV – Research Analyst",
                      "NSE Goal Planning Certified",
                      "PGDM – Post Graduate Diploma in Management",
                      "BSE Enlistment No – 5590",
                      "Founder – WealthFino Capital",
                      "PGP FinTech - IIM Nagpur",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-gray-50 dark:bg-[#151515] border border-gray-200 dark:border-gray-700 rounded-lg px-5 py-4 shadow-sm"
                      >
                        <span
                          className="text-green-700 dark:text-green-400 text-xl mt-0.5"
                          aria-hidden="true"
                        >
                          <Check />
                        </span>
                        <span className="text-gray-900 dark:text-gray-100 font-semibold">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="mb-16 bg-white dark:bg-black rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
            Commitment to Transparency and Investor Awareness
          </h2>

          <div className="mb-10">
            <p className="text-gray-700 dark:text-gray-200 mb-6">
              As a professional regulated by the Securities and Exchange Board
              of India (SEBI), Krishna provides:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-[#111] rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <span
                    className="text-black dark:text-white font-bold"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                </div>
                <h3 className="font-bold text-lg text-black dark:text-white mb-2">
                  Equity Research
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Based on publicly available information
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-[#111] rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <span
                    className="text-black dark:text-white font-bold"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                </div>
                <h4 className="font-bold text-lg text-black dark:text-white mb-2">
                  Market Insights
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Grounded in technical and fundamental analysis
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-[#111] rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <span
                    className="text-black dark:text-white font-bold"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                </div>
                <h4 className="font-bold text-lg text-black dark:text-white mb-2">
                  Stock Recommendations
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Research-based and SEBI compliant
                </p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-200 mt-8 text-center">
              His research is developed independently and shared in accordance
              with SEBI's guidelines to promote awareness, transparency, and
              investor understanding.
            </p>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
              What an SEBI Registered Research Analyst Can Do
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-6">
              As per SEBI (Research Analyst) Regulations, Krishna Pathak is
              authorized to:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex-shrink-0 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-green-600"></div>
                </div>
                <span className="text-gray-700 dark:text-gray-200">
                  Publish independent research reports and views on securities
                  and market trends
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex-shrink-0 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-green-600"></div>
                </div>
                <span className="text-gray-700 dark:text-gray-200">
                  Share non-advisory insights based on objective analysis and
                  research
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex-shrink-0 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-green-600"></div>
                </div>
                <span className="text-gray-700 dark:text-gray-200">
                  Promote financial literacy and help investors understand
                  market dynamics
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex-shrink-0 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-green-600"></div>
                </div>
                <span className="text-gray-700 dark:text-gray-200">
                  Support clients through well-researched, non-discretionary
                  recommendations
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Education Mission Section */}
        <section className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl shadow-lg p-6 md:p-8 border border-blue-100 dark:border-blue-800/30">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            Beyond Research - A Mission to Educate
          </h2>

          <div className="mb-8">
            <p className="text-gray-700 dark:text-gray-200 mb-6">
              Krishna has been featured in leading financial and news platforms
              such as
              <span className="font-semibold text-gray-900 dark:text-white">
                {" "}
                The Economic Times, CNBC, MSM, Indverts, Investing.com, Against
                News, Stockwits, and Moreycontrol
              </span>
              , and is also recognised by MDRT (Million Dollar Round Table) for
              his financial insights.
            </p>

            <p className="text-gray-700 dark:text-gray-200">
              More than just a market researcher, Krishna Kumar Pathak is a
              mentor and educator focused on promoting financial literacy and he
              encourages beginners to:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3 bg-white dark:bg-black rounded-lg p-4 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                <div className="w-4 h-4 rounded-full bg-green-600"></div>
              </div>
              <span className="text-black dark:text-white font-medium">
                Start with education and awareness
              </span>
            </div>

            <div className="flex items-center gap-3 bg-white dark:bg-black rounded-lg p-4 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                <div className="w-4 h-4 rounded-full bg-blue-600"></div>
              </div>
              <span className="text-black dark:text-white font-medium">
                Set clear investment goals
              </span>
            </div>

            <div className="flex items-center gap-3 bg-white dark:bg-black rounded-lg p-4 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                <div className="w-4 h-4 rounded-full bg-purple-600"></div>
              </div>
              <span className="text-black dark:text-white font-medium">
                Practice risk management and diversification
              </span>
            </div>

            <div className="flex items-center gap-3 bg-white dark:bg-black rounded-lg p-4 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                <div className="w-4 h-4 rounded-full bg-amber-600"></div>
              </div>
              <span className="text-black dark:text-white font-medium">
                Focus on long-term learning and patience
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-black rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-200 text-center italic">
              Through research-based insights and educational content, Krishna
              aims to empower individuals to make informed financial decisions —
              without relying on tips or speculation.
            </p>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
            DISCLAIMER
          </h2>

          <div className="space-y-4 text-gray-800 dark:text-gray-200">
            <p>
              Investment in the securities market is subject to market risks.
              Please read all related documents carefully before investing.
              Trading in Futures & Options (F&O) carries a high level of risk
              and may not be suitable for all investors, as it depends heavily
              on market momentum and volatility.
            </p>

            <p>
              Registration granted by SEBI and certification from NISM in no way
              guarantee the performance of the intermediary or provide any
              assurance of returns to investors. Past performance is not
              indicative of future results.
            </p>

            <div className="bg-white dark:bg-black p-4 rounded-lg border border-gray-300 dark:border-gray-700 mt-6">
              <p className="font-bold text-gray-900 dark:text-white mb-2">
                Dear Members, it is mandatory to read and understand all Terms &
                Conditions, including:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-200">
                <li>SEBI Guidelines</li>
                <li>Research Disclaimers</li>
                <li>User Guidelines</li>
                <li>Investor Charter</li>
                <li>Grievance Redressal Policy</li>
              </ul>
            </div>

            <div className="text-center mt-8">
              <p className="font-bold text-gray-900 dark:text-white mb-4">
                For more details, visit:
              </p>
              <a
                href="https://www.krishnapathak.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-800 hover:bg-blue-900 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                www.krishnapathak.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
