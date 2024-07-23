import Header from "@/components/header";
import React from "react";

import { FaCheckCircle } from "react-icons/fa";

const Support1 = () => {
  return (
    <main className=" felx justify-center">
      <Header />
      <div className="support1-container mt-32">
        <h1 className="short-term-visas-heading">
          Employer sponsored short term visas
        </h1>
        <p>
          Employment visas is a very valuable and costly commodity – Employers
          use it very carefully. Regular employment visas are for a long term
          period and cannot be used for short term projects. Often, it is
          challenging for employers to get short term work visas for their
          projects. A work around for this challenge is to Employer Sponsored
          Short Term work visas.
        </p>
        <p>
          Employer Sponsored Short Term Work Visa is a work around for this
          challenge. As an example, if the employer is based in a gulf country,
          and they require short term workers from India. Rather than recruiting
          the workers under his sponsorship, the employer subcontracts part of
          his project to a Sub-Contractor from India. The likely scenario in
          this case is as follows
        </p>
        <ul className="short-term-visas-list mt-3">
          <li>
            <FaCheckCircle className="check-icon" />
            The employer subcontracts a part of the work to a Contractor, say in
            India,
          </li>
          <li>
            <FaCheckCircle className="check-icon" />
            The contractor has documents to establish that he is a bonafide
            Contractor. Usually it is membership of a local Chamber of Commerce,
            in India.
          </li>
          <li>
            <FaCheckCircle className="check-icon" />
            The Contractor in India, under the sponsorship of the Employer,
            approaches local Embassy in India with a request for short term work
            visas.
          </li>
        </ul>
        <p>
          The Contractor needs to establish his bonafides as a Contractor.
          Documents to establish the same are:
        </p>
        <ul className="short-term-visas-list mt-3">
          <li>
            <FaCheckCircle className="check-icon" />
            Contractor’s license
          </li>
          <li>
            <FaCheckCircle className="check-icon" />
            Contractor’s membership of local chamber of commerce
          </li>
          <li>
            <FaCheckCircle className="check-icon" />
            Contractor’s Financials of last 3 years
          </li>
          <li>
            <FaCheckCircle className="check-icon" />
            Employers Order on the Contractor to do the contracting work
          </li>
          <li>
            <FaCheckCircle className="check-icon" />
            Employer’s Commercial Registration copy
          </li>
        </ul>
        <p>
          A note of caution: Getting Employer Sponsored Short Term Work Visas
          often is difficult, as the Employer’s Embassy is not easily convinced
          of the genuineness of the request. However, with careful selection of
          the Contractor and providing the required documents, it is indeed
          possible to convince the Embassy of the bonafides of the request,
          hence approval for the visas.
        </p>
      </div>
    </main>
  );
};

export default Support1;
