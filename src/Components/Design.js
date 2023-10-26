import React from "react";
import designer from "../../src/assets/designer.jpg";

function Design() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1140px] mx-auto md:grid-cols-2">
        <div>
          <img className="w-[600px] mx-auto my-2" src={designer} alt="designer" />
        </div>
        <div className="text-black flex flex-col justify-center font-semibold">
          <p className="text-[yellow] font-bold">DESIGN WITH PURPOSE</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Customize your Designs Passionately</h1>
          <p>
            Our top most priority at Khalisi is to stand out, captivate, and
            inspire. Our graphic services breathe life into your vision,
            elevating your brand and making it unforgettable. Ready to take your
            brand to the next level? Contact us today for a free consultation
            and discover how our exceptional graphic design can make a
            difference for your business.
          </p>
          <button className="bg-[black] text-[white] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">Get started</button>
        </div>
      </div>
    </div>
  );
}

export default Design;
