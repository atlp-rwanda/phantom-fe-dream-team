import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logoutReducer } from '../../redux/reducers/logoutReducer';
import {useNavigate } from 'react-router-dom';
import swal from '@sweetalert/with-react';

export default function logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const { authenticated, user } = useSelector((state) => state?.auth);

    const logout = () => {
        dispatch(logoutReducer());
        swal({
            title: "Success!",
            text: "You are logged out",
            icon: "success",
            button: "Ok!",
          });
        navigate('/');
      };
    
  return (
      <>
    <div>logout</div>
    <input
    name="Logout"
    type="submit"
    id="logout"
    styles="bg-red mt-4 px-6 py-1 hover:bg-red-600"
    onClick={logout}
     />
     </>
  )
}
