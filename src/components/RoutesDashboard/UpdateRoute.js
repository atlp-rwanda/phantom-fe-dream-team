import React from 'react'

function UpdateRoute() {
  return (
    

<div> <div className=''>
    <h1>Add a new route</h1>
</div>
<section className='flex'>
<div className=''>
picture
</div>
<div className=''>
<div className="border-gray-50 flex flex-col">
    <label className=" text-blue-700 font-bold text-base "><span>FullNames</span><span className="text-white text-red-600 ml-5">*</span></label>
    <div className="">
      <input type="text" name="name" placeholder="Full Names..." className="w-64 p-2  sm:text-sm rounded-md
        border-solid border-2"/>
    </div>
  </div>
</div>
</section>

    </div>
  )
}

export default UpdateRoute