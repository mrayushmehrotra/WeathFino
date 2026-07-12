import React from "react";

const SocialMediaDisclaimers = () => {
  return (
    <section className="from-gray-50 to-white dark:from-[#0b0f14] dark:to-[#111827] text-black dark:text-white py-2">
      <div className="max-w-6xl mx-auto bg-white dark:bg-[#0b0f19] rounded-2xl shadow-xl p-6 md:p-10">
        {/* TITLE */}
        <h1 className="text-2xl md:text-2xl font-bold text-black dark:text-white mb-6">
          SOCIAL MEDIA DISCLAIMERS
        </h1>

        {/* CONTENT */}
        <ol className="list-decimal pl-6 space-y-5 text-black dark:text-white leading-relaxed">
          <li>
            1. Krishna Kumar Pathak (Individual) is registered with SEBI as
            Individual Research Analyst, BSE Enlistment No: 5590 vide
            Registration number INH300009914 dated June 22, 2022, pursuant to
            which it provides Research Analyst services to its clients.
          </li>

          <li>
            Any matter displayed in this content are purely for knowledge
            purpose and shall not be treated as an advice or opinion of any
            kind. Neither Krishna Kumar Pathak nor the marketing agents related
            to him shall be held liable/responsible in any manner whatsoever for
            any losses the viewers may incur due to acting upon this content.
          </li>

          <li>
            Investment in securities market is subject to market risks. Read all
            the related documents carefully before investing.
          </li>

          <li>
            Registration granted by SEBI and certification from NISM in no way
            guarantee performance of the intermediary or provide any assurance
            of returns to investors.
          </li>

          <li>
            Any opinion on a specific position, such suggestion/view under any
            circumstances shall not be considered as an advice. We are not
            liable for any losses whatsoever the client may incur in accepting
            this opinion.
          </li>

          <li>
            Krishna Kumar Pathak does not make any representation, warranty or
            guarantee as to the accuracy, completeness or timeliness of the
            information (including news, prices, statistics, analysis and the
            like) provided through this platform. In no event shall we be liable
            to any person for any decision made or action taken in reliance upon
            the information provided by us.
          </li>

          <li>
            The securities quoted are for illustration only and are not
            recommendatory.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default SocialMediaDisclaimers;
