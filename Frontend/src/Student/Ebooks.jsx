import React, { useEffect, useState } from 'react';
import theImg from '../assets/library-img.jpg';
import NavbarStudent from './NavbarStudent';
import Footer from '../Component/Footer';

const Ebooks = () => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-ebooks")
            .then(res => res.json())
            .then(data => setAllBooks(data));
    }, []);

    return (
        <div>
            <NavbarStudent />
            <div className='my-20'>
                <div className='flex flex-col items-center'>
                    <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-extrabold mb-2">E-books</h1>
                    <div className='bg-blue-700 rounded-lg py-1 w-10 mb-14 '></div>
                </div>
                <div className='flex justify-center items-center flex-wrap gap-8'>
                    {
                        allBooks.map((books) =>
                            <div key={books._id} className="my-3 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className='flex justify-center items-center p-5'>
                                    <img src={books.imageURL} alt={books.bookTitle} className="h-40 w-auto object-contain" />
                                </div>
                                <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{books.bookTitle}</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Book Author: <span className='font-bold'>{books.authorName}</span></p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Publisher: <span className='font-bold'>{books.publisher}</span></p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Edition: <span className='font-bold'>{books.edition}</span></p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Category: <span className='font-bold'>{books.category}</span></p>
                                    <div className='w-full flex gap-4'>
                                        <button className='w-full text-sm font-medium py-2 text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                                            <a href={books.thepdfURL} target="_blank" rel="noopener noreferrer">Read</a>
                                        </button>
                                        <button className='w-full text-sm font-medium py-2 text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                                            <a href={books.thepdfURL} target="_blank" rel="noopener noreferrer">Download</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Ebooks;
