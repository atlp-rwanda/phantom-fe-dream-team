import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landingpage from "./components/Landingpage/Landingpage";
import Contact from "./components/Contact/Contact";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register";
import Services from "./components/Landingpage/Services";
import Email from './components/ResetPassword/emailExist'
import Sent from './components/ResetPassword/emailSent'
import Reset from './components/ResetPassword/resetPassword';
import Login from "./components/Logout/login"
import Logout from "./components/Logout/logout"
import { Outlet } from 'react-router-dom';
import EditProfile from "./components/updateProfile/editProfile";
import Profile from "./components/updateProfile/profile";
import ChangePassword from "./components/updateProfile/changePassword";
import Dashboard from "./components/Dashboard/dashboard";
import RegisterUser from "./components/RegisterUser/registerUser"
import RegisterBuses from "./components/RegisterBuses/registerBus"
import Simulate from "./components/Simulate/Simulate";
function App() {
    const NavbarLayout = () => (
        <>
          <Navbar />
          <Outlet />
        </>
      );

    return (<div>

        <BrowserRouter>
            <Routes>
            <Route element={<NavbarLayout/>}>
                <Route exact path="/" element={[<Landingpage />, <Services />, <Contact />]}></Route>

                <Route exact path="/Signin" element={<Signin />} />
                <Route exact path="/Register" element={<Register />} />
                <Route exact path="/Contact" element={<Contact />} />
                <Route path="/ResetPassword" element={<Reset />}></Route>
                <Route exact path="/ResetPassword/EmailExists" element={<Email />}></Route>
                <Route exact path="/ResetPassword/EmailSentSuccessful" element={<Sent />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/profile" element={[<Profile/>]}></Route>
                <Route exact path="/profile/editprofile" element={[<EditProfile/>]}></Route>
              <Route exact path="/profile/changepassword" element={[<ChangePassword/>]}></Route>  
             
              </Route>  
              <Route path="dashboard/Users/AddUser" element={<RegisterUser/>} />
              <Route path="dashboard/Buses/AddBus" element={<RegisterBuses/>} />
              <Route exact path="/logout" element={<Logout />}></Route>  
              <Route exact path="/dashboard/" element={<Dashboard />} /> 
              <Route exact path="/dashboard/simulate" element={<Simulate />}></Route>     
            </Routes>
        </BrowserRouter>



    </div>)
}

export default App;

