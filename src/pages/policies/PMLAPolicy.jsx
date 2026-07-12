import React from "react";

const PMLAPolicy = () => {
  return (
    <section className="bg-white dark:bg-[#0b0f19] rounded-2xl text-black dark:text-slate-200 py-2 px-2">
      <div className="max-w-6xl mx-auto backdrop-blur rounded-2xl shadow-xl p-6 md:p-10">
        {/* TITLE */}
        <h1 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-8">
          PMLA (Anti Money Laundering) Policy
        </h1>

        {/* INTRODUCTION */}
        <Section title="Introduction">
          <p>
            This policy is framed and adopted as a requirement by SEBI under the
            Prevention of Money Laundering Act, 2002 ("PMLA"). The policy
            provides a framework with respect to anti money laundering measures
            to be taken by Krishna Kumar Pathak (Individual), as a SEBI
            registered Research Analyst vide Registration Number INH300009914.
          </p>
        </Section>

        {/* OBJECTIVE */}
        <Section title="I. Objective of the PMLA Policy">
          <p>The objective of the PMLA policy are as follows:</p>

          <ul>
            <li>
              1. To prevent Krishna Kumar Pathak from being used, intentionally
              or unintentionally, by criminal elements for money laundering or
              terrorist financing activities.
            </li>
            <li>
              2. Create awareness and provide clarity on KYC standards and AML
              measures.
            </li>
            <li>
              3. To have a proper Client Due Diligence (CDD) process before
              registering clients.
            </li>
            <li>4. To monitor and report suspicious transactions.</li>
            <li>
              5. To monitor / maintain records of all cash transactions done by
              the client of the value of more than Rs.10 lacs.
            </li>
          </ul>
        </Section>

        {/* CDD */}
        <Section title="II. Client Due Diligence (CDD) Process">
          <p>
            As a part of Client Due Diligence process, Krishna Kumar Pathak will
            do the following:
          </p>
          <li>
            1. Maintain a record of Know Your Customer (KYC) documents (i.e
            valid identity proof and address proof) obtained from all the client
            at the time of on boarding the clients.
          </li>
          <li>
            2. In order to verify the genuineness of the clients, to speak with
            the clients before proceeding with any advisory services.
          </li>

          <li>
            3. The records between the client and Krishna Kumar Pathak to be
            maintained in proper order.
          </li>
        </Section>

        {/* CLIENT ACCEPTANCE */}
        <Section title="III. Policy for Acceptance of Client">
          <p>Krishna Kumar Pathak will ensure that:</p>

          <ul>
            <li>
              1. No account shall be opened in fictitious name or on an
              anonymous basis.
            </li>
            <li>
              2. No account will be opened if the fee for services is offered by
              the client in cash.{" "}
            </li>

            <li>
              3. No account is opened where Krishna Kumar Pathak is unable to
              apply appropriate CDD measures/ KYC policies. This shall apply to
              cases where the information provided to Krishna Kumar Pathak is
              suspected to be non - genuine, or there is perceived non -
              cooperation of the client in providing full and complete
              information.
            </li>
            <li>
              4. It will be ensured that the identity of the client does not
              match with any person having known criminal background or is not
              banned in any other manner or is included in the list of
              individuals and entities which are subject to various sanction
              measures such as freezing of assets/accounts, denial of financial
              services etc., as approved by the Security Council Committee
              established pursuant to various United Nations' Security Council
              Resolutions (UNSCRs) can be accessed at its website at
              <a
                href="https://www.un.org/securitycouncil/sanctions/1267/aq_sanctions_list"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline underline-offset-2 hover:text-blue-300"
              >
                https://www.un.org/sc/committees/1267/consolist.shtml
              </a>
            </li>

            <li>
              5. Each client shall be classified in low or medium or high risk
              categories depending upon the risk perception. Such risk may be
              arrived considering various factors of risk perception of the
              client having regard to:
            </li>

            <ul className="list-disc pl-6 mt-2">
              <li>
                clients' location (registered office address, correspondence
                addresses and other addresses if applicable)
              </li>
              <li>nature of business activity, trading turnover etc. and</li>
              <li>manner of making payment for transactions undertaken</li>
            </ul>

            <li>
              6. Clients of Special Category (CSC) require higher degree of due
              diligence and regular update of Know Your Client (KYC) profile.
              Clients of Special Category (CSC) shall include:
            </li>
            <ul className="list-disc pl-6 mt-2">
              <li>Non - resident clients</li>
              <li>High net-worth clients</li>
              <li>
                Trust, Charities, Non-Governmental Organizations (NGOs)and
                organizations receiving donations
              </li>
              <li>
                Companies having close family shareholdings or beneficial
                ownership
              </li>
              <li>Politically Exposed Persons (PEP)</li>
              <li>Companies offering foreign exchange offerings</li>
              <li>
                Clients in high risk countries where existence / effectiveness
                of money laundering controls is suspect
              </li>
              <li>Non face to face clients</li>
              <li>
                Clients with dubious reputation as per public information
                available etc.
              </li>
            </ul>
          </ul>
        </Section>

        {/* SUSPICIOUS TRANSACTIONS */}
        <Section title="IV. Suspicious Transactions">
          <ul>
            <li>
              1. Krishna Kumar Pathak will ensure that that appropriate steps
              are taken to enable suspicious transactions to be recognized based
              on the circumstances like
            </li>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Clients whose identity verification is difficult or client is
                not ready to cooperate
              </li>
              <li>
                Where the source of funds of the clients is not clear or not
                keeping with clients apparent standing/ business activity
              </li>
              <li>Substantial increases in business without apparent cause</li>
              <li>Clients based in high risk jurisdictions</li>
              <li>
                Clients transferring large sums of money to or from overseas
                locations with instructions for payment in cash
              </li>
              <li>
                Attempted transfer of investment proceeds to apparently
                unrelated third parties
              </li>
              <li>
                Unusual transactions by CSCs and businesses undertaken by
                offshore banks/financial services, businesses reported to be in
                the nature of export- import of small items
              </li>
            </ul>

            <li>
              2. In the event of any suspicious transaction, Krishna Kumar
              Pathak will make a report based on the reference to the clients,
              transactions and the nature/ reason of suspicion. The report will
              be submitted to the Director, Financial Intelligence Unit-India
            </li>
            <li>
              3. In the event where the transactions are abandoned or aborted by
              clients on being asked to give some details or to provide
              documents, Krishna Kumar Pathak will report all such attempted
              transactions in Suspicious Transaction Reports, even if not
              completed by clients, irrespective of the amount of the
              transaction
            </li>
          </ul>
        </Section>

        {/* MONITORING */}
        <Section title="V. Monitoring of Transactions">
          <p>The transactions shall be monitored in the following manner:</p>

          <ul>
            <li>
              1. Special attention shall be paid to all complex unusually large
              transactions / patterns which appear to have no economic purpose.
            </li>
            <li>
              2. Internal threshold limits for each class of client accounts
              shall be defined and special attention shall be paid to
              transactions which exceeds these limits.
            </li>
            <li>
              3. The background including all documents/office records
              /memorandums/clarifications sought pertaining to such transactions
              and purpose thereof shall also be examined carefully and findings
              shall be recorded in writing.
            </li>

            <li>
              4. Further the findings, records and related documents shall be
              made available to auditors and also to SEBI/stock
              exchanges/FIUIND/ other relevant Authorities, during audit,
              inspection or as and when required.
            </li>

            <li>
              5. These records shall be preserved for a period of five years
              from the date of transaction with such client.
            </li>

            <li>
              6. The following transactions shall be monitored at all times:
            </li>
            <ul className="list-disc pl-6 mt-2">
              <li>
                all cash transactions of the value of more than ten lakh rupees
                or its equivalent in foreign currency
              </li>
              <li>
                all series of cash transactions integrally connected to each
                other which have been individually valued below rupees ten lakh
                or its equivalent in foreign currency where such series of
                transactions have taken place within a month and the monthly
                aggregate exceeds an amount of ten lakh rupees or its equivalent
                in foreign currency
              </li>
              <li>
                all cash transactions where forged or counterfeit currency notes
                or bank notes have been used as genuine or where any forgery of
                a valuable security or a document has taken place facilitating
                the transactions
              </li>
              <li>
                all suspicious transactions whether or not made in cash and by
                way of cheques, pay orders, travellers cheques, demand drafts,
                loan and advances, money transfer or remittances in favour of
                own clients or non-clients from India or abroad and to third
                party beneficiaries in India or abroad, credits or debits into
                or from any non-monetary accounts such as d-mat account
              </li>
            </ul>

            <li>
              7. Periodic review of the existing account shall be conducted to
              ensure that no existing accounts are linked to any of the entity
              or individual included in the list by Security Council Committee.
              Any resemblance found to be reported to SEBI and FIU-IND.
            </li>
          </ul>
        </Section>

        {/* RECORD KEEPING */}
        <Section title="VI. Record Keeping and Retention">
          <ul>
            <li>
              1. In case of suspicious transactions, Krishna Kumar Pathak will-
            </li>
            <ul className="list-disc pl-6 mt-2">
              <li>
                maintain a record of the background details and justification
                for the transactions
              </li>
              <li>
                maintain such records as are sufficient to permit trail of
                individual transactions (including the amount and types of
                currencies involved, if any) so as to provide, if necessary,
                evidence for prosecution of any criminal behaviour
              </li>
              <li>
                retain the following information for the accounts of the clients
                in order to maintain a satisfactory audit trail so that in case
                of any suspected drug related or other laundered money or
                terrorist property, the competent investigating authorities can
                trace through the audit trail for reconstructing a financial
                profile of the suspected account:
              </li>
              <ul>
                <li>i. the beneficial owner of the account; and</li>
                <li>
                  ii. for selected transactions, the origin of funds, the form
                  in which the funds were offered or withdrawn, e.g. cheques,
                  demand drafts etc, the identity of the person undertaking the
                  transaction, the destination of the funds and, the form of
                  instruction and authority
                </li>
              </ul>
            </ul>

            <li>
              2. Record of the transactions shall be preserved and those
              transactions of a suspicious nature shall be reported to the
              Director, FIU-IND.
            </li>
            <li>
              3. Record of information related to transactions, whether
              attempted or executed, which are reported to the Director, FIU-IND
              and shall be maintained and preserved for a period of five years
              from the date of the transaction with the client. In situations
              where the records relate to on-going investigations or
              transactions which have been the subject of a suspicious
              transaction reporting, they shall be retained until it is
              confirmed that the case has been closed.
            </li>
          </ul>
        </Section>

        {/* INFORMATION */}
        <Section title="VII. Information to be Maintained">
          <p>
            Following information in respect of all transactions referred to
            Clause V.f of this policy shall be maintained:
          </p>

          <ul>
            <li>1. the nature of the transactions</li>
            <li>
              2. the amount of the transaction and the currency in which it is
              denominated
            </li>
            <li>3. the date on which the transaction was conducted and</li>
            <li>4. the parties to the transaction.</li>
          </ul>
        </Section>

        {/* FIU REPORTING */}
        <Section title="VIII. Reporting to Financial Intelligence Unit-India">
          <div className="  rounded-xl p-4">
            <p>
              In terms of the PML Rules, Krishna Kumar Pathak will report
              information relating to cash and suspicious transactions to the
              Director, Financial Intelligence Unit-India (FIU-IND) at the
              following address:
            </p>
            <p className="font-semibold text-black dark:text-white">
              Director, Financial Intelligence Unit – India (FIU-IND)
            </p>
            <p>6th Floor, Hotel Samrat</p>
            <p>Chanakyapuri, New Delhi – 110021</p>
            <a
              href="https://fiuindia.gov.in"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              https://fiuindia.gov.in
            </a>
          </div>
        </Section>

        {/* OFFICER DETAILS */}
        <Section title="IX. Appointment of Principal Officer and Designated Director">
          <p>
            To ensure effective discharge of our legal obligations, to report
            suspicious transactions to the authorities and overall supervision
            and compliance, the following shall be the "Principal Officer" and
            "Designated Director" who would act as a central reference point for
            the identification and assessment of potentially suspicious
            transactions and in facilitating onward reporting of suspicious
            transactions to FIU:
          </p>

          <ul>
            <li>Name: Krishna Kumar Pathak</li>
            <li>Designation: Research Analyst</li>
            <li>
              Email Id:
              <a
                href="mailto:skrishna.sk4@gmail.com"
                className="text-blue-400 underline underline-offset-2 cursor-pointer transition-colors duration-200 hover:text-blue-300"
              >
                Skrishna.sk4@gmail.com
              </a>
            </li>
            <li>Phone Number: +91 9883455700</li>
            <li>SEBI Registration No. INH300009914</li>
            <li>BSE Enlistment No.: 5590</li>
          </ul>
        </Section>

        {/* RESPONSIBILITIES */}
        <Section title="Rights, Obligation and Responsibilities of Principal Officer">
          <ul>
            <li>
              1. The principal office shall have all time access to customer
              identification data and other CDD information.
            </li>
            <li>
              2. The principal officer shall have complete independence and
              authority to access.
            </li>
            <li>
              3. The principal officer shall ensure that the PMLA Policy
              framework is implemented effectively.
            </li>
            <li>
              4. The principal officer shall ensure data generated on FIU on
              suspicious transaction is regularly and promptly downloaded to
              analyze, identify and report transactions of suspicious nature to
              FIU-IND directly.
            </li>
            <li>
              5. The principal officer shall ensure that the records and
              information in relation to all client and transaction are
              available on timely basis to the competent authority.{" "}
            </li>
            <li>
              6. The principal officer shall ensure that there is a prompt
              response to any request for information, including KYC related
              information and records maintained by Krishna Kumar Pathak, made
              by the regulators, FIU-IND and other statutory authorities.
            </li>
            <li>
              7. The principal officer shall ensure all concerned staff is
              regularly updated regarding any changes / additions /
              modifications in PMLA provisions.
            </li>
          </ul>
        </Section>

        {/* DIRECTOR */}
        <Section title="XI. Rights, Obligations and Responsibilities of Designated Director">
          <ul>
            <li>
              1. The Designated Director should ensure that all the records are
              maintained as mentioned in this Policy.
            </li>
            <li>
              2. In case where the Designated Director fails to perform his
              duties, he shall be penalised and appropriate action may be taken
              against him.
            </li>
          </ul>
        </Section>

        {/* TRAINING */}
        <Section title="XII.  Employees' Hiring/ Employee's Training/ Investor Education">
          <p>Krishna Kumar Pathak will-</p>
          <ul>
            <li>
              1. have adequate screening procedures in place to ensure high
              standards when hiring employees.
            </li>
            <li>
              2. have ongoing employee training programme so that the members of
              the staff are adequately trained in Anti-Money Laundering
              standards (AML) and Combating the Financial of Terrorism (CFT)
              procedures.
            </li>
          </ul>
        </Section>

        {/* REVIEW */}
        <Section title="XIII. Review of Policy">
          <p>
            1. The policy shall be reviewed from time to time as and when
            required changes will be implemented as per the applicable rules,
            laws, acts and regulations.
          </p>
        </Section>

        {/* DISCLAIMER */}
        <div className="mt-10 border-t border-gray-200 dark:border-slate-700 pt-6">
          <p className="italic"> Disclaimer : </p>
          <p className="text-sm text-black dark:text-slate-200 italic">
            This PMLA Policy is in line with applicable SEBI regulations and
            Indian laws including the Prevention of Money Laundering Act, 2002.
            The policy is subject to change as per regulatory requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PMLAPolicy;

/* ================== REUSABLE UI ================== */

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-3">
      {title}
    </h2>
    <div className="text-black dark:text-slate-200 leading-relaxed">{children}</div>
  </div>
);
