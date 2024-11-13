import React from 'react'
import theImg from '../assets/library-img.jpg'

const BooksInLibrary = () => {
  return (
    <div className='my-20'>
        <div className='flex flex-col items-center'>
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-extrabold mb-2">Books In Our Library</h1>
            <div className='bg-blue-700 rounded-lg py-1 w-10 mb-14 '></div>
        </div>
        <div className='flex justify-center items-center flex-wrap gap-8'> 
            <div className="my-3 max-w-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={theImg} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                    <div className='flex justify-center'>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Request To borrow
                        </a>
                    </div>                
                </div>
            </div>
        </div>
    </div> 
  )
}

export default BooksInLibrary
