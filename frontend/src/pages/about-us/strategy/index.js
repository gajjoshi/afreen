import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Header from "@/components/header";

const Strategy = () => {
  return (
    <main>
      <Header />
      <div className="strategy-container-strategy pt-5 px-5 mt-32">
        <h1 className="strategy-h1">
          Our strategy to address customer concerns
        </h1>
        <p className="strategy-p">
          To serve clients effectively, it is important to correctly understand
          their needs. Client needs are often implicit, in the hope we will
          understand them based on the nature of their industry. We do rise to
          such occasions and have always met with client approvals.
        </p>
        <p className="strategy-p">
          Our strategy to serve clients satisfactorily is simple:
        </p>
        <ul className="strategy-ul">
          <li className="strategy-li flex gap-2">
            <div className="bg-[#21A08B] rounded-full  p-[2px] flex-shrink-0">
              <img
                src="/homepage/thirdSection/rightTick.svg"
                width={10}
                height={10}
                alt="Checkmark"
                className=" max-md:w-3 max-md:h-3"
              />
            </div>
            Do not deviate from job descriptions
          </li>
          <li className="strategy-li flex gap-2">
            <div className=" flex items-center justify-start gap-2">
              <div className="bg-[#21A08B] rounded-full  p-[2px] flex-shrink-0">
                <img
                  src="/homepage/thirdSection/rightTick.svg"
                  width={10}
                  height={10}
                  alt="Checkmark"
                  className=" max-md:w-3 max-md:h-3"
                />
              </div>
              <div className="  ">
                Delivery – commit only what can be achieved – and then deliver
                as per the commitment.
              </div>
            </div>
          </li>
          <li className="strategy-li flex gap-2">
            <div className="bg-[#21A08B] rounded-full  p-[2px] flex-shrink-0">
              <img
                src="/homepage/thirdSection/rightTick.svg"
                width={10}
                height={10}
                alt="Checkmark"
                className=" max-md:w-3 max-md:h-3"
              />
            </div>
            Information – quick responses to their query.
          </li>
          <li className="strategy-li-s gap-4 flex flex-col items-start  ">
            <div className=" flex items-center gap-2">
              <div className="bg-[#21A08B] rounded-full  p-[2px] flex-shrink-0">
                <img
                  src="/homepage/thirdSection/rightTick.svg"
                  width={10}
                  height={10}
                  alt="Checkmark"
                  className=" max-md:w-3 max-md:h-3"
                />
              </div>
              <div className="  whitespace-nowrap">Logistic support.</div>
            </div>
            <ul className="strategy-ul-li-ul ml-10 list-disc  gap-2 ">
              <li className="strategy-ul-li-li">
                Help in Project Management related to recruitment (PERT/CPM
                techniques), including advising practical timelines and
                Milestones.
              </li>
              <li className="strategy-ul-li-li">
                Organizing travel itinerary, including air travel connections
                and Hotel accommodations.
              </li>
              <li className="strategy-ul-li-li">
                Identifying legal compliance matters in India and ensuring they
                are complied with, so that the project proceeds without any
                hitch.
              </li>
              <li className="strategy-ul-li-li">
                Accompanying your delegates throughout the India tour
              </li>
            </ul>
          </li>
          <li className="strategy-li flex gap-2">
            <div className="bg-[#21A08B] rounded-full  p-[2px] flex-shrink-0">
              <img
                src="/homepage/thirdSection/rightTick.svg"
                width={10}
                height={10}
                alt="Checkmark"
                className=" max-md:w-3 max-md:h-3"
              />
            </div>
            One-Window Service for recruitment from India and neighboring
            countries.
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Strategy;
