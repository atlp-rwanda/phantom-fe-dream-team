import React from 'react';
import { Icon } from '@iconify/react';
function SuccefullPopup (props){
    return (props.trigger)?(
        <div class="ml-1 fixed top-0 left-0 bg-blue-700 mt-[70px]">
            <div class="relative p-12 w-full text-white content-center ">
            <p className=" absolute top-2 right-[140px] h-8 w-8 " ><Icon icon="flat-color-icons:ok"  width="36" height="36"  /></p>
                
                {props.children}
            </div>
        </div>
    ) :"";
}
export default SuccefullPopup;