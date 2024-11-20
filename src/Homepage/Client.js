import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';

const Client = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const client = [
    {
      logo: "images/Group 1000002739 (1).png",
      desc: 'Love Muze. Great guy, great worker, cares deeply and does a good job. Will work with again.',
      title: "-TrendSpider",
    },
    {
      logo: "images/image 32.png",
      desc: 'Muze was always responsive and very good at understanding knowledge base development and technical writing. Great to work with!',
      title: "-InstaWP",
    },
    {
      logo: "images/Group 1000002738 (1).png",
      desc: 'Muza is a great person - he helped us a lot with the project. He works hard and fast, and knows what he is talking about! I would highly recommend Muza. Thank you!',
      title: "-Knowi",
    },
    {
      logo: "images/image 38.png",
      desc: 'Great experience getting all technical documentation completed.',
      title: "-Amove",
    },
    {
      logo: "images/image (11).png",
      desc: 'Great worker, communicates very well and is very helpful. Worker also open to help the project wherever they can, with useful suggestions. Great quality work and very thoughtful when delivering.',
      title: "-Intel",
    },
    {
      logo: "images/image 42.png",
      desc: 'Muze was always responsive and very good at understanding knowledge base development and technical writing. Great to work with!',
      title: "-TATA",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // appendDots: (dots) => (
    //   <div style={{ padding: "20px", bottom: "-20px" }}>
    //     <ul style={{ margin: "0px", display: "flex", justifyContent: "center" }}>
    //       {dots}
    //     </ul>
    //   </div>
    // ),
    // customPaging: (i) => (
    //   <div
    //     style={{
    //       width: "9px",
    //       height: "9px",
    //       backgroundColor: "#d9d9d9", // Default color
    //       borderRadius: "50%",
    //       margin: "0 4px",
    //       transition: "background-color 0.3s, transform 0.3s",
    //     }}
    //   />
    // ),
  };


  return (
    <div className="w-full">
      <div className="max-w-[1350px] px-4 mx-auto">
        <div className="w-full lg:mt-[130px] md:mt-[100px] sm:mt-[75px] mt-[50px] lg:mb-[130px] md:mb-[100px] cliet-image border border-[#d9d9d9] sm:mb-[80px] mb-[65px]  md:h-[630px] md:py-[50px] py-8  rounded-[40px]">
          <div className=" md:h-[500px] h-[400px]  ">
            <h1 className="font-sathosi font-bold md:text-[40px] sm:text-[32px] text-[28px] md:leading-[54px] leading-40 text-black text-center  ">
              What do our clients say about us?
            </h1>

            <div className="w-full mt-6 md:mt-10 sm:px-10">
              <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode={false}
                className="pt-6 pb-[10px] carousel-padding "
                containerClass="container-with-dots"
                dotListClass="custom_service_slider !bottom-[10px]"
                draggable
                focusOnSelect={false}
                infinite
                itemClass="px-2"
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={true}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >

                {client.map((item, index) => (

                  <div key={index} className="px-2 text-center md:p-8 sm:mx-4">
                    <img src={item.logo} alt="Client logo" className="mx-auto mb-10 " />
                    <p className="text-black font-poppins lg:text-[27px] md:text-[22px] sm:text-[18px] text-[14px] font-normal mb-5  md:mb-10">"{item.desc}"</p>
                    <h3 className="font-poppins sm:text-[24px] font-semibold text-[15px] text-[#4283DE] mb-6">{item.title}</h3>
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



