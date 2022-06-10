import React from "react";
import { Icon } from '@iconify/react';


function Services() {
    return (
        <div>

            <div className="bg-blue-800 pb-20" >

                <h1 className="text-center   text-3xl text-white font-bold mt-10 mb-10 pt-10 lg:text-2xl  md:text-xl   " >How it works</h1>

                <div className="flex flex    md:flex-col  mx-5 items-center">
                    <div className="bg-[#fafaf9] w-[100%] text-blue-500 flex flex-col items-center p-5 xs:w-full mb-5 md:w-full  rounded-xl">
                        <Icon icon="clarity:cursor-hand-click-line" color="#2563eb" width="80" height="80" />
                        <h3 className="text-2xl text-blue-500 font-bold font-sans mt-10">Step1</h3>
                        <p className="text-base font-sans mt-10   xl:text-base lg:text-base md:text-base sm:text-xs xs:text-xs">Click On  Track Bus</p>

                    </div>
                    
                    <div className="bg-[#fafaf9] w-[100%] text-blue-500 flex mr-5 ml-5 flex-col items-center p-5 xs:w-full mb-5 md:w-full rounded-xl ">
                        <Icon icon="fa-solid:search-location" color=" #2563eb" width="80" height="80" />
                        <h3 className="text-2xl text-blue-500 font-bold font-sans mt-10">Step2</h3>
                        <p className="text-base font-sans mt-10   xl:text-base lg:text-base md:text-base sm:text-xs xs:text-xs">Enter Location & destination</p>

                    </div>

                    <div className="bg-[#fafaf9] w-[100%] text-blue-500 flex flex-col items-center p-5 xs:w-full mb-5 md:w-full  rounded-xl ">
                        <Icon icon="bx:bus" color="  #2563eb" width="80" height="80" />
                        <h3 className="text-2xl text-blue-500 font-bold font-sans mt-10">Step3</h3>
                        <p className="text-base font-sans mt-10   xl:text-base lg:text-base md:text-base sm:text-xs xs:text-xs">Find the nearest bus </p>

                    </div>


                </div>




            </div>






        </div>


    );
}

export default Services;