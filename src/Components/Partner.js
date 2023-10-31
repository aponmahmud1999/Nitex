import React from 'react';
import logo1 from "./Images/Partners/2.png";
import logo2 from "./Images/Partners/4.png";
import logo3 from "./Images/Partners/5.png";
import logo4 from "./Images/Partners/6-1.png";
import logo5 from "./Images/Partners/6.png";
import logo6 from "./Images/Partners/7.png";
import logo7 from "./Images/Partners/8.png";

//import Swiper from "swiper";
import {Autoplay} from "swiper/modules";
import {SwiperSlide,Swiper} from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules



const Partner = () => {
    const Services = [
        {
        
          imagesrc: logo1,
          navurl: "/services/callcenter",
        },
        {
        
          imagesrc: logo2,
          navurl: "/services/callcenter",
        },
        {
        
          imagesrc: logo3,
          navurl: "/services/callcenter",
        },
        {
        
          imagesrc: logo4,
          navurl: "/services/callcenter",
        },
        {
        
          imagesrc: logo5,
          navurl: "/services/callcenter",
        },
        {
        
          imagesrc: logo6,
          navurl: "/services/callcenter",
        },
        {
        
          imagesrc: logo7,
          navurl: "/services/callcenter",
        },
       
      ];
     
      return (
        <div className='p-[5%]' data-aos="fade-right">
            <p className='md:text-6xl text-xl text-center font-bold font-mono text-red-500'>Our Partner</p>
          <div className=''>
          <Swiper
          
            loop={true}
            slidesPerView={1}
            breakpoints={{
                380: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
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
           
            modules={[Autoplay]}
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
                      width={150}
                      height={150}
                      className="rounded-xl"
                      alt=""
                    />
                  </div>
                  
                 
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
          
        </div>
      );
};

export default Partner;


