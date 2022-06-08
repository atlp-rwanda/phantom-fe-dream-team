import React from 'react';
import bus from '../../assets/landing.png';
import Slider from "../slider";
function Landingpage() {
    return (
        <div>
 
            <div className='flex space-x-reverse flex-row mt-20 py-10 xs:flex-col-reverse md:mt-10 justify-center '>
                <div className='text-center mt-20 ml-20 xs:m-4 px-20 lg:mt-10 '>
                    <h1 className='text-5xl text-blue-700  font-bold xl:text-5xl lg:text-5xl md:text-4xl sm:text-2xl xs:text-base xs:mt-2 xs:py-2'>
                        Track Bus Location
                    </h1>
                    <p className=' py-10 text-blue-500 text-xl xl:text-base lg:text-base md:text-base sm:text-xs xs:text-xs xs:mt-2 xs:py-2' >Choose Your Route Track your bus live .</p>
                    <button className='mt-3 lg:mt-5 bg-blue-700 text-white hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600  hover:text-blue-700 font-bold py-2 px-8 rounded xl:text-xs md:py-1 md:px-12  lg:text-base md:text-xs m:text-xs xs:text-xs xs:py-2'>Track Bus</button>



                </div>
                <div className='mt-20 h-20 w-30 mr-30 xs:m-4 sm:hiden '>
                <Slider />

                </div>

                

            </div>

         
   

        </div>

        
    )
}

export default Landingpage