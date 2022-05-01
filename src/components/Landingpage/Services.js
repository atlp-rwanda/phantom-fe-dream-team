import React from "react";
import { Icon } from '@iconify/react';


function Services() {
    return ( 
        <div>

        <div className="bg-blue-800 pt-10 lg:pt-0 " >
       
        <h1 className="text-center mr-60  py-5 font-serif text-3xl text-white font-bold ml-40  lg:text-2xl  md:text-xl  sm:text-base xs:text-base ml-0 mr-0    " >How it works</h1>
    
        <div className="flex flex-row  space-x-40 lg:space-x-0  md:space-x-0 sm:space-x-0 mx-10 lg:flex-col ">
        <div className="bg-[#fafaf9] text-blue-500 flex flex-col items-center p-20  mb-10 xs:my-10 sm:my-10 md:my:10 lg:my-10    rounded-xl">
        <Icon icon="clarity:cursor-hand-click-line" color="#2563eb" width="80" height="80" />
   
        <h3 className="text-2xl text-blue-800 font-bold font-sans mt-10">step1</h3>
        <p className="text-base font-sans mt-10   xl:text-base lg:text-base md:text-base sm:text-xs xs:text-xs">Click On  Track Bus</p>

        </div>
        <div className="bg-[#fafaf9] text-blue-500 flex flex-col items-center p-20  mb-10 xs:my-10 sm:my-10 md:my:10 lg:my-10    rounded-xl ">
        <Icon icon="fa-solid:search-location" color=" #2563eb" width="80" height="80"  />
      
        <h3 className="text-2xl text-blue-800 font-bold font-sans mt-10">step2</h3>

        <p className="text-base font-sans mt-10   xl:text-base lg:text-base md:text-base sm:text-xs xs:text-xs">Enter Location & destination</p>

        </div>

        <div className="bg-[#fafaf9] text-blue-500  flex flex-col items-center mb-10   p-20 xs:my-10 sm:my-10 md:my:10 lg:my-10   rounded-xl ">
        <Icon icon="bx:bus" color="  #2563eb" width="80" height="80" />
        <h3 className="text-2xl text-blue-800 font-bold font-sans mt-10">step3</h3>
        <p className="text-base font-sans mt-10   xl:text-base lg:text-base md:text-base sm:text-xs xs:text-xs">Find the nearest bus </p>

        </div>


        </div>




        </div>






        </div>


     );
}

export default Services;