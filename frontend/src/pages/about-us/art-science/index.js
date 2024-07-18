import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Image from "next/image";
import Header from "@/components/header";
// import "./AboutUs3.css";

const points = [
  "Providing quality personnel is the outcome of a careful planning, implemented by a set of highly qualified and experienced personnel.",
  "Recruitment is both an Art and a Science.",
  "It is an art to assess a person’s real intention to work overseas, no matter how much interest he shows in the beginning.",
  "It is an art to identify a genuine profile from an copy-and-pasted one, as to identify fake qualification and experience certificates.",
  "It is both Art and Science to design an assessment questionnaire to reflect client needs.",
  "It is a Science to match a profile to client needs., and grade it according to the assessment parameters.",
  "And it is a pure Art to counsel a candidate who is confused and in two minds about his career prospects.",
];

const AboutUs3 = () => {
  return (
    <main className=" flex justify-center items-center">
      <Header />
      <div className="art-science-about-us3-container w-full mt-16">
        <h1 className="art-science-heading">
          The art & science of shortlisting candidates
        </h1>
        <ul className="art-science-points-list flex-col flex gap-5">
          {points.map((point, index) => (
            <li
              key={index}
              className="art-science-point-item flex md:gap-10 max-md:gap-4  items-start"
            >
              <div className="bg-[#21A08B] rounded-full   p-[2px] flex-shrink-0">
                <Image
                  src="/homepage/thirdSection/rightTick.svg"
                  width={32}
                  height={32}
                  alt="Checkmark"
                  className=" max-md:w-3 max-md:h-3"
                />
              </div>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default AboutUs3;
