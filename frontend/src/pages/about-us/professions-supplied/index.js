import Header from "@/components/header";
import React from "react";

const professions = [
  ["Drivers", "Electricians", "Office Boy - Tea Boy"],
  ["Shunters", "Plumbers", "Accounting and Finance"],
  ["Forklift operators", "Carpenters", "Agriculture And Horticulture"],
  [
    "Warehouse operatives",
    "Plant operators",
    "Airconditioning And Refrigeration",
  ],
  [
    "Pickers/Packers",
    "Airline Cabin Crew",
    "Anti-Corrosion Treatments – Galvanizing",
  ],
  ["Administrators", "Gas fitters", "Automobile Engineering"],
  ["Team leaders", "Glazers", "Beverages"],
  [
    "Logistics coordinators",
    "Ironworkers",
    "Buildings – Real Estate and Infrastructure",
  ],
  ["Supply chain managers", "Fabricators", "Can Manufacturing"],
  ["Transportation managers", "Fitters", "Cement Plants"],
  ["Masons", "Labourers", "Chemical"],
  ["Shuttering Carpenters", "Landscapers", "Chefs"],
  ["Welders", "Roofers", "Cleaning And Maintenance Services"],
  ["Bricklayers", "Tilers", "Cold Storage Handling And Maintenance"],
  [
    "Computer Software",
    "Electrical Contracting and Maintenance",
    "Flour Mills",
  ],
  ["Computers Hardware", "Electronics Engg.", "Food Processing"],
  ["Concrete Blocks/Precast", "Exhibitions", "Glass Manufacturing"],
  ["Education", "Ferrous Foundries", "Health Industry"],
  [
    "Heavy Engineering - TLT, Pipes, Vessels",
    "Hospitality – Luxury Hotels",
    "Instrumentation",
  ],
  ["Logistics Services", "Marketing Services", "Non-Ferrous Foundries"],
  ["Oil & Gas", "Oil & Gas shutdown projects", "Power Distribution"],
  [
    "Power Generation",
    "Readymix Concrete",
    "Steel Buildings – Portable and Pre-fabricated",
  ],
  ["Surface Coatings – Powder Coatings", "", ""],
];

const AboutUs = () => {
  return (
    <main className=" items-center flex justify-center">
      <Header />
      <div className=" px-5 pt-5 w-full ProfessionsWeHaveSupplied-container  mt-32">
        <h1 className="ProfessionsWeHaveSupplied-heading">
          Professions we have supplied
        </h1>
        <table className="ProfessionsWeHaveSupplied-table">
          <tbody>
            {professions.map((row, index) => (
              <tr key={index}>
                {row.map((profession, idx) => (
                  <td key={idx}>{profession}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AboutUs;
