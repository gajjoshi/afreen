import React from "react";

export function ThirdSection() {
  return (
    <div className="bg-white flex flex-col items-center">
      {/* Vision Section */}
      <div
        className="px-4 md:px-10 py-12 md:py-44 w-full 
      md:w-[80%] max-w-[1170px] flex flex-col md:flex-row items-center"
      >
        <div className="md:w-[50%] md:hidden">
          <img
            src="/homepage/thirdSection/image1.svg"
            width={726}
            height={493}
            layout="responsive"
            alt="Vision Image"
          />
        </div>
        <div
          className="md:w-1/2 max-md:mt-5 pr-0 max-md:p-8 md:pr-10 mb-8 
        md:mb-0 flex flex-col items-center md:p-10 drop-shadow-lg
         md:items-start rounded-[30px] md:rounded-br-none md:rounded-tr-none
          min-h-[300px] bg-[#F0F0F0]"
        >
          <div
            className="text-2xl max-md:text-start max-md:w-full 
          md:text-3xl font-bold text-[#264653] mb-4 text-center md:text-left"
          >
            OUR VISION
          </div>
          <div
            className="text-2xl max-md:text-base md:text-xl max-md:text-start
           text-gray-800 text-center md:text-left"
          >
            To be the first choice of industries for their recruitment needs,
            and for candidates for their employment needs, by being transparent
            and following ethical business practices.
          </div>
          <div className="mt-8 flex w-full justify-start">
            <button className="bg-[#21A08B] text-[16px] text-white py-2 px-4 rounded-full hover:bg-green-600 transition-colors duration-300">
              Read More
            </button>
          </div>
        </div>
        <div className="md:w-[70%] max-md:hidden">
          <img
            src="/homepage/thirdSection/image1.svg"
            width={726}
            height={493}
            layout="responsive"
            alt="Vision Image"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 md:justify-center md:max-h-[300px] max-md:px-5 md:py- w-full md:items-center bg-[#21A08B] bg-opacity-30 flex max-md:flex-col items-center">
        <div className="text-[#21A08B] md:w-3/6 md:text-center text-3xl md:text-4xl font-semibold mb-8">
          What We Provide
        </div>
        <div className="w-full md:justify-center  md:w-2/6 max-w-[1170px] flex flex-col items-center  gap-6">
          <ServiceItem text="Long term employment" />
          <ServiceItem text="Short term employment" />
          <ServiceItem text="Visa processing - employment" />
          <ServiceItem text="Visa processing - Family Visas" />
        </div>
      </div>

      {/* Commitment Section */}
      <div className=" max-md:py-10 py-20 w-full px-5 text-white">
        <div
          className="text-lg md:text-3xl max-md:p-10 
        rounded-[30px] bg-[#264653] font-semibold  md:min-h-[200px]
         text-center max-w-[1170px] mx-auto px-6 md:p-10"
        >
          Our commitment to quality and compliance sets us apart. We
          meticulously screen candidates to match their skills with our clients'
          needs, ensuring that only the most qualified individuals join our
          talent pool.
        </div>
      </div>
    </div>
  );
}

// Component for each service item
const ServiceItem = ({ text }) => (
  <div className="flex  items-center gap-3 w-full">
    <div className="bg-[#21A08B] rounded-full p-2 flex-shrink-0">
      <img
        src="/homepage/thirdSection/rightTick.svg"
        width={24}
        height={24}
        alt="Checkmark"
        className=" max-md:w-3 max-md:h-3"
      />
    </div>
    <div className="text-lg max-md:text-base text-gray-800">{text}</div>
  </div>
);

export default ThirdSection;
