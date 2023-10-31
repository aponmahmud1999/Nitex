import React from 'react';

const Contact = () => {
    return (
        <div className='bg-[#040d22] py-[5%]'>
              <h1 className="text-center text-[2rem] lg:text-[2.8rem]  font-bold text-white">
            Contact Us
          </h1> 
      <div className=" lg:grid lg:grid-cols-2 ">
        <div
          className=" flex flex-col md:pl-[5%] justify-center "
          data-aos="fade-down"
        >
          <h1 className="text-[28px]  lg:text-[40px] text-white">
            Say Hello! On Our Support.
          </h1>
          <p className="pt-6 pb-1  text-xs md:text-xl  text-slate-500">
          I had the pleasure of working with XYZ Web Development Agency on a recent project, and I couldn't be happier with the results. From start to finish, their team demonstrated exceptional professionalism, technical expertise, and a commitment to delivering outstanding quality.
          </p>
          
        </div>

        <form
          data-aos="fade-up"
        
          className="flex flex-col  gap-y-3 px-[10%]  py-[5%]"
        >
          <div className="flex flex-col md:grid grid-cols-2 gap-x-3 gap-y-3">
            <input
        
              type="text"
              placeholder="First Name"
              className="input input-bordered input-sm md:input-md shadow-2xl shadow-purple-700 focus:shadow-none"
            />
            <input
             
              type="text"
              placeholder="Last Name"
              className="input input-bordered input-sm md:input-md shadow-2xl shadow-purple-700 focus:shadow-none"
            />
          </div>
          <input
           
            type="email"
            placeholder="Email"
            className="input input-bordered input-sm md:input-md w-full shadow-2xl shadow-purple-700 focus:shadow-none"
          />
          <textarea
           
            className="textarea textarea-bordered  h-24 w-full shadow-2xl shadow-purple-700 focus:shadow-none"
            placeholder="message"
          ></textarea>
          <button
            type="submit"
            className="w-full text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-sm text-[12px] sm:text-sm px-5 py-1 sm:py-2.5 text-center mr-2 mb-2"
          >
            Submit
          </button>
        </form>
      </div>
  
    </div>
    );
};

export default Contact;