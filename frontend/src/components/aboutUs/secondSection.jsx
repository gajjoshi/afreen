import React from "react";

export default function SecondSection() {
  return (
    <div className="mb-20 px-5 w-full lg:px-[75px] flex flex-col mt-12 font-sans text-black">
      <h2 className="text-2xl text-blue-800 my-4">OUR MISSION</h2>
      <ul className="list-none pl-0">
        <li className="relative pl-6 my-2">
          <span className="absolute left-0 top-0 text-blue-800">✔</span>
          To be the preferred Service Provider for recruitment services for
          overseas industries.
        </li>
        <li className="relative pl-6 my-2">
          <span className="absolute left-0 top-0 text-blue-800">✔</span>
          To be the preferred Service Provider for candidates looking for
          overseas employment.
        </li>
      </ul>
      <hr className="my-6 border-gray-300" />
      <h2 className="text-2xl text-blue-800 my-4">OUR VISION</h2>
      <ul className="list-none pl-0">
        <li className="relative pl-6 my-2">
          <span className="absolute left-0 top-0 text-blue-800">✔</span>
          To be the first choice of industries for their recruitment needs, and
          for candidates for their employment needs, by being transparent and
          following ethical business practices.
        </li>
      </ul>
      <hr className="my-6 border-gray-300" />
      <h2 className="text-2xl text-blue-800 my-4">OUR VALUES</h2>
      <div className="flex flex-col sm:flex-row justify-around gap-5 sm:gap-10 my-6">
        <div className="bg-[#CBBF8B] text-[#264653] p-4 rounded text-center w-full sm:w-1/3">
          Ethics
        </div>
        <div className="bg-[#264653] text-white p-4 rounded text-center w-full sm:w-1/3">
          Integrity
        </div>
        <div className="bg-[#21A08B] bg-opacity-[30%] tracking-wide font-light text-black p-4 rounded text-center w-full sm:w-1/3">
          Passion for recruitment
        </div>
      </div>
      <h2 className="text-2xl text-blue-800 my-4">MORE INFO</h2>
      <p className="my-2">
        What sets us apart is our commitment to quality and compliance. We
        meticulously screen and select candidates, matching their skills and
        expertise to the specific requirements of our esteemed clients. Our
        rigorous vetting process ensures that only the most qualified and
        competent individuals join our talent pool.
      </p>
      <p className="my-2">
        We understand the importance of cultural compatibility and strive to
        foster strong relationships between employers and employees. Our
        dedicated team provides ongoing support to both parties, facilitating
        smooth communication and resolution of any issues that may arise.
      </p>
      <p className="my-2">
        At Afreen International Tours & Travels, we believe in the power of
        partnership. We work closely with our clients to understand their unique
        needs and objectives, offering tailored solutions that drive success and
        growth. Whether you're seeking skilled professionals for construction
        projects, healthcare facilities, hospitality ventures, or any other
        industry, we have the expertise and resources to fulfill your
        requirements.
      </p>
      <p className="my-2">
        As a socially responsible organization, we are committed to ethical
        recruitment practices and the well-being of our workforce. We prioritize
        their safety, welfare, and career advancement, ensuring a mutually
        beneficial relationship for all stakeholders involved.
      </p>
      <p className="my-2">
        Join hands with Afreen International Tours & Travels and experience the
        difference that our unparalleled service and expertise can make to your
        business. Together, let's build a brighter future, one partnership at a
        time.
      </p>
      <p className="my-2">
        <a
          href="mailto:info@afreeninternational.com"
          className="text-blue-800 underline"
        >
          Contact us
        </a>{" "}
        today to learn more about how we can serve your manpower needs.
      </p>
    </div>
  );
}
