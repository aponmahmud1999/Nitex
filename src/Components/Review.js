import React, {  useRef } from "react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import {Autoplay,  EffectCoverflow, Pagination, FreeMode , Navigation} from "swiper/modules";
import {SwiperSlide,Swiper} from 'swiper/react'


const Review = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);




  

    const customers = [
        {
          name: "Apon Mahmud",
          stars: 5,
          mail: "aponmahmud36@gmail.com",
          image:
            "https://images.unsplash.com/photo-1549045337-967927d923c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          testimonial:
            "I had the pleasure of working with XYZ Web Development Agency on a recent project, and I couldn't be happier with the results. From start to finish, their team demonstrated exceptional professionalism, technical expertise, and a commitment to delivering outstanding quality.",
        },
        {
            name: "Apon Mahmud",
            stars: 5,
            mail: "aponmahmud36@gmail.com",
          image:
            "https://images.unsplash.com/photo-1558499932-9609acb6f443?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            testimonial:
            "I had the pleasure of working with XYZ Web Development Agency on a recent project, and I couldn't be happier with the results. From start to finish, their team demonstrated exceptional professionalism, technical expertise, and a commitment to delivering outstanding quality.",
        },
        {
            name: "Apon Mahmud",
            stars: 5,
            mail: "aponmahmud36@gmail.com",
          image:
            "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
            testimonial:
            "I had the pleasure of working with XYZ Web Development Agency on a recent project, and I couldn't be happier with the results. From start to finish, their team demonstrated exceptional professionalism, technical expertise, and a commitment to delivering outstanding quality.",
        },
        {
            name: "Apon Mahmud",
            stars: 5,
            mail: "aponmahmud36@gmail.com",
          image:
            "https://images.unsplash.com/photo-1619380061814-58f03707f082?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            testimonial:
            "I had the pleasure of working with XYZ Web Development Agency on a recent project, and I couldn't be happier with the results. From start to finish, their team demonstrated exceptional professionalism, technical expertise, and a commitment to delivering outstanding quality.",
        },
      ];
  return (
    <div id="review" className="md:flex mx-[5%] md:gap-x-[1%] lg:gap-x-[3%] pb-[10%]">
    
      <h1 className="md:hidden text-center text-[2rem] lg:text-[2.8rem]  font-bold text-transparent bg-clip-text bg-gradient-to-r   from-[#0e48c5] to-[#a66cff]">
        CLient Review
      </h1>
      <div
        className="hidden md:w-[30%] bg-base-100 shadow-xl py-[1%] md:py-0    px-[2%] rounded-xl text-black md:flex flex-col justify-center"
        data-aos="fade-up"
      >
       
        <h2 className="text-3xl font-bold mb-[5%]">Client Review</h2>
        <div>
          <p className=" mb-[5%] text-lg md:text-[12px] lg:text-lg">
         Naxit firm has collaborated with clients in almost every
          industry and sector to design effective digital marketing strategies
          prioritizing client acquisition
          </p>
        </div>
        <div className="flex pb-[5%]">
        
          <div className="flex mx-auto justify-center pb-2">
            <div ref={navigationPrevRef} className="-mt-2">
              <button
                className=" btnswip bg-white text-[#05122d]  hover:bg-transparent   rounded-full text-4xl font-bold
              px-3 shadow-lg shadow-slate-700 hover:shadow-none"
              >
                {"<"}
              </button>
            </div>
            <div ref={navigationNextRef} className="-mb-2">
              <button
                className=" btnswip bg-white text-[#05122d]  hover:bg-transparent   rounded-full text-4xl font-bold
              px-3 shadow-lg shadow-slate-700 hover:shadow-none"
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <div className="lg:w-[60%]" data-aos="fade-up">
        <div style={{ width: "100%" }}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            slidesPerView={3}
            centeredSlides={false}
            breakpoints={{
              100: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              400: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
            onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
            className="mySwiper p-[10%]"
          >
            {customers.map((customer) => (
              <SwiperSlide key={customer.id}>
                <div className="w-full bg-white px-[10%] py-[2%] my-[15%] rounded-xl shadow-xl flex flex-col justify-center  ">
                  <div className="flex justify-center">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar btn-sm"
                    >
                      <div className="w-7 rounded-full">
                        <img src={customer.image} alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="my-auto">
                    <h1 className="text-[16px] font-bold text-center">
                      {customer.name}
                    </h1>
                  </div>
                  <div className="flex justify-center">
                    {[...Array(customer.stars)].map((st) => {
                      return (
                       "⭐"
                      );
                    })}
                  </div>
                  <h1 className="text-[15px] font-thin text-center">
                    {customer.mail}
                  </h1>
                  <h1 className=" -mb-4  -ml-2">
                    <span className="text-[10px] md:text-[20px] font-serif font-extrabold">
                      {'"'}
                    </span>
                  </h1>
                  <h1 className="text-[10px] text-justify">
                    {customer.testimonial.slice(0, 200)}
                  </h1>
                  <h1 className="flex justify-end -mt-4 -mr-2">
                    <span className="text-[10px] md:text-[20px] font-serif font-extrabold">
                      {'"'}
                    </span>
                  </h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;