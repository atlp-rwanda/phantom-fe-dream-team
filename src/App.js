import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landingpage from "./components/Landingpage/Landingpage";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Signin from "./components/Signin";
import Register from "./components/Register"; 
function App() {
    return (<div>
       
         <BrowserRouter>
         <Routes>
        
         <Route exact path="/" element={[ <Navbar/>,<Landingpage/>,<Contact/>,<Footer/> ]}></Route>  
         <Route exact path="/Signin" element={[<Navbar/>,<Signin/>]}/>
         <Route exact path="/Register" element={[<Navbar/>,<Register/>]}/>
         <Route exact path="/Contact" element={[<Navbar/>,<Contact/>,<Footer/>]}/>

         </Routes>
       
         </BrowserRouter>
      
       

    </div>)
}
export default App;

