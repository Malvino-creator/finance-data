import React from 'react'
import trees from "../assets/trees.jpg"
import logo from "../../src/assets/logo.png"

function LoginForm() {
  return (
    <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[450px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
            <div className='w-full h-[450px] hidden md:block'>
                <img className='w-full h-full' src={trees} alt="/" />
            </div>
            <div className='p-4 flex flex-col justify-around'>
                <form>
                <img  className="mr-50"src={logo} alt='logo' />

                    <h2 className='text-white text-3xl font-bold text-center'><span className="text-yellow-500">KHA</span>LISI .</h2>
                    <div className='md:rounded'>
                        <input className=' md:rounded w-full py-2 my-4 border p-3 mr-2' type="text" placeholder='Username' />
                        <input className=' md:rounded w-full py-2 my-4 border p-3' type="password" placeholder='Password' />
                    </div>
                    <button className=' md:rounded w-full py-2 my-4 bg-green-600 hover:bg-green-500'>Log In</button>
                    <p className='text-center text-white'>Forgot Username or Password?</p>
                </form>
                <p className='text-center text-white underline'>Sign Up</p>
            </div>
        </div>
    </div>
  )
}

export default LoginForm