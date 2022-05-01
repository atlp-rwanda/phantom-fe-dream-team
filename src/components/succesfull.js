import React from 'react';
function SuccefullPopup (props){
    return (props.trigger)?(
        <div class="ml-4 mt-px lg:fixed top-0 left-0 w-80 h-30 bg-blue-500 justify-center items-center flex-initial  ml-[820px] mt-40">
            <div class="relative p-12 w-full text-white content-center ">
                
                {props.children}
            </div>
        </div>
    ) :"";
}
export default SuccefullPopup;