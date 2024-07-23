import Header from "@/components/header";
import React from "react";
// import "./Employe1.css";
import { FaCheckCircle } from "react-icons/fa";

const Employe1 = () => {
  return (
    <main className=" w-full items-center">
      <Header />
      <div className=" mt-32 onboarding-employe1-container w-full items-center">
        <h2 className="onboarding-h2 max-md:text-[24px] md:text-[32px]">
          Employers help themselves by helping us
        </h2>
        <div className="onboarding-image-container mb-5 md:hidden">
          <img src="/image3.svg" alt="Recruitment meeting" />
        </div>
        <div className="onboarding-first-para-container">
          <p className="onboarding-p  max-md:text-[14px]">
            Any recruitment, especially overseas ones, is a kind of
            joint-venture between the employer and the recruitment agency.
            Unfortunately, the recruitment agencies seldom get due weightage in
            the partnership. One of the most important and critical aspects of
            this partnership is providing the job description and remuneration
            package. A few employers are well prepared in this aspect – they
            have very detailed job description plan for each and very position
            they need. But a very large number of employers do not possess any
            job description, or even a remuneration package. The recruitment
            agencies in such scenarios are at a distinct disadvantage as it
            results in large rejections of profiles, which otherwise would have
            not reached them in the first place if the proper job description
            was available. This practice continues largely because many
            recruitment agencies do not address this issue for fear of
            irritating the customers. As this is equally important for any
            employer also, we take the liberty of pointing out the following
            wish list of any recruiter:
          </p>
        </div>
        <div className="onboarding-content-row  text-black">
          <div className="onboarding-text-content ">
            <div className="onboarding-list-item text-black">
              <FaCheckCircle
                size={24}
                color="green"
                className="onboarding-icon "
              />
              <div>
                <p className="onboarding-p">
                  A written document, in a proper format, is preferable. This
                  document should contain sections like:
                </p>
                <ul className="onboarding-ul">
                  <li>Job Position name</li>
                  <li>Qualifications (desired and mandatory)</li>
                  <li>Experience (desired and mandatory)</li>
                  <li>Skill set required</li>
                  <li>Age range</li>
                  <li>Proficiency of which language</li>
                  <li>Remuneration details</li>
                </ul>
              </div>
            </div>
            <div className="onboarding-list-item">
              <FaCheckCircle
                size={24}
                color="green"
                className="onboarding-icon"
              />
              <p className="onboarding-p">
                A format of the above job description is available with us,
                should it be required by any customer.
              </p>
            </div>
            <p className="onboarding-p">
              Where an employer is accredited by any international quality
              standards, a written job description is part of the quality
              requirements. It streamlines the employer’s recruitment
              formalities, as also helps in training.
            </p>
          </div>
          <div className="onboarding-image-container max-md:hidden">
            <img src="/image3.svg" alt="Recruitment meeting" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employe1;
