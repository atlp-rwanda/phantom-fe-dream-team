import React from 'react'
import { loginUser } from '../../redux/reducers/authReducer';
import { useDispatch } from 'react-redux';
import {useNavigate } from 'react-router-dom';
export default function login() {

    let from ='/logout';
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const data={
        user:'arthur'
    }
    const HandleSubmit=()=>{
        dispatch(loginUser(data.user));
        navigate(from);
        console.log('success')
    }
  return (

    <>
    <div className='flex justify-center mt-5 '>
     <button className='bg-blue text-white  px-10 py-5 rounded-xl' onClick={HandleSubmit}>login</button>
     </div>
    </>
   
  )
}
