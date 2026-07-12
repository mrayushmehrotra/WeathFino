import React from "react";

const WebsiteDisclaimer = () => {
  return (
    <section className="from-gray-50 to-white dark:from-[#0b0f14] dark:to-[#111827] text-black dark:text-white py-2">
      <div className="max-w-6xl mx-auto bg-white dark:bg-[#0b0f19] backdrop-blur rounded-2xl shadow-xl p-6 md:p-10">
        {/* TITLE */}
        <h1 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-3">
          DISCLAIMER FOR WEBSITE
        </h1>

        {/* MAIN DISCLAIMER POINTS */}
        <ul className="list-disc pl-6 space-y-4 text-black dark:text-white leading-relaxed">
          <li>
            <strong className="text-black dark:text-white">Krishna Kumar Pathak</strong> is
            registered with SEBI as an Individual Research Analyst vide
            Registration No. <strong>INH300009914</strong> dated 22-06-2022 and
            provides Research Analyst services to its clients
          </li>

          <li className="font-bold">
            Investment in securities market is subject to market risks. Read all
            the related documents carefully before investing.
          </li>

          <li className="font-bold">
            Registration granted by SEBI and certification from NISM is no way
            guarantee performance of the intermediary or provide any assurance
            of returns to investors.
          </li>

          <li>
            I am not affiliated with any other intermediaries or receive any
            brokerage or commission from any third party.
          </li>

          <li>
            The SEBI has issued no penalties/directions under the SEBI Act or
            any other regulatory body.
          </li>

          <li>
            I do not recommend any stock broker or other intermediary to a
            client, nor do I receive any consideration by way of remuneration or
            compensation or in any other form whatsoever from the stock broker
            or another intermediary.
          </li>

          <li>
            Investment in equity shares has its own risks. Sincere efforts have
            been made to present the right investment perspective. The
            information contained herein is based on analysis and on sources
            that I consider reliable. I, however does not vouch for the
            consistency or the completeness thereof. This material is for
            personal information and I am not responsible for any loss incurred
            due to it & take no responsibility whatsoever for any financial
            profits or loss which may arise from the recommendations above.
          </li>

          <li>
            I do not provide any promise or assurance of favourable view for a
            particular industry or sector or business group in any manner. The
            investor is requested to take into consideration all the risk
            factors including their financial condition and suitability to risk
            return profile before investing.
          </li>

          <li>
            I or any other person related to me might be holding positions in
            the stocks recommended.
          </li>

          <li>
            The research recommendations are provided to all our clients who are
            entitled to receive the research reports. Any Client (Paid or
            Unpaid), any third party or anyone else have no rights to forward or
            share our calls or SMS or Reports or Any Information Provided by us
            to/with anyone (through any medium) which is received directly or
            indirectly by them. If found so, then serious legal actions can be
            taken.
          </li>

          <li>
            I ensure that the individuals employed as research analyst are
            separate from other employees who are performing sales trading,
            dealing, corporate finance advisory or any other activity that may
            affect the independence of our research report/ recommendations.
            However, these individuals may receive feedback from sales or
            trading personnel of brokerage division to ascertain the impact of
            research report/ recommendations.
          </li>

          <li>
            I also ensure that if a client wants an opinion on a specific
            position, such suggestion/ view under any circumstances shall be
            considered as an opinion (not advice). I am not liable for any
            losses whatsoever the client may incur in accepting this opinion.
          </li>

          <li>
            I do not have any association in any manner with any issuer of
            products/securities; this ensures that there are no actual or
            potential conflicts of interest. This also ensures that objectivity
            or independence in the carrying on research services is not
            compromised.
          </li>

          <li>
            Stock trading is inherently risky, and you agree to assume complete
            and full responsibility for the outcomes of all trading decisions
            that you make.
          </li>

          <li>
            Unlike an actual performance record, simulated results do not
            represent actual trading. No representation is being made that any
            account will or is likely to achieve profits or losses similar to
            those shown.
          </li>

          <li>
            Simulated or illustrative performance results do not represent
            actual trading and no assurance is given that similar results will
            be achieved.
          </li>

          <li>
            Users bear the entire risk and cost of investment decisions. Krishna
            Kumar Pathak and employees are not liable for actions taken based on
            the provided information.
          </li>

          <li>
            You, and not me, assume the entire cost and risk of any trading you
            choose to undertake. You are solely responsible for making your own
            investment decisions. If you choose to engage in transactions with
            or without seeking advice from a licensed and qualified financial
            advisor or entity, then such decision and any consequences flowing
            therefrom are your sole responsibility. I or any employees are in no
            way liable for the use of the information by others in investing or
            trading in investment vehicles.
          </li>

          <li>
            I also encourage all investors to use the services as a resource to
            further their own research on all featured companies, stocks,
            sectors, markets and information presented on the site.
          </li>
          <li>
            Everything posted on social media (Twitter/Facebook/Telegram/YouTube
            channel) is for education / illustration purposes and should not be
            counted as recommendations or investment advice.
          </li>
        </ul>

        {/* FINAL DISCLAIMER */}
        <div className="mt-10 border-t border-gray-200 dark:border-slate-700 pt-6">
          <h2 className="italic ">Disclaimer:</h2>

          <p className="text-black dark:text-white leading-relaxed mb-4">
            <strong>
              Krishna Kumar Pathak and WealthFino shall not be liable
            </strong>
            for any direct, indirect, incidental, special, or consequential
            losses or damages—including but not limited to trading losses, data
            inaccuracies, missed opportunities, technology failures, or
            reputational harm—arising from:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-black dark:text-white">
            <li>
              Reliance on any research report, opinion, or recommendation;
            </li>
            <li>
              Client-supplied KYC errors, omissions, or outdated information;
            </li>
            <li>
              Technical disruptions including third-party API failures, data
              loss, or connectivity issues;
            </li>
            <li>
              Misuse, forwarding, or misinterpretation of any content shared.
            </li>
          </ul>

          <p className="mt-4 text-sm text-black dark:text-white  ">
            The sole responsibility for all investment decisions lies with the
            user.
            <strong>
              No legal claim, complaint, or liability shall arise against
              Krishna Kumar Pathak or WealthFino
            </strong>
            in connection with the use of any research or content provided.
          </p>
          <p>
            By using the research, services, website, or mobile application, the
            user acknowledges, understands, and fully accepts this disclaimer,
            and further agrees to indemnify and hold harmless{" "}
            <strong> Krishna Kumar Pathak and WealthFino </strong> from any
            resulting liability or claim.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebsiteDisclaimer;

