import React from "react";
import Image from "next/image";
export const SixthSection = () => {
  return (
    <div className="  w-full relative bg-cover bg-no-repeat">
      <div>
        <div className=" opacity-35 bg-[#264653] ">
          <Image
            src="/homepage/sixthsection/image1.svg"
            alt="Homepage background"
            width={300}
            height={300}
            className="w-full h-full  object-cover   top-0 left-0 z-0"
          />
        </div>
        <div className="absolute bottom-[90%] inset-56 flex items-center justify-center z-10">
          <h1 className="text-8xl font-bold text-white text-center px-4">
            “BRAND TAG LINE”
          </h1>
        </div>
      </div>
    </div>
  );
};
