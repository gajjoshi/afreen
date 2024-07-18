import React from "react";
import Image from "next/image";
export function FourthSection() {
  return (
    <div className="  h-full  relative bg-covr bg-no-repeat">
      <div className="h-full w-auto opacity-35 bg-[#264653] ">
        <Image
          src="/homepage/sixthsection/image1.svg"
          alt="Homepage background"
          width={100}
          height={100}
          className="w-full h-full max-md:hidden    z-0"
        />
        <Image
          src="/homepage/sixthsection/image2.jpg"
          alt="Homepage background"
          width={300}
          height={300}
          className="w-full h-full md:hidden    z-0"
        />
      </div>
      <div className="absolute bottom-[90%] max-md:bottom-[0%] max-md:inset-0 max-md:px-5 inset-56 flex items-center justify-center z-10">
        <div className="max-md:w-full max-md:gap-2 md:min-w-[1171px] h-[199px] max-md:h-fit p-5 md:p-10 flex justify-between bg-[#264653] max-md:rounded-[15px] rounded-[30px]">
          <div className="flex max-md:pr-4 max-md:gap-1 gap-5 w-1/3 flex-col items-center border-r-[1px] border-gray-400 text-center">
            <div className="text-4xl max-md:text-2xl text-[#CBBF8B]">150+</div>
            <div className="text-xl max-md:text-sm text-white">
              Companies Served
            </div>
          </div>
          <div className="flex max-md:gap-1 gap-5 w-1/3 flex-col items-center text-center">
            <div className="text-4xl max-md:text-2xl text-[#CBBF8B]">1000+</div>
            <div className="text-xl max-md:text-sm text-white">
              Happy Clients
            </div>
          </div>
          <div className="flex max-md:pl-4 max-md:gap-1 gap-5 w-1/3 flex-col items-center border-l-[1px] border-gray-400 text-center">
            <div className="text-4xl max-md:text-2xl text-[#CBBF8B]">20+</div>
            <div className="text-xl max-md:text-sm text-white">Countries</div>
          </div>
        </div>
      </div>
    </div>
  );
}
