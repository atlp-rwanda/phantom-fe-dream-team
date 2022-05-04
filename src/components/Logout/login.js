import React from 'react'
import { loginUser } from '../../redux/reducers/authReducer';
import { useDispatch } from 'react-redux';
import {useNavigate } from 'react-router-dom';
export default function login() {

    let to ='/logout';
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const data={
        user:'arthur'
    }
    const HandleSubmit=()=>{
        dispatch(loginUser(data.user));
        navigate(to);
        // console.log('success')
    }
  return (

    <>

    <div className='flex justify-center mt-5 '>
     <button className='bg-blue-700 text-white  px-10 py-5 rounded-xl mt-40 mb-40' onClick={HandleSubmit}>login</button>
     </div>
    </>
   
  )
}