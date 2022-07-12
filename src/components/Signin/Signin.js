import {Link, useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react'
import bus from '../../../src/assets/bus.png'
import { useLoader } from './useLoader';
import SkeletonUI from './skeletonUI';
import SuccefullPopup from './Successful';
import { connect, useDispatch, useSelector } from 'react-redux';
import { login} from '../../redux/actions/loginActions';







const Signin = () => {
  let navigate = useNavigate();
  const [succeed, setSucceed] = useState(false);
  const loginInfo = useSelector(state => state.LoginReducer)
  const [loading1,setLoading1]=useState(false)
  const [buttonValue,setButtonValue]=useState('Login');
  const auth=localStorage.getItem("auth-token")
  if(auth){
    navigate("../dashboard")
  }
  const Dispatch = useDispatch();
  const { loading } = useLoader();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setsuccessMessage] = useState('');
  const [errorMessage, seterrorMessage] = useState('');

console.log('status: ',loginInfo)

var loggedin =  localStorage.getItem("auth-token")
// preventing a loggedin user to login again while the token is still active 
  function check (){
    fetch('http://localhost:3200/api/v1/profile/update/1', {
      method: 'PATCH',
      headers: { "Content-Type": "application/json","auth-token": loggedin},
      body: JSON.stringify(
        {
        }
      )
    }).then((res) => {
      if(res.status!=401){
        console.log("Verified");
            navigate("/dashboard");
      }else{
        console.log("Not logged in"); 
      }
    })
  }
  check()
// preventing a loggedin user to login again while the token is still active 
 

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
      if (inputEmail == '' && loginInfo[1] == false){
        setEmailError('email is not found')
      }

    }
    else{
      setEmailError('E-mail is required')
    }

    Dispatch(login(inputEmail,inputPassword))
    console.log("logIn",loginInfo)
    setButtonValue(`Loading...`)
    setTimeout(()=>{
      if(localStorage.getItem("auth")=='false'){
        seterrorMessage("email or password is incorrect!!!")
        setButtonValue(`Login`)
      }else if(localStorage.getItem("auth")=='true'){
       navigate("/dashboard");
      }
    },4000)
    setLoading1(true)
    setTimeout(()=>{
      if(localStorage.getItem("auth")=='false'){
        seterrorMessage("email or password is incorrect!!!")
        setLoading1(false)
      }else if(localStorage.getItem("auth")=='true'){
       navigate("/dashboard");
      }
    },2000)
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

    return (

      <>

      <SuccefullPopup trigger={succeed}>
                <button onClick={()=>close()} className="absolute top-0 right-2">X</button>               
                <h3 class="px-10">Hey ${loginInfo[0]} you have successfully loged in !</h3>
                </SuccefullPopup>

      <div className='mt-36' >
        {/* <h1 className ="text-blue-500 font-bold text-center mt-20 text-[36px]">SignIn</h1>  */}

             {loading && <SkeletonUI />}
    {!loading && (

            <div className='relative w-full'> 
              <div className='flex justify-center ml-auto text-center mt-5 mb-20  lg:flex md:flex'>
                <img src={bus} alt='bus' className='w-1/3 shadow-xs lg:block md:hidden lg:hidden' />
                <div className='w-1/3 xs:w-[300px] 2xl:shadow-b sm:w-[300px] md:w-[300px] lg:w-[300px] w-64 sm:border-none md:2xl-hidden mb-1' >
                  <label className='block text-gray-700 text-center mt-2 font-bold'>Sign in to your account</label>

                  <div className=' text-center'>

                    <form className='mt-6' onSubmit={formSubmit} >
                      <div>
                      {errorMessage&&<div className='error-msg not-italic subpixel-antialiased text-sm font-sans text-ml text-red-500 text-center font-bold'>{errorMessage}</div>}
                        <input 
                        type='email' 
                        name="email"
                        id="email"

                        placeholder='Username' 
                        // onChange={handleEmailChange}
                        className='w-2/3 px-4 py-3 rounded-lg bg-white mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none' />
                        {emailError&&<div className='error-msg not-italic subpixel-antialiased text-sm font-sans text-ml text-red-500 text-center font-bold'>{emailError}</div>}
                      </div>

                      <div className='mt-4'>

                        <input 
                        type='password'
                        name="password"
                        id="password"
                        // onChange={handlePasswordChange}

                        placeholder='Password'  
                        className='w-2/3 px-4 py-3 rounded-lg bg-white mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none' />
                        {passwordError&&<div className='error-msg not-italic subpixel-antialiased text-sm font-sans text-ml text-red-500 text-center font-bold'>{passwordError}</div>}

                      </div>

                      <button  className='w-2/3 px-4 py-3 rounded-lg  mt-6 bg-blue-700 text-white hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600  hover:text-blue-700 font-bold py-2 px-8 rounded xl:text-xs md:py-1 md:px-12  lg:text-base md:text-xs m:text-xs xs:text-xs xs:py-2'> 
                      {buttonValue}
                      </button>
                      {!loading1 &&
                      <button  className='w-2/3 px-4 py-3 rounded-lg  mt-6 bg-blue-700 text-white hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600  hover:text-blue-700 font-bold py-2 px-8 rounded xl:text-xs md:py-1 md:px-12  lg:text-base md:text-xs m:text-xs xs:text-xs xs:py-2'> 
                      Login
                      </button>
                      }
                       {loading1 &&
                     <button  className='w-2/3 px-4 py-3 rounded-lg  mt-6 bg-blue-100 text-blue-900 hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600  hover:text-blue-700 font-bold py-2 px-8 rounded xl:text-xs md:py-1 md:px-12  lg:text-base md:text-xs m:text-xs xs:text-xs xs:py-2'> 
                     <svg role="status" class="inline w-4 h-4 mr-2 text-gray-900 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                     <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                     </svg>
                     Loading...
                 </button>
                      }
                    </form>
                    <div className='text-center mt-2'>
                    <Link to={"/ResetPassword"} className='text-sm  hover:text-blue-700 focus:text-blue-700'>Forgotten Password?</Link>
                    </div>

                      <hr className='mt-3 my-1 border-gray-300 w-1/2 mx-20'/>
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

