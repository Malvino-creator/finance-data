import React from "react";
import Navbar from "../src/Components/Navbar";
import Home from "./Components/Home";
import Design from "./Components/Design";
import Newsletter from "./Components/Newsletter";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Design />
      <Newsletter />
      <Card />
      <Footer />
      {/* <LoginForm /> */}
      <BrowserRouter>
    <Routes>
        <Route path="/loginform" element={<LoginForm/>} />
        <Route path="/signupform" element={<SignupForm />} />
        <Route path="/Home" element={<Home />} />
    </Routes> 
   </BrowserRouter>
   
    </div>
    
    
  );
}

export default App;
