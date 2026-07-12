import React from "react";

export default function DisclosureUserKYC() {
  return (
    <section className="min-h-screen rounded-2xl from-gray-50 to-white dark:from-[#0b0f14] dark:to-[#111827] text-black dark:text-white py-1 px-4">
      <div className="max-w-6xl mx-auto bg-white dark:bg-[#0b0f19] rounded-2xl shadow-xl p-6 md:p-10 space-y-10">
        {/* ================= HEADER ================= */}
        <header className="space-y-4 border-b border-gray-200 dark:border-slate-700 pb-6">
          <h1 className="text-2xl md:text-2xl font-bold text-black dark:text-white">
            DISCLOSURE, USER & KYC AGREEMENT
          </h1>

          <div className="space-y-1 text-black/80 dark:text-white/80 text-sm">
            <p>
              <strong>Issued by:</strong> Krishna Kumar Pathak
            </p>
            <p>
              <strong>SEBI Registered Research Analyst:</strong> INH300009914
            </p>
            <p>
              <strong>Brand Name:</strong> WealthFino
            </p>
            <p>
              <strong>BSE Enlistment No.:</strong> 5590
            </p>
            <p>
              <strong>Address:</strong> RS-39/43, 5/3C Golden Park, Sankarpur
              West, Near Rabindranatar Co-operative, Durgapur, West Bengal –
              713206
            </p>
          </div>
        </header>

        {/* ================= SECTION 1 ================= */}
        <Section title="1. About the Research Analyst">
          <p>
            Mr. Krishna Kumar Pathak, is a SEBI-registered Research Analyst
            (Registration No. INH300009914). The business operates under the
            brand name WealthFino from its principal place of business in
            Durgapur, West Bengal. Mr. Krishna Pathak provides independent
            research analysis and model portfolios.
          </p>
        </Section>

        {/* ================= SECTION 2 ================= */}
        <Section title="2. Educational & Professional Qualifications">
          <ul className="list-disc pl-6 space-y-2">
            <li>Post Graduate Diploma in Management (PGDM)</li>
            <li>Certified under NISM-Series XV: Research Analyst</li>
          </ul>
        </Section>

        {/* ================= SECTION 3 ================= */}
        <Section title="3. Nature of Business Activities">
          <p>WealthFino offers research services such as:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Independent equity research reports</li>
            <li>
              Buy/Sell/Hold recommendations on listed Indian equities and
              derivatives
            </li>
            <li>Model portfolio strategies and educational resources</li>
          </ul>
          <p>
            WealthFino<strong> does not offer </strong> portfolio management,
            execution services, or fund-based services.
          </p>
        </Section>

        {/* ================= SECTION 4 ================= */}
        <Section title="4. Disciplinary History">
          <p>
            <strong>None.</strong> There are no pending or past disciplinary
            actions, penalties, or litigations against{" "}
            <strong>Krishna Kumar Pathak</strong> by <strong>SEBI,</strong>{" "}
            stock exchanges, or any regulatory authority.
          </p>
        </Section>

        {/* ================= SECTION 5 ================= */}
        <Section title="5. Terms & Conditions of Research Usage">
          <p>
            Krishna Kumar Pathak has exercised due diligence in checking the
            correctness and authenticity of the information contained herein, so
            far as it relates to current and historical information, but does
            not guarantee its accuracy or completeness. The opinions expressed
            are based on our current research as of the date appearing in the
            material and may be subject to change from time to time without
            notice.
          </p>
          <p>
            Krishna Kumar Pathak does not accept any liability arising from the
            use of this document or the information contained herein. The
            recipients of this material should rely on their own judgment and
            take their own professional advice before acting on this
            information.
          </p>
          <p>
            Krishna Kumar Pathak shall not be in any way responsible for any
            loss or damage that may arise to any person/s from any inadvertent
            error in the information contained, views and opinions expressed in
            this publication.
          </p>
        </Section>

        {/* ================= SECTION 6 ================= */}
        <Section title="6. Financial Interest / Ownership Disclosure">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The Research Analyst holds no financial interest or beneficial
              ownership ≥1% in the securities of the companies discussed.
            </li>
            <li>
              There is no material conflict of interest on the date of this
              report.
            </li>
          </ul>
        </Section>

        {/* ================= SECTION 7 ================= */}
        <Section title="7. Brokerage & Affiliations">
          <ul className="list-disc pl-6 space-y-2">
            <li>No affiliation with brokers or intermediaries</li>
            <li>No brokerage, commission, or incentives received</li>
          </ul>
        </Section>

        {/* ================= SECTION 8 ================= */}
        <Section title="8. Compensation Disclosure">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Krishna Pathak or its associates have not received any
              compensation from the Company covered by Research Analyst during
              the past twelve months.
            </li>
          </ul>
        </Section>

        {/* ================= SECTION 9 ================= */}
        <Section title="9. Public Offering Involvement">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Krishna Pathak and Brand Name WealthFino or its associates have
              not managed or co-managed public offering of securities of the
              Company during the past twelve months.
            </li>
          </ul>
        </Section>

        {/* ================= SECTION 10 ================= */}
        <Section title="10. Employment Disclosure">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The Research Analyst has never been employed as officer, director,
              or executive of companies mentioned in the reports.
            </li>
            <li>He is not involved in market-making of any securities.</li>
          </ul>
        </Section>

        {/* ================= SECTION 11 ================= */}
        <Section title="11. Sources & Risk Advisory">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The data and information shared are sourced from publicly
              available platforms such as stock exchanges (NSE/BSE), SEBI
              filings, Bloomberg, corporate announcements, annual reports, and
              reputable financial news portals. These are considered reliable;
              however, accuracy, completeness, or timeliness is not guaranteed.
            </li>
            <li>
              All research, charts, and insights are intended solely for
              informational and educational purposes, and should not be treated
              as investment advice or a solicitation to buy/sell securities.
            </li>
            <li>
              Market conditions are inherently volatile, and securities may not
              perform as expected. Prices, returns, and outcomes are subject to
              change based on economic, political, and sectoral factors.
            </li>
            <li>
              Investors are advised to assess their individual risk tolerance,
              financial goals, and suitability before making any investment
              decisions. Independent advice from a registered Investment Advisor
              is recommended where appropriate.
            </li>
            <li>
              WealthFino and Krishna Kumar Pathak (SEBI RA - INH300009914) are
              not liable for any loss arising from the use of this content. Past
              performance does not guarantee future outcomes.
            </li>
          </ul>
        </Section>

        {/* ================= SECTION 12 ================= */}
        <Section title="12. Risk Disclosure on Derivatives (Futures & Options)">
          <p>
            As per SEBI's study titled "Analysis of Profit and Loss of
            Individual Traders Dealing in Equity F&O Segment" (Dated 25 January
            2023):
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              9 out of 10 individual traders in equity F&O segment incur net
              losses
            </li>
            <li>Average net trading loss is close to ₹50,000</li>
            <li>Loss-makers pay an additional 28% as transaction cost</li>
            <li>
              Profit-makers incur 15%-50% of their profits in transaction costs
            </li>
          </ul>
          <p className="text-black dark:text-white">
            Derivatives trading carries high risk and is not suitable for all
            investors.
          </p>
        </Section>

        {/* ================= SECTION 13 ================= */}
        <Section title="13. Comprehensive Legal Disclaimer">
          <ul>
            <li>
              1. No Offer or Advice
              <p>
                Research material provided is for educational purposes only and
                shall not be treated as financial, legal, or tax advice.
              </p>
            </li>
            <li>
              2. No Warranty or Guarantee
              <p>
                No express or implied warranties are made about accuracy,
                completeness, or usefulness of the report. All opinions are
                subject to change without notice.
              </p>
            </li>
            <li>
              3. No Responsibility or Liability
              <p>
                Krishna Kumar Pathak, WealthFino, and their representatives
                shall not be responsible for any financial loss, error,
                omission, overtrading, or damages—direct or indirect—caused by
                any action taken based on this research.
              </p>
            </li>
            <li>
              4. No Third-Party Responsibility
              <p>
                WealthFino and Mr. Krishna Pathak shall not be held responsible
                for any fraud, misrepresentation, or unauthorized payment
                collection by any third-party (via Telegram, WhatsApp, email, or
                phone). Users are solely responsible for verifying the
                authenticity of payment channels and communications.
              </p>
            </li>
            <li>
              5. Indemnity
              <p>
                By using this research, the user agrees to indemnify and hold
                harmless Krishna Kumar Pathak and WealthFino from any legal or
                financial consequences.
              </p>
            </li>
            <li>
              6. Regulatory Clean Record
              <p>
                Krishna Kumar Pathak confirms that no material disciplinary
                action has been taken by any authority impacting his research
                activity.
              </p>
            </li>
          </ul>
        </Section>

        {/* ================= SECTION 14 ================= */}
        <Section title="Acceptance of OTP-Based Consent, Terms & Conditions, and KYC/User Agreement Declaration">
          <p>
            This Acceptance of Terms & Conditions and KYC Declaration
            ("Declaration") is executed by me, the undersigned individual (the
            "User" or "Client"), in favour of Mr. Krishna Kumar Pathak, SEBI
            Registered Research Analyst (Registration No. INH30000914) and any
            affiliates, employees, agents, representatives, or entities acting
            on his behalf (collectively, the "Service Provider").
          </p>
          <p>
            By clicking "Accept," signing physically or electronically, or
            providing consent through any approved digital method including but
            not limited to Digital Signature, Email OTP, Mobile OTP, or other
            verifiable electronic methods, I hereby make the following
            declarations, acknowledgements, warranties, and undertakings:
          </p>

          <ul>
            <li>
              {" "}
              <strong>1. INFORMATION ACCURACY & KYC OBLIGATIONS</strong>
            </li>
            <p>
              I, the User/Client, hereby acknowledge and agree to the following:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Truthful Information:</strong>
                All personal details and identification information provided by
                me — including but not limited to PAN, Aadhaar, date of birth,
                mobile number, email address, and residential address — are
                true, correct, complete, and up to date to the best of my
                knowledge.
              </li>

              <li>
                <strong>Responsibility for Errors : </strong>I take full
                responsibility for any error, misstatement, falsification,
                omission, or outdated information in my submitted KYC data. I
                understand that I shall be liable for all consequences, whether
                civil, criminal, regulatory, or financial, arising from such
                inaccuracies.
              </li>
              <li>
                <strong>Duty to Update : </strong>I undertake to promptly notify
                the Service Provider in writing of any change in my KYC details,
                including changes in address, contact number, or identification
                documents.
              </li>
              <li>
                <strong>Supporting Documents : </strong>I agree to submit all
                required updated or additional documents as needed to comply
                with ongoing Know-Your-Customer (KYC), Anti-Money Laundering
                (AML), and Counter-Terrorist Financing (CTF) regulations, in
                line with Indian laws and SEBI guidelines.
              </li>
            </ul>
          </ul>

          <ul>
            <li>
              <strong>2. Client Declaration & Consent Acceptance</strong>
              <p>
                I, the User/Client, by clicking "Accept," signing, subscribing,
                or otherwise confirming, hereby:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <p>
                  1. Acknowledge and agree to be legally bound by the following
                  ("Governing Documents"):
                </p>
                <li>
                  The Service Provider's Terms & Conditions, Privacy Policy,
                  User Agreement, KYC & Consent Agreement, Disclaimers, Investor
                  Charter, and Grievance Redressal Policy.
                </li>
                <li>
                  All applicable provisions of the Securities and Exchange Board
                  of India (SEBI), including the SEBI (Research Analyst)
                  Regulations, 2014, and any future amendments, circulars, or
                  guidelines.
                </li>
                <p>2. Understand and accept that: </p>
                <li>
                  The services offered consist of general, research-based
                  commentary and educational material only.
                </li>
                <li>
                  No personalized investment advice, portfolio management, or
                  guaranteed return is being offered.
                </li>
                <li>
                  All views expressed are non-binding, non-advisory, and for
                  informational and educational purposes only.
                </li>

                <p>3. Acknowledge and confirm that:</p>

                <li>
                  Investing in securities is subject to market risk. Past
                  performance does not guarantee future results.
                </li>
                <li>
                  Trading in derivatives, including Futures & Options (F&O),
                  carries a high degree of risk and may not be suitable for all
                  investors.
                </li>
                <li>
                  The SEBI registration (INH300009914) and NISM certification do
                  not imply performance assurance.
                </li>
                <p>4. Declare that I have:</p>

                <li>
                  Reviewed and understood the SEBI-mandated Investor Charter for
                  Research Analysts.
                </li>
                <li>
                  Been informed about the grievance redressal process and may
                  lodge complaints via Mobile No- 8553912686, email at
                  wealthfino@gmail.com or on SEBI SCORES (www.scores.gov.in).
                </li>
                <p>
                  5. Agree that continued access to or use of any content,
                  service, platform, or communication from the Service Provider
                  shall constitute ongoing acceptance of all applicable terms
                  and laws.
                </p>
                <p>
                  6. Understand that I (Client / User ) may withdraw this
                  consent at any time, in writing, upon which access to services
                  may be discontinued without refund.
                </p>
              </ul>
            </li>
          </ul>
          <br />

          <ul>
            <li>
              <strong>3. Risk Disclosure & Personal Responsibility</strong>
            </li>
            <li>
              3.1 I (User/Client) fully understand that investment and trading
              in securities or derivatives are inherently risky and may result
              in partial or total loss of capital.
            </li>
            <li>
              3.2 I, the User/Client, acknowledge and accept that past
              performance is not indicative of future results, and that no
              assurance, promise, or guarantee of profit or returns is given by
              Krishna Kumar Pathak, SEBI Registered Research Analyst
              (INH300009914), or any person acting on his behalf. All investment
              decisions shall be made at my sole discretion and risk.
            </li>
            <li>
              3.3 I, the User/Client, acknowledge that my continued access to or
              use of any content, service, platform, or communication provided
              by Mr. Krishna Kumar Pathak, SEBI Registered Research Analyst
              (Registration No. INH300009914), shall constitute my ongoing
              acceptance of all applicable terms, policies, and laws.
            </li>
            <br />
            <p>
              I expressly consent to Mr. Krishna Kumar Pathak and Service
              Provider:
            </p>

            <ul>
              <li>
                1. Collecting, storing, verifying, and using my KYC data
                (including PAN, Aadhaar, address, contact details, and other
                identifiers) for compliance with SEBI regulations;
              </li>
              <li>
                2. Uploading, sharing, or fetching such data with/from any
                SEBI-registered KRA (including NSE KRA, CKYCR, or others) as
                permitted or mandated by law.
              </li>
            </ul>
          </ul>
          <br />

          <p className="italic">Disclaimer of Responsibility:</p>

          <p className="italic">
            To the fullest extent permitted under Indian law, Mr. Krishna Kumar
            Pathak and any person or entity acting on his behalf shall not be
            responsible or liable for any data breach, cyberattack, unauthorized
            access, data leakage, loss, misuse, or theft of information that may
            occur through third-party platforms, KRAs, cloud storage,
            communication tools, or any medium beyond his reasonable control.
            The Client accepts full responsibility for digital risks associated
            with such platforms.:
          </p>
          <br />
          <ul>
            <strong>4. Limitation of Liability, Waiver & Indemnity</strong>
            <li>
              4.1 To the fullest extent permitted under applicable law, I, the
              undersigned User/Client, hereby irrevocably waive, release, and
              discharge Mr. Krishna Kumar Pathak, SEBI Registered Research
              Analyst (INH300009914), and any persons or entities acting on his
              behalf — including but not limited to his employees, affiliates,
              officers, agents, and representatives (collectively referred to as
              the "Service Provider") — from any and all liability, claims,
              damages, losses, or proceedings of any kind, whether civil,
              criminal, regulatory, direct, indirect, consequential, incidental,
              special, exemplary, or punitive, arising from or related to:
            </li>
            <ul>
              <li>
                (a) my use of or reliance on the research, commentary, content,
                tools, platforms, or services ("Services") offered by Krishna
                Kumar Pathak;
              </li>
              <li>
                (b) any error, omission, or inaccuracy in the KYC details or
                personal data provided by me(Client/ User ); or
              </li>
              <li>
                (c) any financial gain, loss, or outcome resulting from
                investment, trading, or other financial decisions taken solely
                at my (Client/ User ) discretion.
              </li>
            </ul>
            <br />
            <li>
              4.2 I further agree to indemnify, defend, and hold harmless
              Krishna Kumar Pathak (INH300009914) and his Service Provider team
              from and against any and all third-party claims, including but not
              limited to:{" "}
            </li>
            <ul>
              <li>
                (a) complaints, disputes, actions, legal notices, FIRs,
                regulatory or law-enforcement proceedings;
              </li>
              <li>
                (b) associated costs, penalties, charges, damages, or legal
                fees;
              </li>
              <li>(c) arising directly or indirectly from:</li>
              <ul>
                <li>
                  (i) my breach of this Declaration or any part of the Governing
                  Documents;
                </li>
                <li>
                  (ii) my violation of applicable laws or SEBI regulations;
                </li>
                <li>
                  (iii) any act of misrepresentation, fraud, negligence, or
                  willful misconduct on my part.
                </li>
              </ul>
            </ul>
            <br />
            <p className="italic">Important Notice</p>
            <p className="italic">
              Nothing in this clause limits or excludes any non-waivable
              statutory right available to the Client under Indian law. However,
              to the fullest extent permitted by law, I, Krishna Kumar Pathak
              (SEBI Registered Research Analyst - INH300009914), shall not be
              held responsible for any loss, claim, or liability, all of which
              are expressly and irrevocably waived by the User/Client.
            </p>
          </ul>
          <br />

          <ul>
            <strong>5. Regulatory Compliance</strong>
            <li>
              5.1 I (User/Client) agree to remain at all times in full
              compliance with the Prevention of Money-Laundering Act, 2002; the
              Indian Contract Act, 1872; the Information Technology Act, 2000;
              and all applicable SEBI, Reserve Bank of India (RBI), tax, and
              other laws.
            </li>
            <li>
              5.2 I shall provide additional information or documents promptly
              upon request for periodic regulatory reporting, audits, or
              inspections.
            </li>
          </ul>
          <br />

          <ul>
            <strong>6. Governing Law & Jurisdiction</strong>
            <li>
              This Declaration shall be governed by and construed in accordance
              with the laws of India. Any dispute, claim, suit, or proceeding
              arising hereunder shall be subject to the exclusive jurisdiction
              of the competent courts and tribunals at Durgapur, West Bengal,
              India.
            </li>
          </ul>

          <br />

          <ul>
            <strong>7. Severability</strong>
            <li>
              If any provision of this Declaration is held to be invalid,
              illegal, or unenforceable, the remaining provisions shall continue
              in full force and effect.
            </li>
          </ul>

          <br />

          <ul>
            <strong>
              8. Electronic Acceptance, OTP Consent & Legal Validity
            </strong>
            <li>8.1 Binding Electronic Consent</li>
            <li>
              I, the undersigned User/Client, expressly acknowledge, consent,
              and agree that any of the following electronic actions shall
              constitute my valid and legally binding signature to this
              Declaration and all related governing documents:
            </li>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clicking "Accept," "Agree," or similar buttons;</li>
              <li>Selecting a confirmation check-box;</li>
              <li>Typing my name or initials;</li>
              <li>Affixing a digital signature (including Aadhaar e-sign);</li>
              <li>
                Entering a One-Time Password (OTP) sent to my registered email
                or mobile number; or
              </li>
              <li>
                Any comparable form of electronic authentication or
                verification.
              </li>
            </ul>
            <br />
            <strong>8.2 Legal Recognition under Indian Law</strong>
            <li>
              Pursuant to the Information Technology Act, 2000, the Indian
              Evidence Act, 1872 (Section 65B), and applicable SEBI circulars, I
              agree and accept that:
            </li>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Such electronic or OTP-based actions shall be legally
                enforceable;
              </li>
              <li>
                They shall have the same legal force and effect as a handwritten
                signature;
              </li>
              <li>
                They are admissible as primary evidence in any judicial,
                regulatory, or administrative proceeding.
              </li>
            </ul>
            <br />
            <strong>8.3 Consent Logging and IP Address Capture Policy</strong>
            <strong>1. IP Address Logging for Legal Compliance</strong>
            <li>
              In accordance with applicable provisions of the Information
              Technology Act, 2000, the Indian Evidence Act, 1872 (Section 65B),
              and SEBI (Research Analyst) Regulations, the platform operated by
              Krishna Kumar Pathak (SEBI Registered Research Analyst -
              INH300009914) may collect and record the Internet Protocol (IP)
              address of the device used by the user/client at the time of:
            </li>

            <ul className="list-disc pl-6 space-y-2">
              <li>Consent to Terms and Conditions</li>
              <li>OTP-based verification</li>
              <li>Purchase or subscription to research services</li>
              <li>Submission of KYC details or personal data</li>
              <li>Any material electronic interaction or agreement</li>
            </ul>

            <br />
            <strong>2. Purpose of IP Logging</strong>
            <li>The collection of IP addresses is conducted solely to:</li>

            <ul className="list-disc pl-6 space-y-2">
              <li>Verify the authenticity of electronic consent</li>
              <li>Generate legally valid audit trails</li>
              <li>Comply with SEBI inspection requirements</li>
              <li>Prevent fraud, impersonation, or unauthorized access</li>
              <li>
                Establish electronic evidence in case of disputes or legal
                proceedings
              </li>
            </ul>
            <br />
            <strong>3. Legality and Enforceability</strong>
            <li>
              The recorded IP address, when tied to a timestamp and consent
              record, shall constitute valid digital evidence under Indian law
              and shall be admissible before courts and regulatory authorities
              in accordance with Section 65B of the Indian Evidence Act, 1872
              and Section 4 and Section 10A of the Information Technology Act,
              2000.
            </li>

            <br />
            <strong>4. Data Security & Storage</strong>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                All logged IP addresses shall be stored securely in encrypted
                format.
              </li>
              <li>
                Logs shall be maintained for a minimum period of 5 years from
                the date of collection.
              </li>
              <li>
                The data will not be shared with any third-party except as
                required by law or regulatory directive.
              </li>
            </ul>
            <br />

            <strong>5. User Acknowledgement</strong>
            <li>
              By using the platform and submitting consent electronically, the
              user expressly authorizes the collection, storage, and use of
              their IP address for the purposes described above and acknowledges
              that such logging is necessary for legal enforceability and
              regulatory compliance.
            </li>

            <strong>8.4 User Consent - OTP, IP Address & Legal Waiver</strong>
            <li>
              Both the User/Client and Mr. Krishna Kumar Pathak (SEBI Registered
              Research Analyst - INH300009914) agree that any form of electronic
              consent—whether through mobile/email OTP, clickwrap, digital
              signature, IP address, or timestamped action—is valid, binding,
              and enforceable under Indian law (per IT Act 2000, Indian Contract
              Act, and Evidence Act Section 65B).
            </li>
            <li>
              All such consents shall be securely recorded with the user's IP
              address, date/time, and verification method, and retained for at
              least 5 years for regulatory compliance.
            </li>
            <li>
              While industry-standard data security measures are followed, Mr.
              Krishna Kumar Pathak and affiliated platforms shall not be liable
              for any data breach, hacking, system failure, or unauthorized
              access arising from events beyond their control. Users agree to
              proceed at their own discretion and accept all digital risks
              involved.
            </li>
            <br />

            <strong> 9. USER AGREEMENT</strong>
            <li>
              This User Agreement ("Agreement") is a binding contract between
              Krishna Kumar Pathak, a SEBI-registered Research Analyst
              (Registration No. INH300009914) operating under the brand
              WealthFino (hereinafter "Research Analyst," "WealthFino," "we,"
              "us," or "our") and you, the person who accesses or subscribes to
              any research report, commentary, website, mobile application, or
              other service offered by us (collectively, the "Services").
            </li>
          </ul>
          <br />

          <p className="italic">Disclaimer:</p>
          <p className="italic">
            The research reports, analysis, views, commentary, model portfolios,
            and other content shared by Krishna Kumar Pathak under the brand
            WealthFino may include Buy, Sell, or Hold recommendations on
            securities, which are issued in accordance with the SEBI (Research
            Analyst) Regulations, 2014. These recommendations are based on
            publicly available information, independent research, and personal
            analysis of the Research Analyst.
          </p>
          <br />
          <p>
            The views expressed are general in nature and are intended solely
            for educational and informational purposes. They do not constitute
            personal investment advice, portfolio management, or an offer to buy
            or sell any security. Users are strongly advised to exercise
            independent judgment and consult their own financial advisor before
            making any investment decisions.
          </p>
          <br />
          <p>
            <bold>Krishna Kumar Pathak and WealthFino shall not be liable</bold>{" "}
            for any direct, indirect, incidental, special, or consequential
            losses or damages—including but not limited to trading losses, data
            inaccuracies, missed opportunities, technology failures, or
            reputational harm—arising from:
          </p>
          <ul className="list-disc pl-6 space-y-2">
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

          <p>
            The sole responsibility for all investment decisions lies with the
            user. No legal claim, complaint, or liability shall arise against
            Krishna Kumar Pathak or WealthFino in connection with the use of any
            research or content provided.
          </p>
          <br />
          <p>
            By using the research, services, website, or mobile application, the
            user acknowledges, understands, and fully accepts this disclaimer,
            and further agrees to indemnify and hold harmless Krishna Kumar
            Pathak and WealthFino from any resulting liability or claim.
          </p>
        </Section>
      </div>
    </section>
  );
}

/* ================= REUSABLE SECTION ================= */
function Section({ title, children }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold text-black dark:text-white">{title}</h2>
      <div className="text-black/80 dark:text-white/80 leading-relaxed">{children}</div>
    </section>
  );
}
