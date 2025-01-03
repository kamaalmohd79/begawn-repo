import React from "react";
import Marqueue from "./Marqueue";
import Service from "./Service";
import Choose from "./Choose";
import Documentation from "./Documentation";
import Proof from "./Proof";
import Book from "./Book";
import Counter from "./Counter";
import Client from "./Client";

const Homepage = () => {
  return (
    <div>
      <div className="text-center background" name="home_section">
        <div className="lg:pt-[129px] md:pt-[100px] sm:pt-[70px] pt-[30px]">
          <h1 className="text-black lg:text-[80px] md:text-[55px] sm:text-[40px] text-[28px] font-[900] font-sathosi lg:leading-[97px] md:leading-[70px] sm:leading-[50px] leading-[36px] md:mb-[18px] mb-[12px]">
            A House of Nerdy <br /> Technical Writers
          </h1>
          <p className="text-black lg:text-[32px] md:text-[24px] sm:text-[20px] text-[16px] font-poppins font-normal lg:leading-[48px] md:leading-[36px] sm:leading-[30px] leading-[24px] ">
            Simplifying complex ideas into clear & <br /> actionable
            documentation.
          </p>
        </div>
        <p className="lg:text-[32px] md:text-[28px] sm:text-[24px] text-[22px]  text-black font-sathosi font-bold lg:mt-[124px] md:mt-[90px] sm:mt-[45px] mt-[20px] leading-[43px]">Trusted by 100+</p>
        <Marqueue />
        <div name="service_section">
          <Service />
        </div>

      </div>
      <Choose />
      <Documentation />
      <div name="portfolio_section">
        <Proof />
      </div>
      <Book />
      <Counter />
      <Client />
    </div>
  );
};
export default Homepage;
