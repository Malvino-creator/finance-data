import React from "react";
import designer from "../../src/assets/designer.jpg";

function Design() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1140px] mx-auto md:grid-cols-2 my-1 py-10">
        <div>
          <img className="w-[600px] mx-auto y-2 float-right py-3" src={designer} alt="designer" />
        </div>
        <div className="text-black flex flex-col justify-left font-semibold p-1">
          <p className="text-[black] font-bold">DESIGN WITH A PURPOSE!</p>
          <h1 className="md:text-4xl sm:text-3xl text-1xl font-bold py-4">Showcase your Designs & Inspirations</h1>
          <p>
            Our top most priority at Khalisi is to stand out, captivate, and
            inspire. 
            <br/>Our graphic services breathe life into your vision,
            elevating your brand and making it unforgettable. 
          </p>
          <button className="bg-[black] text-[white] w-[200px]  hover:bg-yellow-300 rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">Get started</button>
        </div>
      </div>
    </div>
  );
}

export default Design;
