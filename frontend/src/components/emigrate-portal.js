import React, { useState } from "react";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const EmigratePortal = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="emigrate-portal-support2-container w-full mt-16">
      <h1>Registration on emigrate portal</h1>
      <div className="emigrate-portal-accordion-section">
        <div
          className="emigrate-portal-accordion-header"
          onClick={() => toggleSection("section1")}
        >
          <h2>What is ECNR/ECR Passport?</h2>
          {openSections["section1"] ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {openSections["section1"] && (
          <div className="emigrate-portal-accordion-content">
            <p>
              If a Passport holder in India has not passed School Level
              examination, his Passport contains the endorsement of Emigration
              Clearance Required, or ECR Passports. If the Passport holder has
              passed SSC, or he is 50+ years old, or has worked in a foreign
              country for more than 2 years, then this endorsement is deleted,
              in which case the Passport is said to be ECNR, for Emigration
              Clearance Not Required.
            </p>
          </div>
        )}
      </div>
      <div className="emigrate-portal-accordion-section">
        <div
          className="emigrate-portal-accordion-header"
          onClick={() => toggleSection("section2")}
        >
          <h2>The Indian Emigration Act</h2>
          {openSections["section2"] ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {openSections["section2"] && (
          <div className="emigrate-portal-accordion-content">
            <p>
              A vast majority of overseas job seekers in India do not complete
              their final School examinations, but are highly skilled, committed
              and keen job seekers. Since they are not educated, they are
              subject to exploitation by unscrupulous elements in India. To
              safeguard their interests, the Indian Government has passed an
              Act, known as The Emigration Act. As per the Act, all Indian
              Passports with ECR endorsement must be subjected to clearance by
              Indian Government prior to their departure.
            </p>
          </div>
        )}
      </div>
      <div className="emigrate-portal-accordion-section">
        <div
          className="emigrate-portal-accordion-header"
          onClick={() => toggleSection("section3")}
        >
          <h2>Grant of Emigration Clearance</h2>
          {openSections["section3"] ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {openSections["section3"] && (
          <div className="emigrate-portal-accordion-content">
            <p>
              Such emigration clearances are granted by the Indian Government
              when the employer and the employment terms are registered on the
              portal www.emigrate.gov.in. This Portal is very user-friendly and
              all processes are self-explanatory and simple indeed. In case
              Users have any query about the process, our support is always
              available on 0091-22-49676888 or support@afreenintl.in
            </p>
          </div>
        )}
      </div>
      <div className="emigrate-portal-accordion-section">
        <div
          className="emigrate-portal-accordion-header"
          onClick={() => toggleSection("section4")}
        >
          <h2>Advantages of registering on the portal www.emigrate.gov.in</h2>
          {openSections["section4"] ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {openSections["section4"] && (
          <div className="emigrate-portal-accordion-content">
            <p>
              When an employer registers on the portal, he will have access to
              the vast majority of Indians with ECR endorsement. The recruitment
              is therefore smooth and fast.
            </p>
          </div>
        )}
      </div>
      <div className="emigrate-portal-accordion-section">
        <div
          className="emigrate-portal-accordion-header"
          onClick={() => toggleSection("section5")}
        >
          <h2>The Indian Emigration Act</h2>
          {openSections["section5"] ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {openSections["section5"] && (
          <div className="emigrate-portal-accordion-content">
            <p>
              Support is just a phone call or email away. For any query on this
              subject, please reach us on 0091-22-49676888, or
              support@afreenintl.in
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmigratePortal;
