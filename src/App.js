import React from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Email from './components/pages/emailExist'
import Sent from './components/pages/emailSent'
import Main from './components/pages/resetPassword';
import Navbar from "./components/Navbar/Navbar";
function App() {
    return (<div>
      <Navbar/>
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main/>}></Route>
          <Route exact path="/ResetPassword" element={<Main />}></Route>
          <Route exact path="/EmailExists" element={<Email />}></Route>
          <Route exact path="/EmailSentSuccessful" element={<Sent />}></Route>
        </Routes>
    </BrowserRouter>
    </div>)
}
export default App;

