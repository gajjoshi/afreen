import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent px-[20px] py-5 z-50">
      <div className="flex items-center justify-between">
        {/* Logo on Left */}
        <div className="flex items-center">
          <img className="" src="/header/logo.svg" alt="Your Logo" />
        </div>

        {/* Navigation Links on Right */}
        <nav className="flex font-[900] items-center space-x-4">
          <a href="/" className="text-white hover:text-gray-200">
            About Us
          </a>
          <a href="/services" className="text-white hover:text-gray-200">
            Services
          </a>
          <a href="/candidate-zone" className="text-white hover:text-gray-200">
            Candidate Zone
          </a>
          <a
            href="/contact"
            className="inline-flex items-center px-3 py-2 rounded-full bg-green-500 text-white hover:bg-green-700"
          >
            Contact
          </a>
          {/* <button className="px-3 py-2 rounded-full bg-white text-green-500 hover:bg-gray-200">
            Sign In
          </button> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
