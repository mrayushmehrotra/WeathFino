import React from "react";
import {
  Shield,
  Mail,
  CreditCard,
  RefreshCw,
  Calendar,
  FileCheck,
  XCircle,
  AlertTriangle,
  Clock,
} from "lucide-react";

export default function RefundPolicy() {
  return (
    <section className="min-h-screen rounded-2xl bg-[#0b0f19]  from-black via-slate-900 to-black text-slate-200 py-5 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* ================= HEADER ================= */}
        <div className="text-center space-y-4">
          
          <h1 className="text-2xl font-bold text-white">Refund Policy</h1>

          <p className="text-slate-400 max-w-2xl mx-auto">
            This Refund Policy governs the conditions under which refunds may be
            granted for purchases made through our website and mobile
            application. By completing a purchase on our platform, you
            acknowledge, understand, and agree to be bound by the terms set
            forth in this policy.
          </p>
        </div>

     

        {/* ================= 1. OVERVIEW ================= */}
        <Section title="1. Overview">
          <p>
            This Refund Policy applies to all purchases made via our platform,
            including but not limited to digital research reports,
            subscriptions, educational content, and market insights. Our
            objective is to ensure transparency and protect the interests of all
            users. Please note that by purchasing any of our offerings, you
            agree to this Refund Policy in addition to our Terms & Conditions.
          </p>
        </Section>

        {/* ================= 2. REFUND ELIGIBILITY ================= */}
        <Section title="2. Refund Eligibility">
          <p className="mb-4">
            Refunds shall be permitted only under the following limited
            circumstances:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              Duplicate Payments: If you are charged more than once for the same
              transaction.
            </li>
            <li>
              Technical Errors: When payment is deducted but the research
              report, subscription, or service is not delivered due to a
              verified technical issue.
            </li>
          </ul>
          <p className="mb-4">Conditions for Refund Requests:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              A refund request must be submitted within seven (7) calendar days
              from the transaction date.
            </li>
            <li>
              The request must be supported with valid proof, such as a bank
              statement, UTR number, transaction ID, or payment gateway
              confirmation.
            </li>
            <li>
              Once a research report, digital content, or subscription has been
              delivered or accessed, refunds are not allowed.
            </li>
          </ul>
        </Section>

        {/* ================= 3. REFUND PROCESS ================= */}
        <Section title="3. Refund Process">
          <p>To initiate a refund request, the customer must:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              end a written request to help@krishnapathak.com within the 7-day
              period.
            </li>
            <li>
              Provide necessary proof of payment such as transaction ID, UTR, or
              bank statement.
            </li>
            <li>Allow 5–7 working days for compliance validation.</li>
            <li>
              If approved, refunds will be credited back to the original payment
              method within 7–10 business days, subject to standard banking
              timelines.
            </li>
          </ul>
        </Section>

        {/* ================= 4. EXCLUSIONS ================= */}
        <Section title="4. Exclusions">
          <p>Refunds will not be provided in the following cases:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Once digital research reports, subscriptions, or market insight
              content have been delivered or accessed.
            </li>
            <li>Subscription renewals after delivery or access of services.</li>
            <li>
              Requests based on dissatisfaction with content quality,
              interpretation, or market outcomes.
            </li>
            <li>Requests submitted beyond the 7-day window.</li>
          </ul>
        </Section>

        {/* ================= DISCLAIMER ================= */}
        <div className="bg-slate-800/70 border border-amber-500/30 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-xl italic text-white">Disclaimer</h2>
          </div>

          <p className="italic">
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

/* ================= REUSABLE HELPERS ================= */

const Section = ({ title, children }) => (
  <section className="  ">
    <h2 className="text-xl font-semibold text-white">{title}</h2>
    <div className="space-y-3">{children}</div>
  </section>
);

const Item = ({ icon, children }) => (
  <div className="flex gap-3 items-start">
    {icon}
    <p>{children}</p>
  </div>
);
