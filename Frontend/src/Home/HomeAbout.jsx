import React from 'react'
import { Link } from 'react-router-dom'

const HomeAbout = () => {
  return (
    <div>
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <div className=" dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                    <div className='flex flex-col items-center justify-center'>
                       <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">About Us</h1>
                       <div className='bg-blue-700 rounded-lg py-1 w-10 mb-14 '></div>
                    </div>
                   
                    <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Welcome to Mint-Library, your go-to digital library management system. Our platform is designed to make finding, accessing, and borrowing books easier and more efficient for all library users.
                    At Mint-Library, we believe that accessing knowledge should be simple and convenient. Whether you’re looking for a physical book in our library or want to read an available online book, our system is here to help. We offer a comprehensive solution that allows you to:</p>
                    <Link to={'/about'} className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-sky-500 hover:text-white ">
                        Read more
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>      
    </div>
  )
}

export default HomeAbout
