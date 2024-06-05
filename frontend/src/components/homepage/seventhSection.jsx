import React, { useState } from "react";

export function SeventhSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex bg-[#264653]  pt-[40px] pb-[80px] w-full px-5 justify-beween">
      <div className="flex h-full w-1/3 items-start">
        <img className="" src="/header/logo.svg" alt="Your Logo" />
      </div>
      <div className="flex  gap-8">
        <div className="gap-8 pt-[20px] flex flex-col">
          <div>QUICK LINKS</div>
          <div className="flex gap-5 flex-col">
            <div className="items-center gap-4 flex">
              <div className="bg-yellow-400 h-2 w-2 rounded-full"></div>
              <div className="text-base">Candidate Zone</div>
            </div>
            <div className="items-center gap-4 flex">
              <div className="bg-yellow-400 h-2 w-2 rounded-full"></div>
              <div className="text-base">Contact Us</div>
            </div>
            <div className="items-center gap-4 flex">
              <div className="bg-yellow-400 h-2 w-2 rounded-full"></div>
              <div className="text-base">Our Service</div>
            </div>
            <div className="items-center gap-4 flex">
              <div className="bg-yellow-400 h-2 w-2 rounded-full"></div>
              <div className="text-base">Employer Zone</div>
            </div>
          </div>
        </div>
        <div className="bg-[#D9D9D9] bg-opacity-50 p-5 rounded-lg w-[486px]">
          <div className="mb-4 text-lg font-bold">Contact Us</div>
          <form>
            <div className="mb-4 flex justify-between">
              <label
                className=" justify-center items-center gap-2 mb-2 flex text-sm"
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
                className="w-[200px]  h-[24px] p-2 border border-gray-300 rounded-[30px]"
              />
            </div>
            <div className="mb-4 flex justify-between">
              <label
                className=" justify-center items-center gap-2 mb-2 flex text-sm"
                htmlFor="name"
              >
                <div className="bg-yellow-400 h-2 w-2 rounded-full"></div>
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-[200px] h-[24px] p-2 border border-gray-300 rounded-[30px]"
              />
            </div>
            <div className="mb-4 flex justify-between">
              <label
                className=" justify-center items-center gap-2 mb-2 flex text-sm"
                htmlFor="name"
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
                className="w-[200px] h-[24px] rounded-[30px] p-2 border border-gray-300 "
              />
            </div>
            <div className="mb-4 flex justify-between">
              <label
                className=" justify-center items-center gap-2 mb-2 flex text-sm"
                htmlFor="name"
              >
                <div className="bg-yellow-400 h-2 w-2 rounded-full"></div>
                Address
              </label>
              <input
                type="text"
                id="address"
                name="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-[200px] h-[24px] rounded-[30px] p-2 border border-gray-300 "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
