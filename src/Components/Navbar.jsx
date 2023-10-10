import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1040px] mx-auto px-2'>
        <h1 className='text-white text-3xl w-full font-bold'>KHALISI .</h1>
        <ul className='flex text-white'>
          <li className='p-5'>Home</li>
          <li className='p-5'>Company</li>
          <li className='p-5'>Resources</li>
          <li className='p-5'>About</li>
          <li className='p-5'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar