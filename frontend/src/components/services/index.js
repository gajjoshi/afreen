import Image from "next/image";
import React from "react";

const OurServices = () => {
  return (
    <div className="m-6 max-w-[1176px] font-sans">
      <h2 className="text-5xl max-md:text-3xl text-[#264653] my-4">
        Our Services
      </h2>
      <p className="my-4 text-xl max-md:px-5 max-md:text-base font-light tracking-widest bg-[#264653] px-16 py-5 rounded-[20px]">
        At Afreen International Tours & Travels, we take pride in offering
        comprehensive manpower solutions tailored to the diverse needs of our
        clients across the Middle East. Under the visionary leadership of our
        CEO, Mr. Sagir Hasan Khan, we have cultivated a reputation for
        excellence in the recruitment and placement of both blue and
        white-collar professionals. Our services are designed to meet the
        dynamic demands of various industries, ensuring that each candidate not
        only meets the qualifications required but also integrates seamlessly
        into their new roles and cultural settings.
      </p>
      <h2 className="text-4xl max-md:text-2xl w-full text-center text-blue-800 my-4">
        One Platform for all your Manpower Solutions
      </h2>
      <p className="my-4 text-xl max-md:text-base text-center text-black">
        At Afreen International Tours & Travels, we are dedicated to fostering
        long-term relationships with our clients by providing reliable,
        efficient, and ethical manpower solutions. Trust us to help you achieve
        your project goals with a skilled and well-prepared workforce that
        drives success.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 my-6">
        {[
          {
            bgColor: "bg-[#264653]",
            textColor: "text-[#CBBF8B]",
            title: "Recruitment and Selection",
            description:
              "Our rigorous recruitment process begins with a thorough understanding of our clients' specific needs, followed by a systematic screening of candidates through our extensive database and professional networks across India, Pakistan, Nepal, Bangladesh, and the Philippines. We utilize advanced assessment methods and conduct in-depth interviews to evaluate the skills, qualifications, and suitability of each candidate, ensuring a perfect alignment with job specifications and company culture.",
            imageSrc: "/services/image1.svg",
          },
          {
            bgColor: "bg-[#21A08B] bg-opacity-30",
            textColor: "text-[#264653]",
            title: "Training and Development",
            description:
              "We believe that preparation goes beyond the resume. Afreen International offers bespoke training programs designed to equip candidates with not only the technical skills required for their roles but also the soft skills necessary for adapting to new cultural environments. Our training modules cover language proficiency, safety protocols, and specific job-related skills, ensuring that all candidates are fully prepared before their deployment.",
            imageSrc: "/services/image2.svg",
          },
          {
            bgColor: "bg-[#21A08B] bg-opacity-30",
            textColor: "text-[#264653]",
            title: "Documentation and Processing",
            description:
              "Navigating the complexities of international recruitment requires meticulous attention to documentation and compliance with both local and international regulations. Afreen International handles all aspects of visa processing, work permits, and travel arrangements, ensuring a smooth and hassle-free transition for both our clients and candidates. We adhere strictly to ethical recruitment practices, maintaining transparency and integrity throughout every step of the process.",
            imageSrc: "/services/image3.svg",
          },
          {
            bgColor: "bg-[#264653]",
            textColor: "text-[#CBBF8B]",
            title: "Client Consultation and Support",
            description:
              "Understanding that each client has unique requirements, we offer personalized consultation services to help identify and solve specific workforce challenges. Our team is adept at analyzing market trends and providing insights that help our clients make informed decisions. Post-placement support is also a critical component of our services, ensuring that both clients and candidates are satisfied and well-adjusted.",
            imageSrc: "/services/image4.svg",
          },
          {
            bgColor: "bg-[#264653]",
            textColor: "text-[#CBBF8B]",
            title: "Contract Management and Payroll Services",
            description:
              "For clients seeking a comprehensive outsourcing solution, Afreen International offers contract management and payroll services. We manage all aspects of employee administration, including contract compliance, payroll, and employee benefits, allowing our clients to focus on their core business operations without the complexities of workforce management.",
            imageSrc: "/services/image4.svg",
          },
          {
            bgColor: "bg-[#21A08B] bg-opacity-30",
            textColor: "text-[#264653]",
            title: "Ethical and Legal Compliance",
            description:
              "We operate with the highest standards of ethics and legal compliance, ensuring that all recruitment practices are fair, transparent, and respectful of the rights and dignity of every individual. Our commitment to ethical standards is unwavering, and we continually monitor our processes to align with international labor laws and human rights protocols.",
            imageSrc: "/services/image6.svg",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`${service.bgColor} rounded-3xl max-md:px-5 px-16 py-5 flex flex-col gap-5 p-4 h-full`}
          >
            <div className="w-full flex justify-center items-center">
              <Image
                src={service.imageSrc}
                width={100}
                height={100}
                alt="Service Image"
              />
            </div>
            <h3
              className={`text-2xl ${service.textColor} text-center font-bold`}
            >
              {service.title}
            </h3>
            <p
              className={`text-lg max-md:text-base tracking-widest ${
                service.textColor === "text-[#264653]" ? "text-black" : ""
              }`}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
