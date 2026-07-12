import React from "react";

const ConflictOfInterestPolicy = () => {
 return (
   <div className=" rounded-2xl min-h-screen bg-white dark:bg-[#0b0f19] text-black dark:text-white px-6 py-10">
   <div className="max-w-6xl mx-auto space-y-10">
    {/* TITLE */}
    <div>
     <h1 className="text-xl font-bold tracking-wide mb-4">
      INTERNAL POLICY ON CONFLICT OF INTEREST
     </h1>

     <p className="">
      <span className="font-semibold">Issued by:</span> Krishna Kumar
      Pathak
     </p>
     <p className="">
      <span className="font-semibold">
       SEBI Registered Research Analyst:
      </span>{" "}
      INH300009914
     </p>
     <p className="">
      <span className="font-semibold">BSE Enlistment No:</span> 5590
     </p>
    </div>

    {/* 1. OBJECTIVE */}
    <section className="space-y-3">
     <h2 className="text-xl font-semibold flex items-center gap-2">
      1. Objective
     </h2>
     <p className=" leading-relaxed">
      This Internal Policy on Conflict of Interest ("Policy") is
      formulated in compliance with{" "}
      <span className="font-semibold">Regulation 15(1)</span> of the SEBI
      (Research Analyst) Regulations, 2014 and sets out principles and
      mechanisms adopted by Krishna Kumar Pathak ("Research Analyst" or
      "Analyst") to identify, avoid, disclose, and manage any conflict of
      interest arising during the course of research activity.
     </p>
    </section>

    {/* 2. DEFINITIONS */}
    <section className="space-y-3">
     <h2 className="text-xl font-semibold">2. Definitions</h2>
     <ul className="list-disc list-inside space-y-2">
      <li>
       <span className="font-semibold">Conflict of Interest:</span> Any
       circumstance that may give rise to a personal or professional
       interest conflicting with the interest of Clients or impacting the
       Analyst's objectivity.
      </li>
      <li>
       <span className="font-semibold">Client:</span> A person or entity
       who receives research services from the Analyst.
      </li>
      <li>
       <span className="font-semibold">Immediate Relative:</span> As
       defined under SEBI (Prohibition of Insider Trading) Regulations,
       2015.
      </li>
     </ul>
    </section>

    {/* 3. GUIDING PRINCIPLES */}
    <section className="space-y-3">
     <h2 className="text-xl font-semibold">3. Guiding Principles</h2>
     <ul className="list-disc list-inside space-y-2">
      <li>
       Ensure honesty, integrity, and independence in research and
       recommendation activities
      </li>
      <li>
       Maintain a clear separation between research and commercial
       interests
      </li>
      <li>
       Always act in the best interest of clients, subject to regulatory
       frameworks
      </li>
      <li>
       Disclose material interests or conflicts before or at the time of
       recommendation
      </li>
      <li>
       Uphold the fiduciary duties imposed under SEBI RA Regulations
      </li>
     </ul>
    </section>

    {/* 4. IDENTIFICATION TABLE */}
    <section className="space-y-4">
     <h2 className="text-xl font-semibold">
      4. Identification of Conflict Scenarios
     </h2>

     <div className="overflow-x-auto">
      <table className="w-full border border-gray-600">
       <caption className="sr-only">
        Identification of Conflict Scenarios
       </caption>
       <thead className="bg-blue-200 ">
        <tr>
         <th scope="col" className="border border-gray-600 px-4 py-2 text-left">
          Scenario
         </th>
         <th scope="col" className="border border-gray-600 px-4 py-2 text-left">
          Policy Action
         </th>
        </tr>
       </thead>
       <tbody className="bg-white ">
        <tr>
         <td className="border px-4 py-2">
          Analyst holds shares in recommended stock
         </td>
         <td className="border px-4 py-2">
          Mandatory disclosure in report
         </td>
        </tr>
        <tr>
         <td className="border px-4 py-2">
          Immediate relative holds financial interest
         </td>
         <td className="border px-4 py-2">
          Disclosure as per SEBI RA norms
         </td>
        </tr>
        <tr>
         <td className="border px-4 py-2">
          Analyst has received any consideration from issuer company
         </td>
         <td className="border px-4 py-2">
          Prohibited unless fully disclosed and compliant
         </td>
        </tr>
        <tr>
         <td className="border px-4 py-2">
          Analyst performs services for company under coverage
         </td>
         <td className="border px-4 py-2">
          Only permitted if legally disclosed and separated
         </td>
        </tr>
        <tr>
         <td className="border px-4 py-2">
          Dual role in advisory or distribution business
         </td>
         <td className="border px-4 py-2">
          Not applicable; segregation maintained as per SEBI
         </td>
        </tr>
       </tbody>
      </table>
     </div>
    </section>

    {/* 5–10 SECTIONS */}
    <section className="space-y-3">
     <h2 className="text-xl font-semibold">
      5. Policy Measures to Manage Conflict
     </h2>
     <p>
      {" "}
      <strong>1. Disclosure in Reports</strong>{" "}
     </p>
     <p>
      Every research report shall include disclosures required under
      Regulation 19(1)(e), stating:
     </p>
     <ul>
      <li>Analyst's or relatives' ownership in the stock</li>
      <li>
       Whether the Analyst has served or received any benefit from the
       issuer
      </li>
      <li>
       Whether the subject company has been a client in the past 12
       months
      </li>
     </ul>

     <p>
      {" "}
      <strong>2. Firewalls and Role Separation</strong>
     </p>

     <ul>
      <li>
       The research function is fully independent from any commercial or
       distribution activity
      </li>
      <li>
       No incentive, compensation, or consideration is accepted from
       companies for coverage
      </li>
     </ul>

     <p>
      {" "}
      <strong>3. No Influence from Market Participants</strong>{" "}
     </p>
     <ul>
      <li>
       Analysts shall not be influenced by promoters, brokers, or third
       parties in any research assignment
      </li>
      <li>
       No participation in IPO allocation decisions or fund raising by
       covered companies
      </li>
     </ul>

     <p>
      {" "}
      <strong>4. Restricted List Maintenance</strong>{" "}
     </p>

     <ul>
      <li>
       A restricted list is maintained and updated regularly for
       companies where conflict may exist
      </li>
      <li>No reports or commentary shall be issued on such companies</li>
     </ul>

     <p>
      {" "}
      <strong>5. Regular Monitoring</strong>
     </p>

     <ul>
      <li>
       Internal audits and compliance checks are conducted to ensure
       conflict management
      </li>
      <li>
       Every research call, note, or post is verified for compliance and
       disclosure
      </li>
     </ul>
    </section>

    <section>
     <h2 className="text-xl font-semibold">6. Training & Awareness</h2>
     <p>The Analyst and team undergo periodic training on:</p>

     <ul className="list-disk ">
      <li>SEBI RA Regulations</li>
      <li>Conflict identification and avoidance</li>
      <li>Research ethics and compliance standards</li>
     </ul>
    </section>

    <section>
     <h2 className="text-xl font-semibold">7. Disclosure to Clients</h2>
     <p>Clients are informed of:</p>
     <ul className="list-disc list-inside space-y-2">
      <li>Analyst registration details (INH300009914)</li>
      <li>Potential conflicts, if any, in every communication</li>
      <li>
       Their right to seek clarification or lodge complaints regarding
       conflict
      </li>
     </ul>
    </section>

    <section>
     <h2 className="text-xl font-semibold">
      Non-Compliance & Disciplinary Action
     </h2>
     <p className="">
      Any breach of this Policy shall be treated as a serious violation.
      Disciplinary action may include:
     </p>

     <ul>
      <li>Reporting to SEBI/BSE if required</li>
     </ul>
    </section>

    <section>
     <h2 className="text-xl font-semibold">9. Record Keeping</h2>
     <p className="">
      All disclosures, research notes, logs of recommendations, and
      conflict declarations are preserved for a minimum of{" "}
      <strong>5 years</strong> as mandated by
      <strong> Regulation 25 of SEBI RA Regulations.</strong>
     </p>
    </section>

    <section>
     <h2 className="text-xl font-semibold">10. Review & Updates</h2>
     <p className="">
      TThis policy shall be reviewed annually or as required by changes in
      law or business practice, and updated accordingly.
     </p>
    </section>

    {/* DISCLAIMER */}
    <div className=" p-6 rounded-xl border border-gray-200 dark:border-gray-700">
     <h3 className="font-semibold italic mb-2">Disclaimer</h3>
     <p className=" text-sm italic leading-relaxed">
      "Investment in securities market are subject to market risks. Read
      all the related documents carefully before investing." We are not
      responsible for your Profit and Loss. Past performance is no
      guarantee of future results.
     </p>
     <p className=" text-sm italic leading-relaxed">
      Registration granted by SEBI, membership of BASL (in case of IAs)
      and certification from NISM in no way guarantee performance of the
      intermediary or provide any assurance of returns to investors. The
      investor is requested to take into consideration all the risk
      factors before actually trading in derivative contracts.
     </p>
    </div>
   </div>
  </div>
 );
};

export default ConflictOfInterestPolicy;

