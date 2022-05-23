import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landingpage from "./components/Landingpage/Landingpage";
import Contact from "./components/Contact/Contact";
import Services from "./components/Landingpage/Services";
import Email from './components/ResetPassword/emailExist'
import Sent from './components/ResetPassword/emailSent'
import Reset from './components/ResetPassword/resetPassword';


import Dashboard from "./components/Dashboard";
function App() {

    return (<div>

        <BrowserRouter>
            <Navbar />
            <Routes>

                <Route exact path="/" element={[<Landingpage />, <Services />, <Contact />]}></Route>
                <Route exact path="/Contact" element={<Contact />} />
                <Route path="/ResetPassword" element={<Reset />}></Route>
                <Route exact path="/ResetPassword/EmailExists" element={<Email />}></Route>
                <Route exact path="/ResetPassword/EmailSentSuccessful" element={<Sent />}></Route>
                <Route path="/Dashboard/*" element={<Dashboard/>}></Route>
             
            </Routes>
        </BrowserRouter>



    </div>)
}
export default App;

