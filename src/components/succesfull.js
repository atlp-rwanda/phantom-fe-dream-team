import React from 'react';
import Vector from './img/vector.png';
function SuccefullPopup (props){
    return (props.trigger)?(
        <div class="ml-0 mt-1 fixed top-0 left-0 w-80 h-30 bg-blue-500 justify-center items-center flex-initial  ml-[820px] mt-40">
            <div class="relative p-12 w-full text-white content-center ">
            <button onClick={()=>close()} className="absolute top-0 right-2">X</button>               
             <img className=" absolute top-2 right-40 h-8 w-8  " src={Vector} alt="succed icon"  />
                
                {props.children}
            </div>
        </div>
    ) :"";
}
export default SuccefullPopup;