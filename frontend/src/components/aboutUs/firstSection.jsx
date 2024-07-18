import Image from "next/image";
import React from "react";

export function FirstSection() {
  return (
    <div className=" max-md:px-5 max-md:pt-5 max-md:gap-5  max-md:items-center justify-end gap-40 max-md:flex-col md:rounded-bl-[300px] bg-[#264653] flex ">
      <Image
        alt="Image"
        src="/aboutUs/firstSection/image1.svg"
        height={278}
        width={421}
        className=" md:hidden h-fit"
      />
      <div className="   md:w-1/3 max-md:w-[100%] max-md:gap-5 gap-10 pb-20 justify-center flex flex-col">
        <div className=" text-4xl max-md:text-2xl">
          About Afreen International
        </div>
        <div className="">
          Welcome to Afreen International Tours & Travels, your trusted partner
          in connecting skilled manpower from South Asia to esteemed companies
          across the Middle East. With a rich legacy of 38 years in the
          industry, we stand as a beacon of reliability and excellence in the
          realm of overseas manpower solutions.
        </div>
      </div>
      <div className=" max-md:hidden relative  top-16 flex gap-5 flex-col">
        <div className=" flex gap-5 ">
          <Image
            alt="Image"
            src="/aboutUs/firstSection/image1.svg"
            height={278}
            width={421}
          />
          <Image
            alt="Image"
            src="/aboutUs/firstSection/image2.svg"
            height={273}
            width={273}
            className=" max-md:hidden"
          />
        </div>
        <div className="  justify-between flex">
          <Image
            alt="Image"
            src="/aboutUs/firstSection/image3.svg"
            height={287}
            width={237}
            className=" max-md:hidden"
          />
          <Image
            alt="Image"
            src="/aboutUs/firstSection/image4.svg"
            height={329}
            width={433}
          />
        </div>
      </div>
    </div>
  );
}
