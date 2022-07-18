import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landingpage from "./components/Landingpage/Landingpage";
import Contact from "./components/Contact/Contact";
import Signin from "./components/Signin/Signin";
import Services from "./components/Landingpage/Services";
import Email from './components/ResetPassword/emailExist'
import Sent from './components/ResetPassword/emailSent'
import Reset from './components/ResetPassword/resetPassword';
import Dashboard from "./components/Dashboard/dashboard";
import Logout from "./components/Logout/logout"
import { Outlet } from 'react-router-dom';
import EditProfile from "./components/updateProfile/editProfile";
import Profile from "./components/updateProfile/profile";
import ChangePassword from "./components/updateProfile/changePassword";
import RegisterUser from "./components/RegisterUser/registerUser"
import RegisterBuses from "./components/RegisterBuses/registerBus"
import Track from "./components/simulate/TrackingPage"
import UserSimulation from "./components/simulate/UserSimulation";
import Footer from "./components/footer/footer";
import AddnewRoutes from "./components/RoutesDashboard/AddnewRoutes";
import AddAssign from "./components/Assign-drivers-to-buses/AddAssign";

var user;
const auth=localStorage.getItem("auth-token")
if(auth){
  user = localStorage.getItem('user')
}

function App() {
    const NavbarLayout = () => (
        <>
       {  user ? < Logout /> : <Navbar />}
          <Outlet />
        </>
      );

    return (<div>

        <BrowserRouter>
            <Routes>
            <Route element={<NavbarLayout/>}>
                <Route exact path="/" element={[<Landingpage />, <Services />, <Contact />]}></Route>

          <Route exact path="/Signin" element={<Signin />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route path="/ResetPassword" element={<Reset />}></Route>
          <Route exact path="/ResetPassword/EmailExists" element={<Email />}></Route>
          <Route exact path="/ResetPassword/EmailSentSuccessful" element={<Sent />}></Route>
          <Route exact path="/profile" element={[<Profile />]}></Route>
          <Route exact path="/profile/editprofile" element={[<EditProfile />]}></Route>
          <Route exact path="/profile/changepassword" element={[<ChangePassword />]}></Route>

        </Route>
        <Route path="dashboard/Users/AddUser" element={<RegisterUser />} />
        <Route path="dashboard/Routes/add" element={<AddnewRoutes />}></Route>
        <Route path="dashboard/Buses/AddBus" element={<RegisterBuses />} />
             <Route exact path="/dashboard/Drivers/Assign" element={<AddAssign />} />  

        <Route exact path="/logout" element={<Logout />}></Route>
        <Route exact path="/dashboard/*" element={<Dashboard />} />
        <Route exact path="/dashboard/simulate" element={<Track />}></Route>
        <Route exact path="/trackbus" element={<UserSimulation />}></Route>
      </Routes>
     <Footer/>
    </BrowserRouter>
      
        





    </div>)
}

export default App;

