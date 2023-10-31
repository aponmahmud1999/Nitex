
import React from "react";
import infocard from "./Images/infocard.webp";

const About = () => {

  return (
    <div className=" mb-[50px]" data-aos="fade-up">
      <div className="lg:flex rounded-xl bg-base-100 shadow-2xl w-[90%]  mt-[50px] mx-auto py-[50px] px-[25px]">
        <div className="lg:w-[45%] px-[2%] lg:px-[5%]">
          <h2 className="text-[28px] font-bold text-transparent bg-clip-text bg-gradient-to-r   from-[#0e48c5] to-[#a66cff]">
           NITEX
          </h2>
          <p className="text-[#6c757d]">
            Among digital marketing agencies, NITEX is ranked in the top
            1%. Our PPC experts are among the best in the market and have a
            proven track record of expanding successful companies while
            balancing performance with excellent customer care.
          </p>
          <div className="my-5">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-[12px] sm:text-sm px-5 py-1 sm:py-2.5 text-center mr-2 mb-2"
            
            >
              Contact Us
            </button>
          </div>
          <div className="my-5">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full  text-[12px] sm:text-sm px-5 py-1 sm:py-2.5 text-center mr-2 mb-2"
              
            >
              Explore Our Services
            </button>
          </div>
        </div>
        <div className="lg:w-[50%] flex flex-col justify-center ">
          <img
            src={infocard}
            alt="no"
            width={536.66}
            height={169.77}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;