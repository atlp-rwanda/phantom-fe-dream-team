import React from 'react';


import bus from '../images/landing.png';


function Landingpage() {
    return (
        <div>
        
           <div className='flex  flex-row  mt-20 py-10 lg:flex-col-reverse  md:m-4'>
           <div className='text-center mt-10 px-20 lg:mt-10 xs:mt-5'>
           <h1 className='text-5xl text-blue-700 font-serif font-bold xl:text-5xl lg:text-5xl md:text-4xl sm:text-2xl xs:text-base xs:mt-2'>
               Track Bus Location
           </h1>
           <p className='text-serif py-10 text-base text-blue-500 text-xl xl:text-base lg:text-base md:text-base sm:text-xs xs:text-xs xs:mt-2' >Choose Your Route Track your bus live .</p>
           <button className='mt-10 lg:mt-5 bg-blue-500 text-white hover:bg-white hover:text-blue-700 font-bold py-4 px-12 rounded lg:text-base md:text-xs sm:text-xs xs:text-xs xs:mt-2'>Track Bus</button>
      


           </div>
           <div className='mt-20 xs:m-4'>
           <img src={bus}/>

           </div>


           </div>


        </div>
    )
}

export default Landingpage