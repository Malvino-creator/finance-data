import React from 'react'

import {AiFillFacebook,AiFillInstagram,AiFillTwitterCircle,AiFillGithub} from "react-icons/ai"



function Footer() {

  return (
    <div className='max-w-[1240px] mx-auto py-14 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className='text-yellow-500 text-3xl w-full font-bold'>KHALISI .</h1>
        <p className='py-2'>
            Ready to take your brand to the next level? 
            <br/>Contact us today for a free consultation
            and discover how our exceptional graphic design can make a difference for your business. 
        </p>
        <div className='flex justify-between md:w-[65%] my-6'>
        <AiFillFacebook size={30}/>
        <AiFillInstagram size={30} />
        <AiFillTwitterCircle size={30} />
        <AiFillGithub  size={30}/>
        </div>
        <div className='lg:col-span-3 flex justify-between'>
          <div>
          <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm'>Marketing</li>
              <li className='py-2 text-sm'>Commerce</li>
              <li className='py-2 text-sm'>Insights</li>
            </ul>
            </div>
        <div>
          <h6 className='font-medium text-gray-400'>Support</h6>
            <ul>
              <li className='py-2 text-sm'>Pricing</li>
              <li className='py-2 text-sm'>Documentation</li>
              <li className='py-2 text-sm'>Guides</li>
            </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
              <li className='py-2 text-sm'>About</li>
              <li className='py-2 text-sm'>Blog</li>
              <li className='py-2 text-sm'>Jobs</li>
            </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
              <li className='py-2 text-sm'>Claims</li>
              <li className='py-2 text-sm'>Policy</li>
              <li className='py-2 text-sm'>Terms</li>
            </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer;