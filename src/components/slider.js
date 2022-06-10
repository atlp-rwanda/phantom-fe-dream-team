import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

const slides = [
   
    "/images/bus2.png",
    "/images/bus4.png",
    "/images/bus5.png",
    "/images/bus6.png",
  ];
    


let count = 0;
let slideInterval;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % slides.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = slides.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="flex items-center justfy-center w-full select-none relative ">
      
      <div className="aspect-w-16 aspect-h-9">
        <img src={slides[currentIndex]} alt="" className="h-70 xs:w-20 " />
      </div>

     
      
    </div>
  );
}