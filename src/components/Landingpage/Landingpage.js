import React from 'react';
// import bus from '../images/bus1.png';
// import bus2 from '../images/bus2.png';


function Landingpage() {
    return (
        <div>
           <div  className='bg-[url("https://en.yutong.com/res/images/importimg/2020JTQpX0374S/images/product-details-img1.jpg")] bg-no-repeat bg-fixed bg-cover lg:w-50'>
               <div className='bg-[#1f2937]   opacity-80 h-80  mx-40 sm:mx-20  ' >
                  
                   <h1 className='text-white text-4xl  sm:text-xl md:text-2xl lg:text-3xl  xs:text-xs pt-20 font-serif  ml-20 font-black '>WELCOME TO PHANTOM</h1>
                    <p className='text-[#e5e7eb] text -base  sm:text-xs md:text-sm lg:text-base  mt-20  ml-20'>Don't need to wait for the bus for long? We can help. know the best nearby station</p>
                   
               </div>
               <div className='flex flex-row sm:flex-col mt-80   bg-[#f8fafc]' >
                   
                 
                   <img src="https://images.unsplash.com/photo-1632276536839-84cad7fd03b0?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDV8fGJ1c3xlbnwwfHx8fDE2NTA3MjIyODE&ixlib=rb-1.2.1&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" className=" w-180 " alt="..." />
               
                    
                   <div className=' mt-20 ml-40 sm:ml-20 '>
                       <h2 className='text-2xl  font-serif '>About Phantom</h2>
                       <p className='text-sm mt-10'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br/>when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially <br/>unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, <br/>and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                         <button className='mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Read More</button>
                   </div>
                 

               </div>


           </div>
        </div>
    )
}

export default Landingpage
