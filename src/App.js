import React from "react"
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Email from './components/pages/emailExist'
import Sent from './components/pages/emailSent'
import Reset from './components/pages/resetPassword';
>>>>>>> chore(path):change path
import Navbar from "./components/Navbar/Navbar";
<<<<<<< HEAD
import Landingpage from "./components/Landingpage/Landingpage";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Services from "./components/Landingpage/Services";
import Email from './components/ResetPassword/emailExist'
import Sent from './components/ResetPassword/emailSent'
import Reset from './components/ResetPassword/resetPassword';
import Login from "./components/Logout/login"
import Logout from "./components/Logout/logout"
import { Outlet } from 'react-router-dom';

=======
import Home from './components/pages/home'
>>>>>>> chore(popup):popup notification
function App() {
    const NavbarLayout = () => (
        <>
          <Navbar />
          <Outlet />
        </>
      );

    return (<div>

        <BrowserRouter>
<<<<<<< HEAD
      
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
            </Route>
            <Route exact path="/logout" element={<Logout />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>



=======
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/ResetPassword" element={<Reset />}></Route>
          <Route exact path="/ResetPassword/EmailExists" element={<Email />}></Route>
          <Route exact path="/ResetPassword/EmailSentSuccessful" element={<Sent />}></Route>
        </Routes>
    </BrowserRouter>
>>>>>>> chore(path):change path
    </div>)
}
export default App;