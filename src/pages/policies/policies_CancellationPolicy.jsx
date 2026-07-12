import React from "react";
import { AlertTriangle } from "lucide-react";

export default function CancellationPolicy() {
  return (
    <section>
      <div className="max-w-5xl bg-white dark:bg-[#0b0f19] rounded-2xl py-5 px-5 mx-auto space-y-10">
        {/* ================= HEADER ================= */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-black dark:text-white">Cancellation Policy</h1>

          <p className="text-black dark:text-white text-lg">
            This Cancellation Policy sets out the conditions under which
            cancellations are permitted for purchases made through our website
            and mobile application. By placing an order, you acknowledge and
            agree to this policy.
          </p>
        </div>

        {/* ================= 1 ================= */}
        <Section title="1. Digital Products & Services">
          <p>
            All purchases of digital research reports, subscriptions, and market
            content are final and non-cancellable once delivered, accessed, or
            made available.
          </p>
        </Section>

        {/* ================= 2 ================= */}
        <Section title="2. Subscription Renewals">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Customers may request cancellation of future subscription renewals
              by providing written notice at least <strong>24–48 hours</strong>{" "}
              before the next billing cycle.
            </li>
            <li>
              Cancellation requests submitted after a renewal has been processed
              will not be entertained.
            </li>
          </ul>
        </Section>

        {/* ================= 3 ================= */}
        <Section title="3. Pre-Payment Stage">
          <p>
            Orders may be cancelled only before payment completion. Once a
            transaction is successful, the request will be governed by this
            policy.
          </p>
        </Section>

        {/* ================= 4 ================= */}
        <Section title="4. Cancellation by Company">
          <p className="mb-3">
            We reserve the right to cancel any order or subscription in cases
            of:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Non-receipt of payment</li>
            <li>Technical errors preventing delivery, or</li>
            <li>Breach of our Terms & Conditions</li>
          </ul>

          <p className="mt-4">
            If payment has been received but no service has been delivered, such
            cases will be treated in line with our Refund Policy.
          </p>
        </Section>

        {/* ================= DISCLAIMER ================= */}
        <div className="bg-gray-100 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-xl italic text-black dark:text-white">Disclaimer</h2>
          </div>

          <p className="text-black dark:text-white italic">
            Investment in securities is subject to market risks. Research
            services are not a guarantee of returns. Users must exercise
            discretion and consult a financial advisor before acting. Krishna
            Kumar Pathak (SEBI Registered Research Analyst - INH300009914) is
            not responsible for any kind of loss, overtrading, excessive
            trading, missed profits, or damages of any nature. All decisions are
            solely the responsibility of the user. Market investments are
            subject to risk.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================= REUSABLE SECTION ================= */

function Section({ title, children }) {
  return (
    <section className="   p-2 space-y-1">
      <h2 className="text-xl font-semibold text-black dark:text-white">{title}</h2>
      <div className="text-black dark:text-white leading-relaxed">{children}</div>
    </section>
  );
}

