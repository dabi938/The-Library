import React, { useEffect, useState } from 'react'
import NavbarStudent from './NavbarStudent'
import Footer from '../Component/Footer'

const RequestStatus = () => {

    let count = 1

    const [allRequest, setAllRequest] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/all-request").then( res => res.json()).then(data => setAllRequest(data));

    }, [])

    // console.log(allRequest)
    //delete the books based on the _id
    const handleDelet = (id) =>{
        // console.log(id);
        fetch(`http://localhost:5000/request/${id}`, {method: "DELETE"} ).then(res => res.json()).then(data => {

            alert("The Request has been Delete successfully!!")
        })
    }

    const loggedUser = JSON.parse(localStorage.getItem("user"))
    // console.log(loggedUser.name)

  return (
    <div>
      <NavbarStudent/>
      <div className="p-4 my-20 mb-44">
            <div >
                <div className='flex flex-col items-center justify-center'>
                    <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-extrabold mb-2">Books Request Status</h1>
                    <div className='bg-blue-700 rounded-lg py-1 w-16 mb-14 '></div>
                </div>
                <div className="shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    No.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Author 
                                </th> 
                                <th scope="col" className="px-6 py-3">
                                    User 
                                </th>                                
                                <th scope="col" className="px-6 py-3">
                                    Request Time
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Request Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                  
                                </th>
                            </tr>
                        </thead>
                        {
                            allRequest.map((request) =>
                            {
                               const isRight = (request.user === loggedUser.name)
                                if (isRight) 
                                {
                                    return (
                                        <tbody key={request._id} className='divide-y'>
                                        <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                            <td scope="row" className='px-6 py-4'>
                                                {count++}
                                            </td>
                                            <td className='px-6 py-4'>
                                                {request.bookTitle}
                                            </td>
                                            <td className='px-6 py-4'>
                                                {request.authorName}
                                            </td>  
                                            <td className='px-6 py-4'>
                                                {request.user}
                                            </td>                                    
                                            <td className='px-6 py-4'>
                                                {request.requestTime}
                                            </td>
                                            <td className='px-6 py-4'>
                                                {request.requestStatus}
                                            </td>
                                            <td className='flex gap-2 px-6 py-4'>              
                                                <button className='font-medium text-red-700 hover:underline dark:text-red-800' onClick={() => handleDelet(request._id)}><p>Delete</p></button>
                                            </td>                
                                        </tr>          
                                    </tbody>
                                    )
                                }
                            }
                               
                           )
                        }
                    </table>
                </div>      
            </div>
      </div>  
      <Footer/> 
    </div>
  )
}

export default RequestStatus
