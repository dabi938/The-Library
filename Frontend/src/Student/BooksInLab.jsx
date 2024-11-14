import React, { useEffect, useState } from 'react'
import theImg from '../assets/library-img.jpg'
import { FaX } from 'react-icons/fa6'

// import moment from 'moment'

const BooksInLab = () => {

    const [allBooks, setAllBooks] = useState([]);
    const[currentTime, setCurrentTimeTime] = useState(new Date());

     const [searchQuery, setSearchQuery] = useState('');
     const [filteredBooks, setFilteredBooks] = useState([]);
   
    const loggedUser = JSON.parse(localStorage.getItem("user"))
    // console.log(loggedUser.name)
    const user = loggedUser.name

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTimeTime(new Date())
        }, 1000) //update in every second

        return () => clearInterval(intervalId)
    }, [])

    // const cuTime = moment().format('YYYY-MM-DD');
    const requestTime = currentTime.getFullYear() + '-' + currentTime.getMonth() + '-' + currentTime.getDate() + ' ' + currentTime.getHours() + ':' + currentTime.getMinutes().toString().padStart(2, '0') 

    //to fetch the book information
    useEffect( () => {
        fetch("http://localhost:5000/all-books").then( res => res.json()).then(data => setAllBooks(data));
  
    }, [])

    const handeleRequest = (id, bookTitle, authorName, requestTime) =>
    {
        const requestStatus = 'Pending'
        // console.log(id, bookTitle, authorName, requestTime);
        const bookObj = {
        bookTitle, authorName, user, requestTime, requestStatus
        }

        // console.log(bookObj);

        // sending request into Database
        fetch("http://localhost:5000/send-request", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(bookObj)
        }).then(res => res.json(),).then(data => {
        alert("The Request has been sent successfully!!")
        })
    }

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


  return (
    <div className='my-20 '>
        <div className='flex flex-col items-center'>
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-extrabold mb-2">Books In Our Library</h1>
            <div className='bg-blue-700 rounded-lg py-1 w-10 mb-14 '></div>
        </div>

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
            {
            (filteredBooks.length > 0 ? filteredBooks : allBooks).map((books) =>
                <div key={books._id} className='my-20'>
                    <div className='flex justify-center items-center flex-wrap gap-8'>                        
                            <div className="my-3 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className='flex justify-center items-center p-5'>
                                    <img src={books.imageURL} alt={books.bookTitle} className="h-40 w-auto object-contain" />
                                </div>
                                <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{books.bookTitle}</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Book Author: <span className='font-bold'>{books.authorName}</span></p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Publisher: <span className='font-bold'>{books.publisher}</span></p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Edition: <span className='font-bold'>{books.edition}</span></p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Category: <span className='font-bold'>{books.category}</span></p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Call Number: <span className='font-bold'>{books.callNumber}</span></p>
                                    <div className='w-full'>
                                        <button className='w-full text-sm font-medium py-3 items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={() => handeleRequest(books._id, books.bookTitle, books.authorName, requestTime)}>Request To borrow</button>
                                    </div>
                                </div>
                            </div>
                     </div>
                </div>               
            )}
        </div>  
    </div>      
)
}
export default BooksInLab

