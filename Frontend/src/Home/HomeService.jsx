import React from 'react'
import theImg from '../assets/library-img.jpg'
import { Link } from 'react-router-dom'

const HomeService = () => {
  return (
    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Our Servics</h1>
            <div className='bg-blue-700 rounded-lg py-1 w-10 mb-14 '></div>
        </div>
        <div className='flex items-center justify-center max-sm:flex-col mb-16 '>
        
            <div className="max-w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                    <img class="rounded-t-lg" src={theImg} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Search for Books</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Easily find books available in the library by searching our database. Get precise information on the exact location of the book within the library, saving you time and effort.</p>
                    <Link to={'/services'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="max-w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                    <img className="rounded-t-lg" src={theImg} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Read Books Online & Download</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Explore our collection of online books, which you can read directly through our platform. Enjoy instant access to a wide range of digital resources. or Download the Books.</p>
                    <Link to={'/services'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </div>
            </div>

            <div className="max-w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                    <img className="rounded-t-lg" src={theImg} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Request to Borrow</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Found a book you want to borrow? Send a borrow request directly to our system admin with just a few clicks. We’ll take care of the rest and notify you once your request is processed.</p>
                    <Link to={'/services'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default HomeService
