import React, { useRef } from "react";
import Slider from "react-slick";
import { RxExternalLink } from "react-icons/rx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const NextArrow = ({ onClick }) => (
  <div onClick={onClick} className="right_arrow_proof">
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div onClick={onClick} className="left_arrow_proof">
    <FaArrowLeft />
  </div>
);

const Proof = () => {
  const sliderRef = useRef(null);

  const imageData = [
    { image: "images/Group 1000002736.png", link: "https://help.trendspider.com/" },
    { image: "images/Group 1000002736 (2).png", link: "https://docs.instawp.com/en/" },
    { image: "images/Group 1000002737.png", link: "https://help.signalstack.com/" },
    { image: "images/Group 1000002738.png", link: "https://userguide.qualytics.io/quick-start-guide/" },
    { image: "images/Group 1000002739.png", link: "https://muso.ai/" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="proof-image xl:mt-[130px] lg:mt-[100px] md:mt-[75px] sm:mt-[50] mt-[25px]">
      <div className="lg:pt-[70px] sm:pt-[40px] pt-3">
        <h1 className="text-black lg:text-[56px] md:text-[44px] sm:text-[36px] text-[28px] font-sathosi font-bold leading-[75px] text-center lg:mb-[50px] md:mb-[40px] sm:mb-[30px] mb-2">
          Portfolio
        </h1>
      </div>

      <div className="xl:w-[1050px] lg:w-[800px] md:w-[725px] sm:w-[450px] w-[300px] mx-auto">
        <Slider {...settings} ref={sliderRef}>
          {imageData.map((item, index) => (
            <div key={index} className="relative group">
              <img
                src={item.image}
                alt={`Proof ${index + 1}`}
                className="object-cover w-full h-full"
              />

              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  backgroundColor: "rgba(217, 217, 217, 0.1)",
                  backdropFilter: "blur(1px)",
                }}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:mb-[85px] mb-[22px]"
                >
                  <div className="flex items-center justify-center sm:w-16 sm:h-16 w-12 h-12 bg-white rounded-full shadow">
                    <RxExternalLink className="text-[#4283DE] sm:text-3xl text-2xl" />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Proof;
