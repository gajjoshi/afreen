import React from "react";
import Image from "next/image";

export function SecondSection() {
  return (
    <div className="px-[20px] bg-white pt-60">
      <div className="flex gap-[100px]">
        <div className="gap-[20px]  flex flex-col">
          <div className="items-end gap-[20px] flex">
            <Image
              alt="image1"
              width={250}
              height={335}
              src="/homepage/secondSection/image1.svg"
            />
            <Image
              alt="image2"
              width={375}
              height={310}
              src="/homepage/secondSection/image2.svg"
            />
          </div>
          <div>
            <Image
              alt="image3"
              width={475}
              height={185}
              src="/homepage/secondSection/image3.svg"
            />
          </div>
        </div>
        <div className=" h-[465px] w-[557px] flex flex-col text-black bg-gray-100 p-8">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className=" text-2xl  mb-12">
            Welcome to Afreen International Tours & Travels. Your trusted
            partner in connecting skilled manpower from South Asia to esteemed
            companies across the Middle East. With a rich legacy of 38 years in
            the industry, we stand as a beacon of reliability and excellence in
            the realm of overseas manpower solutions.
          </p>
          <div className="flex justify-end">
            <button className=" bg-emerald-900 text-[16px] text-white py-2 px-4 rounded-full">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
