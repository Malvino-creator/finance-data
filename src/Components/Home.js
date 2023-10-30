import React from "react";
import Typed from 'react-typed';

function Home() {
  return (
    <div className="text-white py-30">
      <div className="max-w-[800px] mt[-12px] w-full h-screen mx-auto text-center flex-col justify-center">

          <h1 className="md:text-7xl sm:text-4xl text-3xl font-bold md:py-40">GROWING WITH <span className="text-[yellow] font-boldtext-lg ">DESIGN</span></h1>
          <Typed className="md:text-4xl font-bold sm:text-xl" strings= {['Creating', 'Impressionable', 'Brands']} typeSpeed={140} backSpeed={160} loop
          />
          <div className="flex justify-center items-center" >
        <p className="md:text-1xl text-xl font-medium text-gray-400">Creative, Affordable & Reliable</p>
        </div>
        <button className="bg-[yellow] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"> Get Started</button>
        </div>
      </div>

  );
}

export default Home;
