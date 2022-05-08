import React from "react"

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landingpage from "./components/Landingpage/Landingpage";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Services from "./components/Landingpage/Services";
import Email from './components/ResetPassword/emailExist'
import Sent from './components/ResetPassword/emailSent'
import Reset from './components/ResetPassword/resetPassword';
 import OperatorNavbar from "./components/Navbar/operatorNav";
import EditProfile from "./components/updateProfile/editProfile";
import Profile from "./components/updateProfile/profile";
import ChangePassword from "./components/updateProfile/changePassword";
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
            <Route element={<NavbarLayout/>}></Route>
                <Route exact path="/" element={[<Landingpage />, <Services />, <Contact />]}></Route>

                <Route exact path="/Signin" element={<Signin />} />
                <Route exact path="/Register" element={<Register />} />
                <Route exact path="/Contact" element={<Contact />} />
                <Route path="/ResetPassword" element={<Reset />}></Route>
                <Route exact path="/ResetPassword/EmailExists" element={<Email />}></Route>
                <Route exact path="/ResetPassword/EmailSentSuccessful" element={<Sent />}></Route>
                <Route exact path="/profile" element={[<OperatorNavbar /> ,<Profile/>]}></Route>
                <Route exact path="/profile/editprofile" element={[<OperatorNavbar /> ,<EditProfile/>]}></Route>
              <Route exact path="/profile/changepassword" element={[<OperatorNavbar/> ,<ChangePassword/>]}></Route>            
            </Routes>
            <Footer />
        </BrowserRouter>



    </div>)
}

export default App;


