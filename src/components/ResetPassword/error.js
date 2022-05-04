import React from 'react';
import Error from '../../assets/errorIcon.png';
function ErrorPopup (props){
    return (props.trigger)?(
        <div class="ml-1 mt-1 fixed top-0 left-0 bg-red-700 mt-[70px] z-10">
            <div class="relative p-12 w-full text-white">
            <div className='flex justify-center'>
            <img className="h-8 w-8  " src={Error} alt="error icon"  />
            </div>
            <p className='mt-5'>{props.children}</p>
            </div>
        </div>
    ) :"";
}
export default ErrorPopup;

