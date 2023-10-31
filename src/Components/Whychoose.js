import React from 'react';
import ques from './Images/Why choose us images.png'

const Whychoose = () => {
    return (
        <div className="bg-[url('/public/Images/choose-bg.png')]"
        data-aos="fade-up"
        style={{
         
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "auto",
          marginTop: 0,
          paddingBottom: 20,
        }}
      >
        <div className="mx-[5%] ">
          <style jsx>
            {`
              .percentageP {
                border-radius: 10px;
                font-size: 1.7rem;
                margin-top: auto;
                margin-bottom: auto;
                display: flex;
                justify-content: center !important;
              }
              .glassCard {
                background: rgba(255, 255, 255, 0.2);
                border-radius: 16px;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
                border: 1px solid rgba(255, 255, 255, 0.3);
              }
            `}
          </style>
          <h1 className="text-center text-[2rem] lg:text-[2.8rem]  font-bold text-transparent bg-clip-text bg-gradient-to-r   from-[#0e48c5] to-[#a66cff]">
            Why Choose Us ?
          </h1>
          <div className="md:flex ">
            <div className=" md:w-[50%]  flex flex-col justify-center pr-[15px]">
              <div className="mx-auto w-[80%] md:w-full">
                <img
                  src={ques}
                  className="mx-auto"
                  width="503px"
                  height={503}
                  alt=""
                />
              </div>
            </div>
  
            <div className="flex flex-col gap-y-[3%] justify-center md:w-[50%]">
              <div className="flex glassCard p-[2%] mt-[5%] lg:mt-0 rounded-xl">
                <h1 className="percentageP text-[#3ccf4e] bg-[rgba(60,207,78,.2)] py-[2%] px-[1%]">
                  100%
                </h1>
                <div className="pl-[2%] flex flex-col justify-center">
                  <h1 className="text-[1rem] lg:text-[1.3rem] font-medium">
                    Customer Satisfaction
                  </h1>
                </div>
              </div>
              <div className="flex glassCard p-[2%] mt-[5%] lg:mt-0 rounded-xl">
                <h1 className="percentageP text-[#ffc800] bg-[rgba(255,200,0,.2)] py-[2%] px-[1%]">
                  100%
                </h1>
                <div className="pl-[2%] flex flex-col justify-center">
                  <h1 className="text-[1rem] lg:text-[1.3rem]  font-medium">
                    On time Project Delivery
                  </h1>
                </div>
              </div>
              <div className="flex glassCard p-[2%] mt-[5%] lg:mt-0 rounded-xl">
                <h1 className="percentageP  text-[#2192ff] bg-[rgba(33,146,255,.2)] py-[2%] px-[1%]">
                  30+
                </h1>
                <div className="pl-[2%] flex flex-col justify-center">
                  <h1 className="text-[1rem] lg:text-[1.3rem]  font-medium">
                    Ongoing Projects
                  </h1>
                </div>
              </div>
              <div className="flex glassCard p-[2%] mt-[5%] lg:mt-0 rounded-xl">
                <h1 className="percentageP text-[#a66cff] bg-[rgba(166,108,255,.2)] py-[2%] px-[1%]">
                  100%
                </h1>
                <div className="pl-[2%] flex flex-col justify-center">
                  <h1 className="text-[1rem] lg:text-[1.3rem]  font-medium">
                    Personalised Efforts
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Whychoose;