import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Marqueue = () => {
  return (
    <div className="sm:mt-[27px] -mt-5 md:mt-[20px] h-[122px]">
      <Marquee
        speed={50}
        autoFill={true}
        pauseOnHover={true}
        pauseOnClick={true}
        gradient={false}
      >
        <Link className="px-3">
          <img src="images/Group 1000002736 (3).png" alt="" className=" mx-9" />
        </Link>
        <Link className="px-3">
          <img src="images/Mask group (2).png" alt="" className=" mx-9" />
        </Link>
        <Link className="px-3">
          <img src="images/Group 1000002739 (1).png" alt="" className=" mr-9" />
        </Link>
        <Link className="px-3">
          <img src="images/image 40.png" alt="" className=" mx-9" />
        </Link>
        <Link className="px-3">
          <img src="images/image 39.png" alt="" className=" mx-9" />
        </Link>
        <Link className="px-3">
          <img src="images/image 32.png" alt="" className=" mx-9" />
        </Link>
        <Link className="px-3">
          <img src="images/image 41.png" alt="" className=" mx-9" />
        </Link>
        <Link className="px-3">
          <img src="images/image (11).png" alt="" className=" mx-9" />
        </Link>
        <Link className="px-3">
          <img src="images/Group 1000002737 (1).png" alt="" className=" mx-9" />
        </Link>
        <Link className="px-3">
          <img src="images/Group 1000002757.png" alt="" className=" mx-9" />
        </Link>
        <Link className="px-3">
          <img src="images/image 43.png" alt="" className=" mx-9" />
        </Link>
        <Link className="px-3">
          <img src="images/image 38.png" alt="" className=" mx-9" />
        </Link>
        <Link className="px-3">
          <img src="images/image 42.png" alt="" className="w-20 h-16 mr-9" />
        </Link>
        <Link className="px-3">
          <img src="images/Group 1000002738 (1).png" alt="" className=" mx-9" />
        </Link>
        <Link className="px-3" to>
          <img src="images/Clip path group.png" alt="" className=" mx-9" />
        </Link>
        {/* <Link className="px-3">
          <img src="images/freepik_br_de6be83f-f9a3-4f84-b51a-a840e8dbb0d2 1.png" alt="" className=" mx-9" />
        </Link> */}
      </Marquee>
    </div>
  );
};

export default Marqueue;
