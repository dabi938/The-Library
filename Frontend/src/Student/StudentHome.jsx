import React from 'react'
import NavbarStudent from './NavbarStudent'
import '../Home/Banner.css'
import theImg from '../assets/library-img.jpg'
import Footer from '../Component/Footer'



const StudentHome = () => {
  return (
    <div>
        <NavbarStudent/>
        <div className="p-4 my-20 mb-44">
            <section className="landing ">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Wellcome to Mint-Library</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Read and Enjoye the Books <br/>The Place you are interested</p>
                </div>
            </section> 
        </div>
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
                    </div>
                </div>
            </section> 
        </div>
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

                    </div>
                </div>
            </div>
        
       </div>
       <Footer/>     
    </div>
  )
}

export default StudentHome
