import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { scroller } from 'react-scroll';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      duration: 1000,
      offset: -100, // Adjust for sticky headers
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-white z-30 w-full shadow-lg md:pb-0 pb-2 transition-all duration-700 ${isScrolled ? "fixed top-0 rounded " : "relative"
        }`}
    >
      <nav className="md:flex md:justify-between md:items-center relative max-w-[1350px] md:px-4  mx-auto md:h-[100px] h-20 ">
        <Link
          to={"#"}
        >
          <div className="flex items-center gap-2 mt-2 ml-6 md:ml-0 md:mt-0">
            <img src="images/logo.svg" alt="" className="md:mt-1 mt-[1.25rem] w-[130px] md:w-auto " />
          </div>
        </Link>
        <div>
          <ul
            className={`md:flex xl:gap-7 md:gap-2 md:items-center md:static w-full absolute duration-700 transition-all ease-in-out 
                          ${isOpen
                ? "top-[88px] w-full bg-white z-10 flex flex-col gap-3 shadow "
                : "top-[-498px]"
              }
                          `}
          >
            <li className="mt-3 md:mt-0">
              <NavLink
                onClick={(e) => {
                  e.preventDefault(); // Prevent full page reload
                  scrollToSection('home_section');
                  closeMenu()
                }}
                to="/"
                className={({ isActive }) =>
                  `text-black hover:text-[#4283DE] text-[16px] pr-2 pl-6 font-poppins font-medium duration-700 transition-all ease-in-out ${isActive ? "opacity-100" : "opacity-100"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="mt-3 md:mt-0">
              <NavLink
                onClick={(e) => {
                  e.preventDefault(); // Prevent full page reload
                  scrollToSection('service_section');
                  closeMenu()
                }}
                to="/"
                className={({ isActive }) =>
                  `text-black hover:text-[#4283DE] text-[16px] pr-2 pl-6 font-poppins font-medium  duration-700 transition-all ease-in-out ${isActive ? "opacity-100" : "opacity-100"
                  }`
                }
              >

                Our Services
              </NavLink>
            </li>
            <li className="mt-3 md:mt-0">
              <NavLink
                onClick={(e) => {
                  e.preventDefault(); // Prevent full page reload
                  scrollToSection('choose_section');
                  closeMenu()
                }}
                to="/"

                className={({ isActive }) =>
                  `text-black hover:text-[#4283DE] text-[16px] pr-2 pl-6 font-poppins font-medium duration-700 transition-all ease-in-out ${isActive ? "opacity-100" : "opacity-100"
                  }`
                }
              >
                Why Choose us
              </NavLink>
            </li>
            <li className="mt-3 md:mt-0">
              <NavLink
                onClick={(e) => {
                  e.preventDefault(); // Prevent full page reload
                  scrollToSection('stack_section');
                  closeMenu()
                }}
                to="/"
                className={({ isActive }) =>
                  `text-black hover:text-[#4283DE] text-[16px] pr-2 pl-6 font-poppins font-medium duration-700 transition-all ease-in-out ${isActive ? "opacity-100" : "opacity-100"
                  }`
                }
              >
                Stack
              </NavLink>
            </li>
            <li className="mt-3 md:mt-0">
              <NavLink
                onClick={(e) => {
                  e.preventDefault(); // Prevent full page reload
                  scrollToSection('portfolio_section');
                  closeMenu()
                }}
                to="/"
                className={({ isActive }) =>
                  `text-black hover:text-[#4283DE] text-[16px] pr-2 pl-6 font-poppins font-medium duration-700 transition-all ease-in-out ${isActive ? "opacity-100" : "opacity-100"
                  }`
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li className="pl-6 mt-3 mb-6 md:mt-0 md:hidden">
              <div>
                <Link
                  to={"https://calendly.com/begawnit0099/30min"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    onClick={closeMenu}
                    className="px-4 bg-[#4283DE] hover:border hover:border-[#4283DE] hover:bg-white hover:text-[#4283DE] transition-all duration-700 font-poppins font-semiblod py-2 rounded-lg text-white text-[14px] leading-[21px]"
                  >
                    Contact Us
                  </button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <Link
            to={"https://calendly.com/begawnit0099/30min"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 bg-[#4283DE] hover:border hover:border-[#4283DE] hover:bg-white hover:text-[#4283DE] transition-all duration-700 font-poppins py-2 rounded-lg text-white font-semibold text-[14px] md:block hidden leading-[21px]">
              Contact Us
            </button>
          </Link>
        </div>

        <div className="absolute md:hidden top-6 sm:right-12 right-6">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
