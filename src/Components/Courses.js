import React from 'react';

const Courses = () => {
    return (
     <div id='Courses'>
        <h1 className="text-center text-[2rem] lg:text-[2.8rem]  font-bold text-transparent bg-clip-text bg-gradient-to-r pb-[2%] md:pb-[5%]   from-[#0e48c5] to-[#a66cff]">
            Our Courses
          </h1>
           <div className='md:flex md:justify-between mx-[10%] '>
            

            {
                [1,2,3].map((i)=><div key={i} className='md:my-0 my-10' >
                <div class="hero  bg-[url('/public/Images/mern.jpg')] rounded-xl" >
                    <div class=" rounded-2xl py-32"></div>
                    <div class="hero-content align-top text-neutral-content -mt-36">
                        <div class="max-w-md">
                            
                            
                                
                                <button class="badge badge-secondary ">Get Starte</button>
                           

                        </div>
                    </div>
                </div>
                <div className=' ml-10 mr-5 -mt-10 transition duration-0 hover:duration-700 ease-in-out hover:scale-[1.02] hover:shadow-2xl bg-white rounded-2xl  '>
                    <div class="card card-side bg-base-100">
                        
                        <div class="card-body ">
                            
                            <div class='flex'>
                                <div class="rating text-sm">
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p class="card-title ml-2"> 4.7/5</p>
                            </div>
                            <div class=''>
                             <button className=' hover:text-blue-600 border-none'>Complete web development course</button>
                              
                            </div>
                         
                        </div>
                    </div>
                   
                    <div class="divider"></div>
                    <div className='flex justify-between pb-5'>
                        <p className='ml-5' >🕒1hr 30mins</p>
                        <p className='font-bold mr-5'>$29</p>
                    </div>
                </div>
            </div>)
            }

         
          
           
        </div>
     </div>
    );
};

export default Courses;