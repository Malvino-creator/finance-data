import React from "react";
import Navbar from "../src/Components/Navbar";
import Home from "./Components/Home";
import Design from "./Components/Design";
import Newsletter from "./Components/Newsletter";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div>
      <Login />
      <SignUp />
      <Navbar />
      <Home />
      <Design />
      <Newsletter />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
