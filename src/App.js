import React from "react";
import Navbar from "../src/Components/Navbar";
import Home from "./Components/Home";
import Design from "./Components/Design";
import Newsletter from "./Components/Newsletter";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import SignupForm from "./Components/SignupForm";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Design />
      <Newsletter />
      <Card />
      <Footer />
      <SignupForm />
    </div>
  );
}

export default App;
