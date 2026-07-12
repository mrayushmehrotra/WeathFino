import React from "react";
import { Star, ShieldCheck, AlertTriangle } from "lucide-react";

const ProPointsPolicy = () => {
 return (
   <div className=" bg-white dark:bg-[#0b0f19] rounded-2xl min-h-screen text-black dark:text-white px-6 py-5">
   <div className="max-w-5xl mx-auto space-y-8">
    {/* TITLE */}
    <div>
     <h1 className="text-2xl font-bold tracking-wide mb-4">
      Pro Points Policy — Redemption Scope, Non-Cash Nature & Monthly
      Expiry
     </h1>
    </div>

    {/* REDEMPTION SCOPE */}
    <section className="space-y-2">
     <h2 className="text-lg font-semibold flex items-center gap-2">
      Redemption Scope :
     </h2>
     <p className=" leading-relaxed">
      Pro Points are redeemable only for in-app premium offerings (e.g.,
      premium services access) and eligible learning content within the
      mobile app. No other uses are permitted.
     </p>
    </section>

    {/* NON-CASH */}
    <section className="space-y-2">
     <h2 className="text-lg font-semibold flex items-center gap-2">
      No Cash / Transferability :
     </h2>
     <p className=" leading-relaxed">
      Pro Points are non-monetary and have no cash value. They cannot be
      encashed, withdrawn, transferred, traded, gifted, pledged, or
      converted into currency, bank/UPI/wallet credit, vouchers, gift
      cards, or any cash equivalent.
     </p>
    </section>

    {/* MONTHLY EXPIRY */}
    <section className="space-y-2">
     <h2 className="text-lg font-semibold flex items-center gap-2">
      Monthly Expiry :
     </h2>
     <p className=" leading-relaxed">
      All unredeemed Pro Points expire at{" "}
      <span className="font-semibold">
       23:59 IST on the 30th of each calendar month
      </span>{" "}
      and the balance resets to zero. Expired points cannot be restored.
     </p>
    </section>

    {/* COMPLIANCE */}
    <section className="space-y-2">
     <h2 className="text-lg font-semibold">Compliance & Independence :</h2>
     <p className=" leading-relaxed">
      Pro Points are issued for engagement and learning purposes only.
      They are not linked to trading activity or performance and do not
      influence research recommendations. The Company may update these
      terms with prior notice.
     </p>
    </section>

    {/* DISCLAIMER */}
    <div className="bg-gray-100 dark:bg-[#111827] border border-gray-200 dark:border-gray-700 rounded-xl p-6 space-y-4">
     <h3 className="text-lg font-semibold underline">Disclaimer</h3>

     <p className=" leading-relaxed">
      Pro Points are non-monetary engagement rewards with no cash value,
      redeemable only for eligible in-app premium or learning services on
      the WealthFino platform. They cannot be withdrawn, transferred, or
      converted.
     </p>

     <p className=" leading-relaxed">
      <span className="font-semibold underline">Krishna Pathak</span>, operating
      under the brand <span className="font-semibold">WealthFino</span>,
      may modify, suspend, or withdraw the Pro Points program at any time
      and may expire or reset balances (including to zero) per this
      policy, without liability for unredeemed or forfeited points.
      Otherwise, unredeemed points expire at 23:59 IST on the 30th of each
      month.
     </p>

     <p className=" leading-relaxed">
      Use of Pro Points constitutes acceptance of this Pro Points Policy
      and the Terms of Use. Pro Points are not an inducement to trade nor
      a promise of returns.
     </p>
    </div>
   </div>
  </div>
 );
};

export default ProPointsPolicy;
