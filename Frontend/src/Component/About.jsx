import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <div>
      <Navbar/>
      <div className='my-10'>
      <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <div className=" dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                    <div className='flex flex-col items-center justify-center'>
                       <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">About Us</h1>
                       <div className='bg-blue-700 rounded-lg py-1 w-10 mb-14 '></div>
                    </div>
                   
                    <p className="text-lg font-normal text-black dark:text-gray-400 mb-6">
                    Welcome to our Library Management System, designed to streamline the process of borrowing and managing books in a library. Our system is developed with the aim of making book management efficient, user-friendly, and accessible to both library staff and users.

                    <h2 className='my-5 font-bold'>Key Features:</h2>
                    <ul>
                      <li className='my-3'><span className='font-bold'>Easy Book Browsing:</span> Users can easily search for books by title, author, or genre.</li>
                      <li className='my-3'><span className='font-bold'>Borrowing Requests:</span> Users can request to borrow books and view the status of their requests. </li>
                      <li className='my-3'><span className='font-bold'>Admin Dashboard:</span> Library admins can manage books, review borrowing requests, and handle user accounts.</li>
                      <li className='my-3'><span className='font-bold'>Responsive Design:</span> The system is designed to work seamlessly across all devices, from desktop to mobile.</li>
                    </ul>                            
                    Our goal is to provide a robust and scalable solution that caters to the needs of modern libraries. We continually strive to improve our system and welcome feedback from our users to enhance their experience.

                    If you have any questions or need assistance, feel free to contact our support team. Thank you for choosing our Library Management System!
                                        </p>
                </div>
            </div>
        </section> 
      </div>
      <Footer/>
    </div>
  )
}

export default About
