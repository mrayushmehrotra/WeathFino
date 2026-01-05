import { CheckCircle } from "lucide-react";

export default function InvestorCharter() {
  return (
    <div className="space-y-10">
      {/* PAGE TITLE */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white tracking-wide">
          INVESTOR CHARTER
        </h1>
        <div className="mt-4 h-px bg-slate-600" />
      </div>

      {/* VISION & MISSION */}
      <section className="bg-green-200 border border-green-400 rounded-xl p-6 text-slate-900">
        <h2 className="text-xl font-semibold mb-4">
          Vision and Mission Statements for Investors
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
          Details of Business Transacted by the Research Analyst
        </h2>

        <ul className="space-y-3 border border-blue-500 rounded-lg p-4 bg-blue-100">
          {[
            "To publish research reports based on the research activities of the Research Analyst.",
            "To provide an independent and unbiased view on securities.",
            "To offer unbiased recommendations with disclosure of financial interests.",
            "To provide research recommendations based on publicly available information.",
            "To conduct audit annually.",
            "To ensure all advertisements adhere to the Advertisement Code for Research Analysts.",
            "To maintain records of interactions with clients and prospective clients.",
          ].map((item, index) => (
            <li key={index} className="flex gap-3">
              <CheckCircle className="text-green-700 mt-1" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* SERVICES PROVIDED */}
      <section className="bg-indigo-200 border border-indigo-400 rounded-xl p-6 text-slate-900">
        <h2 className="text-xl font-semibold mb-4">
          Details of Services Provided to Investors
        </h2>

        <ul className="space-y-3 border border-indigo-500 rounded-lg p-4 bg-indigo-100">
          {[
            "Onboarding of clients.",
            "Sharing terms and conditions of research services.",
            "Completion of KYC of fee-paying clients.",
          ].map((item, index) => (
            <li key={index} className="flex gap-3">
              <CheckCircle className="text-green-700 mt-1" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* RIGHTS OF INVESTORS */}
      <section className="bg-amber-200 border border-amber-400 rounded-xl p-6 text-slate-900">
        <h2 className="text-xl font-semibold mb-4">Rights of Investors</h2>

        <ul className="space-y-3 border border-amber-500 rounded-lg p-4 bg-amber-100">
          {[
            "Right to Privacy and Confidentiality.",
            "Right to Transparent Practices.",
            "Right to Fair and Equitable Treatment.",
            "Right to Adequate Information.",
            "Right to Fair & True Advertisement.",
            "Right to Grievance Redressal.",
            "Right to Exit from services as per agreed terms.",
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

        <div className="space-y-6 border border-rose-500 rounded-lg p-4 bg-rose-100">
          <div>
            <h3 className="font-semibold mb-2">DOs</h3>
            <ul className="space-y-2">
              {[
                "Always deal with SEBI registered Research Analysts.",
                "Verify SEBI registration number.",
                "Review disclosures before investing.",
                "Make payments only via banking channels.",
                "Seek clarification on high-risk products.",
              ].map((item, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle className="text-green-700 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">DON’Ts</h3>
            <ul className="space-y-2">
              {[
                "Do not provide funds to the Research Analyst.",
                "Do not fall for misleading advertisements.",
                "Do not share trading or demat credentials.",
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
