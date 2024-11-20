import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="lg:mt-[130px] md:mt-[100px] sm:mt-[75px] mt-[50px] max-w-[1350px] px-4 mx-auto">
      <h1 className="text-black lg:text-[56px] md:text-[44px] sm:text-[36px] text-[28px] lg:leading-[76px] sm:leading-[50px] leading-[40px] text-center font-sathosi  font-bold mb-7 ">
        We Are PROUD To Say That We Have:
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-between sm:gap-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 sm:gap-40">
          <div className="text-center">
            <div className="text-[#578CDA]  sm:text-[75px] text-[50px] sm:leading-[120px] leading-40px font-sathosi font-bold ">
              <CountUp
                start={0}
                end={500}
                duration={2.5}
                suffix="K+"
                separator=","
              />
            </div>
            <h4 className="md:text-[26px] sm:text-[24px] text-[22px] font-sathosi text-black  font-normal sm:mt-4">
              Words
            </h4>
          </div>

          <div className="text-center">
            <div className="text-[#578CDA]  sm:text-[75px] text-[50px] sm:leading-[120px] leading-40px font-sathosi font-bold ">
              <CountUp
                start={0}
                end={12}
                duration={2.5}
                suffix="+"
                separator=","
              />
            </div>
            <h4 className="md:text-[26px] sm:text-[24px] text-[22px] font-sathosi text-black  font-normal sm:mt-4">
              Countries
            </h4>
          </div>
          <div className="text-center ">
            <div className="text-[#578CDA]  sm:text-[75px] text-[50px] sm:leading-[120px] leading-40px font-sathosi font-bold">
              <CountUp
                start={0}
                end={1000}
                duration={2.5}
                suffix="+"
                separator=","
              />
            </div>
            <h4 className="md:text-[26px] sm:text-[24px] text-[22px] font-sathosi text-black  font-normal sm:mt-4">
              Docs
            </h4>
          </div>

          <div className="text-center">
            <div className="text-[#578CDA]  sm:text-[75px] text-[50px] sm:leading-[120px] leading-40px font-sathosi font-bold">
              <CountUp
                start={0}
                end={500}
                duration={2.5}
                suffix="+"
                separator=","
              />
            </div>
            <h4 className="md:text-[26px] sm:text-[24px] text-[22px] font-sathosi text-black  font-normal sm:mt-4">
              Businessess
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
