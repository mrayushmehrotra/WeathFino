import { NavLink, Outlet } from "react-router-dom";

const policyLinks = [
  { name: "Terms & Conditions", path: "terms-conditions" },
  { name: "Privacy Policy", path: "privacy-policy" },
  { name: "Client Consent and Terms & Conditions", path: "client-term" },
  { name: "Code Of Conduct", path: "code-of-conduct" },
  { name: "Investor Charter", path: "investor-charter" },
  { name: "Redressal Of Grievance", path: "redressal-of-grievance" },
  { name: "Disclosure, USER & KYC Agreement", path: "disclosure-user-kyc" },
  { name: "Complaints Board", path: "complaints-board" },
  { name: "PMLA Policy", path: "pmla-policy" },
  { name: "Disclaimer for Website", path: "website-disclaimer" },
  { name: "Social Media Disclaimers", path: "social-media-disclaimers" },
  { name: "Legal & Risk Disclosure", path: "legal-risk-disclosure" },
  { name: "Refund Policy", path: "refund-policy" },
  { name: "Cancellation Policy", path: "cancellation-policy" },
  {
    name: "Internal Policy on Conflict of Interest",
    path: "conflict-of-interest-policy",
  },
  { name: "Pro Points Policy", path: "pro-points-policy" },
  { name: "Data Deletion & Account Removal Policy", path: "data-deletion" },
];

export default function PoliciesLayout() {
  return (
    <div className="min-h-screen bg-slate-900 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 px-4">
        {/* LEFT SIDEBAR */}
        <aside className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
            {policyLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-5 py-4 text-sm font-medium border-b border-slate-700 last:border-0 transition
                  ${
                    isActive
                      ? "bg-slate-700 text-blue-400 border-l-4 border-blue-500"
                      : "text-slate-300 hover:bg-slate-700/60"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="col-span-12 md:col-span-8 lg:col-span-9">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 h-[84vh] overflow-y-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
