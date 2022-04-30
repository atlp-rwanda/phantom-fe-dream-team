import React from 'react'
import loader from '../../assets/loader.gif'
export default function skeletonUI() {
  return (
    <div className="flex flex-col items-center">
      <img src={loader} alt='' />
    </div>
  )
}


