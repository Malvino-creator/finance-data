import React from 'react'
import {FiMenu} from "react-icons/fi"
import logo from "../../src/assets/logo.png"

function Navbar() {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1040px] mx-auto px-2'>
      <img src={logo} alt='logo' />
        <h1 className='text-yellow-500 text-3xl w-full font-bold'>KHALISI .</h1>
        <ul className='flex text-white'>
          <li className='p-5'>Home</li>
          <li className='p-5'>Company</li>
          <li className='p-5'>Resources</li>
          <li className='p-5'>About</li>
          <li className='p-5'>Contact</li>
        </ul>
        <button className="bg-[yellow] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"> Get Started</button>
        <div>
          <FiMenu />
        </div>
        
    </div>
  )
}

export default Navbar;