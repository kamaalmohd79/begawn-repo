import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";

const Client = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const client = [
    {
      logo: "images/Group 1000002739 (1).png",
      desc: "Love Muze. Great guy, great worker, cares deeply and does a good job. Will work with again.",
    },
    {
      logo: "images/image 32.png",
      desc: "Muze was always responsive and very good at understanding knowledge base development and technical writing. Great to work with!",
    },
    {
      logo: "images/Group 1000002738 (1).png",
      desc: "Muza is a great person - he helped us a lot with the project. He works hard and fast, and knows what he is talking about!",
    },
    {
      logo: "images/image 38.png",
      desc: "Great experience getting all technical documentation completed.",
    },
    {
      logo: "images/image (11).png",
      desc: "Great worker, communicates very well and is very helpful.",
    },
    {
      logo: "images/image 42.png",
      desc: "Muze was always responsive and very good at understanding knowledge base development.",
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-[1350px] px-4 mx-auto">

        <div className="w-full mt-[50px] mb-[65px] md:mt-[100px] lg:mt-[130px] md:mb-[100px] lg:mb-[130px] border border-[#d9d9d9] rounded-[40px] py-8 md:py-[50px]">

          <div className="h-[400px] md:h-[500px]">

            <h1 className="text-center text-black font-bold text-[28px] sm:text-[32px] md:text-[40px]">
              What do our clients say about us?
            </h1>

            <div className="w-full mt-6 md:mt-10 sm:px-10">

              <Carousel
                arrows={false}
                autoPlaySpeed={3000}
                infinite
                responsive={responsive}
                showDots
                swipeable
                draggable
              >

                {client.map((item, index) => (
                  <div key={index} className="text-center px-2 md:p-8">

                    <img
                      src={item.logo}
                      alt="client"
                      className="mx-auto mb-10"
                    />

                    <p className="text-black text-[14px] sm:text-[18px] md:text-[22px] lg:text-[27px] mb-5 md:mb-10">
                      "{item.desc}"
                    </p>

                  </div>
                ))}

              </Carousel>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Client;