import Header from "@/components/header";
import Image from "next/image";
import React from "react";

const Employe2 = () => {
  return (
    <main className=" w-full items-center">
      <Header />
      <div className=" w-full mt-16 job-description-employe2-container">
        <div className="job-description-employe2-header">
          <h1>Taking onboard fresh graduates</h1>
        </div>
        <main className=" w-full job-description-employe2-content">
          <div className="job-description-images1 md:hidden  ">
            <Image
              width={420}
              height={400}
              src="/graduation.svg"
              alt="Graduates"
            />
          </div>
          <div className=" flex flex-col  max-md:gap-5   max-md:w-full md:w-7/12">
            <div className="  w-full ">
              <div className=" bg-[#264653] max-md:text-[14px] max-md:p-3 p-5 rounded-[30px] job-description-card-content">
                <p className=" max-md:text-[12px]">
                  Training inexperienced but qualified graduates is a very
                  successful business model for many employers. Resources spent
                  on their training pays off handsomely in the short as well as
                  long term. The graduates develop a sense of belonging with the
                  Company, which helps in their long-term association. This
                  helps in lowering manpower turnover ratio, a very important
                  parameter now-a-days in any Corporation.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <div className=" bg-[#CBBF8B] p-5 max-md:p-3  rounded-[30px] text-[#264653]  job-description-card-content">
                <p className=" max-md:text-[12px]">
                  To maintain a low turnover ratio, taking on board graduates
                  from the college campuses is a strategy employed successfully
                  by many Corporates. With our connections with many
                  Universities and colleges, we can help the Companies employ
                  their best students in final year of their graduations. We can
                  make a strategy for you by taking into account your hiring
                  needs. We can even plan for their training on campuses before
                  their joining your company.
                </p>
              </div>
            </div>
            <div className=" w-full left2">
              <div className=" bg-[#264653] p-5 max-md:p-3  rounded-[30px] job-description-card-content">
                <p className=" max-md:text-[12px]">
                  Inexperienced graduates do not carry the baggage of existing
                  management ideas developed over the years by a Company. They
                  can be molded to perfectly suit the needs of a company which
                  is so dynamic. As they do not carry the baggage of prevalent
                  management ideas; they can bring in new and fresh ideas. And
                  we are not just talking of the large savings a company will
                  accumulate over the years by employing the inexperienced
                  graduate over a seasoned operator.
                </p>
              </div>
            </div>
          </div>
          <div className="job-description-images max-md:hidden w-2/6">
            <div className="job-description-images1  ">
              <Image
                width={420}
                height={400}
                src="/graduation.svg"
                alt="Graduates"
              />
            </div>
            <div className=" justify-start items-start   job-description-images2">
              <img
                width={221}
                height={300}
                src="/building.svg"
                alt="Graduates"
              />
              <img
                height={300}
                width={300}
                src="/Employe.svg"
                alt="Graduates"
              />
            </div>
          </div>
        </main>
        <footer className="job-description-employe2-footer">
          <p>
            Let us discuss your needs – just reach us on admin@afreenintl.com
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Employe2;
