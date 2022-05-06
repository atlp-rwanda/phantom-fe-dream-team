import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Email from './components/ResetPassword/emailExist'
import Sent from './components/ResetPassword/emailSent'
import Reset from './components/ResetPassword/resetPassword';
import Navbar from "./components/Navbar/Navbar";
import OperatorNavbar from "./components/Navbar/operatorNav";
import EditProfile from "./components/updateProfile/editProfile";
import Profile from "./components/updateProfile/profile";
import ChangePassword from "./components/updateProfile/changePassword";
import CurrentMap from "./components/updateProfile/currentMap";
import Footer from "./components/footer/footer";
function App() {
    return (<div>
        
        <BrowserRouter>
        <Routes>
        <Route exact path="/profile" element={[<OperatorNavbar/>,<Profile/>,<Footer/>]}></Route> 
        <Route exact path="/profile/map" element={[<OperatorNavbar/>,<CurrentMap/>,<Footer/>]}></Route>  
        <Route exact path="/profile/editprofile" element={[<OperatorNavbar /> ,<EditProfile/>,<Footer/>]}></Route>
        <Route exact path="/profile/changepassword" element={[<Navbar /> ,<ChangePassword/>,<Footer/>]}></Route>
          <Route path="/ResetPassword" element={[<Navbar /> ,<Reset />,<Footer/>]}></Route>
          <Route exact path="/ResetPassword/EmailExists" element={[<Navbar /> ,<Email />,<Footer/>]}></Route>
          <Route exact path="/ResetPassword/EmailSentSuccessful" element={[<Navbar /> ,<Sent />,<Footer/>]}></Route>
        </Routes>
    </BrowserRouter>
    </div>)
}
export default App;

