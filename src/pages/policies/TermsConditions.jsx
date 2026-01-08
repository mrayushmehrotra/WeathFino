import React from "react";
import {
  ShieldCheck,
  AlertTriangle,
  Mail,
  ExternalLink,
  CheckCircle,
  XCircle,
  FileText,
  AlertCircle,
} from "lucide-react";

export default function TermsConditions() {
  return (
    <section className="  from-[#0b0f14] to-[#111827] text-slate-200 ">
      <div className="max-w-6xl mx-auto  bg-[#0b0f19]  backdrop-blur rounded-2xl shadow-xl p-6 md:p-10 space-y-10">
        {/* ================= HEADER ================= */}
        <header className="space-y-3 border-b border-slate-700 pb-6">
          <h1 className="text-xl md:text-2xl font-bold text-white">
            TERMS AND CONDITIONS FOR RESEARCH ANALYST SERVICES
          </h1>

          <div className="text-sm text-slate-400 space-y-1">
            <p>
              <strong className="text-slate-200">Research Analyst:</strong>{" "}
              Krishna Kumar Pathak
            </p>
            <p>
              <strong className="text-slate-200">SEBI Registration No.:</strong>{" "}
              INH300009914
            </p>
            <p>
              <strong className="text-slate-200">BSE Enlistment No.:</strong>{" "}
              5590
            </p>
          </div>
        </header>

        {/* ================= SECTION 1 ================= */}

        <Section title="1. PREAMBLE AND LEGAL CAPACITY">
          <p className="text-1xl  ">1.1. Parties and Legal Framework</p>
          <p>
            These Terms and Conditions (“T&C”) constitute a binding agreement
            between you (“User”/ “Client”) and Krishna Kumar Pathak (“Research
            Analyst”/“RA”), registered with the Securities and Exchange Board of
            India (SEBI) as per Registration No. INH300009914 and enlisted with
            BSE, governing your use and receipt of research, analysis, and
            related services offered through digital or physical channels. This
            Agreement complies with the SEBI (Research Analysts) Regulations,
            2014 (“SEBI RA Regulations”), Securities and Exchange Board of India
            Act, 1992 (“SEBI Act”), and all applicable circulars, notifications,
            and regulatory directives.
          </p>
          <br />
          <p>1.2. Regulatory Compliance </p>
          <p>
            By availing the services of the Research Analyst, you acknowledge
            and agree to abide by the prevailing laws, regulations, and SEBI
            guidelines as may be amended from time to time. The RA operates
            strictly in accordance with the SEBI RA Regulations, and all
            research, reports, and services provided are subject to regulatory
            scrutiny.
          </p>
        </Section>

        {/* ================= SECTION 2 ================= */}

        <Section title="2. DEFINITIONS">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>“Research Analyst” (RA):</strong> An individual registered
              with SEBI and permitted to provide research and related analysis,
              advice, or recommendations regarding securities or the securities
              market.
            </li>

            <li>
              <strong>“Client/User”:</strong> Any person (individual, body
              corporate, partnership, or association) availing research or
              advisory services from the RA.
            </li>

            <li>
              <strong>“Services”:</strong> Includes but is not limited to
              research reports, market analysis, securities recommendations,
              investment strategies, and related communications.
            </li>

            <li>
              <strong>“SEBI”:</strong> Securities and Exchange Board of India,
              the regulator for securities markets in India.
            </li>
          </ul>
        </Section>

        {/* ================= SECTION 3 ================= */}
        <Section title="3.ELIGIBILITY AND ACCEPTANCE">
          <p>3.1. User Eligibility </p>
          <p>By accepting these T&C, you confirm that you are:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li> At least 18 years of age</li>
            <li>
              Legally competent to enter into a binding contract under the
              Indian Contract Act, 1872;
            </li>
            <li>
              {" "}
              Not prohibited by law from using research analyst services.
            </li>
          </ul>
          <br />
          <p>3.2. Acceptance </p>
          <p>
            Your use of the RA’s services, website, applications, or receipt of
            reports implies acceptance of these T&C, SEBI regulations, privacy
            policy, and all applicable disclaimers. If you disagree with any
            clause, you must discontinue usage.
          </p>
        </Section>

        {/* ================= SECTION 4 ================= */}
        <Section title="4. SCOPE OF SERVICES">
          <p>4.1. Nature of Services </p>

          <p>
            The RA provides research analysis, securities recommendations,
            general market outlook, and related services strictly as per SEBI RA
            Regulations. The scope may include:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li> Research reports (equity, debt, macroeconomic);</li>
            <li> Short & Long Term, F&O, Equity Recommendations; </li>
            <li> General market commentary and outlook; </li>
            <li> Educational and informational material. </li>
          </ul>

          <br />
          <p>4.2. No Portfolio Management or Distribution </p>
          <p className="text-slate-400">
            The RA does not offer portfolio management, execution, trading,
            investment, or distribution services. All services are
            research-based, non-discretionary, and do not include handling or
            management of Client funds or securities. anagement, trade
            execution, fund handling, or brokerage services.
          </p>
        </Section>

        {/* ================= SECTION 5 ================= */}
        <Section title="5.SEBI ACT, REGULATORY POLICY, & DISCLOSURES">
          <p>5.1. SEBI Act Compliance </p>
          <p>
            The RA fully complies with the SEBI Act, 1992, SEBI (Research
            Analysts) Regulations, 2014, and relevant circulars. All research
            and recommendations are prepared independently, with integrity and
            transparency.
          </p>
          <br />
          <p>5.2. Regulatory Disclosures</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Registration: </strong>
              Krishna Kumar Pathak is registered as a Research Analyst with SEBI
              (INH300009914) and enlisted with BSE (5590).
            </li>

            <li>
              <strong>Conflicts of Interest: </strong>
              Any actual or potential conflicts of interest, material or
              otherwise, shall be disclosed in research reports or
              communications as per SEBI rules.
            </li>

            <li>
              <strong>Compensation: </strong>
              The RA is compensated only by the Client for research services and
              does not receive compensation from companies covered in the
              research unless expressly disclosed.
            </li>

            <li>
              <strong>Ownership of Securities: </strong>
              The RA shall disclose any actual/beneficial ownership of 1% or
              more in the securities covered, as mandated by SEBI.
            </li>
          </ul>
          <p>5.3. Risk Disclosures </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Investment in securities markets is inherently risky. Past
              performance is not indicative of future returns.{" "}
            </li>
            <li>
              Users are advised to make independent investment decisions after
              consulting with their registered financial advisor.
            </li>
          </ul>
        </Section>

        {/* ================= SECTION 6 ================= */}
        <Section title="6. SERVICE DELIVERY AND LIMITATIONS ">
          <p>6.1. User Communication & Promotional Consent Clause </p>
          <i>(Terms & Conditions – WealthFino)</i>
          <p className="mt-2">
            By downloading, registering on, or using the Krishna Pathak & Brand
            Name- WealthFino platform, I hereby provide my free, informed, and
            explicit consent to receive service updates, educational content,
            platform notifications, offers, and promotional communications from
            WealthFino, operated by Krishna Pathak, SEBI Registered Research
            Analyst (SEBI Reg. No. INH300009914), through WhatsApp, SMS, RCS,
            Email, in-app messages, push notifications, and other electronic
            communication modes.
          </p>

          <p className="mt-2">
            I understand that such communications may include account-related
            information, learning materials, research-related updates,
            subscription plans, offers, alerts, and campaigns. I acknowledge
            that standard telecom or data charges may apply. I further
            understand that I may opt out of promotional communications at any
            time, while essential service-related communications may continue.
            The RA may deliver research and analysis through: Email, messaging
            apps, websites, mobile applications, or direct meetings.
          </p>

          <p className="mt-2">
            This consent is provided in accordance with applicable Indian laws,
            including the Information Technology Act, 2000, Digital Personal
            Data Protection Act, 2023, and other applicable regulatory and
            statutory guidelines.
          </p>

          <p className="mt-2 font-bold"> User Agreement & Consent</p>

          <p className="mt-2">
            I hereby authorize the sending of notifications, updates, and
            communications via SMS, WhatsApp, Email, RCS, and other channels, in
            accordance with the Terms of Service and Privacy Policy, including
            promotional communications from WealthFino (Krishna Pathak,
            SEBI-Registered Research Analyst – INH300009914).
          </p>

          <p className="mt-4">6.2. Accuracy and Timeliness</p>

          <p className="mb-2">
            The Research Analyst makes best efforts to provide timely research;
            however, no guarantee is provided regarding accuracy, completeness,
            uninterrupted access, or real-time data delivery.
          </p>

          <p className="mt-4">6.3. No Guarantees </p>

          <p className="mb-2">
            Research recommendations are based on publicly available information
            and best analytical practices. The RA does not guarantee any
            specific outcome, profit, or success from the use of research
            reports or recommendations.
          </p>
        </Section>

        {/* ================= SECTION 7 ================= */}
        <Section title="7. USER OBLIGATIONS AND CONDUCT">
          <p>7.1. Responsible Use </p>
          <p>The User must:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Use research and analysis solely for personal, non-commercial
              purposes.
            </li>
            <li>
              Not reproduce, redistribute, resell, or exploit any part of the
              research or reports without prior written consent of the RA.
            </li>
            <li>
              Provide accurate and up-to-date information as required for
              service delivery.
            </li>
          </ul>
          <br />
          <p>7.2. Compliance with Laws </p>
          <p>
            Users are responsible for their own compliance with applicable
            securities laws, rules, and regulations.
          </p>
        </Section>

        {/* ================= SECTION 8 ================= */}
        <Section title="8. FEES, PAYMENT, AND TAXATION">
          <p>8.1. Fees </p>
          <p className="mb-2">
            Service fees, if applicable, will be clearly communicated prior to
            the provision of research services. All fee structures comply with
            SEBI guidelines and do not include hidden charges.{" "}
          </p>

          <p>8.2. Payment Terms </p>
          <p className="mb-2">
            Payments shall be made through approved channels. Non-payment may
            result in suspension or termination of services.
          </p>
          <p>8.3. Taxes</p>
          <p className="mb-2">
            The User is responsible for all applicable taxes (including GST) as
            per Indian law. The RA will issue valid tax invoices for all paid
            services
          </p>
        </Section>

        {/* ================= SECTION 9 ================= */}
        <Section title="9. PRIVACY AND CONFIDENTIALITY">
          <p>9.1. Privacy Policy</p>
          <p className="mb-2">
            User information is collected, stored, and processed in accordance
            with the Privacy Policy, aligned with SEBI and IT Act requirements.
            Personal data will not be shared with third parties except as
            required by law or with user consent.
          </p>
          <p>9.2. Confidentiality</p>
          <p className="mb-2">
            All client data and personal information shall be treated as
            strictly confidential, except where disclosure is mandated by
            regulators or authorities.
          </p>
        </Section>

        {/* ================= SECTION 10 ================= */}
        <Section title="10. INTELLECTUAL PROPERTY RIGHTS">
          <p>10.1. Ownership</p>
          <p className="mb-2">
            All research reports, analysis, data, website content, and
            proprietary material are the intellectual property of the RA and
            protected under Indian copyright laws.
          </p>
          <p>10.2. Limited License</p>
          <p className="mb-2">
            Users are granted a limited, non-transferable, non-exclusive license
            to access and use the research reports solely for personal,
            non-commercial purposes.
          </p>
          <p>10.3. Restrictions</p>
          <p className="mb-2">
            Any unauthorized use, reproduction, or distribution may result in
            legal action and termination of services.
          </p>
        </Section>

        {/* ================= SECTION 11 ================= */}
        <Section title="11. LIABILITY AND INDEMNITY ">
          <p> 11.1. Limitation of Liability </p>
          <p>The RA shall not be liable for: </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Any direct, indirect, incidental, special, consequential, or
              punitive damages arising out of use or reliance on research
              reports;
            </li>
            <li>
              Any loss resulting from investment decisions, trading, or
              financial losses incurred by Users;
            </li>
            <li>
              Unforeseen circumstances, technical failures, or third-party
              errors beyond RA’s reasonable control.
            </li>
          </ul>
          <br />
          <p>11.2. Indemnification</p>
          <p>
            The User agrees to indemnify and hold harmless the RA, affiliates,
            employees, and agents from any claims, losses, or liabilities
            resulting from breach of these T&C or violation of applicable laws.
          </p>
        </Section>

        {/* ================= SECTION 12 ================= */}
        <Section title="12. RISK WARNING AND DISCLAIMER">
          <p>12.1. General Disclaimer </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Investment in securities markets is subject to market risks.
              Please read all scheme and related documents carefully before
              investing.
            </li>
            <li>The RA does not guarantee any return or capital protection.</li>
            <li>
              All opinions, recommendations, and analysis are for informational
              and educational purposes only.
            </li>
            <li>Past performance does not guarantee future results.</li>
            <li>The User is solely responsible for investment decisions.</li>
          </ul>
          <br />
          <p>12.2. SEBI Disclaimer (Recommended Wording) </p>
          <p>
            “Registration granted by SEBI, and BSE enlistment, do not in any
            manner guarantee the performance of the Research Analyst or provide
            any assurance of returns to investors. The securities quoted, if
            any, are for illustration only and are not recommendatory.
            Investment in securities market is subject to market risks, read all
            related documents carefully before investing.”{" "}
          </p>
          <br />

          <p>12.3. No Personalized Advice </p>
          <p>
            The RA does not provide individually tailored investment advice,
            portfolio management, or distribution services. For personalized
            advice, consult a qualified, SEBI-registered financial advisor.
          </p>
        </Section>

        {/* ================= SECTION 13 ================= */}
        <Section title="13. GRIEVANCE REDRESSAL">
          <p>13.1. Redressal Mechanism </p>
          <p>
            If you have any complaints, queries, or grievances regarding
            services, you may contact:
          </p>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-5 space-y-2">
            <p>
              <strong>Name:</strong> Krishna Kumar Pathak
            </p>
            <p>
              <strong>Email:</strong> skrishna.sk4@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +91 9883455700
            </p>
            <p>
              <strong>SEBI SCORES:</strong>
              <p>
                You may also escalate unresolved grievances to SEBI through{" "}
              </p>
            </p>
            <p>
              <strong> SCORES:</strong>
              <a
                href="https://scores.sebi.gov.in"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline"
              >
                https://scores.sebi.gov.in
              </a>
            </p>
          </div>
          <p>13.2. Resolution Timelines </p>
          <p>
            The RA will endeavor to resolve all grievances within 30 days, in
            line with SEBI regulations.
          </p>
        </Section>

        {/* ================= SECTION 14 ================= */}
        <Section title="14. RIGHTS OF INVESTORS ">
          <p>14.1. Rights Ensured </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Right to Privacy and Confidentiality: Your personal and financial
              data will be protected.
            </li>
            <li>
              Right to Transparent Practices: Fees, charges, and business
              practices will be transparently disclosed.
            </li>
            <li>
              Right to Adequate Information: You will receive comprehensive
              information on research reports, disclaimers, and disclosures.
            </li>
            <li>
              Right to be Heard: You have the right to present complaints and
              expect prompt redressal.
            </li>
            <li>
              Right to Exit: You may discontinue services at any time, subject
              to refund and cancellation policy.
            </li>
            <li>
              Right to Feedback: You may provide feedback or suggestions on
              services rendered.
            </li>
          </ul>
        </Section>

        {/* ================= SECTION 15 ================= */}
        <Section title="15. TERMINATION OF SERVICES">
          <p>15.1. Termination by User </p>
          <p className="mb-2">
            Users may terminate this agreement at any time by providing written
            notice. No refunds shall be provided for services already delivered.
          </p>
          <p>15.2. Termination by RA</p>
          <p>
            The RA reserves the right to terminate services for breach of these
            T&C, misuse of services, non payment, or regulatory reasons.
          </p>
        </Section>

        {/* ================= SECTION 16 ================= */}
        <Section title="16. AMENDMENTS AND UPDATES ">
          <p>16.1. Updates </p>
          <p>
            These T&C may be updated from time to time in accordance with
            changes in laws, SEBI regulations, or business practices. Users will
            be notified of any material changes through the website or other
            communication channels.
          </p>
        </Section>

        {/* ================= SECTION 17 ================= */}
        <Section title="17. GOVERNING LAW AND JURISDICTION">
          <p>17.1. Applicable Law</p>
          <p>
            These T&C are governed by and construed in accordance with the laws
            of India.
          </p>
          <p>17.2. Jurisdiction</p>
          <p>
            Any disputes arising under or relating to these T&C shall be subject
            to the exclusive jurisdiction of the courts of [Insert City/State].
          </p>
        </Section>

        {/* ================= SECTION 18 ================= */}
        <Section title="18.  MISCELLANEOUS">
          <p>18.1. Severability</p>
          <p className="mb-2">
            If any provision of these T&C is found invalid or unenforceable, the
            remaining provisions will remain in full force and effect.{" "}
          </p>
          <p>18.2. Entire Agreement</p>
          <p className="mb-2">
            These T&C constitute the entire agreement between the User and the
            RA regarding research services and supersede any prior
            understandings or agreements.
          </p>
          <p> 18.3. Contact Information</p>
          <p className="mb-2">
            For questions regarding these T&C or services, contact: Krishna
            Kumar Pathak SEBI Registered Research Analyst (INH300009914) BSE
            Enlistment No- 5590 [info@krishnapathak.com]
          </p>
        </Section>

        {/* ================= FOOTER ================= */}
        {/* Add here code */}
        <div className="max-w-4xl mx-auto p-6  rounded-xl shadow-lg border border-gray-200">
          {/* Header */}
          <div className="border-b pb-4 mb-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold  ">Disclosure & Disclaimer</h1>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-gray-300">Issued By:</span>
                <span className="font-semibold text-gray-200">
                  Krishna Kumar Pathak (Individual Research Analyst)
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-gray-300">Brand Name:</span>
                <span className="font-semibold text-blue-600">WealthFino</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="text-gray-300">
                  SEBI Research Analyst Registration No.:
                </span>
                <span className="font-mono text-gray-300">INH300009914</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="text-gray-300">
                  BSE Research Analyst Enlistment No.:
                </span>
                <span className="font-mono text-gray-300">5590</span>
              </div>
            </div>
          </div>

          {/* Nature of Research Services */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-6 w-6 text-green-600" />
              <h2 className="text-xl font-semibold  ">
                🔎 Nature of Research Services
              </h2>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-4">
                As per the SEBI (Research Analysts) Regulations, 2014, Krishna
                Kumar Pathak, operating under the brand WealthFino, is
                authorized to provide Buy, Sell, or Hold opinions as part of
                independent research publications and analysis. These views are
                non-binding and not to be construed as personalized investment
                advice.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Prepared from publicly available data, historical
                    performance, and company disclosures
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Aimed at increasing market awareness and financial literacy
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Not tailored to the specific financial goals, risk profile,
                    or circumstances of any individual investor
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Research Analyst Certification */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <h2 className="text-xl font-semibold  ">
                Research Analyst Certification
              </h2>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <p className="text-gray-700 mb-4 font-medium">
                I, Krishna Kumar Pathak, hereby certify that:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    The views and recommendations expressed are my independent
                    and unbiased opinions based on factual information and
                    research.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    I do not receive compensation or incentives from any company
                    whose securities are discussed in this content.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    No part of my compensation is linked to specific
                    recommendations or performance of securities.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Risk Disclaimer */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <h2 className="text-xl font-semibold  ">Risk Disclaimer</h2>
            </div>
            <div className="bg-red-50 p-5 rounded-lg border border-red-200">
              <p className="text-gray-700 mb-4">
                Investing in the securities market is subject to market risks.
                Users are advised to:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Perform their own independent research or due diligence
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Consult a SEBI-registered Investment Adviser before making
                    any financial decisions
                  </span>
                </li>
              </ul>
              <p className="text-gray-700 font-bold">
                This content is not intended as a recommendation or solicitation
                to buy or sell any securities and does not guarantee any
                returns. Past performance is not indicative of future results.
              </p>
              <p className="text-gray-700">
                The Research Analyst and WealthFino shall not be held
                responsible for any direct or indirect loss or damages incurred
                from use of this information.
              </p>
              <p className="text-gray-700">
                • Past performance is not indicative of future results
              </p>
            </div>
          </div>
          {/* Final Disclaimer */}
          <div className="mt-8 pt-6 ">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <h2 className="text-xl font-semibold  ">
                Disclaimer of Liability and Legal Protection
              </h2>
            </div>
            <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-200">
              <p className="text-gray-700 text-sm mb-3">
                The views, opinions, and information shared by Krishna Kumar
                Pathak and published under the WealthFino brand are based on
                publicly available data and internal analysis. They are not
                guaranteed for accuracy, completeness, or performance.
              </p>
              <p className="text-gray-700 text-sm mb-3">
                Neither Krishna Kumar Pathak nor WealthFino shall be held liable
                or responsible, in any manner whatsoever, for any loss, direct
                or indirect, including but not limited to financial loss,
                profit/loss, or damages incurred due to use of or reliance on
                the information presented.
              </p>
              <p className="text-gray-700 text-sm font-medium">
                No claims, complaints, legal actions, or litigation shall be
                entertained in any form based on the research content provided.
              </p>
            </div>
          </div>

          {/* Conflict of Interest */}
          <div className="mb-8 mt-12">
            <div className="flex items-center gap-2 mb-4 ">
              <AlertCircle className="h-6 w-6 text-purple-600" />
              <h2 className="text-xl font-semibold  ">
                Conflict of Interest & Disclosures
              </h2>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
              <div className="bg-gray-100 px-6 py-3 border-b">
                <p className="text-sm text-gray-600 italic">
                  (as per Reg. 24, SEBI RA Regulations)
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-3 px-6 text-left text-gray-700 font-semibold">
                        Requirement
                      </th>
                      <th className="py-3 px-6 text-left text-gray-700 font-semibold">
                        Disclosure
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-6 text-gray-700">
                        Financial interest in recommended securities
                      </td>
                      <td className="py-3 px-6">
                        <div className="flex items-center gap-2 text-red-600">
                          <XCircle className="h-5 w-5" />
                          <span className="font-medium">No</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-6 text-gray-700">
                        Actual/beneficial ownership of ≥1% in subject company
                      </td>
                      <td className="py-3 px-6">
                        <div className="flex items-center gap-2 text-red-600">
                          <XCircle className="h-5 w-5" />
                          <span className="font-medium">No</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-6 text-gray-700">
                        Received any compensation from the subject company
                      </td>
                      <td className="py-3 px-6">
                        <div className="flex items-center gap-2 text-red-600">
                          <XCircle className="h-5 w-5" />
                          <span className="font-medium">No</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-6 text-gray-700">
                        Involved in investment banking/M&A for subject company
                      </td>
                      <td className="py-3 px-6">
                        <div className="flex items-center gap-2 text-red-600">
                          <XCircle className="h-5 w-5" />
                          <span className="font-medium">No</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-6 text-gray-700">
                        Research Analyst as officer/director/employee in subject
                        company
                      </td>
                      <td className="py-3 px-6">
                        <div className="flex items-center gap-2 text-red-600">
                          <XCircle className="h-5 w-5" />
                          <span className="font-medium">No</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-3 border-t">
                <p className="text-sm text-gray-600">
                  Should any conflict of interest arise in the future, it will
                  be disclosed appropriately.
                </p>
              </div>
            </div>
          </div>

          {/* Grievance Redressal */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-semibold  ">Grievance Redressal</h2>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <p className="text-gray-700 mb-4">
                For complaints or concerns related to research content:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a
                      href="mailto:wealthfino@gmail.com"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      wealthfino@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                  <ExternalLink className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-600">SEBI SCORES Portal</p>
                    <a
                      href="https://scores.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                    >
                      https://scores.gov.in
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= REUSABLE SECTION ================= */
function Section({ title, children }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold text-white">{title}</h2>
      <div className="text-slate-300 leading-relaxed">{children}</div>
    </section>
  );
}
