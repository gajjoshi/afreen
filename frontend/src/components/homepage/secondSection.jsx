import Link from "next/link";
import React from "react";

export function SecondSection() {
  return (
    <div className="pr-[20px] pl-[20px] max-md:pl-[20px] bg-white max-md:pt-10 pt-20">
      <div className="flex max-md:flex-col items-center relative max-md:gap-[20px] md:gap-[100px]">
        <div className=" z-10 relative gap-[20px] md:pt-32 flex flex-col">
          <div className="items-end max-md:hidden  gap-[20px] flex">
            <img
              alt="image1"
              width={246}
              height={305}
              src="/homepage/secondSection/image1.svg"
              className=""
            />
            <img alt="image2" width={375} height={310} src="/homepage/secondSection/image2.svg" />
          </div>
          <div className="md:w-[642px]">
            <img alt="image3" width={642} height={253} src="/homepage/secondSection/image3.svg" />
          </div>
        </div>
        <div
          className="w-4/5 rounded-[30px] max-md:ml-0   max-md:px-5 
        max-md:w-full md:relative z-0 md:pl-40 md:h-[465px] md:bottom-28
        flex flex-col text-black bg-gray-100 p-8 md:-ml-56 drop-shadow-lg"
        >
          <div className="w-full">
            <h2 className="text-3xl max-md:text-2xl uppercase font-bold mb-4">About Us</h2>
            <p className="text-2xl   max-md:text-base max-md:mb-5 md:mb-12">
              Welcome to Afreen International Manpower Services. Your trusted partner in connecting
              skilled manpower from South Asia to esteemed companies across the Middle East. With a
              rich legacy of 38 years in the industry, we stand as a beacon of reliability and
              excellence in the realm of overseas manpower solutions.
            </p>
            <Link className="flex justify-start" href="/services">
              <div>
                <button className="bg-[#21A08B] text-[16px] hover:bg-green-600 text-white py-2 px-4 rounded-full">
                  Read More
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
