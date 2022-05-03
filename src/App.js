import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
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
        </Routes>
    </BrowserRouter>
    </div>)
}
export default App;

