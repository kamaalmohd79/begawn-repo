import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const Choose = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const accordionData = [
    {
      title: "Clarity Without Compromise",
      content:
        "We make complex topics simple without losing accuracy, using structured content strategies and clear language to ensure easy understanding.",
    },
    {
      title: "Optimized for Discovery",
      content:
        "Our documentation is crafted to be both technically rigorous and SEO-friendly, striking a perfect balance between readability and discoverability.",
    },
    {
      title: "Uncompromising Quality",
      content:
        "We deliver only the highest quality, with stringent quality checks and multiple review rounds to ensure accuracy, readability, and consistency.",
    },
    {
      title: "Collaborative Partnership",
      content:
        "Every project is a partnership—we keep communication open and incorporate your feedback throughout, ensuring transparency and adaptability.",
    },
    {
      title: "On-Target Delivery",
      content:
        "We prioritize timely delivery without compromising quality, focusing on planned execution to meet critical tech-world timelines.",
    },
    {
      title: "Industry Experts",
      content:
        "Our team comprises domain-specific writers with deep expertise, enabling us to create accurate, industry-aligned content across 20+ fields.",
    },
  ];

  return (
    <div className="relative max-w-[1350px] px-4   mx-auto lg:mt-[130px] md:mt-[110px] sm:pt-[90px] mt-[15px] z-20 sm:h-[840px] ">
      <div className="relative w-full  sm:px-4 border sm:rounded-[2.1rem] rounded-xl border-[#d9d9dd9] choose-image lg:h-full">
        <h1 className="text-black lg:text-[46px] md:text-[40px] sm:text-[36px] text-[28px] font-sathosi font-bold lg:mb-8 mb-2 md:pl-12 pl-4 lg:mt-[93px] mt-[30px] leading-[62px]">
          Why Choose Us
        </h1>
        <Accordion
          allowZeroExpanded
          className="sm:px-0 px-2 xl:w-[528px] lg:w-[450px] w-full flex flex-col"
        >
          <div>
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                className="relative"
                onClick={() => toggleItem(index)}
              >
                {/* Vertical Line */}
                {index < accordionData.length - 1 && (
                  <span className="absolute md:left-[59px] left-[19px] top-[42px] w-[2px] h-full bg-blue-500 transition-all duration-700" />
                )}

                <AccordionItemHeading className="flex items-center  w-full">
                  <AccordionItemButton className="flex items-center w-full py-4 pl-2 md:pl-12 lg:py-5">
                    {/* Circular Icon for Toggle */}
                    <div className="w-6 h-6 flex-shrink-0 rounded-full bg-[#4574B8] flex items-center justify-center text-white mr-4 shadow-2xl shadow-[#d9d9d9]">
                      {openItems[index] ? (
                        <FaMinus className="transition-all duration-700 icon-close" />
                      ) : (
                        <FaPlus className="transition-all duration-700 icon-open" />
                      )}
                    </div>
                    <h4 className="md:text-[20px] sm:text-[18px] text-[16px] font-semibold font-poppins text-black leading-[31px]">
                      {item.title}
                    </h4>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel className="md:pl-24 pl-12 pr-4 py-2]">
                  <p className="font-poppins font-normal md:text-[15px] text-[15px] leading-[27px]">
                    {item.content}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </div>
          <img src="images/Layer.png" alt="" className="2xl:w-[640px] mx-auto  object-contain xl:w-[640px] lg:w-[450px] sm:w-[400px] w-[320px]  2xl:h-[516px] lg:h-[500px] h-[350px] md:absolute top-[50%] sm:translate-y-[-50%] 2xl:right-10 xl:right-8 lg:right-6 lg:ml-0 md:ml-60" />
        </Accordion>
      </div>
      <div class="blurred-circle absolute sm:bottom-[-30%] sm:left-[-10%] left-[-50%] -z-10"></div>
    </div>
  );
};

export default Choose;
