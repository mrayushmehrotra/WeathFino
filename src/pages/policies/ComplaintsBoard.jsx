import { useState, useEffect } from "react";

export default function ComplaintsBoard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = localStorage.getItem("complaintsData");
      if (cachedData) {
        setData(JSON.parse(cachedData));
        setLoading(false);
      }

      try {
        const response = await fetch("https://wealthfino-info.vercel.app/api/complaints");
        if (!response.ok) {
          throw new Error("Failed to fetch complaints data");
        }
        const result = await response.json();
        
        setData(result);
        localStorage.setItem("complaintsData", JSON.stringify(result));
      } catch (err) {
        if (!cachedData) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-slate-800 dark:text-slate-200">
        <p className="text-xl">Loading complaints data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-slate-800 dark:text-slate-200">
        <p className="text-xl text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen rounded-2xl bg-white dark:bg-black text-slate-800 dark:text-slate-200 py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* ================= HEADER ================= */}
        <div className="text-center space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
            ANNEXURE – B
          </h1>
          <div className="border-t border-slate-300 dark:border-slate-700 max-w-xl mx-auto" />
          <p className="text-lg text-slate-700 dark:text-slate-300 font-medium">
            Data for the month ending –{" "}
            <span className="text-black dark:text-white">{data.monthEnding || "N/A"}</span>
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
              {data.currentMonth?.map((row, i) => (
                <Tr key={row.id || i} alt={i % 2 !== 0}>
                  <Td>{i + 1}</Td>
                  <Td>{row.receivedFrom}</Td>
                  <Td>{row.pendingLastMonth}</Td>
                  <Td>{row.received}</Td>
                  <Td>{row.resolved}</Td>
                  <Td>{row.totalPending}</Td>
                </Tr>
              ))}
              <Tr total>
                <Td colSpan={2}>GRAND TOTAL</Td>
                <Td>
                  {data.currentMonth?.reduce((sum, row) => sum + (Number(row.pendingLastMonth) || 0), 0) || 0}
                </Td>
                <Td>
                  {data.currentMonth?.reduce((sum, row) => sum + (Number(row.received) || 0), 0) || 0}
                </Td>
                <Td>
                  {data.currentMonth?.reduce((sum, row) => sum + (Number(row.resolved) || 0), 0) || 0}
                </Td>
                <Td>
                  {data.currentMonth?.reduce((sum, row) => sum + (Number(row.totalPending) || 0), 0) || 0}
                </Td>
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
              {data.monthlyTrend?.map((row, i) => (
                <Tr key={row.id || i} alt={i % 2 !== 0}>
                  <Td>{i + 1}</Td>
                  <Td>{row.month}</Td>
                  <Td>{row.carriedForward}</Td>
                  <Td>{row.received}</Td>
                  <Td>{row.resolved}</Td>
                  <Td>{row.pending}</Td>
                </Tr>
              ))}

              <Tr total>
                <Td colSpan={2}>GRAND TOTAL</Td>
                <Td>
                  {data.monthlyTrend?.reduce((sum, row) => sum + (Number(row.carriedForward) || 0), 0) || 0}
                </Td>
                <Td>
                  {data.monthlyTrend?.reduce((sum, row) => sum + (Number(row.received) || 0), 0) || 0}
                </Td>
                <Td>
                  {data.monthlyTrend?.reduce((sum, row) => sum + (Number(row.resolved) || 0), 0) || 0}
                </Td>
                <Td>
                  {data.monthlyTrend?.reduce((sum, row) => sum + (Number(row.pending) || 0), 0) || 0}
                </Td>
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
              {data.annualTrend?.map((row, i) => (
                <Tr key={row.id || i} alt={i % 2 !== 0}>
                  <Td>{i + 1}</Td>
                  <Td>{row.year}</Td>
                  <Td>{row.carriedForward}</Td>
                  <Td>{row.received}</Td>
                  <Td>{row.resolved}</Td>
                  <Td>{row.pending}</Td>
                </Tr>
              ))}
              <Tr total>
                <Td colSpan={2}>GRAND TOTAL</Td>
                <Td>
                  {data.annualTrend?.reduce((sum, row) => sum + (Number(row.carriedForward) || 0), 0) || 0}
                </Td>
                <Td>
                  {data.annualTrend?.reduce((sum, row) => sum + (Number(row.received) || 0), 0) || 0}
                </Td>
                <Td>
                  {data.annualTrend?.reduce((sum, row) => sum + (Number(row.resolved) || 0), 0) || 0}
                </Td>
                <Td>
                  {data.annualTrend?.reduce((sum, row) => sum + (Number(row.pending) || 0), 0) || 0}
                </Td>
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
      <h2 className="text-xl md:text-2xl font-semibold text-black dark:text-white">{title}</h2>
      {children}
    </div>
  );
}

function Table({ caption, children }) {
  return (
    <div className="overflow-x-auto bg-white dark:bg-black rounded-xl border border-slate-300 dark:border-slate-700">
      <table className="w-full text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        {children}
      </table>
    </div>
  );
}

function Tr({ children, head, alt, total, blue, yellow }) {
  let cls = "border-b border-slate-300 dark:border-slate-700";
  if (head && blue) cls += " bg-blue-200 text-black font-semibold";
  else if (head && yellow) cls += " bg-yellow-200 text-black font-semibold";
  else if (head) cls += " bg-emerald-200 text-black font-semibold";
  else if (total) cls += " bg-slate-100 dark:bg-black font-bold";
  else if (alt) cls += " bg-slate-100/50 dark:bg-black/50";
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
    <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
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
    <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
      <p>
        *Inclusive of complaints of previous years resolved in the current year.
      </p>
      <p>#Inclusive of complaints pending as on the last day of the year.</p>
    </div>
  );
}