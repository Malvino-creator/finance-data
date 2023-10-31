// import React, { useState } from 'react';

// function SignupForm() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//   };

//   return (
//     <div className="w-full max-w-sm m-auto">
//       <form className="bg-white shadow-md rounded px-2 pt-1 pb-1 mb-2" onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//             Username
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             name="username"
//             id="username"
//             placeholder="Username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="email"
//             name="email"
//             id="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="password"
//             name="password"
//             id="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Sign Up
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default SignupForm;
import React, { useState } from "react";
import trees from "../assets/trees.jpg";
import logo from "../assets/logo.png";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here, e.g., API calls or state management.
    // Example:
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[450px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
        <div className="w-full h-[450px] hidden md:block">
          <img className="w-full h-full" src={trees} alt="/" />
        </div>
        <h2 className="text-white text-3xl font-bold text-center">
          <span className="text-yellow-500">KHA</span>LISI .
        </h2>
        <img className="mr-50" src={logo} alt="logo" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="md:rounded">
            <input
              className=" md:rounded w-full py-2 my-4 border p-3 mr-2"
              type="text"
              placeholder="Username"
            />
            <input
              className=" md:rounded w-full py-2 my-4 border p-3"
              type="password"
              placeholder="Password"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-lg"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
