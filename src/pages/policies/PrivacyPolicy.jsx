export default function PrivacyPolicy() {
  return (
    <div className="text-slate-200  leading-relaxed space-y-10">
      {/* HEADER */}
      <header className="border-b  border-slate-700 pb-6 space-y-3">
        <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>

        <p className="text-slate-400 text-sm">
          WealthFino is operated by Krishna Kumar Pathak (SEBI Registered
          Research Analyst – INH300009914 | BSE Enlistment No. 5590)
        </p>
      </header>

      {/* 1. INTRODUCTION */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">1. Introduction</h2>

        <p>
          This Privacy Policy explains how WealthFino, operated by Krishna Kumar
          Pathak (SEBI Registered Research Analyst), collects, processes,
          stores, and protects your information.
        </p>

        <p>
          By accessing our website, mobile application, or services, you agree
          to the practices outlined in this Policy.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>SEBI (Research Analyst) Regulations, 2014</li>
          <li>Information Technology Act, 2000 & SPDI Rules, 2011</li>
          <li>Digital Personal Data Protection Act, 2023</li>
          <li>RBI guidelines & PCI-DSS standards</li>
        </ul>
      </section>

      {/* 2. SCOPE */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">2. Scope</h2>

        <p>
          This Policy applies to all users, clients, vendors, and partners
          interacting with WealthFino services.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>SEBI-compliant KYC onboarding</li>
          <li>Distribution of research reports</li>
          <li>Subscription-based research services</li>
          <li>Regulatory reporting and audits</li>
        </ul>

        <p className="text-slate-400">
          WealthFino does not provide portfolio management or execution-based
          advisory services.
        </p>
      </section>

      {/* 3. APPLICABILITY */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">3. Applicability</h2>

        <p>
          This Policy applies to individuals who visit the website or app,
          subscribe to research services, or share personal data for KYC or
          engagement purposes.
        </p>
      </section>

      {/* 4. INFORMATION COLLECTED */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          4. Information Collected
        </h2>

        <p>
          Only lawful, necessary, and relevant data is collected in compliance
          with SEBI regulations, IT Act, SPDI Rules, and DPDP Act.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <b>Identity Information:</b> Name, DOB, PAN, masked Aadhaar
          </li>
          <li>
            <b>Contact Information:</b> Mobile number, email, address
          </li>
          <li>
            <b>Demographic Data:</b> DOB, gender, nationality
          </li>
          <li>
            <b>KYC Data:</b> CKYC/KRA identifiers
          </li>
          <li>
            <b>Technical Data:</b> IP address, device, browser, cookies
          </li>
          <li>
            <b>Consent Records:</b> OTP logs, IP timestamps
          </li>
          <li>
            <b>Payment Data:</b> Transaction ID only (no card/UPI storage)
          </li>
        </ul>
      </section>

      {/* 5. PURPOSE OF PROCESSING */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          5. Purpose of Processing
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>SEBI compliance and KYC verification</li>
          <li>Delivery of research and subscription services</li>
          <li>Fraud prevention and platform security</li>
          <li>Regulatory reporting and audits</li>
        </ul>
      </section>

      {/* 6. CONSENT & AUTHORIZATION */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          6. Consent & Authorization
        </h2>

        <p>
          Users provide free, informed consent for lawful processing of personal
          data under IT Act and DPDP Act.
        </p>

        <p>
          Aadhaar-based e-KYC, OTP verification, and digital consent are legally
          valid under Indian laws.
        </p>
      </section>

      {/* 7. DATA SHARING */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          7. Data Sharing & Disclosure
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>SEBI, BSE, NSE, KRAs</li>
          <li>Auditors and statutory authorities</li>
          <li>Government agencies when legally required</li>
        </ul>

        <p className="text-slate-400">
          WealthFino does not sell or commercially exploit personal data.
        </p>
      </section>

      {/* 8. PAYMENT DATA */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          8. Payment Data Compliance
        </h2>

        <p>
          All payments are processed through PCI-DSS compliant gateways. Payment
          data is stored in India as per RBI data localization norms.
        </p>
      </section>

      {/* 9. DATA SECURITY */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">9. Data Security</h2>

        <p>
          Security measures include encryption, firewalls, restricted access,
          audits, and confidentiality obligations.
        </p>
      </section>

      {/* 10. DATA BREACH */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          10. Data Breach & Notification
        </h2>

        <p>
          In case of a data breach, immediate containment measures will be taken
          and users or regulators will be notified where required by law.
        </p>
      </section>

      {/* 11. DATA RETENTION */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">11. Data Retention</h2>

        <p>
          Personal and KYC data is retained for a minimum of 5 years or longer
          as mandated by law. Expired data is securely deleted or anonymized.
        </p>
      </section>

      {/* 12. CHILDREN */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          12. Children’s Data
        </h2>

        <p>
          Services are intended only for individuals aged 18 years and above.
          Children’s data is not knowingly collected.
        </p>
      </section>

      {/* 13–16 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          13. Limitation of Liability
        </h2>
        <p>
          WealthFino is not liable for losses arising from unauthorized access,
          cyber incidents, or third-party failures.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6">
          14. Third-Party Disclaimer
        </h2>
        <p>
          Third-party platforms may have independent privacy practices. Use is
          at the user’s discretion.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6">
          15. Indemnification
        </h2>
        <p>
          Users agree to indemnify WealthFino against claims arising from misuse
          of data or violation of this Policy.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6">
          16. Cross-Border Data Transfer
        </h2>
        <p>
          Personal data is primarily stored in India. Limited transfers occur
          only under DPDP and RBI safeguards.
        </p>
      </section>

      {/* 17. GRIEVANCE OFFICER */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          17. Grievance Officer
        </h2>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-5 space-y-2">
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
        <h2 className="text-xl font-semibold text-white">
          18. Updates & Amendments
        </h2>
        <p>
          This Policy may be updated periodically. Changes will be notified via
          website, app, or email.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6">
          19. Governing Law & Jurisdiction
        </h2>
        <p>
          This Policy is governed by Indian law. Courts at Durgapur, West Bengal
          shall have exclusive jurisdiction.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-700 pt-6 text-sm text-slate-400">
        Continued use of the platform constitutes acceptance of this Privacy
        Policy and future updates.
      </footer>
    </div>
  );
}
