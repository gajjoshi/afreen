import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Header from "@/components/header";

const Support3 = () => {
  return (
    <main className=" flex justify-center">
      <Header />
      <div className="work-from-home-container mt-16">
        <div className="work-from-home-image-content md:hidden">
          <Image
            src="/image22.svg"
            alt="Work from home"
            height={33}
            width={266}
          />
        </div>
        {/* <div className=" px-5"> */}
        <h1>Work from home model</h1>
        <div className="work-from-home-content-wrapper">
          <div className="work-from-home-text-content  pr-5">
            <p>
              The COVID-19 pandemic has forced companies to remodel their
              business plans. Every Company has adopted Work From Home model
              (WFH), and surprisingly all stakeholders – the employers,
              employees, and clients of the employers – are very happy with the
              model. Employers are getting on an average 25%+ productivity and
              savings in cost, employees get the convenience of working from
              home and saving in transportation time and costs, and the clients
              of the employer have lesser issues with their deliverables.
            </p>
            <p>
              The only cause of concern to the employers and their clients was
              the matter of confidentiality of client's data, which is of
              topmost concern to any client and the employers. But the
              technology to address this concern is in place and the model is so
              successful that many large Corporations would continue this Work
              from Home model to a minimum 75% of their work force, even after
              returning to normalcy after the pandemic.
            </p>
            <p>
              Before the advent of this WFH model, recruitment was a cost that
              could not be avoided. The WFH is no longer a concept to be proved,
              as it is practiced by all Corporations in the world. We can help
              you set up the environment of WFH for you, by:
            </p>
            <ul className="work-from-home-points-list">
              <li>
                <FaCheckCircle className="work-from-home-check-icon" />
                Identifying and sourcing the manpower you need that would work
                from their homes.
              </li>
              <li>
                <FaCheckCircle className="work-from-home-check-icon" />
                Be responsible for maintenance of I.T. infrastructure at the
                homes of the workers with the primary aim of Continuity of
                business and confidentiality of your data as per your policies.
              </li>
              <li>
                <FaCheckCircle className="work-from-home-check-icon" />
                Maintain outputs as per objectives set by you and agreed by us.
              </li>
              <li>
                <FaCheckCircle className="work-from-home-check-icon" />
                Compute Performances transparently and objectively.
              </li>
              <li>
                <FaCheckCircle className="work-from-home-check-icon" />
                You can reward/penalize us as per benchmarks set.
              </li>
              <li>
                <FaCheckCircle className="work-from-home-check-icon" />
                Please do reach us to discuss how adopting WFH will prove to be
                a game changer for your industry.
              </li>
            </ul>
          </div>
          <div className="work-from-home-image-content max-md:hidden">
            <Image
              src="/image22.svg"
              alt="Work from home"
              height={33}
              width={266}
            />
          </div>
        </div>
        {/* </div> */}
      </div>
    </main>
  );
};

export default Support3;
