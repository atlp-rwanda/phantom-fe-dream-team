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
  
//  function checkUserLoggedIn(){
//   if (loginInfo[1] == true) {
//     // history.push()
//     console.log('you are loggedin')
//     setSucceed(true)
//   }
//  }
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

    //checking if email is empty
    if (inputEmail!==''){
      if (emailRegEx.test(inputEmail)){
        setEmailError('');
      }
      
      if (inputPassword==''){
        
        setPasswordError('Password is required')
      }
     
    }
    else{
      setEmailError('E-mail is required')
    }

    Dispatch(login(inputEmail,inputPassword))

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
  
   //popup
   function close(){
     setSucceed(false)
     window.location.reload()
   }
   if (succeed === true){
     setTimeout(() => {
       setSucceed(false)
       window.location.reload()
     }, "15000")
   }
    

    return (
      
      <>
  
      <SuccefullPopup trigger={succeed}>
                <button onClick={()=>close()} className="absolute top-0 right-2">X</button>               
                <h3 class="px-10">Hey ${loginInfo[0]} you have successfully loged in !</h3>
                </SuccefullPopup>
      
      <div >
        <h1 className ="text-blue-500 font-bold text-center mt-20 text-[36px]">SignIn</h1> 

             {loading && <SkeletonUI />}
    {!loading && (
            
            <div className='relative w-full'> 
              <div className='flex justify-center ml-auto text-center mt-5 mb-20  lg:flex md:flex'>
                <img src={bus} alt='bus' className='w-1/3 shadow-xs lg:block md:hidden lg:hidden' />
                <div className='w-1/3 xs:w-[300px] 2xl:shadow-b sm:w-[300px] md:w-[300px] lg:w-[300px] w-64 sm:border-none' >
                  <label className='block text-gray-700 text-center mt-2'>Sign in to your account</label>

                  <div className=' text-center'>
            
                    <form className='mt-6' onSubmit={formSubmit} >
                      <div>

                        <input 
                        type='email' 
                        name="email"
                        id="email"
                        
                        placeholder='Username' 
                        onChange={handleEmailChange}
                        className='w-2/3 px-4 py-3 rounded-lg bg-white mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none' />
                        {emailError&&<div className='error-msg not-italic subpixel-antialiased text-sm font-sans text-ml text-red-500 text-center font-bold'>{emailError}</div>}
                      </div>
                
                      <div className='mt-4'>
                    
                        <input 
                        type='password'
                        name="password"
                        id="password"
                        onChange={handlePasswordChange}
                         
                        placeholder='Password'  
                        className='w-2/3 px-4 py-3 rounded-lg bg-white mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none' />
                        {passwordError&&<div className='error-msg not-italic subpixel-antialiased text-sm font-sans text-ml text-red-500 text-center font-bold'>{passwordError}</div>}
                              
                      </div>

                      <button  className='w-2/3 px-4 py-3 rounded-lg  mt-6 bg-blue-700 text-white hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600  hover:text-blue-700 font-bold py-2 px-8 rounded xl:text-xs md:py-1 md:px-12  lg:text-base md:text-xs m:text-xs xs:text-xs xs:py-2'>Log In</button>
                    </form>
                    <div className='text-center mt-2'>
                    <Link to={"/ResetPassword"} className='text-sm  hover:text-blue-700 focus:text-blue-700'>Forgotten Password?</Link>
                    </div>

                      <hr className='my-1 border-gray-300 w-2/3 ml-20'/>

                    {/* <p className='text-center'>
                      Not a member? &nbsp;   
                      <a href='#' className='text-blue-500 hover:text-blue-700 font-semibold'>
                       Register
                      </a>
                    </p> */}
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



