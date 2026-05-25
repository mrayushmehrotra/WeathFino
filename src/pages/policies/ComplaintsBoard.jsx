export default function ComplaintsBoard() {
  return (
    <div className="min-h-screen rounded-2xl bg-[#0b0f19]   text-slate-200 py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* ================= HEADER ================= */}
        <div className="text-center space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            ANNEXURE – B
          </h1>
          <div className="border-t border-slate-700 max-w-xl mx-auto" />
          <p className="text-lg text-slate-300 font-medium">
            Data for the month ending –{" "}
            <span className="text-white">December 2025</span>
          </p>
        </div>

        {/* ================= TABLE 1 ================= */}
        <Section title=" ">
          <Table caption="Complaints data for the current month">
            <thead>
              <Tr head>
                <Th>Sr No</Th>
                <Th>Received from</Th>
                <Th>Pending at end of last month</Th>
                <Th>Received</Th>
                <Th>Resolved*</Th>
                <Th>Total Pending#</Th>
              </Tr>
            </thead>
            <tbody>
              <Tr>
                <Td>1</Td>
                <Td>Directly from Investors</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
              </Tr>
              <Tr alt>
                <Td>2</Td>
                <Td>SEBI (SCORES)</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
              </Tr>
              <Tr>
                <Td>3</Td>
                <Td>Other Sources (if any)</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
              </Tr>
              <Tr total>
                <Td colSpan={2}>GRAND TOTAL</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
              </Tr>
            </tbody>
          </Table>

          <FootNote />
        </Section>

        {/* ================= TABLE 2 ================= */}
        <Section title="Trend of monthly disposal of complaints">
          <Table caption="Trend of monthly disposal of complaints">
            <thead>
              <Tr head blue>
                <Th>Sr No</Th>
                <Th>Month</Th>
                <Th>Carried forward</Th>
                <Th>Received</Th>
                <Th>Resolved*</Th>
                <Th>Pending</Th>
              </Tr>
            </thead>
            <tbody>
              {[
                ["Apr 24", 0, 1, 0, 0],
                ["May 24", 1, 0, 1, 0],
                ["Jun 24", 0, 0, 0, 0],
                ["Jul 24", 0, 0, 0, 0],
                ["Aug 24", 0, 0, 0, 0],
                ["Sep 24", 0, 0, 0, 0],
                ["Oct 24", 0, 0, 0, 0],
                ["Nov 24", 0, 0, 0, 0],
                ["Dec 24", 0, 0, 0, 0],
                ["Jan 25", 0, 0, 0, 0],
                ["Feb 25", 0, 0, 0, 0],
                ["Mar 25", 0, 0, 0, 0],
                ["Apr 25", 0, 0, 0, 0],
                ["May 25", 0, 0, 0, 0],
                ["Jun 25", 0, 0, 0, 0],
                ["Jul 25", 0, 0, 0, 0],
                ["Aug 25", 0, 0, 0, 0],
                ["Sep 25", 0, 0, 0, 0],
                ["Oct 25", 0, 0, 0, 0],
                ["Nov 25", 0, 0, 0, 0],
                ["Dec 25", 0, 0, 0, 0],
                ["Jan 26", 0, 0, 0, 0],

              ].map((row, i) => (
                <Tr key={i} alt={i % 2 !== 0}>
                  <Td>{i + 1}</Td>
                  <Td>{row[0]}</Td>
                  <Td>{row[1]}</Td>
                  <Td>{row[2]}</Td>
                  <Td>{row[3]}</Td>
                  <Td>{row[4]}</Td>
                </Tr>
              ))}

              <Tr total>
                <Td colSpan={2}>GRAND TOTAL</Td>
                <Td>1</Td>
                <Td>1</Td>
                <Td>1</Td>
                <Td>0</Td>
              </Tr>
            </tbody>
          </Table>

          <FootNote2 />
        </Section>

        {/* ================= TABLE 3 ================= */}
        <Section title="Trend of annual disposal of complaints">
          <Table caption="Trend of annual disposal of complaints">
            <thead>
              <Tr head yellow>
                <Th>Sr No</Th>
                <Th>Year</Th>
                <Th>Carried forward</Th>
                <Th>Received</Th>
                <Th>Resolved*</Th>
                <Th>Pending</Th>
              </Tr>
            </thead>
            <tbody>
              <Tr>
                <Td>1</Td>
                <Td>2022–2023</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
              </Tr>
              <Tr alt>
                <Td>2</Td>
                <Td>2023–2024</Td>
                <Td>0</Td>
                <Td>1</Td>
                <Td>1</Td>
                <Td>0</Td>
              </Tr>
              <Tr>
                <Td>3</Td>
                <Td>2024–2025</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
              </Tr>
              <Tr alt>
                <Td>4</Td>
                <Td>2025–2026</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
              </Tr>
              <Tr total>
                <Td colSpan={2}>GRAND TOTAL</Td>
                <Td>0</Td>
                <Td>1</Td>
                <Td>1</Td>
                <Td>0</Td>
              </Tr>
            </tbody>
          </Table>

          <FootNote2 />
        </Section>
      </div>
    </div>
  );
}

/* ================= REUSABLE UI ================= */

function Section({ title, children }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl md:text-2xl font-semibold text-white">{title}</h2>
      {children}
    </div>
  );
}

function Table({ caption, children }) {
  return (
    <div className="overflow-x-auto bg-slate-900 rounded-xl border border-slate-700">
      <table className="w-full text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        {children}
      </table>
    </div>
  );
}

function Tr({ children, head, alt, total, blue, yellow }) {
  let cls = "border-b border-slate-700";
  if (head && blue) cls += " bg-blue-200 text-slate-900 font-semibold";
  else if (head && yellow) cls += " bg-yellow-200 text-slate-900 font-semibold";
  else if (head) cls += " bg-emerald-200 text-slate-900 font-semibold";
  else if (total) cls += " bg-slate-800 font-bold";
  else if (alt) cls += " bg-slate-800/50";
  return <tr className={cls}>{children}</tr>;
}

function Th({ children }) {
  return <th scope="col" className="px-4 py-3 text-left">{children}</th>;
}

function Td({ children, colSpan }) {
  return (
    <td colSpan={colSpan} className="px-4 py-3">
      {children}
    </td>
  );
}

function FootNote() {
  return (
    <div className="text-xs text-slate-400 space-y-1">
      <p>
        * Inclusive of complaints of previous months resolved in the current
        month.
      </p>
      <p># Inclusive of complaints pending as on the last day of the month.</p>
    </div>
  );
}
function FootNote2() {
  return (
    <div className="text-xs text-slate-400 space-y-1">
      <p>
        *Inclusive of complaints of previous years resolved in the current year.
      </p>
      <p>#Inclusive of complaints pending as on the last day of the year.</p>
    </div>
  );
}
