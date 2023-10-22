import React from "react";
import designer from "../../src/assets/designer.jpg";

function Design() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1140px] mx-auto md:grid-cols-2">
        <div>
          <img className="object-fill h-58 w-96 ..." src={designer} alt="designer" />
        </div>
        <div className="text-black font-semibold">
          <p>DESIGN WITH PURPOSE</p>
          <h1>Customize your Designs Passionately</h1>
          <p>
            Our top most priority at Khalisi is to stand out, captivate, and
            inspire. Our graphic services breathe life into your vision,
            elevating your brand and making it unforgettable. Ready to take your
            brand to the next level? Contact us today for a free consultation
            and discover how our exceptional graphic design can make a
            difference for your business.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Design;
