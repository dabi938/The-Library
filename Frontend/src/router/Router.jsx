import React from 'react'
import{
    createBrowserRouter,
    RouterProvider,
}from "react-router-dom";

import EditBook from '../Admin/EditBook';
import ManageBooks from '../Admin/ManageBooks';
import DashBoard from '../Admin/DashBoard';
import BorrowRequest from '../Admin/BorrowRequest';
import BooksInLab from '../Student/BooksInLab';
import AddBooks from '../Admin/AddBooks';
import DashBoardLayout from '../Admin/DashBoardLayout';
import App from '../App';
import About from '../Component/About';
import ContactUs from '../Component/ContactUs';
import Services from '../Component/Services';
import Home from '../Home/Home';
import ManageEbooks from '../Admin/ManageEbooks';
import AddEbooks from '../Admin/AddEbooks';



const Router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <App/>,
    //     children: [
    //         {
    //             path: "/",
    //             element: <Home/>
    //         },
    //         {
    //             path: "/about",
    //             element: <About/>,
    //         },
    //         {
    //             path: "/contactus",
    //             element:  <ContactUs/>,   
    //         },
    //         {
    //             path: "/services",
    //             element: <Services/>
    //         },
    //         {
    //             path: "/contactUs",
    //             element: <ContactUs/>,
    //         },
    //     ]
    // },

    // {
    //     path: "/admin/dashboard",
    //     element:  <DashBoard/>,
    //     children: [
    //         {
    //             path: "/admin/dashboard/manageBooks",
    //             element: <ManageBooks/>
    //         },
    //         {
    //             path: "/admin/dashboard/editBook/:id",
    //             element: <EditBook/>,
    //             loader: ({params}) => fetch("http://localhost:5000/books/${params.id")
    //         },
    //         {
    //             path: "/admin/dashboard/addBooks",
    //             element: <AddBooks/>
    //         }, 
    //         {
    //             path: "/admin/dashboard/manageEbooks",
    //             element: <ManageEbooks/>
    //         },
    //         {
    //             path: "/admin/dashboard/addEbooks",
    //             element: <AddEbooks/>
    //         },           
    //         {
    //             path: "/admin/dashboard/borrowrequest",
    //             element: <EditBook/>,
               
    //         },          
            
    //     ]

    // },
]);

export default Router;
