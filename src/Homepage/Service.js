import React from "react";
const Service = () => {
  return (
    <div className="lg:mt-[106px] md:mt-[90px] sm:mt-[60] mb-[32px] max-w-[1350px] px-4 h-auto mx-auto">
      <h1 className="text-black lg:text-[56px] md:text-[44px] sm:text-[36px] text-[28px] font-sathosi font-bold  lg:leading-[97px] md:leading-[70px] sm:leading-[50px] leading-[36px] text-center">
        Our Services
      </h1>
      <div className="grid md:grid-cols-4 md:gap-6 grid-cols-2 gap-2">
          <div
            className={`py-6 grad_one hover:cursor-pointer hover:bg-[#E9F1FF] md:h-[382px] h-[200px] w-full   border border-[#d9d9d9] hover:shadow-xl hover:shadow-[#d9d9d9] rounded-[20px] mt-6`}

          >
            <h2 className="text-black md:text-[24px] text-[12px] text-left font-sathosi font-bold md:mb-11 ml-[26px]">
              User Manuals & Guides
            </h2>
            <div className="w-full h-full p-4">
              <img
                src="images/Layer_1.png"
                alt=""
                className="md:w-[196px] w-full md:h-[228px] h-full object-contain mx-auto"
              />
            </div>

          </div>
          {/* Second box */}
          <div
            className="py-6 grad_two hover:bg-[#E7F6F1] md:h-[382px] hover:cursor-pointer h-[200px] w-full  sm:ml-0  border border-[#d9d9d9] border-opacity-15 hover:shadow-xl hover:shadow-[#d9d9d9] rounded-[20px] mt-6 "

          >
            <h2 className="text-black md:text-[24px] text-[12px] text-left font-sathosi font-bold md:mb-11 ml-[26px]">
              API Documentation
            </h2>
            <div className="w-full h-full p-4">
              <img
                src="images/Layer_1 (1).png"
                alt=""
                className="md:w-[196px] w-full md:h-[228px] h-full object-contain mx-auto"
              />
            </div>

          </div>
          {/* third box */}
          <div
            className={`py-6 grad_three hover:bg-[#FFF0F0] hover:cursor-pointer md:h-[382px] h-[200px] w-full  sm:ml-0 border border-[#d9d9d9] border-opacity-15 hover:shadow-xl hover:shadow-[#d9d9d9] rounded-[20px] mt-6`}

          >
            <h2 className="text-black md:text-[24px] text-[12px] text-left font-sathosi font-bold md:mb-4 ml-[26px]">
              Whitepapers & Case Studies
            </h2>
            <div className="w-full h-full p-4">
              <img
                src="images/Frame.png"
                alt=""
                className="md:w-[196px] w-full md:h-[228px] h-full object-contain mx-auto"
              />
            </div>

          </div>
          {/* fourth box */}
          <div
            className={`py-6 grad_four hover:!bg-[#FDFBEA] md:h-[382px] h-[200px] w-full  sm:ml-0  border border-[#d9d9d9] border-opacity-15 hover:shadow-xl hover:shadow-[#d9d9d9] hover:cursor-pointer rounded-[20px] mt-6`}

          >
            <h2 className="text-black md:text-[24px] text-[12px] text-left font-sathosi font-bold md:mb-11 ml-[26px]">
              Training Materials
            </h2>
            <div className="w-full h-full p-4">
              <img
                src="images/OBJECTS.png"
                alt=""
                className="md:w-[196px] w-full md:h-[228px] h-full object-contain mx-auto"
              />
            </div>

          </div>
      </div>
    </div>
  );
};

export default Service;
