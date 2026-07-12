export default function RedressalOfGrievance() {
  return (
    <div className="min-h-screen rounded-2xl bg-white dark:bg-[#0b0f19] from-gray-50 to-white dark:from-slate-950 dark:to-slate-900 py-5 px-4">
      <div className="max-w-6xl mx-auto text-black dark:text-white space-y-12">
        {/* PAGE TITLE */}
        <header className="space-y-4">
          <h1 className="text-xl md:text-2xl font-bold text-black dark:text-white">
            REDRESSAL OF GRIEVANCE / ESCALATION MATRIX
          </h1>

          <p>Grievance Redressal Process</p>
          <p className="text-black dark:text-white max-w-4xl">
            We value your trust and are committed to resolving all concerns in a
            fair and timely manner. If you have any grievance or feedback
            regarding our services, you may follow the steps below:
          </p>
        </header>

        {/* DIVIDER */}
        <div className="border-t border-gray-200 dark:border-slate-700" />

        {/* STEP 1 */}
        <Section title="Step 1: Contact Your Assigned Representative">
          <p>
            If you are dissatisfied with any service, please first contact the
            Research Analyst department representative or consultant assigned to
            you. You may discuss your concerns directly with them. We will
            strive to resolve your issue within 7 to 10 working days on a
            best-effort basis.
          </p>
        </Section>

        {/* STEP 2 */}
        <Section title="Step 2: Reach Out via Call or Email">
          <p>You may also contact your assigned representative by</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              <b>Phone:</b> +91 98834 55700
            </li>
            <li>
              <b>Email:</b>{" "}
              <a
                href="mailto:skrishna.sk4@gmail.com"
                className="text-blue-400 underline"
              >
                skrishna.sk4@gmail.com
              </a>
            </li>
          </ul>
        </Section>

        {/* STEP 3 */}
        <Section title="Step 3: Submit a Formal Complaint">
          <p>
            If the issue remains unresolved, you may send your complaint in
            writing or by email to:
          </p>

          <p>
            <b>Email:</b>{" "}
            <a
              href="mailto:skrishna.sk4@gmail.com"
              className="text-blue-400 underline"
            >
              skrishna.sk4@gmail.com
            </a>
          </p>

          <p>
            We aim to respond to and resolve all complaints within{" "}
            <b>7 to 10 working days</b>. Once your concern is received, it will
            be evaluated and addressed with a clear resolution.
          </p>
        </Section>

        {/* STEP 4 */}
        <Section title="Step 4: Escalate to the Compliance Officer">
          <p>
            If you are not satisfied with the response or resolution provided,
            you may escalate the matter to:
          </p>

          <div className="bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-5 space-y-2">
            <p>Mr. Krishna Pathak (Compliance Officer)</p>
            <p>
              <b>Email:</b>{" "}
              <a
                href="mailto:wealthfino@gmail.com"
                className="text-blue-400 underline"
              >
                wealthfino@gmail.com
              </a>
            </p>
            <p>
              <b>Phone:</b> +91 98834 55700
            </p>
            <p>
              Mr. Pathak will review your concern and get in touch with you at
              the earliest.
            </p>
          </div>
        </Section>

        {/* STEP 5 */}
        <Section title="Step 5: Approach SEBI SCORES Platform">
          <p>
            If your complaint remains unresolved for more than one month, you
            may escalate it to the regulator, the Securities and Exchange Board
            of India (SEBI) through the SCORES platform:
          </p>

          <a
            href="https://scores.sebi.gov.in"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline"
          >
            SEBI SCORES Grievance Redressal Platform
          </a>
        </Section>

        {/* STEP 6 */}
        <Section title="Step 6: SEBI-Supported ODR Platform">
          <p>
            If the issue remains unresolved even on SCORES, you can initiate
            dispute resolution through SEBI's Online Dispute Resolution (ODR)
            portal:
          </p>

          <a
            href="https://smartodr.in/login"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline"
          >
            SEBI SMART ODR Portal
          </a>
        </Section>

        {/* CONTACT TABLE */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-black dark:text-white">
            Grievance Redressal Contact Details
          </h2>

          <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
            <table className="min-w-full text-sm text-black dark:text-white">
              <caption className="sr-only">
                Grievance Redressal Contact Details
              </caption>
              <thead className="bg-blue-100 text-black">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left">Designation</th>
                  <th scope="col" className="px-4 py-3 text-left">Contact Person</th>
                  <th scope="col" className="px-4 py-3 text-left">Address</th>
                  <th scope="col" className="px-4 py-3 text-left">Contact No.</th>
                  <th scope="col" className="px-4 py-3 text-left">Email ID</th>
                  <th scope="col" className="px-4 py-3 text-left">Working Hours</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3">Customer Care</td>
                  <td className="px-4 py-3">Krishna Pathak</td>
                  <td className="px-4 py-3">
                    RS-39/43, 5/3C Golden Park, Sankarpur West, Near
                    Rabindranagar Co-operative, Durgapur, West Bengal – 713206
                  </td>
                  <td className="px-4 py-3">+91 93353 23685</td>
                  <td className="px-4 py-3">wealthfino@gmail.com</td>
                  <td className="px-4 py-3">10:00 AM – 6:00 PM</td>
                </tr>

                <tr>
                  <td className="px-4 py-3">Head Customer Care</td>
                  <td className="px-4 py-3"> - </td>
                  <td className="px-4 py-3">-</td>
                  <td className="px-4 py-3">-</td>
                  <td className="px-4 py-3">-</td>
                  <td className="px-4 py-3">-</td>
                </tr>

                <tr>
                  <td className="px-4 py-3">Compliance Officer</td>
                  <td className="px-4 py-3">Krishna Pathak</td>
                  <td className="px-4 py-3">
                    RS-39/43, 5/3C Golden Park, Sankarpur West, Near
                    Rabindranagar Co-operative, Durgapur, West Bengal – 713206
                  </td>
                  <td className="px-4 py-3">+91 98834 55700</td>
                  <td className="px-4 py-3">wealthfino@gmail.com</td>
                  <td className="px-4 py-3">10:00 AM – 6:00 PM</td>
                </tr>

                <tr>
                  <td className="px-4 py-3">Chief Executive Officer (CEO)</td>
                  <td className="px-4 py-3"> - </td>
                  <td className="px-4 py-3">-</td>
                  <td className="px-4 py-3">-</td>
                  <td className="px-4 py-3">-</td>
                  <td className="px-4 py-3">-</td>
                </tr>

                <tr>
                  <td className="px-4 py-3">Principal Officer</td>
                  <td className="px-4 py-3">Krishna Pathak</td>
                  <td className="px-4 py-3">
                    RS-39/43, 5/3C Golden Park, Sankarpur West, Near
                    Rabindranagar Co-operative, Durgapur, West Bengal – 713206
                  </td>
                  <td className="px-4 py-3">+91 98834 55700</td>
                  <td className="px-4 py-3">skrishna.sk4@gmail.com</td>
                  <td className="px-4 py-3">10:00 AM – 6:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

       
      </div>
    </div>
  );
}

/* -----------------------------
   REUSABLE SECTION (NO MAP)
----------------------------- */
function Section({ title, children }) {
  return (
    <section className="   rounded-xl  md:p-2 space-y-2">
      <h2 className="text-xl md:text-xl font-semibold text-black dark:text-white">{title}</h2>
      <div className="space-y-1 text-black dark:text-white leading-relaxed">{children}</div>
    </section>
  );
}
