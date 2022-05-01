import React from 'react'
import loader from './img/loading.gif'
export default function skeletonUI() {
  return (
    <div className="flex flex-col items-center">
      <img src={loader} alt='' className='pt-32 w-72 h-70'/>
    </div>
  )
}