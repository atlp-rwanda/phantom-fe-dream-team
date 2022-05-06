import { getDefaultNormalizer } from '@testing-library/react';
import React, {useState} from 'react'
import bg from './img/bg.jpg'

const Login = () => {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setsuccessMessage] = useState('');


  const handleEmailChange = (e) => {
    setsuccessMessage('');
    setEmailError('');
    setEmail(e.target.value);
    
  }

  const handlePasswordChange = (e) => {
    setsuccessMessage('');
    setPasswordError('');
    setPassword(e.target.value);
    
  }

  const handleFormSubmit = (e) =>{
    e.preventDefault();

    //checking if email is empty
    if (email!==''){
      // check other conditions

      const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (emailRegEx.test(email)){
        setEmailError('');
        if (email ==='gerukundo14@gmail.com'){
          setEmailError('');
          if (password === 'demo'){
            // success message
            alert(`Hey ${email} you have successfully loged in !`);
            window.location.assign('https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwirgraEgL_3AhW6RfEDHR2iBdcQPAgI')
            // setsuccessMessage('you are logged in ')

          }
          else{
            setPasswordError('Wrong password');

          }

        }
        else{
          setEmailError('Wrong User Email or Password');

        }

      }
      

    }
    else{
      setEmailError('Email is required')
    }

    //checking if password is empty
    if (password!==''){

    }
    else{
      setPasswordError('Password is required')
    }



  }
    

    return (
      
      <>
      
        <h1 className ="text-blue-500 font-bold text-center  top-10 text-[36px] top-[3px]">SignIn</h1>

        <div >
          {
              
            <div className='relative'>
              <div className='flex-column justify-center ml-auto text-center mt-20  lg:flex md:flex'>
                <img src={bg} alt='bus' className='w-1/3 shadow-xs hidden lg:block md:hidden' />
                <div className='md:w-1/3 lg:w-1/3 w-2/3 shadow-xl' >
                  <label className='block text-gray-700 text-center mt-2'>Sign in to your account</label>

                  <div className=' text-center'>
            
                    <form className='mt-6' onSubmit={handleFormSubmit}>
                      <div>

                        <input 
                        name="email"
                        id="email"
                        type='email' 
                        placeholder='Username' 
                        onChange={handleEmailChange} value = {email}
                        className='w-1/5 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none' />
                        {emailError&&<div className='error-msg not-italic subpixel-antialiased text-sm font-sans text-ml text-red-500 text-center font-bold'>{emailError}</div>}
                      </div>
                
                      <div className='mt-4'>
                    
                        <input 
                        name="password"
                        id="password"
                        onChange={handlePasswordChange} value = {password}
                        type='password'  
                        placeholder='Password'  
                        className='w-1/5 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none' />
                        {passwordError&&<div className='error-msg not-italic subpixel-antialiased text-sm font-sans text-ml text-red-500 text-center font-bold'>{passwordError}</div>}
                              
                      </div>

                      <button  className='w-1/5 px-4 py-3 rounded-lg bg-gray-200 mt-2 border bg-blue-500 hover:bg-blue-400 focus:bg-#1d4ed8 text-white font-semibold focus:outline-none'>Log In</button>
                    </form>
                    <div className='text-center mt-2'>
                      <a href='#' className='text-sm  hover:text-blue-700 focus:text-blue-700'>Forgotten Password?</a>
                    </div>

                      <hr className='my-6 border-gray-300 w-1/4'/>

                    <p className='mt-8 text-center pb-5'>
                      Not a member? &nbsp;   
                      <a href='#' className='text-blue-500 hover:text-blue-700 font-semibold'>
                       Register
                      </a>
                    </p>
                  </div>

                </div>
              </div>
            </div>
          
          }

        </div>
      </>
    )
}
export default Login



