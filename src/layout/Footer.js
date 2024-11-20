import React from "react";
import { Link } from "react-router-dom";
import { scroller } from 'react-scroll';

function Footer() {
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      duration: 1000,
      offset: -100, // Adjust for sticky headers
    });
  };
  return (
    <div className="bg-[#254C86] xl:h-[706px] " name="footer_section" >
      <div className=" max-w-[1350px] md:px-4 pl-[40px] pr-[24px] mx-auto pt-[90px]  flex items-start justify-between flex-wrap mb-[73px]">
        {/* first row */}
        <div className="md:w-[400px] w-full">
          <div className="flex items-center gap-4 mb-5 md:mb-12">
            <img src="images/footer-logo.svg" alt="" className="w-[150px] mt-1" />

          </div>
          <h1 className="text-white xl:text-[56px] lg:text-[48px] text-[40px] font-sathosi font-bold leading-[84px] mb-4">
            Let’s Connect
          </h1>

          <p className="text-white text-[16px] font-poppins font-medium text-opacity-80 mb-8">
            If you would like to talk to us about a project or you have a
            question, please get in touch. Book the discovery call today and
            allow us to build a solid Knowledge Base for your product
          </p>
          <div className="hidden md:block">
            <div className="flex items-center gap-6 mb-6">
              <Link to={"https://www.linkedin.com/company/begawn-it-pvt-ltd"} target="_blank" rel="noopener noreferrer">
                <img src="images/Group 427320708.png" alt="" className="w-8" />
              </Link>
              <Link to={"https://calendly.com/begawnit0099/30min"} target="_blank" rel="noopener noreferrer">
                <button className="text-[#578CDA] bg-white hover:bg-[#4283DE] hover:text-white transition-all duration-700 px-4 py-3 rounded-lg text-[18px] font-poppins font-semibold">
                  Book Discovery Call
                </button>
              </Link>
            </div>
          </div>

        </div>

        {/* second row */}
        <div className="flex flex-col-reverse flex-wrap items-start gap-6 sm:gap-20 sm:flex-nowrap sm:flex-row">
          <div>
            <h4 className="text-white text-[20px] font-bold mb-11 font-poppins">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-8 md:gap-0 md:grid-cols-1">
              <div className="">
                <Link to={"/"} className="mb-3">
                  <li className="text-white opacity-[0.79] md:mb-[30px] mb-[15px] hover:opacity-100 transition-all duration-200 text-[16px] font-poppins font-medium ">
                    About us
                  </li>
                </Link>
                <Link onClick={(e) => {
                  e.preventDefault(); // Prevent full page reload
                  scrollToSection('service_section');

                }}
                  to={"/"} className="mb-3" >
                  <li className="text-white opacity-[0.79] md:mb-[30px] mb-[15px] hover:opacity-100 transition-all duration-200 text-[16px] font-poppins font-medium ">
                    Our Services
                  </li>
                </Link>
                <Link onClick={(e) => {
                  e.preventDefault(); // Prevent full page reload
                  scrollToSection('proof_work');

                }} to={"/"} className="mb-3" >
                  <li className="text-white opacity-[0.79] md:mb-[30px] mb-[15px] hover:opacity-100 transition-all duration-200 text-[16px] font-poppins font-medium ">
                    Our Work
                  </li>
                </Link>
              </div>
              <div className="">
                <Link to={"/"} className="mb-3" >
                  <li className="text-white opacity-[0.79] md:mb-[30px] mb-[15px] hover:opacity-100 transition-all duration-200 text-[16px] font-poppins font-medium ">
                    Careers
                  </li>
                </Link>
                <Link to={"/"} className="mb-3">
                  <li className="text-white opacity-[0.79] md:mb-[30px] mb-[15px] hover:opacity-100 transition-all duration-200 text-[16px] font-poppins font-medium ">
                    FAQ
                  </li>
                </Link>
              </div>

            </ul>
          </div>

          <div>
            <h4 className="text-white text-[20px] font-bold mb-[55px] font-poppins">
              Contacts
            </h4>
            <ul className="flex flex-col gap-10">
              <li className="flex items-center gap-2 leading-tight">
                <img src="images/Group 427320695.png" alt="" className="w-12" />
                <p className="text-white text-[13px] font-poppins font-bold ">
                  Call us <br />{" "}
                  <a href="tel:07986228254">
                    <span className="opacity-70 text-[16px] font-normal">
                      {" "}
                      079862 28254
                    </span>
                  </a>
                  {" "}
                </p>
              </li>
              <li className="flex items-center gap-2 leading-tight">
                <img src="images/Group 427320693.png" alt="" className="w-12" />
                <p className="text-white text-[13px] font-poppins font-bold ">
                  Send a message <br />{" "}
                  <a href="mailto:info@begawn.com">
                    <span className="opacity-80 text-[16px] font-normal">
                      {" "}
                      info@begawn.com
                    </span>
                  </a>
                  {" "}
                </p>
              </li>
              <li className="flex items-center gap-2 leading-tight">
                <img
                  src="images/Group 427320693 (1).png"
                  alt=""
                  className="w-12"
                />
                <p className="text-white text-[13px] font-poppins font-bold sm:w-[400px] ">
                  Address <br />{" "}
                  <span className="opacity-80 text-[16px] font-normal leading-[21px]  ">
                    Plot no. E-309, 8A, Industrial Area, Sector 75,
                    Sahibzada Ajit Singh Nagar, Punjab 160062
                  </span>{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="block mt-6 md:hidden">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-12 h-12">
              <Link to={"https://www.linkedin.com/company/begawn-it-pvt-ltd"} target="_blank" rel="noopener noreferrer">
                <img src="images/Group 427320708.png" alt="" className="w-full h-full" />
              </Link>
            </div>

            <Link to={"https://calendly.com/begawnit0099/30min"} target="_blank" rel="noopener noreferrer">
              <button className="text-[#578CDA] bg-white hover:bg-[#4283DE] hover:text-white transition-all duration-700 px-4 py-3 rounded-lg text-[18px] font-poppins font-semibold">
                Book Discovery Call
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1350px] px-4 mx-auto">
        <hr className="  border-b border-[#FFFFFF47]" />
        <p className="text-white sm:text-[18px] text-[16px] font-poppins font-normal py-4 text-center mt-4">© 2025 BEGAWN IT Pvt. Ltd. All rights reserved.</p>
      </div>


    </div>
  );
}

export default Footer;
