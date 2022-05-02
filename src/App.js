import React from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Email from './components/ResetPassword/emailExist'
import Sent from './components/ResetPassword/emailSent'
import Reset from './components/ResetPassword/resetPassword';
import Navbar from "./components/Navbar/Navbar";
function App() {
    return (<div>
      <Navbar/>
        <BrowserRouter>
        <Routes>
          <Route path="/ResetPassword" element={<Reset />}></Route>
          <Route exact path="/ResetPassword/EmailExists" element={<Email />}></Route>
          <Route exact path="/ResetPassword/EmailSentSuccessful" element={<Sent />}></Route>
        </Routes>
    </BrowserRouter>
    </div>)
}
export default App;

