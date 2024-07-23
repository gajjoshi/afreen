import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";

export function SeventhSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, address } = formData;

    if (!name || !email || !phone || !address) {
      setError("All fields are required.");
      return;
    }

    setError("");
    console.log("Form Data Submitted:", formData);
    // You can also add code to handle form submission, such as sending data to an API
  };

  return (
    <div className="flex flex-col lg:flex-row bg-[#264653] justify-evenly pt-10 pb-20 w-full px-5 lg:px-10">
      <div className="flex gap-5 flex-col h-full justify-evenly w-full lg:w-1/4 items-start">
        <div className="text-lg lg:text-xl font-bold text-white">ADDRESS</div>
        <div className="text-sm it lg:text-base text-white">
          Office No. 624, 625, 6th Floor, Mega Mall, Mall Road, Kanpur-208001,
          Uttar Pradesh, India
        </div>
        <div className="gap-3 items-center flex text-white">
          <IoCallOutline size={32} />
          <div className="flex flex-col">
            <div>Call Us:</div>
            <div>+91-22-49676888</div>
          </div>
        </div>
        <div className="gap-3 items-center flex text-white">
          <FaRegClock size={32} />
          <div className="flex flex-col">
            <div>Mon - Sat:</div>
            <div>08.00 AM - 08.00 PM</div>
          </div>
        </div>
        <div className="text-sm max-md:hidden lg:text-base text-white">
          Copyright 2024 | Afreen International
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:w-4/6 gap-8 mt-10 lg:mt-0">
        <div className="gap-8 w-full lg:w-1/2 pt-5 flex flex-col">
          <div className="text-lg lg:text-xl font-bold text-white">
            QUICK LINKS
          </div>
          <div className="flex  flex-col lg:flex-row gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4 text-white">
                <div className="bg-[#CBBF8B] h-2 w-2 rounded-full"></div>
                <div className="text-base">About Us</div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="bg-[#CBBF8B] h-2 w-2 rounded-full"></div>
                <div className="text-base">Services</div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="bg-[#CBBF8B] h-2 w-2 rounded-full"></div>
                <div className="text-base">Teams</div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="bg-[#CBBF8B] h-2 w-2 rounded-full"></div>
                <div className="text-base">Employers</div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4 text-white">
                <div className="bg-[#CBBF8B] h-2 w-2 rounded-full"></div>
                <div className="text-base">Candidate</div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="bg-[#CBBF8B] h-2 w-2 rounded-full"></div>
                <div className="text-base">Support</div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="bg-[#CBBF8B] h-2 w-2 rounded-full"></div>
                <div className="text-base">Contact Us</div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="bg-[#CBBF8B] h-2 w-2 rounded-full"></div>
                <div className="text-base">Company Registration</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#21A08B] max-w-[335px] bg-opacity-50 p-5 rounded-lg w-full lg:w-[486px]">
          <div className="mb-4 text-lg font-bold text-white">Contact Us</div>
          {error && <div className="mb-4 text-red-500">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col lg:flex-row lg:justify-between">
              <label
                className="justify-center max-md:justify-start items-center gap-2 mb-2 flex text-sm text-white"
                htmlFor="name"
              >
                <div className="bg-yellow-400 h-2 w-2 rounded-full"></div>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full lg:w-[200px] h-[24px] p-2 border border-gray-300 rounded-[30px]"
              />
            </div>
            <div className="mb-4 flex flex-col lg:flex-row lg:justify-between">
              <label
                className="justify-center max-md:justify-start items-center gap-2 mb-2 flex text-sm text-white"
                htmlFor="email"
              >
                <div className="bg-yellow-400 h-2 w-2 rounded-full"></div>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full lg:w-[200px] h-[24px] p-2 border border-gray-300 rounded-[30px]"
              />
            </div>
            <div className="mb-4 flex flex-col lg:flex-row lg:justify-between">
              <label
                className="justify-center max-md:justify-start items-center gap-2 mb-2 flex text-sm text-white"
                htmlFor="phone"
              >
                <div className="bg-yellow-400 h-2 w-2 rounded-full"></div>
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full lg:w-[200px] h-[24px] rounded-[30px] p-2 border border-gray-300"
              />
            </div>
            <div className="mb-4 flex flex-col lg:flex-row lg:justify-between">
              <label
                className="justify-center max-md:justify-start items-center gap-2 mb-2 flex text-sm text-white"
                htmlFor="address"
              >
                <div className="bg-yellow-400 h-2 w-2 rounded-full"></div>
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full lg:w-[200px] h-[24px] rounded-[30px] p-2 border border-gray-300"
              />
            </div>
            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-[#21A08B] text-[16px] text-white py-2 px-4 rounded-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="text-sm md:hidden  lg:text-base text-white">
          Copyright 2024 | Afreen International
        </div>
      </div>
    </div>
  );
}
