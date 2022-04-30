import React from 'react';
function ErrorPopup (props){
    return (props.trigger)?(
        <div class="fixed top-0 left-0 w-80 h-30 bg-red-400 justify-center items-center flex-initial  ml-[820px] mt-40">
            <div class="relative p-12 w-full text-white content-center ">
                
                {props.children}
            </div>
        </div>
    ) :"";
}
export default ErrorPopup;