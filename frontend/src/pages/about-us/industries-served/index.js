import Header from "@/components/header";
import React from "react";
// import "./AboutUs5.css";

const industries = [
  [
    "Hospitality",
    "Healthcare",
    "Pharmacies and drugs",
    "Bakeries",
    "Beverages",
    "Power Generation",
    "Power Distribution",
    "Civil construction – Real Estate",
    "Civil Constructions – Infrastructure",
    "Steel Rolling Mills",
    "Steel Foundries",
    "Non-Ferrous foundries",
    "Steel Fabrication – Transmission ...",
    "Housekeeping staff",
  ],
  [
    "Steel",
    "Hotels",
    "Plastic Manufacturing",
    "Airline Cabin Crew",
    "Education – Universities, Colleges...",
    "Computer Software Development",
    "Computer Hardware and Networking",
    "I.T. Infrastructure – setting up and ...",
    "Water Treatment",
    "Sewage Treatment Facilities",
    "Security",
    "Banking",
    "Senior Hospitality Management",
  ],
  [
    "Accounts",
    "Finance",
    "Logistics – courier",
    "Logistics – Transport",
    "Operation & Maintenance",
    "Production Planning & Control",
    "Sales and Marketing",
    "Oil & Gas",
    "Refineries",
    "Waiters",
    "Bar tenders",
    "Chefs",
    "Front Office staff",
  ],
];

const AboutUs5 = () => {
  return (
    <main className=" flex items-center">
      <Header />
      <div className="industries-served-container pt-5 px-5 mt-16 w-full">
        <h2 className="industries-served-heading">Industries we have served</h2>
        <div className="industries-served-content-box">
          <div className="industries-served-table">
            {industries.map((column, colIndex) => (
              <div className="industries-served-column" key={colIndex}>
                {column.map((industry, index) => (
                  <div className="industries-served-cell" key={index}>
                    {industry}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs5;
