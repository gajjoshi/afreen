import React from "react";
export function FirstSection() {
  // Capitalized for consistency

  return (
    <section className=" max-md:mt-[115px]  w-full relaive bg-cover bg-[#264653] bg-no-repeat">
      <div>
        <div className=" max-md:h-screen opacity-30 bg-[#264653] ">
          <img
            src="/homepage/landing.svg"
            alt="Homepage background"
            width={300}
            height={300}
            className="w-full h-full  object-cover   top-0 left-0 z-0"
          />
        </div>
        <div className="absolute max-md:w-full max-md:bottom-0 max-md:inset-0 bottom-[90%] inset-56 flex items-center justify-center z-10">
          <h1 className="text-4xl max-sm:text-2xl font-bold text-white text-center px-4">
            Hire talent all over the world, with an EOR Platform Presented to
            you by Afreen International
          </h1>
          {/* <p className="text-xl text-white text-center mt-4"></p> */}
        </div>
      </div>
      <div className="  w-full  pt-10 bg-white pb-10 ">
        <div className="text-4xl uppercase mb-11 font-bold text-[#264653] text-center px-4">
          Trusted By
        </div>
        <div className=" md:justify-evenly max-md:pl-5 items-center   mx-auto scrollbar-hidden w-full flex    max-md:overflow-y-scroll  ">
          <section className="flex-shrink-0">
            <img
              alt="Image"
              src="/homepage/firstSection/image1.svg"
              height={75}
              width={165}
            />
          </section>

          <section className="flex-shrink-0">
            <img
              alt="Image"
              src="/homepage/firstSection/image2.svg"
              height={75}
              width={165}
            />
          </section>
          <section className="flex-shrink-0">
            <img
              alt="Image"
              src="/homepage/firstSection/image3.svg"
              height={75}
              width={165}
            />
          </section>
          <div className="flex-shrink-0">
            <img
              alt="Image"
              src="/homepage/firstSection/image4.svg"
              height={75}
              width={165}
            />
          </div>
        </div>
      </div>
      <div className=" text-6xl max-md:text-xl max-md:h-[100px] w-full h-[199px] items-center flex justify-center bg-[#264653]  ">
        Bridging Talent with Opportunity
      </div>
    </section>
  );
}
