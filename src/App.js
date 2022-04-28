import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/updateProfile/profile";
import ChangePassword from "./components/updateProfile/changePassword";
function App() {
    return (<div>
        <Navbar />
        <BrowserRouter>
        <Routes>
        <Route exact path="/profile" element={<Profile/>}></Route>
        <Route exact path="/profile/changepassword" element={<ChangePassword/>}></Route>
        </Routes>
    </BrowserRouter>
    </div>)
}
export default App;

