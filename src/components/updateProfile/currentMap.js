import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { useLoader } from '../useLoader';
import SkeletonUI from '../skeletonUI';
function CurrentMap() {
    const { loading } = useLoader();
    return (
        <div> 
            {loading && <SkeletonUI />}
        {!loading && (
               <div className="block w-full h-full pt-[80px] pb-[10px] bg-blue-600">
                   <div className="flex justify-center p-[5px] bg-white w-full ">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d63800.43932053796!2d30.053527172165502!3d-1.9416967040735582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x19dca530791fc1c1%3A0xe3ab843374156132!2sNyabugogo%20Bus%20parking%2C%20325V%2BMXC%2C%20Kigali!3m2!1d-1.9408014!2d30.0448836!4m5!1s0x19dca73d2df48ff7%3A0x5c6957621a18a4bb!2sKimironko%2C%20Kigali!3m2!1d-1.9362376!2d30.130060099999998!5e0!3m2!1sen!2srw!4v1651748635455!5m2!1sen!2srw" className="w-full h-[400px] " allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                 </div>
                   </div>
        )}
        </div>
    )}
    export default CurrentMap;