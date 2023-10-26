import React from "react";
import Navbar from "../src/Components/Navbar";
import Home from "./Components/Home";
import Design from "./Components/Design";
import Newsletter from "./Components/Newsletter";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Design />
      <Newsletter />
    </div>
  );
}

export default App;
