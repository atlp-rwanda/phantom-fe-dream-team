import React from 'react';
import { Icon } from '@iconify/react';
function ErrorPopup (props){
    return (props.trigger)?(
        <div class=" fixed top-0 left-0 w-80 h-30 bg-blue-500 justify-center items-center flex-initial  ml-[820px] mt-40">
            <div class="relative p-12 w-full text-white content-center "> 
            <p className=" absolute top-2 right-40 h-8 w-8 " ><Icon icon="bx:error" color="red" width="36" height="36"  /></p>        
        
                {props.children}
            </div>
        </div>
    ) :"";
}
export default ErrorPopup;