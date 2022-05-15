import React from 'react';
import Vector from '../../assets/vector.png';
function SuccefullPopup (props){
    return (props.trigger)?(
        <div class="ml-1  fixed top-0 left-0 bg-blue-700 mt-[70px]">
            <div class="relative p-12 w-full text-white">
            <div className='flex justify-center'>
            <img className="h-8 w-8  " src={Vector} alt="succed icon"  />
            </div>
            <p className='mt-5'>{props.children}</p>
            </div>
        </div>
    ) :"";
}
export default SuccefullPopup;