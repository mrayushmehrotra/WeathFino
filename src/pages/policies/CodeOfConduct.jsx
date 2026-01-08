export default function CodeOfConduct() {
  return (
    <div className="min-h-screen rounded-2xl bg-[#0b0f19]  from-slate-950 to-slate-900 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* PAGE HEADER */}
        <h1 className="text-xl md:text-3xl font-bold text-white text-center mb-4">
          CODE OF CONDUCT FOR RESEARCH ANALYST
        </h1>

        <p className="text-slate-300 text-center leading-relaxed mb-6">
          <strong>Krishna Kumar Pathak</strong>
          <br />
          SEBI-Registered Research Analyst
          <br />
          Registration No.: INH300009914 | BSE Enlistment No.: 5590
          <br />
          Dated: 22 June 2022
        </p>

        <div className="border-t border-slate-700 mb-10" />

        {/* SINGLE CARD WITH ALL CONTENT */}
        <SectionCard>
          {/* INTRO */}
          <p className="leading-relaxed mb-8 text-slate-700">
            In accordance with Regulation 24(2) of the SEBI (Research Analyst)
            Regulations, 2014, I shall maintain the following Code of Conduct
            while carrying out my responsibilities as a SEBI-Registered Research
            Analyst.
          </p>

          {/* CODE POINTS */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                1. Honesty and Good Faith
              </h3>
              <p className="text-slate-700 ml-4">
                I shall act honestly and in good faith.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                2. Diligence
              </h3>
              <p className="text-slate-700 ml-4">
                I shall act with due skill, care and diligence and shall ensure
                that the research report is prepared after thorough analysis.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                3. Conflict of Interest
              </h3>
              <p className="text-slate-700 ml-4">
                I shall effectively address conflict of interest which may
                affect the impartiality of research analysis and research report
                and shall make appropriate disclosures to address the same.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                4. Insider Trading or front running
              </h3>
              <p className="text-slate-700 ml-4">
                I shall not engage in insider trading or front running of my own
                research report.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                5. Confidentiality
              </h3>
              <p className="text-slate-700 ml-4">
                I shall maintain confidentiality of report till the report is
                made public.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                6. Professional Standard
              </h3>
              <p className="text-slate-700 ml-4">
                I am engaged in research analysis and shall observe high
                professional standard while preparing research report.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                7. Compliance
              </h3>
              <p className="text-slate-700 ml-4">
                I shall comply with all regulatory requirements applicable to
                the conduct of its business activities.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                8. Responsibility of senior management
              </h3>
              <p className="text-slate-700 ml-4">
                I shall bear primary responsibility of senior management for
                ensuring the maintenance of appropriate standards of conduct and
                adherence to proper procedures.
              </p>
            </div>
          </div>

          {/* SIGNATURE */}
          <div className="mt-12 pt-8 border-t border-slate-300">
            <p className="text-slate-800 font-medium">Regards,</p>
            <p className="text-slate-900 font-semibold mt-2">Krishna Pathak</p>
            <p className="text-slate-600">(Individual)</p>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}

/* ---------------------------------------
   SINGLE REUSABLE CARD COMPONENT
--------------------------------------- */
function SectionCard({ children }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="space-y-4 text-slate-700 leading-relaxed">{children}</div>
    </div>
  );
}
