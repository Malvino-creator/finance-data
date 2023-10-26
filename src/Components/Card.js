import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import tripple from "../assets/triple.png";

function Card() {
  return (
    <div className="w-full px-4 bg-white py-[10rem]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem]" src={single} alt="single" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$140</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"> 500GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 2GB</p>
          </div>
          <button className="bg-[black] text-[white] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-24 py-3 ">
            Begin Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex bg-gray-100 flex-col my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem]" src={double} alt="double" />
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-center text-4xl font-bold">$190</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"> 500GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8">2 Granted Users</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 2GB</p>
          </div>
          <button className="bg-[yellow] text-[black] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-24 py-3 ">
            Begin Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col my-4 md:my-0 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem]"
            src={tripple}
            alt="tripple"
          />
          <h2 className="text-2xl font-bold text-center py-8">Tripple User</h2>
          <p className="text-center text-4xl font-bold">$210</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"> 500GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8">3 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 2GB</p>
          </div>
          <button className="bg-[black] text-[white] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-24 py-3 ">
            Begin Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
