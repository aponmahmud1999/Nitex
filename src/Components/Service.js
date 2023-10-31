import React from 'react';
import graphics from "./Images/graphics.gif";
import call from "./Images/call.gif";
import web from "./Images/web.gif";
import media from "./Images/media.gif";
import digital from "./Images/digital.gif";
import softwaredev from "./Images/softwaredevelopment.gif";
import appmigration from "./Images/appmigration.gif";
//import Swiper from "swiper";
import {Autoplay, Pagination, Navigation} from "swiper/modules";
import {SwiperSlide,Swiper} from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules



const Service = () => {
    const Services = [
        {
          name: "Call Center",
          description: "We build website for your business or organization",
          imagesrc: call,
          navurl: "/services/callcenter",
        },
        {
          name: "Web Design & Development",
          description: "We build website for your business or organization",
          imagesrc: web,
          navurl: "/services/webdevelopment",
        },
        {
          name: "Mobile Application Development",
          description: "We build website for your business or organization",
          imagesrc: media,
          navurl: "/services/mobileappdevelopment",
        },
        {
          name: "Digital Marketing (SEO, PPC, SMMM)",
          description: "We build website for your business or organization",
          imagesrc: digital,
          navurl: "/services/dmarketing",
        },
        {
          name: "Graphics Designing (Logo, Banner)",
          description: "We build website for your business or organization",
          imagesrc: graphics,
          navurl: "/services/graphicsdesign",
        },
        {
          name: "Software Development/ Consulting",
          description: "We build website for your business or organization",
          imagesrc: softwaredev,
          navurl: "/services/softwaredevelopment",
        },
        {
          name: "Application Migration/ Maintenance",
          description: "We build website for your business or organization",
          imagesrc: appmigration,
          navurl: "/services/appmigration",
        },
      ];
     
      return (
        <div id='Service' className='p-[5%]' data-aos="fade-right">
           <h1 className="text-center text-[2rem] lg:text-[2.8rem]  font-bold text-transparent bg-clip-text bg-gradient-to-r   from-[#0e48c5] to-[#a66cff]">
            Our Services
          </h1>
          <div className='hidden md:block'>
          <Swiper
            pagination={{
              clickable: true,
            }}
            loop={true}
            slidesPerView={1}
            breakpoints={{
            
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper hidden md:block"
          >
            {Services.map((service, index) => (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="flex flex-col my-[20%] rounded-xl bg-base-100  lg:w-full mx-[10%] lg:mx-0"
                >
                  <div className="py-[10%] px-[20%]">
                    <img
                      src={service.imagesrc}
                      width={234}
                      height={234}
                      className="rounded-xl"
                      alt=""
                    />
                  </div>
                  <h1 className="text-[.7rem] lg:text-[0.7rem] font-[500px] text-black text-center">
                    {service.name}
                  </h1>
                  <h1 className="text-[.5rem] lg:text-[.5rem] text-[#b9b9b9] text-center  mb-[20px]">
                    {service.description}
                  </h1>
                  <button
                    className="relative group overflow-hidden px-6 h-7 rounded-full flex justify-center space-x-2 items-center bg-gradient-to-r from-[#000000] to-[#d000fb] hover:to-[#000000] hover:from-[#d000fb] w-[80%] mx-[10%] mb-[5%]"
                    
                  >
                    <span className="relative text-[12px] lg:text-sm text-white">
                      Know More
                    </span>
                    <div className="flex items-center -space-x-3 translate-x-3">
                      <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
          <div className="flex flex-col md:hidden mt-[5%]">
            {Services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col my-[5%] rounded-xl bg-base-100  lg:w-full mx-[10%] lg:mx-0"
              >
                <div className="py-[10%] px-[20%] mx-auto">
                  <img
                    src={service.imagesrc}
                    width={234}
                    height={234}
                    className="rounded-xl"
                    alt=""
                  />
                </div>
                <h1 className="text-[.7rem] lg:text-[0.7rem] font-[500px] text-black text-center">
                  {service.name}
                </h1>
                <h1 className="text-[.5rem] lg:text-[.5rem] text-[#b9b9b9] text-center  mb-[20px]">
                  {service.description}
                </h1>
                <button
                  className="relative group overflow-hidden px-6 h-7 rounded-full flex justify-center space-x-2 items-center bg-gradient-to-r from-[#000000] to-[#d000fb] hover:to-[#000000] hover:from-[#d000fb] w-[80%] mx-[10%] mb-[5%]"
                 
                >
                  <span className="relative text-[12px] lg:text-sm text-white">
                    Know More
                  </span>
                  <div className="flex items-center -space-x-3 translate-x-3">
                    <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Service;


