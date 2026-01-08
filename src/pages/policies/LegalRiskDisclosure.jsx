import React from "react";

export default function LegalRiskDisclosure() {
  return (
    <section className="min-h-screen  rounded-2xl bg-[#0b0f19]  text-slate-200 py-1 ">
      <div className="max-w-6xl mx-auto  backdrop-blur rounded-2xl shadow-xl p-6 md:p-10 space-y-8">
        {/* ================= HEADER ================= */}
        <header className="space-y-3 border-b border-slate-700 pb-6">
          <h1 className="text-xl md:text-2xl font-bold text-white">
            LEGAL & RISK DISCLOSURE
          </h1>

          <div className="text-sm text-slate-300 space-y-1">
            <p>
              <strong>Issued by:</strong> Krishna Kumar Pathak
            </p>
            <p>
              <strong>SEBI Registered Research Analyst:</strong> INH300009914
            </p>
            <p>
              <strong>BSE Enlistment:</strong> 5590
            </p>
            <p>
              <strong>Founder & CEO:</strong>{" "}
              <a
                href="https://www.krishnapathak.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline"
              >
                www.krishnapathak.com
              </a>
            </p>
          </div>
        </header>

        {/* ================= 1 ================= */}
        <Section title="1. General Disclaimer">
          <p>
            Krishna Kumar Pathak, a SEBI Registered Research Analyst
            (Registration No. INH300009914), and the brand WealthFino, operate
            this platform as a research and information service only.
          </p>
          <p>
            All content provided under WealthFino — including research reports,
            recommendation, charts, market opinions, or analysis — is intended
            solely for general informational and educational purposes.
          </p>
          <p>
            As permitted under the SEBI (Research Analysts) Regulations, 2014,
            Krishna Kumar Pathak may provide Buy, Sell, or Hold recommendations
            based on publicly available data and independent analysis.
          </p>
          <p>
            However, such views are not personalised investment advice,
            portfolio management, or an invitation to trade or invest. Users
            must evaluate the suitability of the content and are advised to
            consult a qualified investment advisor before making any financial
            decision.
          </p>
          <p>
            The platform is not registered to provide portfolio management,
            advisory, broking, or fund management services.
          </p>
        </Section>

        {/* ================= 2 ================= */}
        <Section title="2. Full Non-Liability Declaration">
          <p>
            By accessing this platform or its content, you agree, accept, and
            acknowledge that Krishna Pathak and WealthFino are not responsible
            or liable for anything whatsoever. This includes, but is not limited
            to:
          </p>

          <SubTitle text="A. Technical & System Failures — Disclaimer of Liability" />
          <p>
            Krishna Kumar Pathak and the brand WealthFino expressly disclaim all
            responsibility — financial, legal, or otherwise—for any loss, cost,
            or inconvenience arising from any of the following events or
            conditions below:
          </p>
          <ul>
            1. Platform
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Mobile-app or web-portal crashes, freezes, or forced shutdowns
              </li>
              <li>
                Complete or partial website/server downtime, scheduled or
                unscheduled maintenance
              </li>
              <li>
                Cloud-hosting outages, power failures, or data-centre
                disruptions
              </li>
            </ul>
            2. Network & Data Transmission
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Internet disconnection, latency, bandwidth throttling, or packet
                loss
              </li>
              <li>
                Delayed or corrupted data feeds, chart refresh lags, or API
                time-outs
              </li>
            </ul>
            3. Authentication & Access
            <ul className="list-disc pl-6 space-y-2">
              <li>
                One-Time Password (OTP) or two-factor authentication failures
              </li>
              <li>
                Login errors, account-lockouts, or credential-mismatch issues
              </li>
              <li>
                System-level bugs, glitches, or device / browser incompatibility
              </li>
            </ul>
            4. Notification & Messaging
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Non-delivery, duplication, or delay of SMS, e-mail, Telegram,
                WhatsApp, or push notifications
              </li>
              <li>
                Spam-filter blocks, routing errors, or telecom gateway outages
              </li>
            </ul>
            5. Security & Force-Majeure Events
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Distributed-Denial-of-Service (DDoS) attacks, malware,
                ransomware, or any third-party hacking incident
              </li>
              <li>
                Natural calamities, strikes, government orders, or other
                force-majeure circumstances affecting system performance
              </li>
            </ul>
          </ul>

          <p>
            <strong>
              All access to, or reliance on, the platform is strictly at the
              user's own risk.
            </strong>
            Krishna Kumar Pathak and WealthFino shall not be liable for any
            direct, indirect, incidental, consequential, punitive, or exemplary
            damages resulting from the technical or system failures listed
            above.
          </p>

          <SubTitle text="B. Content & Data Errors" />
          <ul className="list-disc pl-6 space-y-2">
            <li>Typographical mistakes</li>
            <li>Charting delays or wrong prices</li>
            <li>Misinterpretation of research or analysis</li>
            <li>API or third-party data inaccuracies</li>
            <li>Outdated or wrongly displayed information</li>
            <li>Graphical or formatting inconsistencies</li>
          </ul>

          <SubTitle text="C. Market Risks & Trading Loss Disclaimer" />
          <ol>
            <li>
             1.  <strong>No Profit Guarantee:</strong> Krishna Kumar Pathak and
              WealthFino make no assurance of returns, profits, or capital
              protection based on any analysis, report, or opinion provided.
            </li>
            <li>
              2. <strong>Market Volatility Risk:</strong>
              Investments in equity, F&O, or IPOs are subject to market
              fluctuations, price gaps, trading halts, and liquidity risks.
              Sudden losses may occur.
            </li>
            <li>
              3. <strong>Capital Loss Warning:</strong>
              Users may suffer partial or total loss of invested capital. All
              decisions are made solely at the user's own risk.
            </li>
            <li>
              4. <strong>No Liability for Decisions:</strong>
              Emotional or speculative trading based on platform content is
              entirely the user's responsibility. We disclaim any financial
              liability.
            </li>
            <li>
              5. <strong> SEBI Data Disclosure:</strong>
              As per SEBI's Jan 2023 study, 9 out of 10 retail traders in equity
              F&O incur losses, with average net loss of ₹50,000 plus 28% in
              transaction costs.
            </li>
          </ol>
          <SubTitle text="D. Third-Party Services" />
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Links to stock screeners, APIs, broker platforms, financial tools
            </li>
            <li>Content fetched via NSE/BSE, Screener, or data providers</li>
            <li>Any plugin, redirect, or affiliate service</li>
          </ul>
          <p>
            We
            <strong>neither own nor control such third-party platforms,</strong>
            and we do not guarantee their safety, reliability, or uptime.
          </p>
        </Section>

        {/* ================= 3 ================= */}
        <Section title="3. We Make NO Guarantee or Promise">
          <ul className="list-disc pl-6 space-y-2">
            <li>No guarantee of return on investment</li>
            <li>No assurance of correct or updated market data</li>
            <li>No assurance of service continuity</li>
            <li>No guarantee of notifications, reminders, emails, or alerts</li>
            <li>No assurance of accuracy in AI tools or API-based data</li>
            <li>No assurance of platform access at all times</li>
          </ul>
        </Section>

        {/* ================= 4 ================= */}
        <Section title="4. Total Legal Protection for Errors & Failures">
          <p>
            You agree not to hold Krishna Pathak or WealthFino responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Network failure</li>
            <li>OTP/SMS/Email failure</li>
            <li> Website/App crash</li>
            <li>Any loss — direct, indirect, or consequential</li>
            <li>Use or misuse of any report or tool</li>
            <li>Decision-making based on our platform</li>
            <li>Third-party fraud, scam, or data breach</li>
            <li>Missed opportunity or profit loss</li>
          </ul>
          <p className="font-semibold">
            Whatever happens — loss, mistake, delay, error, server problem, app
            problem, anything — we are NOT responsible.
          </p>
        </Section>

        {/* ================= 5 ================= */}
        <Section title="5. Governing Law & Jurisdiction">
          <ul className="list-disc pl-6 space-y-2">
            <li>This disclaimer is governed by the laws of India</li>
            <li>Jurisdiction: Courts of Durgapur, West Bengal</li>
            <li>
              Disputes, if any, shall be resolved under Indian Arbitration laws
            </li>
            <li>By continuing, you agree to this legal disclaimer in full</li>
          </ul>
          <p>
            {" "}
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Fraud Protection, Payment Disclaimer & Liability Waiver
            </h2>
            <p className="text-slate-300">
              Issued by{" "}
              <span className="font-semibold text-white">
                Krishna Kumar Pathak
              </span>{" "}
              – SEBI Registered Research Analyst (INH300009914)
            </p>
            <p className="text-slate-300">
              Official Email:&nbsp;
              <a
                href="mailto:info@krishnapathak.com"
                className="text-blue-400 underline underline-offset-2 hover:text-blue-300"
              >
                info@krishnapathak.com
              </a>{" "}
              |{" "}
              <a
                href="mailto:wealthfino@gmail.com"
                className="text-blue-400 underline underline-offset-2 hover:text-blue-300"
              >
                wealthfino@gmail.com
              </a>
            </p>
            <p className="text-slate-300">
              Authorised Platforms:{" "}
              <span className="font-medium text-white">
                Mobile App – “WealthFino”
              </span>{" "}
              | Website –{" "}
              <a
                href="https://www.krishnapathak.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline underline-offset-2 hover:text-blue-300"
              >
                www.krishnapathak.com
              </a>
            </p>
          </p>
        </Section>

        <section>
          {/* ===== 1. Official Payment Channels ===== */}
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-semibold text-white">
              1. Official Payment Channels Only
            </h3>

            <p className="text-slate-300">
              All payments to Krishna Kumar Pathak or the brand WealthFino must
              be made
              <strong className="text-white">
                {" "}
                only through the following authorised methods:
              </strong>
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>
                Via the official{" "}
                <strong className="text-white">mobile app: WealthFino</strong>{" "}
                (available on Play Store / App Store)
              </li>

              <li>
                Through our official websites:{" "}
                <a
                  href="https://www.krishnapathak.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 underline underline-offset-2 hover:text-blue-300"
                >
                  www.krishnapathak.com
                </a>
              </li>

              <li>
                By using payment links or UPI/Bank details provided directly
                from our official email IDs:
              </li>

              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <a
                    href="mailto:info@krishnapathak.com"
                    className="text-blue-400 underline underline-offset-2 hover:text-blue-300"
                  >
                    info@krishnapathak.com
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:wealthfino@gmail.com"
                    className="text-blue-400 underline underline-offset-2 hover:text-blue-300"
                  >
                    wealthfino@gmail.com
                  </a>
                </li>
              </ul>
            </ul>
          </div>

          <br />

          {/* ===== 2. Right to Verify ===== */}
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-semibold text-white">
              2. Right to Verify Before Payment
            </h3>

            <p className="text-slate-300">
              Before making any payment, the User has the full right and option
              to:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>Call and confirm the payment details</li>
              <li>Email to confirm via our official IDs</li>
              <li>
                Check the mobile app or website for authentic instructions
              </li>
            </ul>

            <p className="text-slate-400 font-medium">
              If the User chooses not to verify and proceeds on their own, the
              responsibility lies solely with the{" "}
              <strong className="text-white">User</strong>.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-lg md:text-xl font-semibold text-white">
            3. No Liability for Fraudulent or Unauthorized Payments
          </h3>

          {/* a */}
          <div className="space-y-2">
            <p className="font-semibold text-white">
              a. Unauthorized Use of Name or Brand:
            </p>
            <p>
              Krishna Kumar Pathak (SEBI Registered Research Analyst) and/or the
              brand WealthFino shall not, under any circumstances, be held
              liable or responsible for any monetary loss, damage, or grievance
              suffered by any individual or entity due to the fraudulent use or
              impersonation of Krishna Kumar Pathak’s name, image, designation,
              employee identity, or the WealthFino brand — through WhatsApp,
              Telegram, mobile calls, emails, social media platforms, websites,
              or any other mode of communication not officially authorized by
              Krishna Kumar Pathak or WealthFino.
            </p>
          </div>

          {/* b */}
          <div className="space-y-2">
            <p className="font-semibold text-white">
              b. Unauthorized Transactions:
            </p>
            <p>
              If any person voluntarily transfers funds, makes UPI payments,
              bank transfers, deposits, or provides financial credentials or
              OTPs to any third party (including individuals posing as
              representatives of Krishna Kumar Pathak or WealthFino) based on
              false promises, greed, urgency, high-return claims, or misleading
              investment schemes, then such payments shall be considered null,
              void, and made entirely at the individual’s own risk and
              discretion.
            </p>
          </div>

          {/* c */}
          <div className="space-y-2">
            <p className="font-semibold text-white">
              c. No Legal Right to Claim or Complaint:
            </p>
            <p>
              No user or individual shall have the right to file any police FIR,
              cybercrime complaint, legal notice, consumer forum case, or any
              judicial or quasi-judicial action against Krishna Kumar Pathak
              and/or WealthFino for such unauthorized payments or interactions.
              Any such claims shall not be entertained, acknowledged, or
              responded to.
            </p>
          </div>

          {/* d */}
          <div className="space-y-2">
            <p className="font-semibold text-white">
              d. Official Communication and Payment Channels:
            </p>
            <p>
              All legitimate communication from Krishna Kumar Pathak or
              WealthFino shall be through the official website (
              <a
                href="https://www.krishnapathak.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline underline-offset-2 mx-1"
              >
                www.krishnapathak.com
              </a>
              /
              <a
                href="https://www.wealthfino.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline underline-offset-2 mx-1"
              >
                www.wealthfino.com
              </a>
              ), verified emails, and listed helpline numbers only. Users are
              strongly advised to verify authenticity before making any payments
              or sharing confidential information.
            </p>
          </div>

          {/* e */}
          <div className="space-y-2">
            <p className="font-semibold text-white">
              e. Disclaimer of Liability:
            </p>
            <p>
              Krishna Kumar Pathak and WealthFino expressly disclaim all
              liability, in contract, tort, or otherwise, for any direct,
              indirect, incidental, special, or consequential loss, damage, or
              fraud arising out of or in connection with such unauthorized
              interactions, communications, or payments made by users outside
              official channels.
            </p>
          </div>

          {/* f */}
          <div className="space-y-3">
            <p className="font-semibold text-white">f. User Responsibility:</p>
            <p>
              By interacting with or using any services related to Krishna Kumar
              Pathak or WealthFino, users accept full responsibility to verify
              the legitimacy of communication, protect their personal and
              financial data, and acknowledge that no liability shall arise
              against Krishna Kumar Pathak or WealthFino for any third-party
              frauds or impersonation acts.
            </p>

            <p className="font-semibold text-white">
              g. Exclusion of Liability:
            </p>
            <p>
              In accordance with applicable Indian laws including but not
              limited to the Information Technology Act, 2000, Indian Penal
              Code, 1860, and relevant Consumer Protection statutes, Krishna
              Kumar Pathak and/or WealthFino shall not be held liable,
              accountable, or responsible in any manner — civil, criminal, or
              otherwise — for any loss, damage, or injury (monetary or
              otherwise) suffered by any individual, investor, user, or customer
              due to:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Voluntary payments made to unauthorized persons or unverified
                accounts;
              </li>
              <li>
                Falling prey to fraud, misrepresentation, false promises of
                profit, or time-sensitive urgency tactics;
              </li>
              <li>
                Misuse of name, designation, logo, brand, or likeness of Krishna
                Kumar Pathak or WealthFino on digital or physical platforms.
              </li>
            </ul>
          </div>
        </section>
        <section>
          {/* ===== Section 4 ===== */}
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-semibold text-white">
              4. User Assumes Full Liability
            </h3>

            <p>The User agrees that:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Any loss, fraud, scam, miscommunication, or payment to
                unauthorised parties is the User’s sole responsibility
              </li>
              <li>
                Krishna Kumar Pathak and WealthFino are fully protected from any
                legal, civil, criminal, or financial liability related to such
                transactions
              </li>
            </ul>
          </div>

        <br />

          {/* ===== Section 5 ===== */}
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-semibold text-white">
              5. Legal Standing & Protection
            </h3>

            <p>This clause is enforceable under:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Regulation 18 of SEBI (Research Analysts) Regulations, 2014
              </li>
              <li>Sections 43A & 79 of the Information Technology Act, 2000</li>
              <li>
                Section 73 of the Indian Contract Act, 1872 (liability
                limitation)
              </li>
              <li>General cyber fraud protection laws of India</li>
            </ul>
          </div>
        </section>

        {/* ================= FINAL ================= */}
        <section>
          <h3 className="text-lg md:text-xl font-semibold text-white">
            Final Declaration
          </h3>

          <p className="italic text-slate-200">
            "We do not take responsibility for any outcome — regardless of the
            cause, condition, or consequence."
          </p>

          <p>
            Krishna Kumar Pathak (SEBI Registered Research Analyst –
            INH300009914) and the brand{" "}
            <strong className="text-white">WealthFino</strong> shall not be held
            liable for any loss, error, financial damage, technical failure, or
            decisions made based on any content shared through our platforms.
          </p>

          <p>
            All investments in the securities market are subject to market
            risks. Users are advised to exercise their own judgment and
            discretion before making any financial decisions.
          </p>

          <div className="pt-3">
            <h4 className="text-base font-semibold text-white mb-2">
              Important Payment Notice:
            </h4>

            <p>
              Payments should only be made through the official WealthFino
              mobile application or website.{" "}
              <strong className="text-white">Do not</strong> transfer funds to
              any unknown individual, unauthorized link, or third-party claiming
              to represent WealthFino.
            </p>

            <p className="mt-2">
              If you become a victim of any scam, fraud, impersonation, or false
              promise made outside our official channels, you alone will be held
              responsible. Krishna Kumar Pathak and WealthFino are not liable in
              any manner whatsoever.
            </p>
          </div>

          <p className="pt-2 text-center font-semibold text-white">
            "हम किसी भी चीज़ की ज़िम्मेदारी नहीं लेते — चाहे कोई भी कारण हो, कोई
            भी परिस्थिति हो, हमें कोई ज़िम्मेदारी नहीं है।"
          </p>
        </section>
      </div>
    </section>
  );
}

/* ================= HELPERS ================= */

function Section({ title, children }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold text-white">{title}</h2>
      <div className="text-slate-300 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function SubTitle({ text }) {
  return <h3 className="font-semibold text-slate-100 mt-4">{text}</h3>;
}
