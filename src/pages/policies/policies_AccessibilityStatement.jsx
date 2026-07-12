import React from "react";

export default function AccessibilityStatement() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0f14] text-black dark:text-white py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8 bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
        <h1 className="text-3xl font-bold text-black dark:text-white mb-6 border-b border-gray-200 dark:border-slate-700 pb-4">
          Accessibility Statement
        </h1>
        
        <p className="text-lg">
          We are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.
        </p>

        <h2 className="text-2xl font-semibold text-black dark:text-white mt-8 mb-4">
          Measures to support accessibility
        </h2>
        <p>We take the following measures to ensure accessibility of the WealthFino website:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Include accessibility throughout our internal policies.</li>
          <li>Integrate accessibility into our procurement practices.</li>
          <li>Assign clear accessibility goals and responsibilities.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black dark:text-white mt-8 mb-4">
          Conformance status
        </h2>
        <p>
          The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. 
          This website is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
        </p>

        <h2 className="text-2xl font-semibold text-black dark:text-white mt-8 mb-4">
          Feedback
        </h2>
        <p>
          We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers on the WealthFino website:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Phone: +91 98834 55700</li>
          <li>E-mail: wealthfino@gmail.com</li>
          <li>Visitor Address: RS-39/43, 5/3C Golden Park, Sankarpur West, Durgapur, West Bengal – 713206</li>
        </ul>
        <p className="mt-4">We try to respond to feedback within 2 business days.</p>
      </div>
    </div>
  );
}

