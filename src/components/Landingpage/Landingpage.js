import React from 'react';


import bus from '../images/landing.png';


function Landingpage() {
    return (
        <div>
        
           <div className='flex  flex-row  mt-20 py-10 lg:flex-col-reverse '>
           <div className='text-center mt-20 ml px-20 lg:mt-10'>
           <h1 className='text-5xl font-serif font-bold xl:text-5xl lg:text-5xl md:text-4xl sm:text-2xl xs:text-base    '>
               Track Bus Location
           </h1>
           <p className='text-serif py-10 text-base xl:text-base lg:text-base md:text-base sm:text-xs xs:text-xs ' >Choose Your Route Track your bus live .</p>
           <button className='mt-10 lg:mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-10 rounded xl:text-xs  lg:text-base md:text-xs py-1 px-3 sm:text-xs xs:text-xs'>Read More</button>
      


           </div>
           <div className='mt-20'>
           <img src={bus}/>

           </div>


           </div>


        </div>
    )
}

export default Landingpage