import React from 'react';
import Error from './img/errorIcon.png';
function ErrorPopup (props){
    return (props.trigger)?(
        <div class="ml-4 mt-px fixed top-0 left-0 w-80 h-30 bg-blue-500 justify-center items-center flex-initial  ml-[820px] mt-40">
            <div class="relative p-12 w-full text-white content-center ">
            <button onClick={()=>setSucceed(false)} className="absolute top-0 right-2">X</button>    
            <Icon icon="bxs:error" width="32" height="32" className="absolute top-2 right-40 h-8 w-8" />           
            <img className=" absolute top-2 right-40 h-8 w-8  " src={Error} alt="succed icon"  />
                {props.children}
            </div>
        </div>
    ) :"";
}
export default ErrorPopup;