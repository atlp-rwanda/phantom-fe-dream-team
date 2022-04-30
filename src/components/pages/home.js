import React from 'react'
import SKELETON from './skeletonUI'
import {Link} from 'react-router-dom'
export default function home() {
  return (
    <>
    <div><Link to='/ResetPassword'>resetPassword</Link></div>
    <SKELETON/>
    </>

  )
}
