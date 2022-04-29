import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landingpage from "./components/Landingpage/Landingpage";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Signin from "./components/Signin";
import Register from "./components/Register"; 
import Services from "./components/services";
function App() {

    return (<div>
         
         <BrowserRouter>
         <Navbar/>
         <Routes>
        
         <Route exact path="/" element={[<Landingpage/> ,<Services/>,<Contact/>]}></Route>  

         <Route exact path="/Signin" element={<Signin/>}/>
         <Route exact path="/Register" element={<Register/>}/>
         <Route exact path="/Contact" element={<Contact/>}/>

         </Routes>
         <Footer/>
         </BrowserRouter>
      
        

    </div>)
}
export default App;

