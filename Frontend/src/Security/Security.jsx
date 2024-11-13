import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Security = () => {
    const auth = localStorage.getItem('isLoggedIn')   
    const loggedUser = JSON.parse(localStorage.getItem('user'))   
    // console.log('is logged in: ',auth)
    // console.log(loggedUser)
    return  auth && loggedUser.role === 'admin' && loggedUser.role !== null ? <Outlet/> : <Navigate to={'/login'}/> 

}

export default Security
