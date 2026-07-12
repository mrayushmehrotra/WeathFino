export default function PrivacyPolicy() {
  return (
    <div className="text-black dark:text-slate-200 rounded-2xl bg-white dark:bg-[#0b0f19] px-5 py-5 leading-relaxed space-y-10">
      {/* HEADER */}
      <header className="border-gray-200 dark:border-slate-700 pb-6 space-y-3">
        <h1 className="text-3xl font-bold text-black dark:text-white">Privacy Policy</h1>
      </header>

      {/* 1. INTRODUCTION */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">1. Introduction</h2>
        <p>
          This Privacy Policy explains howWealthFino, operated by Krishna Kumar
          Pathak (SEBI Registered Research Analyst,Reg. No. INH300009914, BSE
          Enlistment No. 5590), collects, processes, stores, and protects your
          information. By accessing our website, mobile app, or services, you
          agree to the practices outlined in this Policy.
        </p>
        <p>We comply with:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            The SEBI (Research Analyst) Regulations, 2014 and circulars issued
            thereunder
          </li>
          <li>BSE/NSE guidelines applicable to Research Analysts</li>
          <li>The Information Technology Act, 2000 and SPDI Rules, 2011</li>
          <li>The Digital Personal Data Protection Act, 2023</li>
          <li>
            RBI guidelines and PCI-DSS standards for payment data security
          </li>
        </ul>
      </section>

      {/* 2. SCOPE */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">2. Scope</h2>

        <p>
          This Policy applies to all users, clients, vendors, and partners
          (“User”) interacting with WealthFino services.
        </p>
        <p>
          It governs the lawful collection, processing, storage, and transfer of
          personal data strictly for permitted Research Analyst activities,
          including:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Client onboarding and SEBI-compliant KYC verification</li>
          <li>Distribution of SEBI-compliant research reports</li>
          <li>Subscription-based research services</li>
          <li>Record-keeping, disclosures, and regulatory reporting</li>
        </ul>

        <p className="text-black dark:text-slate-200">
          We do not provide portfolio management or execution-based advisory.
        </p>
      </section>

      {/* 3. APPLICABILITY */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">3. Applicability</h2>

        <p>This Privacy Policy applies to all individuals who:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Visit or use WealthFino’s website, mobile app, or online/offline
            platforms
          </li>
          <li>Subscribe to research services, reports, or communications</li>
          <li>Share personal data for KYC or engagement purposes</li>
        </ul>
      </section>

      {/* 4. INFORMATION COLLECTED */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">
          4. Information Collected
        </h2>
        <p>4.1 Principle of Collection</p>

        <p>
          We collect only data that is relevant, necessary, and lawful as per
          SEBI RA Regulations, IT Act, SPDI Rules, and DPDP Act. No excessive or
          unrelated data is collected
        </p>
        <p>4.2 Categories of Information</p>
        <p>a. Identity Information</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Full name and DOB (as per PAN)</li>
          <li>Masked Aadhaar number (Collected with user consent)</li>
          <li>PAN card number and Date of birth (KYC verification)</li>
          <li>
            Voter ID, Passport, or equivalent document (if submitted voluntarily
            for KYC verification)
          </li>
        </ul>

        <p className="italic">
          Purpose: For establishing identity and fulfilling SEBI-mandated
          compliance (Regulation 16 and 18 of SEBI RA Regulations)
        </p>

        <p>b. Contact Information</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Mobile numbers (including Aadhaar-linked for OTP e-consent)</li>
          <li>Email address</li>
          <li>Permanent and correspondence address</li>
        </ul>
        <p className="italic">
          Purpose: Communication, verification, grievance redressal, SEBI
          record-keeping.
        </p>

        <p>c. Demographic Information</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Date of Birth</li>
          <li>Gender</li>
          <li>Nationality</li>
        </ul>
        <p className="italic">
          Purpose: Legal capacity to contract; suitability checks per SEBI Code
          of Conduct.
        </p>

        <p>d. Statutory KYC Information</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>PAN & DOB (mandatory)</li>
          <li>KRA/CKYC Identifier (if retrieved via SEBI-registered KRAs)</li>
          <li>KYC documents under SEBI framework</li>
        </ul>
        <p className="italic">
          Purpose: Onboarding, compliance, lawful delivery of research services.
        </p>

        <p>e. Technical & Session Data (auto-collected)</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>IP address </li>
          <li>Device type and operating system</li>
          <li>Browser type and version</li>
          <li>Date and time of access</li>
          <li>Location metadata (approximate, coarse level)</li>
          <li>Session cookies and user agent string</li>
        </ul>

        <p className="italic">
          IT Act Sec. 43A compliance; fraud prevention; security.
        </p>

        <p>f. Consent Records & Communication Metadata</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>OTP timestamps</li>
          <li>IP logs</li>
          <li>digital consent receipts</li>
          <li>email delivery status</li>
        </ul>
        <p className="italic">
          Purpose: Proof of explicit user consent under DPDP Act & SEBI rules.
        </p>

        <p>g. Payment Data</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Transaction ID, payment method, billing info (processed via
            PCI-DSS–compliant payment gateways)
          </li>
          <li>We do not store card numbers, CVV, UPI PINs</li>
        </ul>
        <p className="italic">
          Purpose: Subscription billing & statutory reporting.
        </p>
      </section>

      {/* 5. PURPOSE OF PROCESSING */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">
          5. Purpose of Processing
        </h2>
        <p>We process your data for:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>SEBI compliance, audit, and record-keeping</li>
          <li>KYC verification and risk profiling</li>
          <li>Delivering research reports and services</li>
          <li>Fraud prevention and platform security</li>
          <li>Regulatory/statutory reporting (SEBI, BSE, NSE, RBI)</li>
        </ul>
      </section>

      {/* 6. CONSENT & AUTHORIZATION */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">
          6. Consent & Authorization
        </h2>
        <p>By using our services, you agree to:</p>

        <ul>
          <p>1. Lawful Use Consent:</p>
          <li>
            Free, informed consent for collection, storage, and processing under
            IT Act & DPDP Act.free, specific, and informed consent to allow us
          </li>

          <p>2. Aadhaar-linked e-KYC</p>
          <li>
            Authorization for OTP-based verification in line with UIDAI &
            Aadhaar Act, 2016.
          </li>

          <p>3. Regulatory Sharing:</p>
          <li>
            Permission to share verified data with SEBI, Exchanges, KRAs, or
            regulators for compliance.
          </li>

          <p>4. Legal Validity:</p>
          <li>
            You agree that OTP/digital acceptance is valid consent under IT Act,
            Aadhaar Act, and Indian Evidence Act.
          </li>
        </ul>
      </section>

      {/* 7. DATA SHARING */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">
          7. Data Sharing & Disclosure
        </h2>

        <p>We may share your information with:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>SEBI, BSE, NSE, KRAs, RBI (regulatory compliance)</li>
          <li>
            Auditors, consultants, service providers under confidentiality
            agreements
          </li>
          <li>
            Law enforcement or courts, when legally mandated We never sell or
            commercially exploit your data
          </li>
        </ul>
      </section>

      {/* 8. PAYMENT DATA */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">
          8. Payment Data Compliance
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            All payments are routed via PCI-DSS–compliant payment gateways
          </li>
          <li>
            We comply with RBI data localization rules – a copy of all payment
            data remains stored in India.
          </li>
          <li>
            Limited offshore processing (fraud detection, chargebacks) occurs
            only with safeguards and retention in India.
          </li>
        </ul>
      </section>

      {/* 9. DATA SECURITY */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">9. Data Security</h2>
        <p>We adopt reasonable security practices including:</p>
        <p>SSL/TLS encryption, firewalls, intrusion detection</p>
        <p>Secure hosting with restricted access</p>
        <p>Regular audits and vulnerability testing</p>
        <p>Employee confidentiality obligations</p>
      </section>

      {/* 10. DATA BREACH */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">
          10. Data Breach & Notification
        </h2>
        <p>In case of a breach:</p>

        <p>Immediate steps will be taken to contain risks</p>
        <p>Users will be notified within a reasonable timeframe</p>
        <p>
          Authorities (including the Data Protection Board of India) will be
          informed if required
        </p>
        <p>
          Corrective actions (audits, patches, monitoring) will be implemented
        </p>
      </section>

      {/* 11. DATA RETENTION */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">11. Data Retention</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Personal/KYC data: Minimum 5 years, or longer as mandated by SEBI,
            Exchanges, or Indian law.
          </li>
          <li>Payment records: Retained per RBI and Income Tax laws.</li>
          <li>
            Once expired, data is securely deleted, anonymized, or archived.
          </li>
        </ul>
      </section>

      {/* 12. CHILDREN */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">
          12. Children’s Data
        </h2>

        <p>
          Our services are intended for individuals 18 years and above. We do
          not knowingly collect or process children’s data.
        </p>
      </section>

      {/* 13–16 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">
          13. Limitation of Liability
        </h2>
        <p>We are not liable for losses due to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Unauthorized access, breaches, cyber-attacks, outages</li>
          <li>
            Errors or delays in third-party APIs, hosting, or payment gateways
          </li>
          <li>Use of services provided on “as is” basis</li>
        </ul>

        <h2 className="text-xl font-semibold text-black dark:text-white mt-6">
          14. Third-Party Disclaimer
        </h2>
        <p>
          Our platform may integrate third-party APIs/tools (analytics, hosting,
          payments). We are not responsible for their independent privacy
          practices. Use of such services is at user’s discretion
        </p>

        <h2 className="text-xl font-semibold text-black dark:text-white mt-6">
          15. Indemnification
        </h2>
        <p>
          You agree to indemnify and hold harmless Krishna Kumar Pathak /
          WealthFino against claims or damages arising from misuse of data,
          breach of this Policy, or violation of laws.
        </p>

        <h2 className="text-xl font-semibold text-black dark:text-white mt-6">
          16. Cross-Border Data Transfer
        </h2>
        <p>
          Except for limited regulated purposes (fraud checks, dispute
          resolution), personal data is not transferred outside India. Where
          required, transfers are done under DPDP safeguards and RBI mandates.
        </p>
      </section>

      {/* 17. GRIEVANCE OFFICER */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">
          17. Grievance Officer
        </h2>

        <div className="bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-5 space-y-2">
          <p>In compliance with Rule 5(9) of the IT Rules, 2011:</p>
          <p>
            <b>Name:</b> Krishna Kumar Pathak
          </p>
          <p>
            <b>Mobile:</b> +91 98834 55700
          </p>
          <p>
            <b>Email:</b> wealthfino@gmail.com
          </p>
          <p>
            <b>Address:</b> RS-39/43, 5/3C Golden Park, Sankarpur West,
            Durgapur, West Bengal – 713206
          </p>
        </div>
      </section>

      {/* 18–19 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">
          18. Updates & Amendments
        </h2>
        <p>
          We may update this Policy from time to time. Updated versions will be
          posted with a revised “Last Updated” date. Significant changes will be
          notified via website/app or email.
        </p>

        <h2 className="text-xl font-semibold text-black dark:text-white mt-6">
          19. Governing Law & Jurisdiction
        </h2>
        <p>
          This Policy is governed by the laws of India. Courts at Durgapur, West
          Bengal shall have exclusive jurisdiction for disputes.
        </p>
      </section>
    </div>
  );
}
