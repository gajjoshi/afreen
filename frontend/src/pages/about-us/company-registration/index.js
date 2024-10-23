import Header from "@/components/header";
import React from "react";

const AboutUs4 = () => {
  return (
    <main className=" flex justify-center items-center">
      <Header />
      <div className="company-registration-container pt-5 px-5 mt-32">
        <h1>Company Registration Information</h1>
        <table className="company-registration-table">
          <tbody>
            <tr>
              <td className="company-registration-label">
                Name of Recruiting Agency
              </td>
              <td>Afreen International Manpower Services</td>
            </tr>
            <tr>
              <td className="company-registration-label">Name of RC Holder</td>
              <td>Mohd Mustaqeem Khan</td>
            </tr>
            <tr>
              <td className="company-registration-label">RC Number</td>
              <td>B-0565/UP/PER/1000+/5/9024/2013</td>
            </tr>
            <tr>
              <td className="company-registration-label">RA id</td>
              <td>RA9024</td>
            </tr>
            <tr>
              <td className="company-registration-label">
                Name of all Partner / Directors in the agency
              </td>
              <td>Mohd Mustaqeem Khan, proprietor</td>
            </tr>
            <tr>
              <td className="company-registration-label">
                Complete mailing Address of the registered office
              </td>
              <td>
                Registered Office: Office 624/625, The Mall, 6th floor, Kanpur
                Nagar, The Mall Road, Kanpur 208 001.
                <br />
                Branch Office: New Delhi, 27, Khizrabad, Near Lions Kidney
                Hospital, Opposite New Friends Colony, New Delhi 110065.
                <br />
                Branch Office: Mumbai, G12, Kohinoor Mall, Kurla (West), Mumbai
                400070.
              </td>
            </tr>
            <tr>
              <td className="company-registration-label">
                Date of First Registration issued to RA
              </td>
              <td>14-02-2014</td>
            </tr>
            <tr>
              <td className="company-registration-label">Date of Validity</td>
              <td>01-01-2024</td>
            </tr>
            <tr>
              <td className="company-registration-label">Services Offer</td>
              <td>Overseas recruitment</td>
            </tr>
            <tr>
              <td className="company-registration-label">Mode of Payment</td>
              <td>Net Banking / NEFT / RTGS / CHEQUE / DEMAND DRAFT</td>
            </tr>
            <tr>
              <td className="company-registration-label">Cost of Services</td>
              <td>
                In accordance with rules promulgated by Ministry of Foreign
                Affairs, Government of India.
              </td>
            </tr>
            <tr>
              <td className="company-registration-label">
                Grievance redressal Mechanism
              </td>
              <td>
                1. Submit grievance to: support@afreenintl.in
                <br />
                2. Escalation of grievances to: gm@afreenintl.in
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AboutUs4;
