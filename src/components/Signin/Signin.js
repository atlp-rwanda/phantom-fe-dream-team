import { getDefaultNormalizer } from '@testing-library/react';
import {Link} from 'react-router-dom';
import React, {useState} from 'react'
import bus from '../../../src/assets/bus.png'
import { useLoader } from './useLoader';
import SkeletonUI from './skeletonUI';
import SuccefullPopup from './Successful';
import { connect, useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/loginActions';





const Signin = () => {
  const [succeed, setSucceed] = useState(false);
  const loginInfo = useSelector(state => state.LoginReducer)
  console.log('loginfo',loginInfo)
  
 function checkUserLoggedIn(){
  if (loginInfo== true) {
    setSucceed(true)
  }
 }
  const Dispatch = useDispatch();
  const { loading } = useLoader();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setsuccessMessage] = useState('');



  function formSubmit(e){
    e.preventDefault();

    const inputEmail = document.getElementById('email').value
    const inputPassword = document.getElementById('password').value
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(inputEmail == ''){
      setEmailError('email can not be empty')
    }
    if (inputPassword == ''){
      setPassword('password can not be empty')
    }
    

    // //checking if email is empty
    // if (inputEmail!==''){
    //   if (emailRegEx.test(inputEmail)){
    //     setEmailError('');
    //   }
    //   else if (inputEmail != loginInfo[0]){
    //     setEmailError("invalid email")
    //   }
    //   //checking if password is empty
    //   if (inputPassword==''){
        
    //     setPasswordError('Password is required')
    //   }
    //   if (password!= loginInfo[1]){
    //     setPasswordError("wrong password")
    //   }


    // }
    // else{
    //   setPasswordError('E-mail is required')
    // }

    Dispatch(login(inputEmail,inputPassword))

    // checkUserLoggedIn();

  }


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
           setSucceed(true)
            // window.location.assign('https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwirgraEgL_3AhW6RfEDHR2iBdcQPAgI')
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
  

  

   //popup
   function close(){
     setSucceed(false)
     window.location.reload()
   }
   if (succeed==true){
     setTimeout(() => {
       setSucceed(false)
       window.location.reload()
     }, "15000")
   }
    

    return (
      
      <>
  
      <SuccefullPopup trigger={succeed}>
                <button onClick={()=>close()} className="absolute top-0 right-2">X</button>               
                {/* <h3 class="px-10">Hey ${loginInfo[0]} you have successfully loged in !</h3> */}
                </SuccefullPopup>
      
      <div >
        <h1 className ="text-blue-500 font-bold text-center mt-20 text-[36px]">SignIn</h1> 

             {loading && <SkeletonUI />}
    {!loading && (
            
            <div className='relative w-full'> 
              <div className='flex justify-center ml-auto text-center mt-5 mb-20  lg:flex md:flex'>
                <img src={bus} alt='bus' className='w-1/3 shadow-xs lg:block md:hidden lg:hidden' />
                <div className='w-1/3 xs:w-[300px] 2xl:shadow-xl sm:w-[300px] md:w-[300px] lg:w-[300px]' >
                  <label className='block text-gray-700 text-center mt-2'>Sign in to your account</label>

                  <div className=' text-center'>
            
                    <form className='mt-6'  >
                      <div>

                        <input 
                        type='email' 
                        name="email"
                        id="email"
                        
                        placeholder='Username' 
                        // onChange={handleEmailChange} value = {inputEmail}
                        className='w-2/3 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none' />
                        {emailError&&<div className='error-msg not-italic subpixel-antialiased text-sm font-sans text-ml text-red-500 text-center font-bold'>{emailError}</div>}
                      </div>
                
                      <div className='mt-4'>
                    
                        <input 
                        type='password'
                        name="password"
                        id="password"
                        // onChange={handlePasswordChange} value = {inputPassword}
                         
                        placeholder='Password'  
                        className='w-2/3 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none' />
                        {passwordError&&<div className='error-msg not-italic subpixel-antialiased text-sm font-sans text-ml text-red-500 text-center font-bold'>{passwordError}</div>}
                              
                      </div>

                      <button onClick={()=>formSubmit()}  className='w-2/3 px-4 py-3 rounded-lg bg-gray-200 mt-6 border bg-blue-500 hover:bg-blue-400 focus:bg-#1d4ed8 text-white font-semibold focus:outline-none'>Log In</button>
                    </form>
                    <div className='text-center mt-2'>
                    <Link to={"/Register"} className='text-sm  hover:text-blue-700 focus:text-blue-700'>Forgotten Password?</Link>
                    </div>

                      <hr className='my-1 border-gray-300 w-3/5 ml-20'/>

                    <p className='text-center'>
                      Not a member? &nbsp;   
                      <a href='#' className='text-blue-500 hover:text-blue-700 font-semibold'>
                       Register
                      </a>
                    </p>
                  </div>

                </div>
              </div>
            </div>
          
    )}

        </div>
      </>
    )
}


export default Signin



