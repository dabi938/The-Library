import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaX } from 'react-icons/fa6'

const Signup = () => {
  const navigator = useNavigate();
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-userinfo")
      .then(res => res.json())
      .then(data => setAllUsers(data));
  }, [])

  const handelRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
        const response = await fetch("http://localhost:5000/create-userinfo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();
        
        if (data.success) {
            alert("User created successfully!");
            form.reset();
            navigator('/login');
        } else {
            // Handle specific error cases
            if (data.message === "Email already registered") {
              alert("This email is already registered!");
              form.reset();
            } else {
              alert(data.message || "Registration failed. Try again.");
              form.reset();
            }
        }
    } catch (error) {
        console.error("Error during registration:", error);
        alert("An error occurred during registration.");
    }
  };

  return (
    <div className='my-20 '>
        <div className='max-w-md max-h-lvh py-6 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>           
            <div className='flex flex-col items-center'>
            <div className='flex justify-between gap-12 items-center'>
              <div className='w-20'></div>
              <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-extrabold mb-2">Register</h1>
              <Link to={'/'}><FaX className='ml-12'/></Link>              
            </div>
            <div className='bg-blue-700 rounded-lg py-1 w-10 mb-14 '></div>
        </div>
            <form onSubmit={handelRegister} className="max-w-sm mx-auto">
                <div className="mb-5">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                  <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Enter Your Name' required />
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="email@example.com" required />
                </div>
                <div className="mb-5">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                  <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Enter a Password' required />
                </div>
                <div className="flex items-start mb-5">
                  <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I Have an Account <Link className='text-blue-600 hover:underline' to='/login'>Login</Link></label>
                </div>
                <div className='flex w-full items-center'>
                  <button type="submit" className="w-full mx-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                </div>
            </form>
        </div>
      </div>
  )
}

export default Signup
