import React, { useEffect, useState } from 'react';
import theImg from '../assets/library-img.jpg';
import NavbarStudent from './NavbarStudent';
import Footer from '../Component/Footer';
import { FaX } from 'react-icons/fa6'

const Ebooks = () => {
    const [allBooks, setAllBooks] = useState([]);

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/all-ebooks")
            .then(res => res.json())
            .then(data => setAllBooks(data));
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = allBooks.filter(book => 
            book.bookTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.authorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredBooks(filtered);
    };
  
    const handleClearSearch = () => {
        setSearchQuery('');
        setFilteredBooks([]);
    };

    const handleDownload = async (book) => {
        try {
            setLoading(true);
            const pdfUrl = `http://localhost:5000${book.pdfPath}`;
            
            // Create a temporary anchor element
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.target = '_blank';
            link.download = `${book.bookTitle}.pdf`; // Set desired filename
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading file:', error);
            alert('Failed to download the file');
        } finally {
            setLoading(false);
        }
    };

    const handleRead = (book) => {
        // Open PDF in new tab
        const pdfUrl = `http://localhost:5000${book.pdfPath}`;
        window.open(pdfUrl, '_blank');
    };


    return (
        <div>
            <NavbarStudent />
            <div className='my-20'>
                <form onSubmit={handleSearch} className="max-w-md mx-auto">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className='flex'>
                        <FaX onClick={handleClearSearch} className=' absolute start-2 bottom-5'/>
                            <input
                            type="search"
                            id="default-search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search by title, author, or category..."
                            required
                            />
                            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Search
                            </button>
                        </div>            
                    </div>
                </form>
                
                <div className='flex justify-center items-center flex-wrap gap-8'>
                    {(filteredBooks.length > 0 ? filteredBooks : allBooks).map((book) => (
                        <div key={book._id} className="my-3 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className='flex justify-center items-center p-5'>
                                <img 
                                    src={book.imageURL} 
                                    alt={book.bookTitle} 
                                    className="h-40 w-auto object-contain" 
                                />
                            </div>
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {book.bookTitle}
                                </h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Book Author: <span className='font-bold'>{book.authorName}</span>
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Publisher: <span className='font-bold'>{book.publisher}</span>
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Edition: <span className='font-bold'>{book.edition}</span>
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Category: <span className='font-bold'>{book.category}</span>
                                </p>
                                <div className='w-full flex gap-4'>
                                    <button 
                                        onClick={() => handleRead(book)}
                                        disabled={loading}
                                        className='w-full text-sm font-medium py-2 text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50'
                                    >
                                        Read
                                    </button>
                                    <button 
                                        onClick={() => handleDownload(book)}
                                        disabled={loading}
                                        className='w-full text-sm font-medium py-2 text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50'
                                    >
                                        {loading ? 'Downloading...' : 'Download'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Ebooks;
