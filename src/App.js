import React from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Email from './components/pages/emailExist'
import Sent from './components/pages/emailSent'
import Reset from './components/pages/resetPassword';
import Navbar from "./components/Navbar/Navbar";
function App() {
    return (<div>
      <Navbar/>
        <BrowserRouter>
        <Routes>
          <Route exact path="/" ></Route>
          <Route exact path="/ResetPassword" element={<Reset />}></Route>
          <Route exact path="/ResetPassword/EmailExists" element={<Email />}></Route>
          <Route exact path="/ResetPassword/EmailSentSuccessful" element={<Sent />}></Route>
        </Routes>
    </BrowserRouter>
    </div>)
}
export default App;

