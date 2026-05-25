export default function ClientTerm() {
  return (
    <div className="min-h-screen rounded-2xl bg-[#0b0f19]  from-slate-950 to-slate-900 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* PAGE TITLE */}
        <h1 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
          CLIENT CONSENT AND TERMS & CONDITIONS
        </h1>

        <p className="text-slate-300 text-center max-w-2xl mx-auto mb-10">
          Research Recommendation Services are provided by Mr. Krishna Kumar
          Pathak, a SEBI-Registered Research Analyst (Registration No.
          INH300009914, BSE Enlistment No. 5590), in full compliance with the
          SEBI (Research Analyst) Regulations, 2014.
        </p>
        <p className="  font-bold text-white text-center mb-4">
          CLIENT AUTHORIZATION & MITC COMPLIANCE
        </p>
        <hr className="border-slate-700 my-6" />

        {/* 1 */}
        <SectionCard title="1. Acceptance of MITC & Terms and Conditions : ">
          <p>
            I, the Client/User confirm that I have read and understood the Most
            Important Terms & Conditions (MITC) and Terms & Conditions of Mr.
            Krishna Kumar Pathak, SEBI-Registered Research Analyst (Reg. No.
            INH300009914). I voluntarily accept these terms and agree they are
            legally binding. I understand they govern the research
            recommendation services provided to me under SEBI regulations. I
            agree to comply with all obligations and accept that I am solely
            responsible for my actions based on the research recommendations
            received.
          </p>
        </SectionCard>

        {/* 2 */}
        <SectionCard title="2. Digital Consent, KYC & Electronic Signature Declaration : ">
          <p>
            I, the Client/User, hereby provide my explicit and informed consent
            to Mr. Krishna Kumar Pathak, SEBI-Registered Research Analyst ( Reg.
            No. INH300009914), by verifying my identity through the One-Time
            Password (OTP) sent to my registered mobile number or Aadhaar-linked
            mobile number and affixing my electronic/digital signature
            (finger-drawn, stylus, or signature capture) on the mobile
            application, website, tablet interface, or any other authorized
            digital platform. I authorize the collection, processing, and
            verification of my KYC details, including but not limited to PAN,
            Aadhaar (via UIDAI/ DigiLocker), name, date of birth, address,
            registered mobile number, and email ID, and consent to verification
            through NSE KRA, CVL KRA, NDML KRA, Karvy/KFintech KRA, DotEx KRA,
            or any SEBI-registered/authorized and third party APIs service
            provider. For regulatory, security, and audit purposes, I consent to
            the capture and secure storage of my IP address, timestamp, device
            type/details, OTP verification records, and electronic/digital
            signature, which shall form part of the legal record of this
            authorization. This consent constitutes a legally valid, binding,
            and enforceable electronic agreement under the Indian Contract Act,
            1872, Section 10A of the Information Technology Act, 2000, and is
            compliant with the Digital Personal Data Protection (DPDP) Act,
            2023, remaining effective until expressly revoked in writing
          </p>
        </SectionCard>

        {/* 3 */}
        <SectionCard title="3. Disclaimer & Risk Warning :">
          <p>
            Investment in securities market are subject to market risks. Read
            all the related documents carefully before investing. "Registration
            granted by SEBI & Certification from NISM in no way guarantee
            performance of the intermediary or provide any assurance of returns
            to Investors. Options trading is highly risky and may result in
            significant losses. No Guarantee of Returns. Liability & Legal
            Indemnity: By accessing our research services, Clients/Users
            acknowledge and agree that Mr. Krishna Kumar Pathak, SEBI-Registered
            Research Analyst (RA Reg. No. INH300009914, BSE Enlistment No.
            5590), acts solely as a research service provider and shall not be
            liable for any direct, indirect, incidental, or consequential loss,
            damage, or financial outcome arising from investment decisions taken
            based on the research recommendations provided
          </p>
        </SectionCard>

        {/* CLIENT CONFIRMATION */}
        <SectionCard title="CLIENT ACCEPTANCE, AGREEMENT & CONFIRMATION">
          <p>
            I (Client/User) hereby confirm that I have carefully read, fully
            understood, and voluntarily accepted the Most Important Terms &
            Conditions (MITC), Terms & Conditions, Privacy Policy, SEBI
            Disclaimers & Disclosures and Client Consent Policy of Mr. Krishna
            Kumar Pathak, SEBI-Registered Research Analyst (RA Reg. No.
            INH300009914, BSE Enlistment No. 5590), operating under the brand
            name WealthFino.
          </p>
          <p>
            By completing OTP verification and affixing my electronic/digital
            signature (finger-drawn/ stylus/digital signature capture) on the
            authorized platform (mobile app, website, tablet, or any other
            approved digital interface), I, the Client/User, accept this in full
            and final form and agree that it shall constitute a legally valid,
            binding, and enforceable agreement.
          </p>
          <p>
            I further declare and agree that: I (Client/User) hereby provide my
            full and final consent and irrevocably agree that I shall not, at
            any time in the future, claim or allege that I did not read,
            understand, or agree to the MITC, T&C, Privacy Policy, or SEBI
            Disclosures. I waive, to the fullest extent permitted by law, any
            future claims, disputes, or allegations of "non-reading" or
            "non-understanding" once my consent is recorded through OTP
            verification and/or electronic signature.
          </p>

          <ul className=" ml-5 space-y-2 mt-4">
            <li>
              1. I (Client/User) acknowledge that stock markets are subject to
              risk, volatility, and price fluctuations
            </li>
            <li>
              2. I (Client/User) understand that derivatives (F&O) are highly
              risky and may result in total capital loss
            </li>
            <li>
              3. I (Client/User) agree that all investment and trading decisions
              are self-directed and entirely at my risk and discretion.{" "}
            </li>
            <li>
              4. I (Client/User) confirm that Mr. Krishna Kumar Pathak
              (SEBI-Registered Research Analyst, Reg. No. INH300009914, BSE
              Enlistment No. 5590) and WealthFino are not liable or responsible
              for any profit, loss, or financial consequence of my trades.
            </li>
            <li>
              5. I (Client/User) accept that there is no assurance, guarantee,
              or promise of profits or returns from any recommendation,
              research, or service offered.
            </li>
            <li>
              6. I (Client/User) agree that I shall not claim, demand, or expect
              any loss recovery from Mr. Krishna Kumar Pathak / WealthFino under
              any circumstances.
            </li>
            <li>
              7. I (Client/User) irrevocably and unconditionally assume full
              responsibility for the outcomes of my trades and indemnify and
              hold harmless Mr. Krishna Kumar Pathak and WealthFino from any
              claim, loss, liability, or expense, to the fullest extent
              permitted by law.
            </li>
          </ul>
        </SectionCard>

        {/* SEBI CONDITIONS */}
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          CLIENT CONSENT AND TERMS & CONDITIONS
        </h1>

        <p className="text-slate-300 text-center max-w-3xl mx-auto mb-10">
          All services are subject to the Terms and Conditions outlined in
          accordance with SEBI Circular No.
          SEBI/HO/MIRSD/MIRSD-PoD-1/P/CIR/2025/004, specifically as per
          Annexure-B.
        </p>
        <h2 className="text-1xl md:text-2xl font-bold text-white text-center mb-4">
          By subscribing to the research services, clients acknowledge and agree
          to the following terms and conditions:
        </h2>
        <hr className="border-slate-700 my-6" />

        {/* 4 */}
        <SectionCard title="1. Availing the Research Services">
          <p>
            By accepting delivery of the research service, the client confirms
            that he/she has elected to subscribe to the research service of the
            RA at his/her sole discretion. RA confirms that research services
            shall be rendered in accordance with the applicable provisions of
            the RA Regulations.
          </p>
        </SectionCard>

        {/* 5 */}
        <SectionCard title="2. Obligation on Research Analyst">
          <p>
            RA and client shall be bound by SEBI Act and all the applicable
            rules and regulations of SEBI, including the RA Regulations and
            relevant notifications of Government, as may be in force, from time
            to time.
          </p>
        </SectionCard>

        {/* 6 */}
        <SectionCard title="3. Client Information and KYC">
          <p>
            The Client agrees to furnish, in full and without omission, all
            information and documentation as may be required by the
            SEBI-registered Research Analyst ("RA") in its prescribed format.
            This includes but is not limited to Know Your Client ("KYC")
            details, identity proof, address proof, and any other particulars,
            along with supporting documents, as mandated by the Research Analyst
            Administration and Supervisory Body (RAASB), SEBI, or any other
            applicable regulatory authority, from time to time.
          </p>
          <p>
            The RA shall have the right to collect, verify, store, process, and
            upload the Client's KYC data with the SEBI-registered KYC
            Registration Agency (KRA) as required under the SEBI (KYC
            Registration Agency) Regulations, 2011 and any subsequent
            amendments.
          </p>
        </SectionCard>

        {/* 7 */}
        <SectionCard title="4. Client/User Consent Declaration to Commence Research Analyst Services">
          <p>
            I/We, the undersigned Client/User, hereby provide my/our informed
            consent to commence the research analyst services offered by Mr.
            Krishna Kumar Pathak (SEBI Registered Research Analyst, Registration
            No. INH300009914) after fully understanding and agreeing to the
            following terms:
          </p>
          <ul className="ml-5 space-y-2 mt-4">
            <li>
              1. I/We, as the Client/User, have carefully read, understood, and
              acknowledged the terms and conditions applicable to a Research
              Analyst under Regulation 2(1)(u) of the SEBI (Research Analyst)
              Regulations, 2014, including the prescribed fee structure.
            </li>
            <li>
              2. I/We confirm that I/We am/are subscribing to the research
              services solely for our own use, benefit, and consumption. Any
              reliance placed on the research reports, recommendation reports,
              or rational reports provided by the Research Analyst shall be
              entirely based on my/our own independent judgment, discretion, and
              assessment of the contents and conclusions contained therein.
            </li>

            <li>
              3. I/We, as the Client/User, further understand and acknowledge
              that:
              <ul className="list-disc ml-5 space-y-2 mt-2">
                <li>
                  Any investment decision made based on the research reports or
                  recommendations is subject to market risks, including
                  potential financial loss.
                </li>
                <li>
                  The research reports or recommendations do not offer any
                  assurance or guarantee of returns.
                </li>
                <li>
                  The Client/User shall have no legal recourse or claim for any
                  financial losses incurred as a result of investment decisions
                  made based on the research reports, rational reports, or
                  recommendation reports issued by the Research Analyst.
                </li>
              </ul>
            </li>
          </ul>
          <p>
            By signing or otherwise accepting this declaration (either
            physically or digitally), I/We, as the Client/User, expressly
            provide consent to initiate the research analyst services and
            confirm that this consent has been given voluntarily and with a full
            understanding of the associated risks and responsibilities.
          </p>
        </SectionCard>

        {/* 8 */}
        <SectionCard title="5. Consent & Authorization – Client Declaration">
          <p>
            By accessing or using our services, website, platform, or mobile
            app, and by voluntarily submitting your personal details, you
            clearly and willingly agree to the following:
          </p>
          <ul className="ml-5 space-y-2 mt-4">
            <li>
              1. <b> Consent for Data Use </b> - You give your free, specific,
              and informed consent to allow us to collect, store, use, and
              process your Personal Data and Sensitive Personal Data, in line
              with the Information Technology Act, 2000, and the Digital
              Personal Data Protection Act, 2023.
            </li>
            <li>
              2. <b> Aadhaar-linked Mobile no e-KYC Verification </b> - You
              authorize us to verify your identity using OTP sent to your
              Aadhaar-linked mobile number for completing e-KYC or electronic
              consent procedures, in line with the Aadhaar Act, 2016 and UIDAI
              regulations.
            </li>
            <li>
              3. <b> Data Retrieval & Verification</b> - By accessing or using
              our services, you hereby provide your voluntary, explicit, and
              informed consent to Mr. Krishna Kumar Pathak, a SEBI-Registered
              Research Analyst (Registration No. INH300009914), to initiate,
              retrieve, verify, and process your Know Your Customer (KYC)
              details through authorized third-party Application Programming
              Interfaces (APIs) or the Unique Identification Authority of India
              (UIDAI), as applicable and permissible under Indian laws and SEBI
              regulations.
            </li>
          </ul>

          <p>Such KYC verification may include, but is not limited to:</p>

          <ul className="list-disc ml-5 space-y-2 mt-4">
            <li>PAN No (Permanent Account Number)</li>
            <li>Masked Aadhaar Number (last four digits only)</li>
            <li>Mobile number linked to Aadhaar</li>
            <li>Name & Registered Email ID</li>
            <li>Date of Birth (DOB)</li>
            <li>Other KYC details as permitted by SEBI or UIDAI</li>
          </ul>
        </SectionCard>

        {/* 9 */}
        <SectionCard title=" Declaration from Krishna Kumar Pathak (Research Analyst)">
          <ul className="list-disc ml-5 space-y-2 mt-4">
            <li>
              We are duly registered with SEBI as Research Analyst under
              Registration No. INH300009914 from 22nd June 2022; BSE Enlistment
              No. 5590 and compliant with the SEBI (Research Analyst)
              Regulations, 2014.
            </li>
            <li>
              Currently we have valid SEBI registration and have the required
              qualifications to render services contemplated under RA
              regulations.
            </li>
            <li>
              We have no material adverse disciplinary history or any conflicts
              of interest that compromise the integrity of its recommendations.
            </li>
            <li>
              The maximum fee charged by the Research Analyst shall not exceed
              ₹1.51 lakhs per annum per family of clients.
            </li>

            <li>
              The recommendations provided by us do not provide any assurance of
              returns.
            </li>
          </ul>
        </SectionCard>

        {/* 10 */}
        <SectionCard title="6. Consideration and mode of payment:">
          <p>
            The client shall duly pay to RA, the agreed fees for the services
            that RA renders to the client and statutory charges, as applicable.
            Such fees and statutory charges shall be payable through the
            specified manner and modes communicated by the Research Analyst
            (including but not limited to payment gateways or processors like
            Cashfree, Razorpay, UPI, NEFT, IMPS, Centralised Fee Collection
            Mechanism for RA, Cheque, etc.). We may collect 12 months advance
            payment based on mutual agreement.
          </p>
        </SectionCard>

        {/* DISCLAIMER */}
        <SectionCard title="7. Risk Factors">
          <p>
            Investments in securities markets are inherently risky and subject
            to market dynamics. Registration granted by SEBI, and certification
            from NISM in no way guarantee the performance of the intermediary or
            provide any assurance of returns to clients. Mr. Krishna Kumar
            Pathak (SEBI Reg. No. INH300009914) shall not be responsible for any
            profit or loss incurred by the client. In the event of any financial
            loss, no compensation, reimbursement, or additional amount shall be
            payable under any circumstances
          </p>
        </SectionCard>

        <SectionCard title="8. Conflict of Interest">
          <p>
            The Research Analyst adheres to SEBI's guidelines on the disclosure
            and mitigation of actual or potential conflicts of interest. Full
            disclosures are provided in each research recommendation and
            research report.
          </p>
        </SectionCard>

        <SectionCard title="9. Termination of service and refund of fees">
          <p>
            The Research Analyst reserves the right to suspend or terminate the
            provision of research services to clients in the event of suspension
            or cancellation of its registration with SEBI. In case the
            certificate of registration of the Research Analyst is suspended for
            a period exceeding sixty (60) days or is cancelled, the Research
            Analyst shall refund the subscription fees to the client on a
            pro-rata basis for the period from the effective date of such
            suspension or cancellation to the end of the subscription period.
          </p>
        </SectionCard>

        <SectionCard title="10. Grievance redressal and dispute resolution">
          <p>
            For any support-related grievances, including issues related to
            non-receipt of reports or deficiencies in service, clients must
            email their concerns to
            <span className="text-blue-600 underline underline-offset-2 hover:text-blue-400">
              wealthfino@gmail.com
            </span>
            . If unresolved, grievances must be escalated to the designated
            grievance officer. All grievances will be addressed within 7-10
            business days or as per latest SEBI RA Regulations.
          </p>
          <p>
            <span className="font-semibold">Krishna Kumar Pathak:</span>{" "}
            <span className="text-blue-600 underline underline-offset-2 hover:text-blue-400">
              Skrishna.sk4@gmail.com
            </span>
          </p>

          <p>
            For more details regarding grievance-related matters, please refer
            to the grievance redressal section of our website:
            <span className="text-blue-600 underline underline-offset-2 hover:text-blue-400">
              https://krishnapathak.com/redressal-of-grievance/
            </span>
          </p>
        </SectionCard>

        <SectionCard title="11. Use of Research Reports">
          <p>
            All research reports and related information are confidential and
            intended solely for the subscriber. Unauthorized distribution,
            reproduction, or use of these materials is strictly prohibited.
            Clients must independently assess all recommendations, and the
            Research Analyst assumes no responsibility for any losses incurred.
          </p>
        </SectionCard>

        <SectionCard title="12. Mandatory Notice">
          <p>
            Clients shall be requested to go through Do's and Don'ts while
            dealing with RA as specified in SEBI master circular no.
            SEBI/HO/MIRSD-POD-1/P/CIR/2024/49 dated May 21, 2024 or as may be
            specified by SEBI from time to time.
          </p>
        </SectionCard>

        <SectionCard title="13.  MOST IMPORTANT TERMS AND CONDITIONS (MITC) AS PER ANNEXURE- A">
          <p>
            [Forming part of the Terms and Conditions for providing research
            services]
          </p>

          <ul>
            <li>
              1. These terms and conditions, and consent thereon are for the
              research services provided by the Research Analyst (RA) and RA
              cannot execute/carry out any trade (purchase/sell transaction) on
              behalf of, the client. Thus, the clients are advised not to permit
              RA to execute any trade on their behalf.
            </li>
            <li>
              2. The fee charged by RA to the client will be subject to the
              maximum of amount prescribed by SEBI/ Research Analyst
              Administration and Supervisory Body (RAASB) from time to time
              (applicable only for Individual and HUF Clients).
              <p className="mt-2 font-semibold">Note:</p>
              <ul className="list-disc ml-5 space-y-3 mt-4">
                <li>
                  The current fee limit is Rs 1,51,000/- per annum per family of
                  client for all research services of the RA.
                </li>
                <li>The fee limit does not include statutory charges.</li>
                <li>
                  The fee limits do not apply to a non-individual client /
                  accredited investor.
                </li>
              </ul>{" "}
              <br />
            </li>
            <li>
              3. RA may charge fees in advance if agreed by the client. Such
              advance shall not exceed the period stipulated by SEBI; presently
              it is one quarter. In case of pre-mature termination of the RA
              services by either the client or the RA, the client shall be
              entitled to seek a refund of proportionate fees only for the
              unexpired period.{" "}
            </li>
            <li>
              4. Fees to RA may be paid by the client through any of the
              specified modes like cheque, online bank transfer, UPI, etc. Cash
              payment is not allowed. Optionally the client can make payments
              through a Centralized Fee Collection Mechanism (CeFCoM) managed by
              BSE Limited (i.e. currently recognized RAASB).
            </li>
            <li>
              5. The RA is required to abide by the applicable regulations/
              circulars/ directions specified by SEBI and RAASB from time to
              time in relation to the disclosure and mitigation of any actual or
              potential conflict of interest. The RA will endeavour to promptly
              inform the client of any conflict of interest that may affect the
              services being rendered to the client.
            </li>

            <li>
              6. Any assured/guaranteed/fixed returns schemes or any other
              schemes of a similar nature are prohibited by law. No scheme of
              this nature shall be offered to the client by the RA.
            </li>
            <li>
              7. The RA cannot guarantee returns, profits, accuracy, or
              risk-free investments from the use of the RA's research services.
              All opinions, projections, and estimates of the RA are based on
              the analysis of available data under certain assumptions as of the
              date of preparation/ publication of the research report, rational
              report or recommendation report.
            </li>
            <li>
              8. Any investment made based on recommendations in research
              reports, rational reports or recommendation reports are subject to
              market risks, and recommendations do not provide any assurance of
              returns. There is no recourse to claim any losses incurred on the
              investments made based on the recommendations in the research
              report. Any reliance placed on the Research Report, Rational
              Report or Recommendation Report provided by the RA shall be as per
              the client's own judgement and assessment of the conclusions
              contained in the research report.
            </li>
            <li>
              9. The SEBI registration, Enlistment with RAASB, and NISM
              certification do not guarantee the performance of the RA or assure
              any returns to the client.
            </li>
            <li>
              10. For any grievances:
              <ul className="list-circle ml-5 space-y-2 mt-2">
                <li>
                  <span className="font-semibold">Step 1:</span> the client
                  should first contact the RA using the details on its website
                  or the following contact details:
                  <p className="mt-1">
                    <span className="text-blue-600 underline underline-offset-2 hover:text-blue-400">
                      wealthfino@gmail.com
                    </span>
                    (+91 98834 55700). If unresolved, grievances must be
                    escalated to the designated grievance officer. All
                    grievances will be addressed within 7 (seven) business days
                    or as per latest SEBI RA Regulations. For grievances and
                    dispute resolution, please contact-{" "}
                    <span className="font-semibold">Krishna Kumar Pathak:</span>{" "}
                    <span className="text-blue-600 underline underline-offset-2 hover:text-blue-400">
                      Skrishna.sk4@gmail.com
                    </span>{" "}
                    (+91 98834 55700).
                  </p>
                </li>
                <li>
                  <span className="font-semibold">Step 2:</span> If the
                  resolution is unsatisfactory, the client can also lodge
                  grievances through SEBI's SCORES platform at{" "}
                  <span className="text-blue-600 underline underline-offset-2 hover:text-blue-400">
                    <a href="https://scores.sebi.gov.in" target="_blank" rel="noreferrer">SEBI SCORES Grievance Redressal Platform</a>.
                  </span>
                </li>
                <li>
                  <span className="font-semibold">Step 3:</span> The client may
                  also consider the Online Dispute Resolution (ODR) through the
                  Smart ODR portal at{" "}
                  <span className="text-blue-600 underline underline-offset-2 hover:text-blue-400">
                    <a href="https://smartodr.in/login" target="_blank" rel="noreferrer">SEBI SMART ODR Portal</a>.
                  </span>
                </li>
              </ul>
            </li>
            <li>
              11. Clients are required to keep contact details, including email
              id and mobile number/s updated with the RA at all times.
            </li>

            <li>
              12. The RA shall never ask for the client's login credentials and
              OTPs for the client's Trading Account Demat Account and Bank
              Account. Never share such information with anyone including RA.
            </li>
          </ul>
        </SectionCard>

        <SectionCard title="14. Other Terms & Conditions">
          <ul>
            <li>
              1. Investments in the securities market are subject to market
              risks. Read all the related documents carefully before investing.
            </li>
            <li>
              2. Registration granted by SEBI, membership of a SEBI-recognized
              supervisory body (if any) and certification from NISM in no way
              guarantee the performance of the intermediary or provide any
              assurance of returns to investors.
            </li>
            <li>
              3.The securities quoted (if any) are for illustration only and are
              not recommendatory. The returns displayed (if any) are for
              informational purposes only and should not be considered
              advertisements or promotions influencing your subscription
              decisions.
            </li>
            <li>
              4. Recommendations provided may not always result in profits.
              Investing in equity and related instruments involves
              uncertainties, including company-specific and market-related
              risks. We do not assure guaranteed returns as the value of assets
              may fluctuate based on market forces like de-listing of securities
              or market closures etc.
            </li>

            <li>
              5.Past performance does not ensure future performance. Not
              withstanding all the efforts to do the best research, clients
              should understand that investing in equities involves a risk of
              loss of both income and principal. Please ensure that you fully
              understand the risks involved in investing in equities.
            </li>
            <li>
              6. The Client acknowledges and agrees that communications related
              to services provided by Mr. Krishna Kumar Pathak (SEBI Registered
              Research Analyst, Registration No. INH300009914) may be
              transmitted through various electronic channels including, but not
              limited to, websites, mobile applications, email, SMS, WhatsApp,
              or other third-party messaging platforms.
            </li>
            <p>
              While all reasonable care is taken to ensure the timely and secure
              transmission of such communications, the Client understands that
              electronic communication is inherently subject to risks.
            </p>

            <p>
              Accordingly, Mr. Krishna Kumar Pathak shall not be held liable
              under any circumstances for:
            </p>
            <ul>
              <li>
                1. Non-receipt, delay, loss, or corruption of any information or
                data shared electronically
              </li>
              <li>
                2. Any losses, direct or indirect, arising out of such
                communication failures or delays{" "}
              </li>
              <li>
                3. Errors caused by third-party service providers used for
                transmission of messages, alerts, or updates
              </li>
            </ul>

            <li>
              7. I, the Client/User, hereby declare that the information
              provided by me, including my PAN, date of birth, address, mobile
              number, and email ID, is true and correct to the best of my
              knowledge. By submitting this information, I acknowledge and
              consent to the terms and conditions set by Mr. Krishna Kumar
              Pathak (SEBI Registered Research Analyst – INH300009914) and
              authorize the use of my data for verification and regulatory
              compliance as per applicable laws.
            </li>

            <li>
              8. This communication is issued through the official mobile
              application and/or authorized communication channels of
              WealthFino, the brand name of Mr. Krishna Kumar Pathak, a SEBI
              Registered Research Analyst (Registration No. INH300009914).{" "}
            </li>

            <li>
              {" "}
              9. The views, opinions, and investment recommendations provided
              herein are solely based on my independent research, technical
              and/or fundamental analysis, and best professional judgment. These
              views are intended for informational purposes only and shall not
              be construed as investment advice or a guarantee of any returns.
            </li>
            <p>
              I, Krishna Kumar Pathak, expressly disclaim any liability for any
              direct, indirect, incidental, or consequential loss or damage
              incurred by any person acting on such information. Investors are
              solely responsible for their investment decisions and are advised
              to consult a SEBI-registered investment adviser before acting upon
              any such recommendation.
            </p>
            <li>10. Risk Disclosure on Derivatives (Futures & Options) </li>
            <p>
              As per SEBI's study titled "Analysis of Profit and Loss of
              Individual Traders Dealing in Equity F&O Segment" (Dated 25
              January 2023):
            </p>

            <ul className="list-disc ml-5 space-y-3 mt-4">
              <li>
                {" "}
                9 out of 10 individual traders in equity F&O segment incur net
                losses{" "}
              </li>
              <li>Average net trading loss is close to ₹50,000</li>
              <li>Loss-makers pay an additional 28% as transaction cost</li>
              <li>
                Profit-makers incur 15%–50% of their profits in transaction
                costs
              </li>
            </ul>
            <p>
              Derivatives trading carries high risk and is not suitable for all
              investors
            </p>
          </ul>
        </SectionCard>

        <SectionCard title="USER AGREEMENT">
          <p>
            This User Agreement ("Agreement") is a binding contract between
            Krishna Kumar Pathak, a SEBI-registered Research Analyst
            (Registration No. INH300009914) operating under the brand WealthFino
            (hereinafter "Research Analyst," "WealthFino," "we," "us," or "our")
            and you, the person who accesses or subscribes to any research
            report, commentary, website, mobile application, or other service
            offered by us (collectively, the "Services").
          </p>
          <h3>Electronic Consent & Legal Validity — Disclaimer</h3>

          <p>By proceeding, I (the User/Client) hereby:</p>

          <ul>
            <li>
              1. Provide binding electronic consent through any online
              action—clicking "Accept," ticking a box, Digital Signature, typing
              my name/OTP, or Aadhaar e-sign—which shall serve as my valid
              signature.
            </li>

            <li>
              2. Acknowledge legal recognition of such e-actions under the
              Information Technology Act 2000, Indian Evidence Act 1872 §65B,
              and relevant SEBI circulars; they carry the same force as a
              handwritten signature and are admissible as primary evidence.{" "}
            </li>

            <li>
              3. Authorize WealthFino / Mr. Krishna Kumar Pathak (SEBI RA
              INH300009914) to capture and store the IP address, timestamp, and
              device details for every material electronic interaction (e.g.,
              T&C acceptance, OTP verification, KYC submission, or purchase of
              research services) to meet statutory and SEBI compliance
              requirements.
            </li>
            <li>
              4. Accept that all records so captured are final and conclusive
              for any judicial, regulatory, or administrative purpose.
            </li>
          </ul>
        </SectionCard>

        <SectionCard title="DISCLAIMER">
          <p>
            The research reports, analysis, views, commentary, model portfolios,
            and other content shared by Krishna Kumar Pathak under the brand
            WealthFino may include Buy, Sell, or Hold recommendations on
            securities, which are issued in accordance with the SEBI (Research
            Analyst) Regulations, 2014. These recommendations are based on
            publicly available information, independent research, and personal
            analysis of the Research Analyst. The views expressed are general in
            nature and are intended solely for educational and informational
            purposes. They do not constitute personal investment advice,
            portfolio management, or an offer to buy or sell any security. Users
            are strongly advised to exercise independent judgment and consult
            their own financial advisor before making any investment decisions.
          </p>
          <br />
          <p>
            The research reports, analysis, views, commentary, model portfolios,
            and other content shared by Krishna Kumar Pathak under the brand
            WealthFino may include Buy, Sell, or Hold recommendations on
            securities, which are issued in accordance with the SEBI (Research
            Analyst) Regulations, 2014. These recommendations are based on
            publicly available information, independent research, and personal
            analysis of the Research Analyst. The views expressed are general in
            nature and are intended solely for educational and informational
            purposes. They do not constitute personal investment advice,
            portfolio management, or an offer to buy or sell any security. Users
            are strongly advised to exercise independent judgment and consult
            their own financial advisor before making any investment decisions.
          </p>

          <ul>
            <li>
              1. Reliance on any research report, opinion, or recommendation;
            </li>
            <li>
              2. Client-supplied KYC errors, omissions, or outdated information;{" "}
            </li>
            <li>
              3. Technical disruptions including third-party API failures, data
              loss, or connectivity issues;
            </li>
            <li>
              4. Misuse, forwarding, or misinterpretation of any content shared.{" "}
            </li>
          </ul>
          <p>
            The sole responsibility for all investment decisions lies with the
            user. No legal claim, complaint, or liability shall arise against
            Krishna Kumar Pathak or WealthFino in connection with the use of any
            research or content provided. By using the research, services,
            website, or mobile application, the user acknowledges, understands,
            and fully accepts this disclaimer, and further agrees to indemnify
            and hold harmless Krishna Kumar Pathak and WealthFino from any
            resulting liability or claim.
          </p>
          <br />
          <p>
            RA shall collect, store, upload and check KYC records of the clients
            with KYC Registration Agency (KRA) as specified by SEBI from time to
            time.
          </p>
          <ul>
            <li> Krishna Kumar Pathak (SEBI Registered Research Analyst)</li>
            <li>SEBI Registration No. INH300009914</li>
            <li>
              Email :{" "}
              <span className="text-blue-600 underline underline-offset-2 hover:text-blue-400">
                {" "}
                <a href="">wealthfino@gmail.com</a>
              </span>
            </li>
            <li>
              Website :{" "}
              <span className="text-blue-600 underline underline-offset-2 hover:text-blue-400">
                https://krishnapathak.com
              </span>
            </li>
            <li>
              Client agrees to KYC compliance and terms by using the services
            </li>
          </ul>

          <p>
            Please be advised that it is mandatory to thoroughly review the
            following documents: Terms and Conditions, SEBI Guidelines, Research
            Disclaimers ,Client Consent and Terms & Condition, Investor Charter,
            Grievance Redressal
          </p>
          <p>
            For detailed information, kindly visit:{" "}
            <span className="text-blue-600 underline underline-offset-2 hover:text-blue-400">
              {" "}
              www.krishnapathak.com
            </span>{" "}
          </p>
          <br />
          <span className="font-bold">
            By clicking “I Agree”, I (Client/User) confirm that I have read,
            understood, and accepted the Most Important Terms & Conditions
            (MITC), Terms & Conditions, Privacy Policy, User Consent, and SEBI
            Disclosures & Disclaimer of Mr. Krishna Kumar Pathak
            (SEBI-Registered Research Analyst, RA Reg. No. INH300009914; BSE
            Enlistment No. 5590), operating the brand Wealth Fino (brand of
            Krishna Kumar Pathak).
          </span>
          <br />
          <p>I further acknowledge that I have:</p>
          <ul>
            <li>
              1. <span className="font-bold">Viewed and read</span> the full
              MITC & Terms and Conditions before proceeding.{" "}
            </li>
            <li>
              2. <span className="font-bold">Viewed and read</span>{" "}
              (finger/stylus) within the application to record my acceptance.{" "}
            </li>
            <li>
              3. <span className="font-bold">Verified my mobile number</span>
              through OTP authentication.
            </li>
            <li>
              4.
              <span className="font-bold">
                Provided date, time, and IP address
              </span>
              details that are securely captured for compliance and audit
              purposes.
            </li>
          </ul>
          <br />

          <p>
            By completing the above steps, I provide my full and final consent
            and authorize the initiation of services. I agree that no claims of
            “non-reading,” “non-understanding,” or “non-acceptance” shall be
            entertained after this consent is recorded.
          </p>
        </SectionCard>
      </div>
    </div>
  );
}

/* ---------------------------------------
   REUSABLE CARD (NO MAP)
--------------------------------------- */
function SectionCard({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-10">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-slate-700 leading-relaxed">{children}</div>
    </div>
  );
}
