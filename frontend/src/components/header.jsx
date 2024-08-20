import React, { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [dropdown, setDropdown] = useState(null);

  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 600) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 600) {
        setIsScrolled(true);
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsScrolled(true);
        setIsVisible(true);
      } else {
        setIsScrolled(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = router.pathname === "/";
  const getNavLinkClass = (path) => {
    const isActive =
      router.pathname === path || router.pathname.startsWith(path);
    return `hover:text-green-700 ${isActive ? "underline font-bold" : ""} ${
      isScrolled || !isHomePage ? "font-bold" : "lg:hover:text-gray-200"
    }`;
  };

  return (
    <header
      className={`fixed top-0 bg-transparent max-md:bg-white left-0 w-full ${
        isHomePage && !isScrolled ? "bg-transparent" : "bg-white shadow-lg"
      } px-4 py-3 z-[1000] transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* <Link href="/"> */}
          <img
            width={200}
            height={10}
            className=" max-md:max-h-[100px] max-md:max-w-[150px] max-h-[100px]"
            src="/logofinal.svg"
            alt="Your Logo"
          />
          {/* </Link> */}
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <IoClose size={30} />
            ) : (
              <IoMenu color="black" size={30} />
            )}
          </button>
        </div>

        <nav
          className={`hidden lg:flex items-center space-x-4 ${
            isScrolled || !isHomePage
              ? "text-green-600 font-bold"
              : "text-white"
          }`}
        >
          <Link href="/">
            <span>Home</span>
          </Link>
          <div
            onMouseEnter={() => handleMouseEnter("aboutUs")}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <span className={`cursor-pointer ${getNavLinkClass("/about-us")}`}>
              About Us
            </span>
            {dropdown === "aboutUs" && (
              <div className="absolute top-full left-0 bg-white shadow-lg text-gray-700 rounded-md p-2 grid grid-cols-2 gap-2 w-[250px] lg:w-[350px]">
                <Link href="/about-us/vision-mission">
                  <span className="block px-2 py-1 text-sm hover:bg-green-200 rounded">
                    Vision & Mission
                  </span>
                </Link>
                <Link href="/about-us/strategy">
                  <span className="block px-2 py-1 text-sm hover:bg-green-200 rounded">
                    Strategy
                  </span>
                </Link>
                <Link href="/about-us/professions-supplied">
                  <span className="block px-2 py-1 text-sm hover:bg-green-200 rounded">
                    Professions Supplied
                  </span>
                </Link>
                <Link href="/about-us/art-science">
                  <span className="block px-2 py-1 text-sm hover:bg-green-200 rounded">
                    Art & Science of Recruitment
                  </span>
                </Link>
                <Link href="/about-us/industries-served">
                  <span className="block px-2 py-1 text-sm hover:bg-green-200 rounded">
                    Industries Served
                  </span>
                </Link>
                <Link href="/about-us/company-registration">
                  <span className="block px-2 py-1 text-sm hover:bg-green-200 rounded">
                    Company Registration
                  </span>
                </Link>
              </div>
            )}
          </div>
          <Link href="/services">
            <span className={getNavLinkClass("/services")}>Services</span>
          </Link>
          <div
            onMouseEnter={() => handleMouseEnter("employees")}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <span className={`cursor-pointer ${getNavLinkClass("/employees")}`}>
              Employees
            </span>
            {dropdown === "employees" && (
              <div className="absolute top-full left-0 bg-white shadow-lg text-gray-700 rounded-lg">
                <Link href="/employees/onboarding">
                  <span className="block px-4 py-2 hover:bg-green-200">
                    Onboarding Fresh Graduates
                  </span>
                </Link>
                <Link href="/employees/job-description">
                  <span className="block px-4 py-2 hover:bg-green-200">
                    Importance of Job Description
                  </span>
                </Link>
              </div>
            )}
          </div>
          <Link href="/team">
            <span className={getNavLinkClass("/team")}>Team</span>
          </Link>
          <div
            onMouseEnter={() => handleMouseEnter("support")}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <span className={`cursor-pointer ${getNavLinkClass("/support")}`}>
              Support
            </span>
            {dropdown === "support" && (
              <div className="absolute top-full left-0 bg-white shadow-lg text-gray-700 rounded-lg">
                <Link href="/support/short-term-visas">
                  <span className="block px-4 py-2 hover:bg-green-200">
                    Employer Sponsored Short Term Visas
                  </span>
                </Link>
                <Link href="/support/work-from-home">
                  <span className="block px-4 py-2 hover:bg-green-200">
                    Work From Home Model
                  </span>
                </Link>
                <Link href="/support/emigrate-portal">
                  <span className="block px-4 py-2 hover:bg-green-200">
                    eMigrate Portal
                  </span>
                </Link>
              </div>
            )}
          </div>
          <Link href="/candidate-zone">
            <span className={getNavLinkClass("/candidate-zone")}>
              Candidates
            </span>
          </Link>
          <Link href="/contact-us">
            <span className="inline-flex items-center px-3 py-2 rounded-full bg-green-500 text-white hover:bg-green-700">
              Contact
            </span>
          </Link>
        </nav>

        <div
          className={`fixed top-0 left-0 h-full w-full bg-black z-40 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden shadow-lg`}
        >
          <div className="flex justify-end p-5">
            <button onClick={toggleMenu}>
              <IoClose size={30} className="text-white" />
            </button>
          </div>
          <nav className="flex flex-col items-start no-underline border-0 px-10 space-y-4 overflow-y-auto h-full divide-gray-700">
            <Link href="/" className="">
              <span
                className={`hover:text-gray-300 text-white py-2 w-full text-center  border-gray-700`}
              >
                Home
              </span>
            </Link>
            <div className="relative w-full">
              <span
                className={`cursor-pointer hover:text-gray-300 py-2 text-white w-full text-center flex justify-between items-center  border-gray-700`}
                onClick={() =>
                  setDropdown(dropdown === "aboutUs" ? null : "aboutUs")
                }
              >
                About Us
                {dropdown === "aboutUs" ? <IoClose /> : <IoMenu />}
              </span>
              {dropdown === "aboutUs" && (
                <div className="bg-blue-300 shadow-lg text-white rounded-lg">
                  <Link href="/about-us/vision-mission">
                    <span className="block px-4 py-2 hover:bg-blue-200">
                      Vision & Mission
                    </span>
                  </Link>
                  <Link href="/about-us/strategy">
                    <span className="block px-4 py-2 hover:bg-blue-200">
                      Strategy
                    </span>
                  </Link>
                  <Link href="/about-us/professions-supplied">
                    <span className="block px-4 py-2 hover:bg-blue-200">
                      Professions Supplied
                    </span>
                  </Link>
                  <Link href="/about-us/art-science">
                    <span className="block px-4 py-2 hover:bg-blue-200">
                      Art & Science of Recruitment
                    </span>
                  </Link>
                  <Link href="/about-us/industries-served">
                    <span className="block px-4 py-2 hover:bg-blue-200">
                      Industries Served
                    </span>
                  </Link>
                  <Link href="/about-us/company-registration">
                    <span className="block px-4 py-2 hover:bg-blue-200">
                      Company Registration
                    </span>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/services">
              <span
                className={`hover:text-gray-300 text-white py-2 w-full text-center  border-gray-700`}
              >
                Services
              </span>
            </Link>
            <Link href="/team">
              <span
                className={`hover:text-gray-300 text-white py-2 w-full text-center  border-gray-700`}
              >
                Team
              </span>
            </Link>
            <div className="relative w-full">
              <span
                className={`cursor-pointer hover:text-gray-300  text-white py-2 w-full text-center flex justify-between items-center  border-gray-700 ${
                  router.pathname.startsWith("/employees") ? "underline" : ""
                }`}
                onClick={() =>
                  setDropdown(dropdown === "employees" ? null : "employees")
                }
              >
                Employees
                {dropdown === "employees" ? <IoClose /> : <IoMenu />}
              </span>
              {dropdown === "employees" && (
                <div className="bg-blue-300 shadow-lg text-white rounded-lg">
                  <Link href="/employees/onboarding">
                    <span className="block px-4 py-2 hover:bg-blue-200">
                      Onboarding Fresh Graduates
                    </span>
                  </Link>
                  <Link href="/employees/job-description">
                    <span className="block px-4 py-2 hover:bg-blue-200">
                      Importance of Job Description
                    </span>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/candidate-zone">
              <span
                className={`hover:text-gray-300 text-white py-2 w-full text-center  border-gray-700`}
              >
                Candidates
              </span>
            </Link>
            <Link href="/contact-us">
              <span className="inline-flex items-center justify-center px-3 py-2 rounded-full bg-green-500 text-white hover:bg-green-700 w-full mt-4">
                Contact
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
