import React from "react";
import Image from "next/image";
export function FirstSection() {
  // Capitalized for consistency

  return (
    <section className="  w-full relative bg-cover bg-no-repeat">
      <div>
        <div className=" opacity-35 bg-[#264653] ">
          <Image
            src="/homepage/landing.svg"
            alt="Homepage background"
            width={300}
            height={300}
            className="w-full h-full  object-cover   top-0 left-0 z-0"
          />
        </div>
        <div className="absolute bottom-[90%] inset-56 flex items-center justify-center z-10">
          <h1 className="text-4xl font-bold text-white text-center px-4">
            Hire talent all over the world, with an EOR Platform Presented to
            you by Afreen International
          </h1>
          {/* <p className="text-xl text-white text-center mt-4"></p> */}
        </div>
      </div>
      <div className=" absolute w-full bg-[#264653] pb-10 rounded-[50px] rounded-tr-none rounded-tl-none  ">
        <div className="text-4xl mb-11 font-bold text-white text-center px-4">
          OUR SISTER COMPANIES
        </div>
        <div className=" justify-evenly flex w-full">
          <div className=" bg-[#D9D9D9] text-center font-semibold text-2xl text-black  w-[102px] h-[77px] ">
            Logo1
          </div>
          <div className=" bg-[#D9D9D9] text-center font-semibold text-2xl text-black w-[102px] h-[77px] ">
            Logo2
          </div>
          <div className=" bg-[#D9D9D9] text-center font-semibold text-2xl text-black w-[102px] h-[77px] ">
            Logo3
          </div>
          <div className=" bg-[#D9D9D9] text-center font-semibold text-2xl text-black w-[102px] h-[77px] ">
            Logo4
          </div>
          <div className=" bg-[#D9D9D9] text-center font-semibold text-2xl text-black w-[102px] h-[77px] ">
            Logo5
          </div>
        </div>
      </div>
    </section>
  );
}
