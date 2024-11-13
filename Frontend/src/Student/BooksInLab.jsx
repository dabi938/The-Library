import React, { useEffect, useState } from 'react'
import theImg from '../assets/library-img.jpg'
// import moment from 'moment'

const BooksInLab = () => {

    const [allBooks, setAllBooks] = useState([]);
    const[currentTime, setCurrentTimeTime] = useState(new Date());
   
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

  return (
    <div className='my-20 '>
        <div className='flex flex-col items-center'>
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-extrabold mb-2">Books In Our Library</h1>
            <div className='bg-blue-700 rounded-lg py-1 w-10 mb-14 '></div>
        </div>
        <div className='flex justify-center items-center flex-wrap gap-8'> 
            {
            allBooks.map((books) =>
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

