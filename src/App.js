import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Email from './components/ResetPassword/emailExist'
import Sent from './components/ResetPassword/emailSent'
import Reset from './components/ResetPassword/resetPassword';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/updateProfile/profile";
import ChangePassword from "./components/updateProfile/changePassword";
import Footer from "./components/footer/footer";
function App() {
    return (<div>
        <Navbar />
        <BrowserRouter>
        <Routes>
        <Route exact path="/profile" element={[<Profile/>,<Footer/>]}></Route>
        <Route exact path="/profile/changepassword" element={[<ChangePassword/>,<Footer/>]}></Route>
          <Route path="/ResetPassword" element={[<Reset />,<Footer/>]}></Route>
          <Route exact path="/ResetPassword/EmailExists" element={[<Email />,<Footer/>]}></Route>
          <Route exact path="/ResetPassword/EmailSentSuccessful" element={[<Sent />,<Footer/>]}></Route>
        </Routes>
    </BrowserRouter>
    </div>)
}
export default App;

