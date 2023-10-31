import React from 'react';
import Typewriter from 'typewriter-effect'

const Banner = () => {
    return (
        <div>
            <div className="bg-[url('/public/Images/bannerBG.png')] bg-no-repeat bg-cover">
            <div className="lg:flex lg:mx-[7%] ">
       
          <div className="w-full lg:w-[50%] px-[5%] lg:px-0">
            <h1 className="text-[30px] lg:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0e48c5] to-[#a66cff]">
              Welcome to Nitex
            </h1>
            <h1 className="text-[20px] sm:text-[30px] lg:text-[40px] font-bold text-white">
              We Provide
              <Typewriter
                options={{
                  strings: [
                    "Web Development",
                    "Video Editing",
                    "Personal Development",
                    "Graphics Designing",
                    "CV Writing",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="py-6 text-xs md:text-xl text-[#888] md:pb-[10%]">
              At Nitex, We specialise in providing web Development, Video
              Editing Services, Personal Development,CV Writing and yes of course! many more
              things.
            </p>
            
          </div>
       
       
      </div>
    </div>
            
        </div>
    );
};

export default Banner;