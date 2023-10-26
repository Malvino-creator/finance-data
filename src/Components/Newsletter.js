import React from "react";

function Newsletter() {
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-3">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want to Showcase your design projects?
          </h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-2 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter email"
            />
            <button className="bg-[yellow] text-[black] w-[150px] rounded-md font-medium my-2 mx-auto md:mx-3 py-2 justify-between">
              Notify me
            </button>
          </div>
          <p>
            {" "}
            We care about the inspiration to your designs. Read our{" "}
            <span className="text-yellow-500">
              <a href="privacy">Privacy Policy</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
