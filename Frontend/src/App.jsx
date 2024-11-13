import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./Home/Home";
import About from "./Component/About";
import Services from "./Component/Services";
import ContactUs from "./Component/ContactUs";

import DashBoard from "./Admin/DashBoard";
import ManageBooks from "./Admin/ManageBooks";
import AddBooks from "./Admin/AddBooks";
import EditBook from "./Admin/EditBook";
import ManageEbooks from "./Admin/ManageEbooks";
import AddEbooks from "./Admin/AddEbooks";
import EditEbook from "./Admin/EditEbooks";
import BorrowRequest from "./Admin/BorrowRequest";

import Student from "./Student/Student";
import Ebooks from "./Student/Ebooks";
import RequestStatus from "./Student/RequestStatus";
import StudentHome from "./Student/StudentHome";

import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import Security from "./Security/Security";
import SecurityUser from "./Security/SecurityUser";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contactus" element={<ContactUs />} />

                <Route path="/" element={<Security/>} >
                    <Route path="/admin/dashboard/" element={<DashBoard />} />
                    <Route path="/admin/dashboard/manageBooks" element={<ManageBooks />} />
                    <Route path="/admin/dashboard/editBook/:id" element={<EditBook />} />
                    <Route path="/admin/dashboard/addBooks" element={<AddBooks />} />
                    <Route path="/admin/dashboard/manageEbooks" element={<ManageEbooks />} />
                    <Route path="/admin/dashboard/editEbook/:id" element={<EditEbook />} />
                    <Route path="/admin/dashboard/addEbooks" element={<AddEbooks />} />
                    <Route path="/admin/dashboard/borrowrequest" element={<BorrowRequest />} />                    
                </Route>

                <Route path="" element={<SecurityUser/>}>
                    <Route path="/user" element={<Student />} />
                    <Route path="/user/home" element={<StudentHome />} />
                    <Route path="/user/eBooks" element={<Ebooks />} />
                    <Route path="/user/requestStatus" element={<RequestStatus />} />
                </Route>

                <Route path="/register" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;



