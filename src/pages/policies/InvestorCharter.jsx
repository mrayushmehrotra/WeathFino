import { CheckCircle } from "lucide-react";

export default function InvestorCharter() {
  return (
    <div className="space-y-10">
      {/* PAGE TITLE */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white tracking-wide">
          ANNEXURE - A
        </h1>
        <div className="mt-4 h-px bg-slate-600" />
      </div>

      {/* VISION & MISSION */}
      <section className="bg-green-200 border border-green-400 rounded-xl p-6 text-slate-900">
        <h2 className="text-xl font-semibold mb-4">
          Vision and Mission Statements for investors.
        </h2>

        <div className="space-y-4 border border-green-500 rounded-lg p-4 bg-green-100">
          <div className="flex gap-3">
            <CheckCircle className="text-green-700 mt-1" />
            <p>
              <strong>Vision:</strong> Invest with knowledge & safety.
            </p>
          </div>

          <div className="flex gap-3">
            <CheckCircle className="w-6 h-6 text-green-700 mt-1 flex-shrink-0" />
            <p>
              <strong>Mission:</strong> Every investor should be able to invest
              in the right investment products based on their needs, manage and
              monitor them to meet their goals, access reports, and enjoy
              financial wellness.
            </p>
          </div>
        </div>
      </section>

      {/* BUSINESS TRANSACTED */}
      <section className="bg-blue-200 border border-blue-400 rounded-xl p-6 text-slate-900">
        <h2 className="text-xl font-semibold mb-4">
          Details of business transacted by the Research Analyst with respect to
          the investors.
        </h2>

        <ul className="space-y-3 border border-blue-500 rounded-lg p-4 bg-blue-100">
          {[
            "To publish research report based on the research activities of the RA",
            "To provide an independent unbiased view on securities.",
            "To offer unbiased recommendation, disclosing the financial interests in recommended securities.",
            "To provide research recommendation, based on analysis of publicly available information and known observations.",
            "To conduct audit annually.",
            "To ensure that all advertisements are in adherence to the provisions of the Advertisement Code for Research Analysts.",
            "To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to the research services has taken place.",
          ].map((item, index) => (
            <li key={index} className="flex gap-3">
              <CheckCircle className="text-green-700 mt-1" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* SERVICES PROVIDED */}
      <section className="bg-amber-200  border border-indigo-400 rounded-xl p-6 text-slate-900">
        <h2 className="text-xl font-semibold mb-6">
          Details of services provided to investors (No Indicative Timelines).
        </h2>

        <div className="border border-yellow-500 rounded-lg p-6 bg-amber-100">
          <div className="space-y-8">
            {/* Onboarding section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-emerald-600" size={24} />
                <h3 className="text-lg font-semibold  text-slate-800">
                  Onboarding of clients
                </h3>
              </div>
              <ul className="space-y-2 ml-9">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">
                    Sharing of terms and conditions of research services
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">
                    Completing KYC of fee paying clients
                  </span>
                </li>
              </ul>
            </div>

            {/* Disclosure section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-emerald-600" size={24} />
                <h3 className="text-lg font-semibold text-slate-800">
                  Disclosure to clients:
                </h3>
              </div>
              <ul className="space-y-3 ml-9">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 flex-shrink-0"></div>
                  <span className="text-slate-800">
                    To disclose, information that is material for the client to
                    make an informed decision, including details of its business
                    activity, disciplinary history, the terms and conditions of
                    research services, details of associates, risks and
                    conflicts of interest, if any
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 flex-shrink-0"></div>
                  <span className="text-slate-800">
                    To disclose the extent of use of Artificial Intelligence
                    tools in providing research services
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 flex-shrink-0"></div>
                  <span className="text-slate-800">
                    To disclose, while distributing a third party research
                    report, any material conflict of interest of such third
                    party research provider or provide web address that directs
                    a recipient to the relevant disclosures
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 flex-shrink-0"></div>
                  <span className="text-slate-800">
                    To disclose any conflict of interest of the activities of
                    providing research services with other activities of the
                    research analyst.
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-emerald-600" size={24} />
                <h3 className="text-lg font-semibold text-slate-800">
                  To distribute research reports and recommendations to the
                  clients without discrimination.
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-emerald-600" size={24} />
                <h3 className="text-lg font-semibold text-slate-800">
                  To maintain confidentiality w.r.t publication of the research
                  report until made available in the public domain.
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-emerald-600" size={24} />
                <h3 className="text-lg font-semibold text-slate-800">
                  To respect data privacy rights of clients and take measures to
                  protect unauthorized use of their personal information.
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-emerald-600" size={24} />
                <h3 className="text-lg font-semibold text-slate-800">
                  To disclose the timelines for the services provided by the
                  research analyst to clients and ensure adherence to the said
                  timelines.
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-emerald-600" size={24} />
                <h3 className="text-lg font-semibold text-slate-800">
                  To provide clear guidance and adequate caution notice to
                  clients when providing recommendations for dealing in complex
                  and high-risk financial products/services.
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-emerald-600" size={24} />
                <h3 className="text-lg font-semibold text-slate-800">
                  To treat all clients with honesty and integrity.
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-emerald-600" size={24} />
                <h3 className="text-lg font-semibold text-slate-800">
                  To ensure confidentiality of information shared by clients
                  unless such information is required to be provided in
                  furtherance of discharging legal obligations or a client has
                  provided specific consent to share such information.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-200 border border-green-300 rounded-xl p-6 md:p-8 space-y-5 text-slate-900">
        <div className="space-y-4 border border-green-500 rounded-lg p-4 bg-green-100">
          <h2 className="text-xl md:text-2xl font-semibold">
            Details of grievance redressal mechanism and how to access it
          </h2>

          <div className="flex gap-3">
            <CheckCircle className="text-emerald-600" size={24} />
            <p>
              Investor can lodge complaint / grievance against Research Analyst
              in the following ways:
            </p>
          </div>

          <div className="pl-6 space-y-2">
            <p className="font-semibold">
              Mode of filing the complaint with research analyst:
            </p>
            <p>
              In case of any grievance / complaint, an investor may approach the
              concerned Research Analyst who shall strive to redress the
              grievance immediately, but not later than <strong>21 days</strong>{" "}
              of the receipt of the grievance.
            </p>
          </div>

          <div className="pl-6 space-y-3">
            <p className="font-semibold">
              Mode of filing the complaint on SCORES or with Research Analyst
              Administration and Supervisory Body (RAASB):
            </p>

            <p>
              <strong>i. SCORES 2.0:</strong> A web-based centralized grievance
              redressal system of SEBI for facilitating effective e-grievance
              redressal in a time-bound manner.
            </p>

            <a
              href="https://scores.sebi.gov.in"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              SEBI SCORES Grievance Redressal Platform
            </a>

            <p className="font-semibold mt-3">
              Two-level review for complaint / grievance against Research
              Analyst:
            </p>

            <ul className="list-disc pl-6">
              <li>First review done by designated body (RAASB)</li>
              <li>Second review done by SEBI</li>
            </ul>

            <p>
              <strong>ii.</strong> Email to designated email ID of RAASB
            </p>
          </div>

          {/* SMARTODR */}
          <div className="flex gap-3">
            <CheckCircle className="text-emerald-600" size={24} />
            <p>
              If the Investor is not satisfied with the resolution provided by
              the Market Participants, the Investor has the option to file the
              complaint / grievance on <strong>SMARTODR</strong> platform for
              its resolution through online conciliation or arbitration.
            </p>
          </div>

          {/* Physical Address */}
          <div className="flex gap-3">
            <CheckCircle className="text-emerald-600" size={24} />
            <p>
              With regard to physical complaints, investors may send their
              complaints to:
              <br />
              <strong>
                Office of Investor Assistance and Education, Securities and
                Exchange Board of India,
              </strong>
              <br />
              SEBI Bhavan, Plot No. C4-A, ‘G’ Block, Bandra-Kurla Complex,
              Bandra (E), Mumbai – 400 051.
            </p>
          </div>
        </div>
      </section>

      {/* RIGHTS OF INVESTORS */}
      <section className="bg-amber-200 border border-amber-400 rounded-xl p-6 text-slate-900">
        <h2 className="text-xl font-semibold mb-4">Rights of Investors</h2>

        <ul className="space-y-3 border border-amber-500 rounded-lg p-4 bg-amber-100">
          {[
            "Right to Privacy and Confidentiality",
            "Right to Transparent Practices",
            "Right to Fair and Equitable Treatment",
            "Right to Adequate Information",
            "Right to Initial and Continuing Disclosure",
            "Right to receive information about all the statutory and regulatory disclosures",
            "Right to Fair & True Advertisement",
            "Right to Awareness about Service Parameters and Turnaround Times",
            "Right to be informed of the timelines for each service",
            "Right to be Heard and Satisfactory Grievance Redressal",
            "Right to have timely redressal",
            "Right to Exit from Financial product or service in accordance with the terms and conditions agreed with the research analyst",
            "Right to receive clear guidance and caution notice when dealing in Complex and High-Risk Financial Products and Services",
            "Additional Rights to vulnerable consumers",
            "Right to get access to services in a suitable manner even if differently abled",
            "Right to provide feedback on the financial products and services used",
            "Right against coercive, unfair, and one-sided clauses in financial agreements",
          ].map((item, index) => (
            <li key={index} className="flex gap-3">
              <CheckCircle className="text-green-700 mt-1" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* INVESTOR RESPONSIBILITIES */}
      <section className="bg-rose-200 border border-rose-400 rounded-xl p-6 text-slate-900">
        <h2 className="text-xl font-semibold mb-4">
          Expectations of Investors (Responsibilities)
        </h2>

        <div className="">
          <div className="space-y-6 border border-rose-500 rounded-lg p-4 bg-rose-100">
            <h3 className="font-semibold mb-2 ">Do's</h3>
            <ul className="space-y-2">
              {[
                "Always deal with SEBI registered Research Analysts.",
                "Ensure that the Research Analyst has a valid registration certificate. Check for SEBI registration number.",
                "Please refer to the list of all SEBI registered Research Analysts which is available on SEBI website in the following link: (https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14)",
                "Always pay attention towards disclosures made in the research reports before investing.",
                "Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments. You may make payment of fees through Centralized Fee Collection Mechanism (CeFCoM) of RAASB if research analyst has opted for the mechanism. (Applicable for fee paying clients only).",
                "Before buying/ selling securities or applying in public offer, check for the research recommendation provided by your Research Analyst.",
                "Ask all relevant questions and clear your doubts with your Research Analyst before acting on the recommendation.",
                "Seek clarifications and guidance on research recommendations from your Research Analyst, especially if it involves complex and high risk financial products and services.",
                "Always be aware that you have the right to stop availing the service of a Research Analyst as per the terms of service agreed between you and your Research Analyst.",
                "Always be aware that you have the right to provide feedback to your Research Analyst in respect of the services received.",
                "Always be aware that you will not be bound by any clause, prescribed by the research analyst, which is contravening any regulatory provisions.",
                "Inform SEBI about Research Analyst offering assured or guaranteed returns.",
              ].map((item, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle className="text-green-700 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <br />

          <div className="space-y-6 border border-rose-500 rounded-lg p-4 bg-rose-100">
            <h3 className="font-semibold mb-2">Don’ts</h3>
            <ul className="space-y-2">
              {[
                "Do not provide funds for investment to the Research Analyst.",
                "Don't fall prey to luring advertisements or market rumours.",
                "Do not get attracted to limited period discount or other incentive, gifts, etc. offered by Research Analyst.",
                "Do not share login credentials and password of your trading and demat accounts with the Research Analyst.",
              ].map((item, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle className="text-red-700 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
