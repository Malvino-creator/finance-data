// import React from 'react'

// function Login() {
//   return (
//     <div className='bg-zinc-200 flex justify-center h-screen'>
//         <form action=''>
//             <div className='bg-white pl-10 h-96 w-[300px] flex flex-col justify-center items-center '>
//                 <p className='font-semibold tesxt-2xl tracking-wide'>Login</p>
//             </div>
//             <div className='mr-5'>
//                 <p className='text-zinc-600 font-semibold'>Email</p>
//                 <input className='outline-none h-10 border-sm w-full' type='text' placeholder='Email' required/>
//             </div>
//             <div>
//                 <p>Password</p>
//             <input type='password' placeholder='Password' required/>
//             </div>
//         </form>
//     </div>
//   )
// }

// export default Login
import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login submission logic here
  };

  return (
    <div className="w-full max-w-sm m-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
